const cors = require('cors'); 
const AllowOrigins = ['http://127.0.0.1:5173', 'http://localhost:5173'];
 // Configuración de CORS 
    const corsOptions = { 
        origen: (origen, callback){ => { 
            if (allowedOrigins.includes(origen) || !origin) { 
                callback(null, true); 
            } else { 
                    callback(new Error('No permitido por CORS')); 
                } 
            }, 
// Otras opciones CORS si es necesario 
}; 
// Middleware de CORS 
const middlewareCors = cors(corsOptions); 
module.exports = middlewareCors