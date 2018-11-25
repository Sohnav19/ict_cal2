const express=require('express');
const coursesRouter=express.Router();

function router(nav){
var courses=[{course:"Computer Science and Engineering"},
             {course:"Civil Engineering"},
             {course:"Mechanical Engineering"},
             {course:"Automobile Engineering"},
             {course:"Electrical and Electronics Engineering"}
            ];


coursesRouter.route('/')
    .get((req,res)=>{
        res.render("courses",{
            course:courses,
        nav,
        });
    });

coursesRouter.route('/:id')
    .get((req,res)=>{
        const id=req.params.id;
        res.render("course",
        {
            nav,
            title:"Courses",
            course:courses[id]
        }
        );
    });
    return coursesRouter;
}
    module.exports=router;