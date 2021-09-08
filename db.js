// npm install postgresql
// const { Client } = require('pg')
// const client = new Client()
//  client.connect()
// const res = client.query('SELECT $1::text as message', ['Hello world!'])
// console.log(res) // Hello world!
// client.end()

// const { Client } = require('pg')
// const client = new Client("postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net:6432/db1?ssl=true")
// client.connect()
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// })


const pg = require("pg");
const client = new pg.Client("postgres://candidate:62I8anq3cFq5GYh2u4Lh@rc1c-2m0keqdcncuwizmx.mdb.yandexcloud.net:6432/db1?ssl=true");
client.connect();
console.log("object");