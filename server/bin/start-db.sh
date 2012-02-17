#!/bin/sh

JSBB_DB_PORT=12345

DIR=`dirname $0`
JSBB_SERVER_HOME=$DIR/..
JSBB_DATADIR=$JSBB_SERVER_HOME/data
JSBB_LOGDIR=$JSBB_SERVER_HOME/logs
JSBB_DB_PIDFILE=$JSBB_LOGDIR/db.pid

if [ ! -e $JSBB_DB_PIDFILE ]; then

  if [ ! -e $JSBB_DATADIR ]; then
    mkdir $JSBB_DATADIR
  fi

  if [ ! -e $JSBB_LOGDIR ]; then
    mkdir $JSBB_LOGDIR
  fi

  nohup mongod \
    --port $JSBB_DB_PORT \
    --dbpath $JSBB_DATADIR \
    1>> $JSBB_LOGDIR/db-out.log \
    2>> $JSBB_LOGDIR/db-err.log &

  JSBB_DB_PID=$!
  echo $JSBB_DB_PID > $JSBB_DB_PIDFILE

else

  echo "DB is running or server pidfile already exists. ($JSBB_DB_PIDFILE)"
  echo "Please shut down DB and remove pidfile."

fi
  