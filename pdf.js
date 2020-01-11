// playground requires you to assign document definition to a variable called dd

var dd = {
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