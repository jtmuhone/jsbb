#!/usr/bin/env bash

handle_signals() {
  kill -s TERM $REDIS_PID
}

cleanup() {
  rm $REDIS_CONF_FILE
  exit
}

start_redis() {
  REDIS_CONF_FILE=`mktemp -p $REDIS_DIR redis-conf.XXXXXXXXX`
  trap cleanup EXIT

  cat <<EOF > $REDIS_CONF_FILE
daemonize no
port $REDIS_PORT
timeout 0
appendonly yes
dir $REDIS_DIR
loglevel notice
logfile stdout
databases 1
maxclients 0
maxmemory 524288000
EOF

  redis-server $REDIS_CONF_FILE &
  REDIS_PID=$!
  trap handle_signals ABRT QUIT TERM
  wait $REDIS_PID
}

print_usage() {
  exit=$1
  bin=`basename $0`
  echo "$bin "
  echo " [-p redis port]"
  echo " [-d redis dir]"
  echo " [-h help]"
  exit $exit
}

setopts() {
  while getopts ":d:p:h" OPT $@; do
  	case $OPT in
    "d")
      REDIS_DIR=`readlink -f $OPTARG`
      ;;
    "p")
      REDIS_PORT=$OPTARG
      ;;
    "h")
      print_usage 0
      ;;
    ":")
      echo "Required option missing \"$OPTARG\"".
      print_usage 1
      ;;
    "?")
      echo "Invalid option \"$OPTARG\"".
      print_usage 1
      ;;
    esac
  done
  if [ "$REDIS_DIR" == "" ] || [ "$REDIS_PORT" == "" ]; then
    print_usage 1
  fi
}

# main
setopts $@
start_redis
