const employee = require('../models/employee');
const salary = require('../models/salary');
const deduct = require('../models/deduction');
const upassword = require('../models/upassword');
const attendence = require('../models/attendence');
const transactions = require('../models/transactions');
module.exports.home = function(req,res){
        var errors = [];
        if(req.query.id!=undefined)
        errors.push({msg:req.query.id});
        console.log(req.query.id);
        return res.render('home',{title:"home-login",errors});      
}
let user = {};
// module.exports.task = function(req,res){
//     console.log(req.body);
    
//     task.create({
//         description: req.body.description,
//         category: req.body.category,
//         date:req.body.date
//     },function(err,newContact){
//         if(err)
//         {
//             console.log('error creating contact');
//             return;
//         }
//         else
//         {
//             console.log(newContact);
//             return res.redirect('back');
//         }
   
// });
// };


// module.exports.delete = function(req,res){
    
//     for(let i of Object.keys(req.body))
//     {
//         let id = req.body[i];
//         console.log(id);
//         task.findByIdAndDelete(id,function(err){
//          if(err)
//              {
//                  console.log('error deleting');
//                  return;
//              }
//          });
//     }
//     return res.redirect('user');

// }


module.exports.login = function(req,res){
    
    return res.render('login',{title:"home-login"});  

}



module.exports.adminlog = function(req,res){
    
    if(req.body.username== "admin" && req.body.password == "admin" )
    return res.redirect('/admin/home');  
    else
    {
        var errors;
        errors = 'username or password incorrect';
        return res.redirect('/?id='+errors);
    }
}
module.exports.adminhome = function(req,res){
    var errors = [];
    if(req.query.id!=undefined)
    errors.push({msg:req.query.id});
    console.log(req.query.id);
    
    return res.render('admin',{title:"admin",errors:errors});

}

module.exports.register = function(req,res){
    
    return res.render('register',{title:"register"});

}

module.exports.employees = function(req,res){

    employee.find({}, function (err, docs) {
            console.log('employee');
            console.log(docs);
            var e1 =docs;
            function compare( a, b ) {
                if ( a.eid < b.eid ){
                  return -1;
                }
                if ( a.eid > b.eid ){
                  return 1;
                }
                return 0;
              }
              
              e1.sort( compare );
            return res.render('employees',{title:"employees",emp:docs});
            });
    

}
module.exports.adminregister = function(req,res){
    let body = req.body;
    let emp = {name:body.name,eid:parseInt(body.eid),gender:body.gender,dob:body.dob,
    doj:body.doj, phone:parseInt(body.phone), address:body.address, dno: parseInt(body.dno),
    designation:body.designation, sid:parseInt(body.sid),did:parseInt(body.did)
    }

    let sal = { 
        sid:parseInt(body.sid), base:parseInt(body.base), hra:parseInt(body.hra),
        da:parseInt(body.da),ma:parseInt(body.ma)
         
    }
    let ded = { 
        did:parseInt(body.did), tax:parseInt(body.tax), leave:parseInt(body.leave),
        pf:parseInt(body.pf),wf:parseInt(body.wf), loan:parseInt(body.loan),
        bus:parseInt(body.bus)
         
    }
    let pass = {
        username:body.uname,
        password:body.password,
        eid: body.eid
    }
    

upassword.create(
 pass    
,function(err,newContact){
    if(err)
    {
        console.log(err);
        var errors = 'username already exists!';
        return res.redirect('/admin/home/?id='+errors);
    }
    else
    {
        employee.create(
            emp
        ,function(err,newContact){
            if(err)
            {
                console.log(err);
                var errors = 'EId already exist';
                return res.redirect('/admin/home/?id='+errors);
            }
            else
            {
                salary.create(
                    sal
                ,function(err,newContact){
                    if(err)
                    {
                        console.log(err);
                        var errors = 'Salary Id already exist';
                        return res.redirect('/admin/home/?id='+errors);
                    }
                    else
                    {
                        deduct.create( ded,function(err,newContact){
                            if(err)
                            {
                                console.log(err);
                                var errors = 'Deduction Id already exists!';
                                return res.redirect('/admin/home/?id='+errors);
                            }
                            else
                            {
                                console.log(req.body)
                                return res.redirect('back');
                            }
                        
                        });
                    }
                
                });
            }
       
    });
    }

});

    

}
// module.exports.play = function(req,res){
//     res.end('Kamboj');   
// }


