#!/bin/bash

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && cd .. && pwd )"

# Logo
name=("normal" "normal@2x" "mobile" "mobile@2x")
sizes=(60 120 40 80)

length=${#name[@]}

for (( i=0; i<${length}; i++ ));
do
    inkscape -z -e $dir/logo/${name[$i]}.png -a 7:7:67:67 -w ${sizes[$i]} $dir/src/logo.svg
done

# Logo small
name=("small" "small@2x")
sizes=(48 96)

length=${#name[@]}

for (( i=0; i<${length}; i++ ));
do
    inkscape -z -e $dir/logo/${name[$i]}.png -w ${sizes[$i]} $dir/src/logo_small.svg
done

# Google Apps
inkscape -z -e $dir/google/apps.png -w 320 $dir/src/google.svg
