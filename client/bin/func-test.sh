#!/usr/bin/env bash

DIR=`dirname $0`
BASE_DIR=`readlink -m $DIR/..`

MODULE=$1
$DIR/js.sh funcunit/open/phantomjs $MODULE/funcunit.html -coverage
EXITCODE=$?
