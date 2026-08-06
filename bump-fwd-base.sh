#!/bin/bash

# Bumps every pxt-fwd-base dependency in this repo's module pxt.json files
# to a given tag.
#
#   ./bump-fwd-base.sh v1.1.4              # bump every module in this repo
#   ./bump-fwd-base.sh v1.1.4 -n           # show what would change, write nothing
#   ./bump-fwd-base.sh v1.1.4 fwd-ec       # bump only the modules named
#
# Only dependency values of the form
#   github:Forward-Education/pxt-fwd-base#<ref>
#   github:Forward-Education/pxt-fwd-base/<subdir>#<ref>
# are touched; the <ref> is replaced and the rest of the file is left alone,
# so diffs stay small. Jacdac and other dependencies are ignored.

GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

usage() {
    echo "Usage: $0 <version> [-n|--dry-run] [module ...]"
    echo "  <version>    tag to pin to, e.g. v1.1.4 (a bare 1.1.4 is accepted too)"
    echo "  -n           print the changes without writing them"
    echo "  module       one or more module directories; defaults to every module in this repo"
}

VERSION=""
DRY_RUN=0
MODULES=()

while [ $# -gt 0 ]; do
    case "$1" in
        -n|--dry-run)
            DRY_RUN=1
            ;;
        -h|--help)
            usage
            exit 0
            ;;
        -*)
            echo -e "${RED}Unknown option: $1${NC}"
            usage
            exit 1
            ;;
        *)
            if [ -z "$VERSION" ]; then
                VERSION="$1"
            else
                MODULES+=("${1%/}")
            fi
            ;;
    esac
    shift
done

if [ -z "$VERSION" ]; then
    echo -e "${RED}Error: no version given.${NC}"
    usage
    exit 1
fi

# Accept 1.1.4 as shorthand for v1.1.4.
case "$VERSION" in
    v*) ;;
    *) VERSION="v$VERSION" ;;
esac

if ! echo "$VERSION" | grep -Eq '^v[0-9]+\.[0-9]+\.[0-9]+$'; then
    echo -e "${YELLOW}Warning: '$VERSION' does not look like a vX.Y.Z tag; using it anyway.${NC}"
fi

cd "$(dirname "$0")" || exit 1

# With no modules named, do every module directory in the repo. The top-level
# pxt.json has no dependencies of its own, so it is left out.
if [ ${#MODULES[@]} -eq 0 ]; then
    for manifest in */pxt.json; do
        [ -f "$manifest" ] || continue
        MODULES+=("${manifest%/pxt.json}")
    done
fi

if [ ${#MODULES[@]} -eq 0 ]; then
    echo -e "${RED}Error: no module pxt.json files found in $(pwd).${NC}"
    exit 1
fi

# The dependency values live one per line, so a line-scoped substitution keeps
# the surrounding JSON formatting intact. ANY_DEP matches a pxt-fwd-base
# dependency at any ref; PINNED_DEP matches one already at $VERSION. The URL has
# no trailing slash so both the repo root and its subdirectories match.
URL="github:Forward-Education/pxt-fwd-base"
ANY_DEP="\"$URL[^\"#]*#[^\"]*\""
PINNED_DEP="\"$URL[^\"#]*#$VERSION\""

# Rewrites one pxt.json on stdin, repinning matching dependency lines. Done in
# bash rather than sed because these manifests use CRLF endings and sed would
# rewrite every line, turning a two-line change into a whole-file diff. Reading
# with `IFS= read -r` leaves any trailing CR on the line, so it survives intact.
repin() {
    local line before after tail
    while IFS= read -r line || [ -n "$line" ]; do
        if [[ $line == *"\"$URL"*"#"*"\""* ]]; then
            before="${line%%#*}"   # ..."github:.../pxt-fwd-base/fwd-i2c
            after="${line#*#}"     # v1.1.3",  (with any trailing CR)
            tail="${after#*\"}"    # ,         (with any trailing CR)
            printf '%s#%s"%s\n' "$before" "$VERSION" "$tail"
        else
            printf '%s\n' "$line"
        fi
    done
}

if [ $DRY_RUN -eq 1 ]; then
    echo "Dry run: bumping pxt-fwd-base dependencies to $VERSION"
else
    echo "Bumping pxt-fwd-base dependencies to $VERSION"
fi
echo "-----------------------------------"

overall_status=0
total_changed=0

for mod in "${MODULES[@]}"; do
    manifest="$mod/pxt.json"

    if [ ! -f "$manifest" ]; then
        echo -e "${RED}$mod: no pxt.json found${NC}"
        overall_status=1
        echo "-----------------------------------"
        continue
    fi

    found=$(grep -Ec "$ANY_DEP" "$manifest")
    already=$(grep -Ec "$PINNED_DEP" "$manifest")
    changed=$((found - already))

    if [ "$found" -eq 0 ]; then
        echo "$mod: no pxt-fwd-base dependencies, skipping"
        echo "-----------------------------------"
        continue
    fi

    echo "$mod: $changed to bump, $already already at $VERSION"

    if [ $DRY_RUN -eq 1 ]; then
        grep -E "$ANY_DEP" "$manifest" | repin | sed 's/^/    /'
    else
        tmp="$manifest.tmp$$"
        if repin < "$manifest" > "$tmp"; then
            mv "$tmp" "$manifest"
            echo -e "  ${GREEN}updated $manifest${NC}"
        else
            echo -e "${RED}$mod: failed to update pxt.json${NC}"
            overall_status=1
            rm -f "$tmp"
            echo "-----------------------------------"
            continue
        fi
    fi

    total_changed=$((total_changed + changed))
    echo "-----------------------------------"
done

if [ $overall_status -eq 0 ]; then
    echo -e "${GREEN}Done: $total_changed dependency line(s) bumped to $VERSION${NC}"
else
    echo -e "${RED}Finished with error(s)${NC}"
fi

if [ $DRY_RUN -eq 0 ] && [ $total_changed -gt 0 ]; then
    echo "Reminder: run './init.sh' to refresh pxt_modules, then './test-all.sh'."
fi

exit $overall_status
