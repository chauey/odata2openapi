// import { odata2openapi, Swagger } from '../src/';

// const url = process.argv[2] || 'http://services.odata.org/V3/Northwind/Northwind.svc/$metadata';

// odata2openapi(url)
//   .then((swagger: Swagger) => console.log(JSON.stringify(swagger, null, 2)))
//   .catch(error => console.error(error))


import { parse, convert, Options } from '../src/';

const options: Options = {
  host: 'services.odata.org',
  basePath: '/V3/Northwind/Northwind.svc'
};

var fs = require('fs');
fs.readFile('./example/msgraphMetaDataV4.xml', function (err, data) {
  if (err) {
    throw err;
  }
  //console.log(data.toString());

  parse(data.toString())
    .then(sets => {
      return convert(sets, options)
    })
    .then(swagger => console.log(JSON.stringify(swagger, null, 2)))
    .catch(error => console.error(error))

});




//const xml = require('./msgraphMetaDataV4.xml');

