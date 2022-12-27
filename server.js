const app = require('./app');
const servec = require('./config/index.config');
const mongo = require('mongoose');
const Model = require('./model/index.model');
const bodyparser = require('body-parser');
const { userInfo } = require('os');



mongo.connect(servec.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log('running')).catch((err)=>console.log(err));


app.get('/data',async(req,res)=>{
    const data = new Model({
        name:req.body.name,
        age:req.body.age
    });
    const val = await data.save();
    res.send(`${val.name} save`)
})


app.listen(servec.PORT)