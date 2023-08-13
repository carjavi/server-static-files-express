#!/bin/bash


# Update 
sudo apt-get update && sudo apt-get dist-upgrade -y

#install
echo "Installing Packages..."
npm i express
npm i http
npm i ws
npm i child_process

echo "Finished!"
echo "You need run cmd: node server.js"