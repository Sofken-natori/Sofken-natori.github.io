#!/bin/bash
# shellcheck disable=SC2164
cd "$(realpath "$(dirname "$0")")"
if [[ "$TYPE" = "unofficial" ]]; then
    sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' public/manifest.webmanifest
    export ROOT="/Sofken-natori.github.io"
else
    sed -i 's/{{ROOT}}//g' public/manifest.webmanifest
    export ROOT=""
fi
yarn build && yarn export
exit 0
