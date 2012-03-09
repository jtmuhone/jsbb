#!/usr/bin/env bash

DIR=`dirname $0`
JSBB_CLIENT_HOME="$DIR/.."

cd $JSBB_CLIENT_HOME
./js funcunit/run phantomjs jsbb/funcunit.html
