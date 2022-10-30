#!/bin/bash
# shellcheck disable=SC2046
# shellcheck disable=SC2086
# shellcheck disable=SC2164
BASE_DIR="$(cd $(basename "$0"); pwd)"
cd $BASE_DIR
cp -r $BASE_DIR $BASE_DIR/out
rm -rf $BASE_DIR/out/{.git{,hub},node_modules,template,build.sh,package.json,README.md,yarn.lock}
yarn exec sass lib/:out/lib/ --no-source-map
exit 0
