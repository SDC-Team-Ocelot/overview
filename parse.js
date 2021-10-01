const fs = require('fs');
const parse = require('csv-parse');
const path = require('path');

const CSV_DIR = path.resolve(__dirname, 'csv');


let writeStream = fs.createWriteStream(path.resolve(__dirname, 'csv', 'cleanPhotos.csv'));

fs.createReadStream(path.resolve(CSV_DIR, 'photos.csv'))
  .pipe(
    parse({
      header: true,
      delimiter: ',',
      from_line: 1,
      quote: '',
    }),
  )
  .on('data', (row) => {
    row[3] = row[3].replace(/["]+/g, '')
    row[2] = row[2].replace(/["]+/g, '')
    writeStream.write(`${row[0]},${row[1]},"${row[2]}","${row[3]}"\n`)
  })
  .on('end', () => {
    console.log('finished')
  })
