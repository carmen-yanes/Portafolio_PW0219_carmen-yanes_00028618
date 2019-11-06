const Mongoose = require('mongoose')
let database = 'RegisterDB'
let hist = 'localhost'
let port = '27017'
let uri = `mongodb://${host}:${port}/${database}`

const connect = ()=>{
    Mongoose.connect(uri, {userNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log(`Conexión a la base ${database} exitosa`);
    })
    .catch(()=>{
        console.log('Un error ha ocurrido al conectar con la base de datos');
    });
};

module.exports = {
    connect
}