#!/bin/bash
# shellcheck disable=SC2016
# shellcheck disable=SC2038
# shellcheck disable=SC2046
# shellcheck disable=SC2164
echo 'cd $(cd $(dirname "$0"); pwd)';cd $(cd $(dirname "$0"); pwd)
echo 'Copy resource files'
echo 'cp -r .{,./out}';cp -r .{,./out}
echo 'mv .{.,}/out';mv .{.,}/out
echo 'Compile SCSS'
echo 'rm out/lib/common.css';rm out/lib/common.css
echo 'yarn exec -- sass lib/common.scss:out/lib/common-1.css --no-source-map';yarn exec -- sass lib/common.scss:out/lib/common-1.css --no-source-map
echo 'yarn exec -- postcss out/lib/common-1.css -o out/lib/common.css --no-map';yarn exec -- postcss out/lib/common-1.css -o out/lib/common.css --no-map
echo 'Expand Components'
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{HEADER}}/r components/header.html'\'' {} -e '\''/{{HEADER}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{HEADER}}/r components/header.html' {} -e '/{{HEADER}}/d'
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{NAVIGATION}}/r components/navigation.html'\'' {} -e '\''/{{NAVIGATION}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{NAVIGATION}}/r components/navigation.html' {} -e '/{{NAVIGATION}}/d'
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{FOOTER}}/r components/footer.html'\'' {} -e '\''/{{FOOTER}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{FOOTER}}/r components/footer.html' {} -e '/{{FOOTER}}/d'
echo 'Delete unnecessary files'
echo 'rm -rf out/{.git{,hub},.idea,README.md,build.sh,components,lib/common-1.css{,.map},lib/common.scss,node_modules,package.json,template,yarn.lock}';rm -rf out/{.git{,hub},.idea,README.md,build.sh,components,lib/common-1.css{,.map},lib/common.scss,node_modules,package.json,template,yarn.lock}
exit 0
