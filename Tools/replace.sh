#!/bin/bash
echo Replace started!

echo Apply CDN
Source="\/static\/"
Target="http:\/\/lightcdn.azurewebsites.net\/static\/"
echo replace "$Source" with "$Target"

for file in $(ls ./dist/build.*)
do
    echo Working on "$file"
    sed 's/'"$Source"'/'"$Target"'/g' < "$file" > "${file}.tmp"
    cp "${file}.tmp" "$file"
    rm "${file}.tmp"
    #sed -i '' 's|'"$Source"'|'"$Target"'|g' "$file"
done