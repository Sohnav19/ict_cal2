const express=require('express')
const aboutusRouter=express.Router();

function router(nav){
    var aboutus={name:"MMS College",place:"Kannur",since:"1945"}
    aboutusRouter.route('/')
    .get((req,res)=>{
        res.render("aboutus",{
           about:aboutus,
        nav
        });
    });



    return aboutusRouter;

}
module.exports=router;