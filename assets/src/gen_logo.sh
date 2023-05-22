#!/bin/bash

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && cd .. && pwd )"

# Logo
name=("main" "main@2x")
sizes=(36 72)

for (( i=0; i<${#name[@]}; i++ ));
do
    inkscape -o "$dir/logo/${name[$i]}.png" --export-area 7:7:67:67 -w "${sizes[$i]}" "$dir/src/logo.svg"
done

# Logo small
name=("small" "small@2x")
sizes=(48 96)

for (( i=0; i<${#name[@]}; i++ ));
do
    inkscape -o "$dir/logo/${name[$i]}.png" -w "${sizes[$i]}" "$dir/src/logo_small.svg"
done

# Google Apps
inkscape -o "$dir/google/apps.png" -w 320 "$dir/src/google.svg"
