const fs = require('fs').promises; 
const csv = require('csv-parser');
    datosCrypto = nulo; 
const loadDataCryptoReturn = async () => { 
    if (!dataCrypto) { { 
        const data = []; 
        const stream = fs.createReadStream('./data/crypto-return.csv'); 
        const analyser = stream.pipe(csv()); 
        await {
            data.push(fila);
        } 
        dataCrypto = data; return dataCrypto; 
    } catch (err) { 
        throw new Error('Error al cargar los datos de crypto-return: ' + err. mensaje); 
    } 
} 
else { 
    return dataCrypto; 
} }; 
módulo.exportaciones = {loadDataCryptoReturn
}