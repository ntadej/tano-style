#!/bin/bash

dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && cd .. && pwd )"

# Apple
apple=("76" "76@2x" "60@2x" "60@3x" "83.5@2x")
sizes=(76 152 120 180 167)
length=${#apple[@]}

for (( i=0; i<${length}; i++ ));
do
    inkscape -z -e $dir/favicon/apple_${apple[$i]}.png -w ${sizes[$i]} $dir/src/logo_square.svg
done

# Other
sizes=(16 32 36 48 72 96 144 192)
length=${#sizes[@]}
for (( i=0; i<${length}; i++ ));
do
    inkscape -z -e $dir/favicon/${sizes[$i]}.png -w ${sizes[$i]} $dir/src/logo.svg
done

# ICO
convert $dir/favicon/16.png $dir/favicon/32.png $dir/favicon/48.png $dir/favicon.ico

# MS
ms=("70" "150" "310")
sizes=("70" "150" "310")
length=${#ms[@]}
for (( i=0; i<${length}; i++ ));
do
    inkscape -z -e $dir/favicon/mstile_${ms[$i]}.png -w ${sizes[$i]} $dir/src/logo_text.svg
done
convert $dir/favicon/mstile_150.png -gravity center -background transparent -extent 310x150 $dir/favicon/mstile_310x150.png
