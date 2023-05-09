#!/bin/bash -e
# shellcheck disable=SC2164
cd "$(realpath "$(dirname "$0")")"
if [[ "$TYPE" = "unofficial" ]]; then
    export ROOT="/Sofken-natori.github.io"
else
    export ROOT=""
fi
yarn build && yarn export
if [[ "$TYPE" = "unofficial" ]]; then
    sed -i 's/{{ROOT}}/\/Sofken-natori.github.io/g' out/manifest.webmanifest
else
    sed -i 's/{{ROOT}}//g' out/manifest.webmanifest
fi
exit 0
