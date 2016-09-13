#!/bin/sh
echo "npm installing..."
npm install
echo "npm starting..."
npm lint:watch
