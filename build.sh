#!/bin/bash
# shellcheck disable=SC2046
# shellcheck disable=SC2086
# shellcheck disable=SC2164
BASE_DIR="$(cd $(dirname "$0"); pwd)"
cd $BASE_DIR
cp -r $BASE_DIR $BASE_DIR/../out
mv $BASE_DIR/../out $BASE_DIR/out
rm -rf $BASE_DIR/out/{.git{,hub},.idea,README.md,build.sh,lib/common.scss,node_modules,package.json,template,yarn.lock}
yarn exec sass lib/:out/lib/ --no-source-map
exit 0
