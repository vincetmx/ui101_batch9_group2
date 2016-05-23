@echo off
set /p var=PleaseEnterVar:
echo %var%
echo %var%

git pull
pause
git add --all
pause
git commit -m"%var%"
pause
git push