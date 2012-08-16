#!/bin/sh

JSBB_SERVER_PORT=1337
JSBB_DB_HOST=localhost
JSBB_DB_PORT=12345
JSBB_DB_NAME=jsbb

JSBB_SESSION_HOST=localhost
JSBB_SESSION_PORT=12346

DIR=`dirname $0`
JSBB_SERVER_HOME="$DIR/.."
JSBB_CLIENT_HOME="$JSBB_SERVER_HOME/../client"
JSBB_LOGDIR="$JSBB_SERVER_HOME/logs"
JSBB_APPDIR="$JSBB_CLIENT_HOME"
JSBB_SERVER_PIDFILE=$JSBB_LOGDIR/server.pid

if [ ! -e $JSBB_SERVER_PIDFILE ]; then

  if [ ! -e $JSBB_LOGDIR ]; then
    mkdir $JSBB_LOGDIR
  fi

  $JSBB_SERVER_HOME/js/server.js \
    -p $JSBB_SERVER_PORT \
    -f $JSBB_APPDIR \
    -m $JSBB_DB_HOST:$JSBB_DB_PORT/$JSBB_DB_NAME \
    -s $JSBB_SESSION_HOST:$JSBB_SESSION_PORT \
    1>> $JSBB_LOGDIR/server-out.log \
    2>> $JSBB_LOGDIR/server-err.log &

  JSBB_SERVER_PID=$!
  JSBB_SERVER_EXIT_CODE=$?
  if [ $JSBB_SERVER_EXIT_CODE -eq 0 ]; then
    echo $JSBB_SERVER_PID > $JSBB_SERVER_PIDFILE
  else
    echo "Unable to start Web server. ($JSBB_SERVER_EXIT_CODE)"
  fi  
  
else

  echo "Web server is running or server pidfile already exists. ($JSBB_SERVER_PIDFILE)"
  echo "Please shut down Web server and remove pidfile."

fi
