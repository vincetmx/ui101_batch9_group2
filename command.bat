@echo off
set /p var=PleaseEnterVar:
echo %var%

git pull
git add --all
git commit -m"%var%"
pause
git push