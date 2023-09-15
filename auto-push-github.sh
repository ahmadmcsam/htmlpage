#!/bin/bash

BRANCH_NAME="original_code"
# Define the local directory containing your code
CODE_DIRECTORY="/home/mcsam/Documents/samplefiles/htmlpage"

# Navigate to your code directory
cd "$CODE_DIRECTORY" || exit
git checkout original_code
# Add, commit, and push your changes to the specified branch
git add .
git commit -m "Script Update on $(date)"
git push origin "$BRANCH_NAME"


echo "Code has been pushed to GitHub branch: $BRANCH_NAME"
