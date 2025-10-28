#!/usr/bin/env nix-shell
#!nix-shell -i bash -p ghostscript imagemagick

set -euo pipefail

# Settings

VOLUMES=({32..39})

# Constants

BASE_DIR=$(dirname "$(realpath "$0")")
RATIONALE_DIR=$BASE_DIR/public/resources/rationale
FILE_TYPES=(avif png webp)

# Main process

for v in "${VOLUMES[@]}"; do
    echo "Generate vol$v pages..."
    pages_dir=$BASE_DIR/public/resources/rationale/vol$v/pages
    rm -rf "$pages_dir"
    mkdir -p "$pages_dir"
    echo "  Convert pdf to avif/webp/png..."
    for t in "${FILE_TYPES[@]}"; do
        magick -density 300 "$RATIONALE_DIR/vol$v.pdf" -alpha remove "$pages_dir/vol$v-%02d.$t" &
    done
    wait
    echo "  Fix page numbers..."
    pages=$(($(sed 's/.*vol[0-9]\+-0\?\([0-9]\+\).png$/\1/' <(find "$pages_dir" -name '*.png') | sort -hr | head -n1) + 1))
    for ((i = 0; i < $([[ $pages -lt 10 ]] && echo "$pages" || echo 10); i++)); do
        for t in "${FILE_TYPES[@]}"; do
            mv "$pages_dir/vol$v-0$i.$t" "$pages_dir/vol$v-$i.$t"
        done
    done
    for ((i = pages; 0 < i; i--)); do
        for t in "${FILE_TYPES[@]}"; do
            mv "$pages_dir/vol$v-$((i - 1)).$t" "$pages_dir/vol$v-$i.$t"
        done
    done
    for ((i = 1; i < $([[ $pages -lt 10 ]] && echo "$((pages + 1))" || echo 10); i++)); do
        for t in "${FILE_TYPES[@]}"; do
            mv "$pages_dir/vol$v-$i.$t" "$pages_dir/vol$v-0$i.$t"
        done
    done
    echo "  Generate resources.json..."
    printf '{"$schema":"https://sofken-natori.github.io/resources/resources.schema.json","meta":{"total-pages":%d},"resources":[' "$pages" >"$pages_dir/resources.json"
    for ((i = 1; i < pages + 1; i++)); do
        page=$([[ i -lt 10 ]] && echo "0$i" || echo "$i")
        printf '{"description":"","files":[{"filename":"vol%d-%s.avif","mime":"image/avif"},{"filename":"vol%d-%s.webp","mime":"image/webp"},{"filename":"vol%d-%s.png","mime":"image/png"}],"title":"Page %s of %d"}' "$v" "$page" "$v" "$page" "$v" "$page" "$page" "$pages" >>"$pages_dir/resources.json"
        if [[ $i != "$pages" ]]; then
            printf ',' >>"$pages_dir/resources.json"
        fi
    done
    printf ']}' >>"$pages_dir/resources.json"
done
