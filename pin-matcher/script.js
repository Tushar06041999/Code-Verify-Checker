let genarateNum=document.getElementById("showNumber");
    let genarateTouch=document.getElementById("genarate");
    let button=document.getElementById("btn");
    let form1=document.getElementById("form");
    let section=document.getElementById("notify1");
    let section1=document.getElementById("notify2");
    let section2=document.getElementById("notify3");
    section1.style.display="none";
    section2.style.display="none";


    const backspace = document.getElementById("form6");
backspace.addEventListener("click", function() {
    form6= form6.slice(0, -1);
    document.getElementById("form").value = form6;
})


genarateTouch.addEventListener("click",function(){
    let number=Math.floor(100000+Math.random()*899999);
    let newNumber=parseInt(number);
    genarateNum.value=newNumber;
})

button.addEventListener("click",function(){
   
    if(genarateNum.value==form1.value){
        section2.style.display="block";
    }else{
        section1.style.display="block";
    }
})