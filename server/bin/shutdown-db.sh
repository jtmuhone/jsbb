#!/bin/sh

DIR=`dirname $0`
JSBB_SERVER_HOME="$DIR/.."
JSBB_LOGDIR="$JSBB_SERVER_HOME/logs"
JSBB_DB_PIDFILE=$JSBB_LOGDIR/db.pid

if [ -e $JSBB_DB_PIDFILE ]; then
  JSBB_DB_PID=`cat $JSBB_DB_PIDFILE`
  MSG=`kill -s INT $JSBB_DB_PID 2>&1`
  JSBB_DB_SHUTDOWN_EXITCODE=$?
  
  if [ $JSBB_DB_SHUTDOWN_EXITCODE -ne 0 ]; then
    echo "Unable to shut down DB. ($JSBB_DB_PID, $JSBB_DB_PIDFILE)"
    echo "Error: $MSG"
  else
    rm $JSBB_DB_PIDFILE
  fi

else
  echo "DB not running or pidfile is missing. ($JSBB_DB_PIDFILE)"
  echo "Please shutdown DB manually."
fi
