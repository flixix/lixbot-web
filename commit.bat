@echo off

goto START

:ERROR

color 4

echo Error!

pause

:START

echo Here are your branches:

git branch

echo what do you want to do now?

echo 1: Use active branch
echo 2: Switch to other branch
echo 3: Create new branch

set/p "opt=>"

if %opt% == 1 goto COMMIT
if %opt% == 2 goto SWITCH
if %opt% == 3 goto CREATE

goto ERROR

:CREATE

echo What should be your branches name?

set/p "bname=>"

git checkout -b %bname%

goto COMMIT

:SWITCH

echo What branch do you want to switch to?

set/p "swtch=>"

git checkout %swtch%

goto COMMIT

:COMMIT

echo Please type the name of your branch

set/p "branch=>"

echo What did you change?

set/p "chng=>"

git add .

git commit -m "%chng%"

git push -u origin %branch%

pause