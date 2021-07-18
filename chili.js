	var a=[];

	var totalprice=0
	function add(name,count,price)
	{
		//var totalprice=0
		//const price = 100;
		 console.log(count)
			var quantity=document.getElementById(count).value;		
			console.log(quantity)
			totalprice = totalprice+price*quantity;


			var obj={"name":name,"quantity":count,"price":totalprice}
			a.push(obj);
		 console.log(totalprice);
		 console.log(a)
	
	}

	function bill(){
		if(a.length!=0){
			document.getElementById("msg").style.display="none";
		document.getElementById("pricetbl").style.display="block";
		var total=0;
		console.log("In bill",a);
		var tbody=document.getElementById("tb");
		for(let i=0;i<a.length;i++){
			var tr = document.createElement('TR');
       		tbody.appendChild(tr);
       		 var td = document.createElement('TD'); 
       		 var td1 = document.createElement('TD');
       		 var td2 = document.createElement('TD');
       		 td.appendChild(document.createTextNode(a[i].name));
       		 td1.appendChild(document.createTextNode(document.getElementById(a[i].quantity).value));
       		 td2.appendChild(document.createTextNode(a[i].price));
       		 tr.appendChild(td);
       		 tr.appendChild(td1);
       		 tr.appendChild(td2);
       		 total=total+a[i].price;
		}
	//	var tbody=document.getElementById("tb");
		var tr = document.createElement('TR');
		tbody.appendChild(tr);
		var td = document.createElement('TD'); 
       	var td1 = document.createElement('TD');
       	td.appendChild(document.createTextNode("Total"));
       	td1.appendChild(document.createTextNode(total));
       	tr.appendChild(td);
       	tr.appendChild(td1);
		}else{
			document.getElementById("msg").style.color="red";
			document.getElementById("msg").innerHTML="Item Not Added";
		}	
	}

	