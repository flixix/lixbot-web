@echo off
color a

git add .

echo Was hast du geändert?

set/p "msg=>"

git commit -m "%msg%"

echo Fertig!
 