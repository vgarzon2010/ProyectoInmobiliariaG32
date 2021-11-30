var Mongoose= require("mongoose")

const mongodb_url="mongodb+srv://vgarzon:susana2010@programacionweb.wwwra.mongodb.net/BdInmobiliaria?retryWrites=true&w=majority"

Mongoose.connect(mongodb_url, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb esta conectado");
    
}).catch((error)=>{
    console.log("mongodb no esta conectado");
    console.log(error);   
})