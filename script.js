


function show(){
    var r=document.getElementById("rate").value;
    document.getElementById("s").innerHTML = " "+r;
}


function compute()
{
    var p;
    p = document.getElementById("principal").value;        //Principal
    if(p==0 || p<0)
    {
    	alert("Enter a positive number for principal");
    }

    var r=document.getElementById("rate").value;        //Rate of interest

    var e=document.getElementById("years");

    var y = e.options[e.selectedIndex].value;            //No of years

    var i = ((p*r*y)/100);                      //Interest Value

    var d=new Date();
    var f=(d.getFullYear()+Number(y));               //Tells the year when user will get the final amount 

    
    document.getElementById("result").innerHTML=" "+i;

    var str1="If you deposit "+p;
    var str2=",at an interest rate of "+r;
    var str3="%.You will receive an amount of "+i;
    var str4=",in the year "+f;
    document.getElementById("result1").innerHTML=str1+ str2+str3+str4;
}

