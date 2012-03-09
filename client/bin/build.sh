#!/usr/bin/env bash

DIR=`dirname $0`
JSBB_CLIENT_HOME="$DIR/.."
JSBB_BUILD_DIR="$JSBB_CLIENT_HOME/build"

cd $JSBB_CLIENT_HOME
./js jsbb/scripts/build.js

mkdir -p $JSBB_BUILD_DIR/jsbb
mv -f $JSBB_CLIENT_HOME/jsbb/production.js $JSBB_BUILD_DIR/jsbb
mv -f $JSBB_CLIENT_HOME/jsbb/production.css $JSBB_BUILD_DIR/jsbb 
cp -f $JSBB_CLIENT_HOME/jsbb/index.html $JSBB_BUILD_DIR/jsbb

mkdir -p $JSBB_BUILD_DIR/steal
cp -f $JSBB_CLIENT_HOME/steal/steal.production.js $JSBB_BUILD_DIR/steal
