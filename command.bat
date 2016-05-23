@echo off
set /p var=PleaseEnterVar:
echo %var%
echo %var%

git pull
git add --all
git commit -m"%var%"
git push