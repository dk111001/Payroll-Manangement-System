const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const task = require('./models/task');
const employee = require('./models/employee');
const department = require('./models/department');
const upassword = require('./models/upassword');
const values = require('./models/values');
const layouts = require('express-ejs-layouts');


//use express router
app.use(express.static('assets'));
app.use(express.urlencoded());
app.use(layouts);
app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.use('/',require('./routes'));
app.use('/user',require('./routes/users'));



   //middleware

//set view engine



// department.create({
//     dno: 1,
//     dname: "R&D",

// },function(err,newContact){
//     if(err)
//     {
//         console.log('error creating contact');
//         return;
//     }});
//     department.create({
//         dno: 2,
//         dname: "Production",
    
//     },function(err,newContact){
//         if(err)
//         {
//             console.log('error creating contact');
//             return;
//         }});
//         department.create({
//             dno: 3,
//             dname: "Marketing",
        
//         },function(err,newContact){
//             if(err)
//             {
//                 console.log('error creating contact');
//                 return;
//             }});
 
//             department.create({
//                 dno: 4,
//                 dname: "Human Resource",
            
//             },function(err,newContact){
//                 if(err)
//                 {
//                     console.log('error creating contact');
//                     return;
//                 }});
//                 department.create({
//                     dno: 5,
//                     dname: "Finance and Accounting",
                
//                 },function(err,newContact){
//                     if(err)
//                     {
//                         console.log('error creating contact');
//                         return;
//                     }});                             
// employee.create({
//         name: "dedff",
//         eid: 2001,
//         gender:"fsfsd",
//         doj:"14/12/2000",
//         phone:907988,
//         address : "ffs",
//         dno :10,
//         designation : "sdf",
//         sid:100,
//         did:101
//     },function(err,newContact){
//         if(err)
//         {
//             console.log('error creating contact1');
//             return;
//         }});    

// values.create({
//         eid: 1007,
//         sid : 2007,
//         did : 3007,
//         tid : 5010
//     },function(err,newContact){
//         if(err)
//         {
//             console.log('error creating contact1');
//             return;
//          }}); 
//server created
app.listen(port, function(err){
    if(err)
    {
        console.log(`error : ${err}`);
        return;
    }
    console.log(`Server is running on port:${port}`);
})
