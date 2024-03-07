#!/bin/sh

DIR=$(dirname "$0")

cd $DIR/..

echo "Deleting old publication"
rm -rf docs # 변경된 부분

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

mkdir docs # 변경된 부분
git worktree prune
rm -rf .git/worktrees/docs/ # 변경된 부분

echo "Checking out gh-pages branch into docs" # 변경된 부분
git worktree add -B gh-pages docs origin/gh-pages # 변경된 부분

echo "kodebox.io" >> docs/CNAME # 변경된 부분

echo "Updating gh-pages branch"
cd docs && git add --all && git commit -m "Publishing to gh-pages (publish.sh)" # 변경된 부분
git push origin
