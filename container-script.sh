#!/bin/sh
ng build
http-server ./dist/cs6261project4 -p 4200
