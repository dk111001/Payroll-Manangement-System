attendence.find({eid:emp.eid,month:id},function(err,docs){
    console.log('attendence');
    console.log(docs);
    var leave = docs[0].leaves; 
    de.total = de.total+(leave*de.leave);
    at.amount = sal.total-de.total; 
     console.log(at);      
    var documentDefinition = {
        content: [
           {
                text: 'Pay Slip\n\n',
                style: 'header'
           },
        {
        table: {
                widths: ['*'],
                body: [[" "], [" "]]
        },
        layout: {
            hLineWidth: function(i, node) {
                return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
                return 0;
            },
        }
        
        
       },
       {
                style: 'tableExample',
                table: {
                    widths: ['33%', '33%', '33%'],
                    body: [
                        [[{text:[{text:'Transaction Id:\t',bold:true},'1004']}], [{text:[{text:'Emp Id:\t',bold:true},'1001']}], [{text:[{text:'Month:\t',bold:true},'Jan\n\n']}]],
                        [[{text:[{lineHeight: 1.4,text:'Name:\n',bold:true},{text:'1001'}]}], [{text:[{lineHeight: 1.4,text:'Department:\n',bold:true},{text:'1001'}]}], [{text:[{lineHeight: 1.4,text:'Designation:\n',bold:true},{text:'1001'}]}]],
                        
                    ]
                },
                layout: 'headerLineOnly',
                margin: [10, 10, 0, 10],
            },
        {
        table: {
                widths: ['*'],
                body: [[" "], [" "]]
        },
        layout: {
            hLineWidth: function(i, node) {
                return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
                return 0;
            },
        }
        
        
       },
        {
                columns: [
                    [
                        {
                        
                          text :'Earnings(Rs.)',
                          alignment : 'center',
                          bold : true
                    },
                    [
                      {
                        lineHeight: 1.4,
                        text :'\nBasic \t\t\t:\t'
                        
                      },
                      {
                        lineHeight: 1.4,
                        text :'DA \t\t\t\t :\t'
                      },
                      {
                        lineHeight: 1.4,
                        text :'HRA \t\t\t  :\t'
                      },
                      {
                        lineHeight: 1.4,
                        text :'MA \t\t\t\t:\t'
                      }
                    ]
                    ],
                    [
                    {
                        
                      text :'Deductions(Rs.)',
                      alignment : 'center',
                      bold : true
                    },
                    {
                       lineHeight: 1.4,
                       text :'\nLeaves \t\t  :\t'
                    },
                    {
                       lineHeight: 1.4,
                       text :'Tax \t\t\t    :\t'
                    },
                    {
                       lineHeight: 1.4,
                       text :'PF   \t\t\t\t:\t'
                    },
                    {
                       lineHeight: 1.4,
                       text :'WF  \t\t\t\t:\t'
                    },
                    {
                       lineHeight: 1.4,
                       text :'Loan   \t\t\t:\t'
                    },
                    {
                       lineHeight: 1.4,
                       text :'Hostel/Bus Charges :\t'
                    },
                    ]
    
                    
                ]
            },
        {
        table: {
                widths: ['*'],
                body: [[" "], [" "]]
        },
        layout: {
            hLineWidth: function(i, node) {
                return (i === 0 || i === node.table.body.length) ? 0 : 2;
            },
            vLineWidth: function(i, node) {
                return 0;
            },
        }},
        {
            columns:[
                {
                    text : 'Gross Pay(Rs.)\t:\t'
                },
                {
                    text : 'Total Deduction(Rs.)\t:\t'
                }
                
                ]
        }
        ,
        {
            margin :[0,20,0,0],
            text: 'Net Pay(Rs.)\t ',
            bold : true
        }
       
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment : 'center'
            },
            subheader: {
                fontSize: 15,
                bold: true
            },
            quote: {
                italics: true
            },
            small: {
                fontSize: 8
            }
        }
        
    }


const pdfDoc = pdfMake.createPdf(documentDefinition);
pdfDoc.getBase64((data)=>{
res.writeHead(200, 
{
    'Content-Type': 'application/pdf',
    'Content-Disposition':'attachment;filename="filename.pdf"'
});

const download = Buffer.from(data.toString('utf-8'), 'base64');
res.end(download);
});