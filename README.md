# App description

Scribo is a logging module for Node.js. It has 2 types of logging - events and benchmarking.

Events have to be set in the CONFIG, since each event gets logget to a different file.
# Examples
Scribo.logEvent('HTTP request to /');
    Outputs -> 00:00:00 HTTP request to /


Log.startBench();

DB.write( callback {
    Log.endBench();
  });
