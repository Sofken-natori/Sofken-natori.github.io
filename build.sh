#!/bin/bash
# shellcheck disable=SC2038
# shellcheck disable=SC2046
# shellcheck disable=SC2086
# shellcheck disable=SC2164
BASE_DIR="$(cd $(dirname "$0"); pwd)"
cd $BASE_DIR
echo Copy resource files
cp -r $BASE_DIR $BASE_DIR/../out
mv $BASE_DIR/../out $BASE_DIR/out
echo Delete unnecessary files
rm -rf $BASE_DIR/out/{.git{,hub},.idea,README.md,build.sh,components,lib/common.scss,node_modules,package.json,template,yarn.lock}
echo Compile SCSS
yarn exec sass lib/:out/lib/ --no-source-map
echo Expand Components
find out -name '*.html' | xargs -i sed -i -e '/\{\{HEADER\}\}/r components/header.html' {} -e '/\{\{HEADER\}\}/d'
find out -name '*.html' | xargs -i sed -i -e '/\{\{NAVIGATION\}\}/r components/navigation.html' {} -e '/\{\{NAVIGATION\}\}/d'
find out -name '*.html' | xargs -i sed -i -e '/\{\{FOOTER\}\}/r components/footer.html' {} -e '/\{\{FOOTER\}\}/d'
exit 0
