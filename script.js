


function show(){
    var r=document.getElementById("rate").value;
    var s="%";
    document.getElementById("s").innerHTML = " "+r+s;
}


function compute()
{
    var p;
    p = document.getElementById("principal").value;        //Principal
    if(p==0 || p<0)
    {
    	alert("Enter a positive number for principal");
    	document.getElementById("principal").focus();
    	return;
    }

    var r=document.getElementById("rate").value;        //Rate of interest

    var e=document.getElementById("years");

    var y = e.options[e.selectedIndex].value;            //No of years

    var i = ((p*r*y)/100);                      //Interest Value

    var d=new Date();
    var f=(d.getFullYear()+Number(y));               //Tells the year when user will get the final amount 

    
    //document.getElementById("result").innerHTML=" "+i;

    var str1="If you deposit <mark> "+p+"</mark>,";
    var str2="at an interest rate of <mark> "+r+"%</mark>.";
    var str3="You will receive an amount of <mark> "+i+"</mark>,";
    var str4="in the year <mark> "+f+"</mark>";
    document.getElementById("result1").innerHTML=str1+"<br>"+str2+"<br>"+str3+"<br>"+str4;
}

