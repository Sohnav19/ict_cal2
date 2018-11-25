const express=require('express');
const departmentRouter=express.Router();

function router(nav){
var departments=[{department:"Computer Science"},
                 {department:"Civil"},
                 {department:"Mechanical"},
                 {department:"Automobile"},
                 {department:"Electrical and Electronics"}
                ];

var staffs=[{name:"Sana",department:"Computer Science"},
            {name:"Anu",department:"Civil"},
            {name:"Sanju",department:"Mechanical"},
            {name:"Anoop",department:"Automobile"},
            {name:"Anju",department:"Electrical and Electroniccs"}
            ];

departmentRouter.route('/')
    .get((req,res)=>{
        res.render("departments",{
            department:departments,
        nav
        });
    });
departmentRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;
        res.render("staffs",
        {
            nav,
            
            staff:staffs
        }
        );
    });

departmentRouter.route('/id/:id1')
    .get((req,res)=>{
        const id=req.params.id;
        const id1=req.params.id1;
        res.render("staff",
        {
            nav,
            title:"Staffs",
            staff:staffs[d]
        }
        );
    });





    
    return departmentRouter;
}
    module.exports=router;