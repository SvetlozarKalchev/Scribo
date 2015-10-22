# App description

Scribo is a logging module for Node.js. It can do 2 simple things - log events and measure how long operations take to complete.

You specify the allowed Events in the CONFIG, since each event gets logged to a different file.
# API
####Scribo.logEvent(eventName, callback);
    Outputs -> 00:00:00 HTTP request to /
    Callback optional.

####Scribo.startBench(eventName);
    Returns an object with the current time.

####Scribo.endBench(eventStart, loggable, callback)
    Calculates the elapsed time. If loggable is set to TRUE, saves the result.

# Examples

You log an event like that:

    http.createServer(function onRequest(req, res) {
      Scribo.logEvent('HTTP Request');
      // Request handling...
    });

Example benchmark:

    let dbWrite = Scribo.startBench('DB write');

    DataBase.write(data, function onWriteFinish(err, res) {

      Scribo.endBench(dbWrite, true, function onBenchEnd(err, res) {
        // Handle benchmark ending...
        });

      // Other code...
    })
