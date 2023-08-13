#!/bin/bash


# Update 
echo
echo "-----------------------"
echo "Update All"
echo "-----------------------"
echo

sudo apt-get update && sudo apt-get dist-upgrade -y

#install
echo
echo "-----------------------"
echo "Installing Packages..."
echo "-----------------------"
echo

npm i express
npm i http
npm i ws
npm i child_process

echo
echo "-----------------------"
echo "Installing dependencies"
echo "-----------------------"
echo

sudo apt instaall chromium-browser -y

echo
echo "-----------------------"
echo "Finished!"
echo "-----------------------"
echo

echo "You need run cmd: node server.js"