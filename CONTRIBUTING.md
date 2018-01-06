# Overview
This project uses a linear history workflow, i.e., /rebase/ instead of /merge/.

## Style Guide
This project uses the Airbnb style guide. Refer to: https://github.com/airbnb/javascript.

##  Definitions
Upstream: corekoans/tradehouse
Origin: your github/tradehouse
Local: Local files in git.

##
Tests are written in Jest and Enzyme.  They are automatically run through Circle CI. To contribute tests, create files in __tests__ folders. 

# Workflow
## 1. Update the local master branch.
```sh
git checkout master
git pull --rebase upstream master
```

## 2. Create a new feature-branch, or check out an existing one.
```sh
git checkout -b feature-branch-name
```

## 3. Edit your code, commit and pull from upstream/master regularly.
```sh
git status
git add
git commit
```

## 4. Make sure you are still up-to-date with master before pushing.
```sh
git pull --rebase upstream master
```

## 5. Push your branch to github.
```sh
git push origin feature-branch
```

## 6. Make a pull request on github.

### Rejected
If your pull request was rejected, return to step 3.

### Merged
Update your local master branch, then your github master branch.
```sh
git checkout master
git pull --rebase upstream master
git push origin master -f
```

## Git Resources
Visit https://chris.beams.io/posts/git-commit/