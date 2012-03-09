#!/usr/bin/env bash

DIR=`dirname $0`
JSBB_CLIENT_HOME="$DIR/.."

cd $JSBB_CLIENT_HOME
java -Xmx512m -Xss1024k \
    -cp steal/rhino/js.jar \
    org.mozilla.javascript.tools.shell.Main \
    -e "_args=['phantomjs','jsbb/funcunit.html']" \
    -opt -1 \
    -e "load('funcunit/run')"
EXITCODE=$?
