#!/usr/bin/env bash

if [ -d "./styles" ]
then
    rm -rf styles
fi
mv ./build/index.html index.html
mv ./build/bundle.js bundle.js
mv ./build/styles/ styles

today=`date '+%Y_%m_%d__%H_%M_%S'`;
git add .
git commit -am "Deployed at $today"
git push origin gh-pages