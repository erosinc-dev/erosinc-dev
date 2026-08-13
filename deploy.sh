#!/bin/bash

# Eros Inc. Quick Deployment Script
# This pushes code to GitHub, which automatically triggers a live Vercel build.

echo "🚀 Preparing to deploy updates to GitHub and Vercel..."

# Add all changed files to staging
git add .

# Check if a commit message was provided as an argument
if [ -z "$1" ]
then
  COMMIT_MSG="Auto-deploy update"
else
  COMMIT_MSG="$1"
fi

# Commit the changes
git commit -m "$COMMIT_MSG"

# Push to GitHub
echo "📤 Pushing code to GitHub..."
git push

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    echo "⚡ Vercel has automatically intercepted the push and is now building your live site."
else
    echo "❌ Failed to push to GitHub. Please check your connection or git status."
fi
