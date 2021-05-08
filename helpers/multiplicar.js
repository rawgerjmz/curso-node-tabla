const fs = require('fs');
var colors = require('colors');

const createFile = async(base = 1, listar, hasta) => {
    try { 
        

        const breakLine = '\n';
        let salida = '';
        let consola = '';

        for(let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}${i === hasta ? '' : breakLine}`;
            
            if ( i % 2 ){
                consola += colors.red(`${base} x ${i} = ${base * i}${i === hasta ? '' : breakLine}`);
            }else{
                consola += colors.yellow(`${base} x ${i} = ${base * i}${i === hasta ? '' : breakLine}`);
            }
            
        }

        if( listar ) { 
            console.log(colors.magenta('======================================'));
            console.log(colors.green(`============== tabla del ${base} ===========`));
            console.log(consola);
        }
        
        await fsCreateFile(`./salida/tabla-${base}.txt`, salida);
        console.log(colors.green('======================================'));

        return `Tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

const fsCreateFile = async(fileName, output) => {
    try{
        fs.writeFileSync(fileName, output);
    }catch(err) {
        throw err;
    }
}

module.exports = {
    createFile
};