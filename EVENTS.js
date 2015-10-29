'use strict'
/*
  Set events and the corresponding files here
*/
let filePath = './logs/';
let events = new Map();

events.set('GET', filePath + 'get-log.txt');
events.set('POST', filePath + 'post-log.txt');
events.set('DB Write', filePath + 'db-log.txt');
events.set('kur', filePath)

module.exports = events;
