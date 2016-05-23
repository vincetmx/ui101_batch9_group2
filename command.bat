@echo off
set /p var=PleaseEnterVar:
echo %var%
pause

git pull
git add --all
git commit -m"first page"
git push