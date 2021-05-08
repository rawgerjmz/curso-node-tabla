const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

// console.log(process.argv);
// no recomendable...
// const [,,arg3 = 'base=5'] = process.argv;
// const [ ,base ] = arg3.split('=');

createFile(argv.b, argv.l, argv.h)
    .then(
        nombreArchivo => { 
            console.log(colors.inverse(nombreArchivo,'creado'))
        }
    ).catch(
        err => console.log(err)
    );
