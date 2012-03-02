#!/bin/sh

DIR=`dirname $0`
JSBB_SERVER_HOME="$DIR/.."
JSBB_LOGDIR="$JSBB_SERVER_HOME/logs"
JSBB_SERVER_PIDFILE=$JSBB_LOGDIR/server.pid

if [ -e $JSBB_SERVER_PIDFILE ]; then
  JSBB_SERVER_PID=`cat $JSBB_SERVER_PIDFILE`
  ps -p$JSBB_SERVER_PID > /dev/null
  PS_EXIST=$?
  if [ $PS_EXIST -eq 0 ]; then 
    MSG=`kill -s INT $JSBB_SERVER_PID 2>&1`
    JSBB_SERVER_SHUTDOWN_EXITCODE=$?
  
    if [ $JSBB_SERVER_SHUTDOWN_EXITCODE -ne 0 ]; then
      echo "Unable to shut down server. ($JSBB_SERVER_PID, $JSBB_SERVER_PIDFILE)"
      echo "Error: $MSG"
    else
      rm $JSBB_SERVER_PIDFILE
    fi
  else
    echo "Service is already down."
    rm $JSBB_SERVER_PIDFILE
  fi

else
  echo "Server not running or pidfile is missing. ($JSBB_SERVER_PIDFILE)"
  echo "Please shutdown server manually."
fi
