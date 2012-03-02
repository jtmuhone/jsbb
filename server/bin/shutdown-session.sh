#!/bin/sh

DIR=`dirname $0`
JSBB_SERVER_HOME="$DIR/.."
JSBB_LOGDIR="$JSBB_SERVER_HOME/logs"
JSBB_SESSION_PIDFILE=$JSBB_LOGDIR/session.pid
JSBB_SESSION_CONFFILE=$JSBB_SERVER_HOME/session/redis-config

if [ -e $JSBB_SESSION_PIDFILE ]; then
  JSBB_SESSION_PID=`cat $JSBB_SESSION_PIDFILE`
  ps -p$JSBB_SESSION_PID > /dev/null
  PS_EXIST=$?
  if [ $PS_EXIST -eq 0 ]; then 
    MSG=`kill -s TERM $JSBB_SESSION_PID 2>&1`
    JSBB_SESSION_SHUTDOWN_EXITCODE=$?
  
    if [ $JSBB_SESSION_SHUTDOWN_EXITCODE -ne 0 ]; then
      echo "Unable to shut down server. ($JSBB_SESSION_PID, $JSBB_SESSION_PIDFILE)"
      echo "Error: $MSG"
    else
      rm $JSBB_SESSION_PIDFILE
    fi
  else
    echo "Service is already down."
    rm $JSBB_SESSION_PIDFILE
  fi

else
  echo "Session server not running or pidfile is missing. ($JSBB_SESSION_PIDFILE)"
  echo "Please shutdown session server manually."
fi
