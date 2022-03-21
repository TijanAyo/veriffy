const mongoose = require('mongoose')

const ConnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.dbURI)
        console.log('MongoDB Connected ✔️✔️✔️')
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = ConnectDB