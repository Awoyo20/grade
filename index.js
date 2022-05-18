function Total(){
    var sub1 = parseInt(document.getElementById("html").value);
    var sub2 = parseInt(document.getElementById("css").value);
    var sub3 = parseInt(document.getElementById("bootstrap").value);
    var sub4 = parseInt(document.getElementById("css").value);
    var sub5 = parseInt(document.getElementById("javascript").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
{
 alert(" Enter your marks in range of 100");
}
else {
    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    document.getElementById("total").innerHTML = "Html Marks :"+sub1+"<br> css Marks: "+sub2+"<br> Bootstrap Marks: "+sub3+"<br> Javascript Marks: "+sub4+"<br> .net: "+sub5+"<br> Total Marks : "+total;
}
}

function Average(){
    var sub1 = parseInt(document.getElementById("html").value);
    var sub2 = parseInt(document.getElementById("css").value);
    var sub3 = parseInt(document.getElementById("bootstrap").value);
    var sub4 = parseInt(document.getElementById("css").value);
    var sub5 = parseInt(document.getElementById("javascript").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
{
    alert("Enter your marks in range of 100")
}
else{
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var avg=total/5
    document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
}
}
function Grade(){
    var sub1 = parseInt(document.getElementById("html").value);
    var sub2 = parseInt(document.getElementById("css").value);
    var sub3 = parseInt(document.getElementById("bootstrap").value);
    var sub4 = parseInt(document.getElementById("css").value);
    var sub5 = parseInt(document.getElementById("javascript").value);

    if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
{
    alert("Enter your marks in range of 100")
}else {
    var total = sub1 + sub2 + sub3 + sub4 + sub5;
    var avg=total/5
    if(avg>=80 && avg<=100)
    {
    document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
    }
    else if(avg>80 && avg<=100)
    {
        document.getElementById("grade").innerHTML="A: ";    
    }
    else if(avg>70 && avg<=89)
    {
        document.getElementById("grade").innerHTML="B: ";    
    }
    else if(avg>60 && avg<=69)
    {
        document.getElementById("grade").innerHTML="C: ";    
    }
    else if(avg>50 && avg<=59)
    {
        document.getElementById("grade").innerHTML="D: ";    
    }
    else (avg>0 && avg<=49)
    {
        document.getElementById("grade").innerHTML="F: ";    
    }
}
}  
console.log(grade)

