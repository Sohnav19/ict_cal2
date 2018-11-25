const express=require('express')
const chalk=require('chalk')
const path=require('path')

var app=new express();

const nav=[
    {link:'/courses',title:'Courses'},
    {link:'/departments',title:'Department'},
    {link:'/aboutus',title:'About Us'},
    ]

app.use(express.static(path.join(__dirname,"/public")))

const coursesRouter=require("./src/routes/coursesRoutes.js")(nav);
const departmentRouter=require("./src/routes/departmentRoutes.js")(nav);
const aboutusRouter=require("./src/routes/aboutusRoutes.js")(nav);
app.use('/courses',coursesRouter);
app.use('/departments',departmentRouter);
app.use('/aboutus',aboutusRouter);

app.set('views','./src/views');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('app',{title:"College",
    nav
                        });
});

app.listen(3001,function(){
    console.log("Listening to port "+chalk.green('3001'));
})