# Logo
name=("normal" "normal@2x" "mobile" "mobile@2x")
sizes=(60 120 30 60)

length=${#name[@]}

for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../logo/${name[$i]}.png -a 7:7:67:67 -w ${sizes[$i]} logo.svg
done

# Logo small
name=("small" "small@2x")
sizes=(24 48)

length=${#name[@]}

for (( i=1; i<${length}+1; i++ ));
do
    inkscape --export-png ../logo/${name[$i]}.png -a 3:3:27:27 -w ${sizes[$i]} logo_small.svg
done

# Forum
inkscape --export-png ../forum/logo.png -h 80 forum.svg
inkscape --export-png ../forum/logo-small.png -a 7:7:67:67 -w 80 logo.svg
inkscape --export-png ../forum/avatar.png -a 7:7:67:67 -w 240 logo.svg
inkscape --export-png ../forum/google.png -a 7:7:67:67 -w 120 logo.svg

# Google Apps
inkscape --export-png ../google/apps.png -w 320 google.svg
