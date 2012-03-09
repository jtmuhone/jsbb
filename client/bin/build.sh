#!/usr/bin/env bash

DIR=`dirname $0`
JSBB_CLIENT_HOME="$DIR/.."
JSBB_BUILD_DIR="$JSBB_CLIENT_HOME/build"

cd $JSBB_CLIENT_HOME
java -Xmx512m -Xss1024k \
    -cp steal/rhino/js.jar \
    org.mozilla.javascript.tools.shell.Main \
    -opt -1 \
    -e 'load('"'"jsbb/scripts/build.js"'"')'
EXITCODE=$?

if [ $EXITCODE -eq 0 ]; then
    mkdir -p $JSBB_BUILD_DIR/jsbb
    mv -f $JSBB_CLIENT_HOME/jsbb/production.js $JSBB_BUILD_DIR/jsbb
    mv -f $JSBB_CLIENT_HOME/jsbb/production.css $JSBB_BUILD_DIR/jsbb 
    cp -f $JSBB_CLIENT_HOME/jsbb/index.html $JSBB_BUILD_DIR/jsbb

    mkdir -p $JSBB_BUILD_DIR/steal
    cp -f $JSBB_CLIENT_HOME/steal/steal.production.js $JSBB_BUILD_DIR/steal
fi
