const https = require('https');
const { inflateRaw } = require('zlib');

https.get('https://rickandmortyapi.com/api/character', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);
//   console.log('RES:', res);
    if (res.statusCode !==200) {
        const {statusCode, statusMessage} = res
        console.log(`Status code ${statusCode} ${statusMessage}`);
        return;
    }
    res.setEncoding('utf8')
    // console.log(res);
    const lines = []
    res.on('data', (d) => {
        // for (const iter of d) {
        // console.log(iter['info']);
        // }
    //    const restore = JSON.parse(d)

    // process.stdout.write();
    lines.push(d)
  });
  res.on('end', () => {
    lines.forEach(e => {
    console.log(typeof e);
});
    
    
    // const rt = JSON.stringify(d)
    // const restore = JSON.parse(rt)
    // console.log(typeof restore);
  });

}).on('error', (e) => {
  console.error(e);
});
