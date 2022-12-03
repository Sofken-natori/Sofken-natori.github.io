#!/bin/bash
# shellcheck disable=SC2016
# shellcheck disable=SC2038
# shellcheck disable=SC2046
# shellcheck disable=SC2164
echo 'cd $(cd $(dirname "$0"); pwd)';cd $(cd $(dirname "$0"); pwd)
echo 'Copy resource files'
echo 'cp -r .{,./out}';cp -r .{,./out}
echo 'mv .{.,}/out';mv .{.,}/out
echo 'Compile and Minify SCSS'
echo 'rm out/lib/common.css';rm out/lib/common.css
echo 'yarn exec -- sass lib/common.scss:out/lib/common-1.css --no-source-map';yarn exec -- sass lib/common.scss:out/lib/common-1.css --no-source-map
echo 'yarn exec -- postcss out/lib/common-1.css -o out/lib/common-2.css --no-map';yarn exec -- postcss out/lib/common-1.css -o out/lib/common-2.css --no-map
echo 'yarn exec -- cleancss -o out/lib/common.css out/lib/common-2.css';yarn exec -- cleancss -o out/lib/common.css out/lib/common-2.css
echo 'Minify JavaScript'
echo 'rm out/lib/slider.js';rm out/lib/slider.js
echo 'yarn exec -- uglifyjs lib/slider.js -c -o out/lib/slider.js';yarn exec -- uglifyjs lib/slider.js -c -o out/lib/slider.js
echo 'Expand Components'
if [[ "$TYPE" = "unofficial" ]]; then
    echo 'sed -i '\''s/{{ROOT}}/\/Sofken-natori.github.io/g'\'' out/components/navigation.html';sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' out/components/navigation.html
    echo 'sed -i '\''s/{{ROOT}}/\/Sofken-natori.github.io/g'\'' out/manifest.webmanifest';sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' out/manifest.webmanifest
    echo 'sed -i '\''s/{{ROOT}}/\/Sofken-natori.github.io/g'\'' out/robots.txt';sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' out/robots.txt
    echo 'sed -i '\''s/{{ROOT}}/\/Sofken-natori.github.io/g'\'' out/sitemap*';sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' out/sitemap*
else
    echo 'sed -i '\''s/{{ROOT}}//g'\'' out/components/navigation.html';sed -i 's/{{ROOT}}//g' out/components/navigation.html
    echo 'sed -i '\''s/{{ROOT}}//g'\'' out/manifest.webmanifest';sed -i 's/{{ROOT}}//g' out/manifest.webmanifest
    echo 'sed -i '\''s/{{ROOT}}//g'\'' out/robots.txt';sed -i 's/{{ROOT}}//g' out/robots.txt
    echo 'sed -i '\''s/{{ROOT}}//g'\'' out/sitemap*';sed -i 's/{{ROOT}}//g' out/sitemap*
fi
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{HEADER}}/r out/components/header.html'\'' {} -e '\''/{{HEADER}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{HEADER}}/r out/components/header.html' {} -e '/{{HEADER}}/d'
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{NAVIGATION}}/r out/components/navigation.html'\'' {} -e '\''/{{NAVIGATION}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{NAVIGATION}}/r out/components/navigation.html' {} -e '/{{NAVIGATION}}/d'
echo 'find out -name '\''*.html'\'' | xargs -i sed -i -e '\''/{{FOOTER}}/r out/components/footer.html'\'' {} -e '\''/{{FOOTER}}/d'\';find out -name '*.html' | xargs -i sed -i -e '/{{FOOTER}}/r out/components/footer.html' {} -e '/{{FOOTER}}/d'
echo 'Delete unnecessary files'
echo 'rm -rf out/{.git{,hub},.idea,README.md,build.sh,components,lib/common-{1,2}.css{,.map},lib/common.scss,node_modules,package.json,template,yarn.lock}';rm -rf out/{.git{,hub},.idea,README.md,build.sh,components,lib/common-{1,2}.css{,.map},lib/common.scss,node_modules,package.json,template,yarn.lock}
exit 0
