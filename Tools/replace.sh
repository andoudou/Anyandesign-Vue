#!/bin/bash
echo Replace started!

echo Apply CDN
Source="/static/"
Target="http://lightcdn.azurewebsites.net/static/"
echo replace "$Source" with "$Target"
for file in $(find ./dist -name 'build.*')
do
    echo Working on "$file"

    sed -i '' 's|'"$Source"'|'"$Target"'|g' "$file"
done