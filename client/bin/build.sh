#!/usr/bin/env bash

DIR=`dirname $0`

MODULE=$1
$DIR/js.sh $MODULE/scripts/build.js
EXITCODE=$?
