@REM 批量 clean 或 install

@echo off

@REM 准备遍历项目目录
cd ..

cd pomelo-parent
call mvn clean install
cd ..

cd pomelo-dependencies
call mvn clean install
cd ..

cd pomelo-common
call mvn clean install
cd ..

cd pomelo-core
call mvn clean install
cd ..

cd pomelo-admin
call mvn clean install
cd ..

cd pomelo-admin-web
call mvn clean install
cd ..

cd pomelo-backup
call mvn clean install
cd ..

cd pomelo-config
call mvn clean install
cd ..

cd pomelo-portal
call mvn clean install
cd ..

cd pomelo-search
call mvn clean install
cd ..
