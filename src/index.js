/* const n = require('net');
  const p = new n.Socket();
  p.setTimeout(process.argv[2] / 1);
  var start = process.hrtime()
  
  p.on('timeout', () => {
    var diff = process.hrtime(start)
    console.log(`timed out in ${diff[0]} seconds, ${diff[1] / (1000 * 1000)} millseconds`)
  })
  p.connect(9100, 'localhost', () => {
    console.log('connected');
  }) */