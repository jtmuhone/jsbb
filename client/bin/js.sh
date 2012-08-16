#!/usr/bin/env bash

DIR=`dirname $0`
BASE_DIR=`readlink -m $DIR/..`

cd $BASE_DIR

script=$1
shift
args=""
for arg in $@; do
    if [ -z "$args" ]; then
	args="'$arg'"
    else
	args="$args, '$arg'"
    fi
done

java -Xmx512m -Xss1024k \
    -cp steal/rhino/js.jar \
    org.mozilla.javascript.tools.shell.Main \
    -e "_args=[$args]" \
    -opt -1 \
    -e 'load('"'"$script"'"')'
EXITCODE=$?

exit $EXITCODE
