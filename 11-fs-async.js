const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) throw err;
    const second = result;
    writeFile(
      './content/result-sync.txt',
      `Here is the result: :) ${first}, ${second}`,
      'utf8',
      (err) => {
        if (err) throw err;
        console.log('The file was successfully synced');
      }
    );
  });
});
console.log('starting next task');
