#!/bin/sh
ng build
http-server ./dist/project4 -p 4200
