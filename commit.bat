@echo off
color a

git add .

echo Was hast du geändert?

set/p "msg=>"

git commit -m "%msg%"

git push -u origin main

echo Fertig!
 
stop