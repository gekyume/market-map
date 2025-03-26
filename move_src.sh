#!/bin/bash

# Navigate to your repository root
# Replace with your actual repository path if needed
# cd /path/to/your/market-map

# Create src directory at the root level if it doesn't exist
mkdir -p src

# Move all files from public/src to src
if [ -d "public/src" ]; then
  # Copy files first to ensure we don't lose anything
  cp -r public/src/* src/
  
  # Remove the old directory
  rm -rf public/src
  
  # Git commands to stage these changes
  git add src/
  git add public/
  
  echo "Files moved successfully. Now you can commit and push:"
  echo "git commit -m 'Move src directory to root level'"
  echo "git push origin main"
else
  echo "public/src directory not found!"
fi