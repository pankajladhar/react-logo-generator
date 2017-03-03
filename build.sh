#!/usr/bin/env bash
npm run build
[ -d ./build ] || mkdir ./build
cd build
[ -d ./styles ] ||  mkdir styles
cd styles
[ -d ./css ] ||   mkdir css
cd ..
cd ..
cp -R app/styles/css/style.css build/styles/css/style.css
cp app/index.html build/index.html
cp app/bundle.js build/

git checkout gh-pages
sh ./build-gh.sh
