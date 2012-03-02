#!/bin/sh

JSBB_SESSION_PORT=12346

DIR=`dirname $0`
JSBB_SERVER_HOME=$DIR/..
JSBB_SESSIONDIR=$JSBB_SERVER_HOME/session
JSBB_LOGDIR=$JSBB_SERVER_HOME/logs
JSBB_SESSION_PIDFILE=$JSBB_LOGDIR/session.pid
JSBB_SESSION_CONFFILE=$JSBB_SESSIONDIR/redis-config
JSBB_SESSION_DBFILE=$JSBB_SESSIONDIR/redis-dump.aof

if [ ! -e $JSBB_SESSION_PIDFILE ]; then

  if [ ! -e $JSBB_SESSIONDIR ]; then
    mkdir $JSBB_SESSIONDIR
  fi

  if [ ! -e $JSBB_LOGDIR ]; then
    mkdir $JSBB_LOGDIR
  fi
  
  cat <<EOF > $JSBB_SESSION_CONFFILE
daemonize no
port $JSBB_SESSION_PORT
timeout 0
appendonly yes
dbfilename $JSBB_SESSION_DBFILE
dir $JSBB_SESSIONDIR
loglevel debug
logfile stdout
databases 1
maxclients 0
maxmemory 524288000
glueoutputbuf yes
EOF

  redis-server \
	$JSBB_SESSION_CONFFILE \
    1>> $JSBB_LOGDIR/session-out.log \
    2>> $JSBB_LOGDIR/session-err.log &

  JSBB_SESSION_PID=$!
  JSBB_SESSION_EXIT_CODE=$?
  if [ $JSBB_SESSION_EXIT_CODE -eq 0 ]; then
    echo $JSBB_SESSION_PID > $JSBB_SESSION_PIDFILE
  else
    echo "Unable to start session server. ($JSBB_SESSION_EXIT_CODE)"
  fi  

else

  echo "Session server is running or server pidfile already exists. ($JSBB_SESSION_PIDFILE)"
  echo "Please shut down session server and remove pidfile."

fi
  