#!/bin/bash

if ! command -v node &> /dev/null
then
  echo "node could not be found"
  exit
fi

if ! command -v npm &> /dev/null
then
  echo "npm could not be found"
  exit
fi

echo "Installing dependencies..."
npm install

echo "Starting app..."
npm run dev
