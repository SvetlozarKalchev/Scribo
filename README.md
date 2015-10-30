# App description

Scribo is a logging module for Node.js. It can do 2 simple things - log events and measure how long operations take to complete.

You specify the allowed Events in the CONFIG, since each event gets logged to a different file.
# API
####Scribo.logEvent(eventName, message, saveable, callback);
This outputs:

    date time | eventName : message

Event name and message must be strings. Saveable must be a boolean and indicates if the event should be written to its corresponding log file or nor. Callback is optional.

####Scribo.startBench(eventName);
    Returns an object with the current time which serves as benchmark start.

####Scribo.endBench(eventStart, loggable, callback)
    Calculates the elapsed time. If loggable is set to TRUE, saves the result to the benchmark's corresponding log file.

# Examples
If you want to log events/benchmarks to a file, you need to add each event/benchmark name to the events array. It's located in the EVENTS.js file. The comment in that file has a few examples.

You log an event like that:

    http.createServer(function onRequest(req, res) {
      Scribo.logEvent('event name', 'message', false);
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
