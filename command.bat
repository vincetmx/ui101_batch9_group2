@echo off
set /p var=PleaseEnterVar:
echo %var%

git pull
git add --all
git commit -m"second page"
pause
git push