module.exports.delete  = function(req,res){
    console.log('delete');
    let id = req.query.id;
    
    
    employee.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log('error deleting');
            return;
        }
        return res.redirect('back');    
        });
        
    
    
    
}

module.exports.atd = function(req,res){
    
    return res.render('atd',{title:"Attendence"});

}

module.exports.atdp = function(req,res){
    let body = req.body;
    let at = {eid:parseInt(body.eid),month:body.month,leaves:parseInt(body.leave)};
    attendence.find({ eid: at.eid,month:at.month}, function (err, docs) {
        console.log(docs);
        if(err){
            console.log('error');
            return;
        }
        if(docs.length==0)
        {
        attendence.create(at,function(err,newContact){
        if(err)
        {
            console.log('error creating contact');
            return;
        }
        return res.redirect('back');

    });    }
    else
    {
        return res.redirect('back');
    }
    
    ;})
}


    // em = docs[0];
    // let dept = ['R&D','Production','Marketing','Human Resource','Finance and Accounting']
    // let emp = docs[0];
    // emp.dname = dept[docs[0].dno-1]
    // return res.render('user',{title:"user",personal:p,user:user,employment:e,list:emp});    
    
    
module.exports.transactions = function(req,res){

    var errors = [];
    if(req.query.id!=undefined)
    errors.push({msg:req.query.id});
    console.log(req.query.id);
    return res.render('transactions',{title:"Transactions",errors:errors});

}

module.exports.transactionsp = function(req,res){
    let body = req.body;
    let at = {tid:parseInt(body.tid),eid:parseInt(body.eid),amount:0, month:body.month};
    // transactions.find({ tid: at.tid}, function (err, docs) {
    //     console.log(docs);
    //     if(err){
    //         console.log('error');
    //         return;
    //     }
    //     if(docs.length==0)
    //     {
            console.log(at);
            employee.find({ eid: at.eid}, function (err, docs) {
                if(docs.length==0)
                    {
                        console.log(err);
                        var errors = 'EId not found';
                        return res.redirect('/admin/transactions/?id='+errors); 
                    }
                console.log('emp');
                console.log(docs);
                var emp = docs[0];
            salary.find({ sid: emp.sid}, function (err, docs) {
                if(docs.length==0)
                    {
                        console.log(err);
                        var errors = 'Salary details not found';
                        return res.redirect('/admin/transactions/?id='+errors); 
                    }
                console.log('salary');
                console.log(docs);
                var sal = docs[0];
                sal.total = sal.base+sal.hra+sal.da+sal.ma;
                deduct.find({ did: emp.did}, function (err, docs) {
                    if(docs.length==0)
                    {
                        console.log(err);
                        var errors = 'Deduction details not found';
                        return res.redirect('/admin/transactions/?id='+errors); 
                    }
                    console.log('deduct');
                    console.log(docs);
                    var de = docs[0];
                    de.total = de.tax+de.pf+de.wf+de.loan+de.bus;
                attendence.find({eid:emp.eid,month:at.month},function(err,docs){
                    if(docs.length==0)
                    {
                        console.log(err);
                        var errors = 'Attendence of month not found';
                        return res.redirect('/admin/transactions/?id='+errors); 
                    }
                    console.log('attendence');
                    console.log(docs);
                    var leave = docs[0].leaves; 
                    de.total = de.total+(leave*de.leave);
                    at.amount = sal.total-de.total; 
                    transactions.create(at,function(err,newContact){
                        if(err)
                        {
                            console.log(err);
                            var errors = 'TId already exists';
                            return res.redirect('/admin/transactions/?id='+errors);
                        }
                        return res.render('transactions',{title:"Transactions"});
                        
                    });       
                
                    });    
                //return res.render('salary',{title:"Salary",user:user,salary:sal,deduct:d});
                });
                    
           });
        });
    }
    // else
    // {
    //     return res.redirect('back');
    // }
    
    // ;})
// }



module.exports.history = function(req,res){
    transactions.find({},function(err,docs){
        if(err)
        {
            console.log('error in finding tasks');
            return;
        }
        var tsn = docs;
        console.log(tsn);
        function compare( a, b ) {
            if ( a.tid > b.tid ){
              return -1;
            }
            if ( a.tid < b.tid ){
              return 1;
            }
            return 0;
          }
          
          tsn.sort( compare );
        return res.render('history',{title:"History",emp:tsn});
        //return res.render('home',{title:"TODO APP",task_list:tasks});
   
    })  
    
    

}
