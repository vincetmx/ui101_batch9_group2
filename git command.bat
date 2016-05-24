@echo off
set /p var=Enter comment:
@echo %var%

git pull
git add --all
git commit -m"%var%"
git push