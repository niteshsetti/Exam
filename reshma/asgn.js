function namefn(){
     var nm = document.getElementById("fname").value;
     var lm= document.getElementById("lname").value;
     var p1= document.getElementById("phno1").value;
     var p2= document.getElementById("phno2").value;
     var db= document.getElementById("dob").value;
     var ad=document.getElementById("adrs").value;
        var count = [];
        var ch= document.getElementsByName("ck");
    for(let i=0;i<ch.length;i++){
        if(ch[i].checked){
            count.push(ch[i].value)
        }
    }
       
     if(nm==""||lm==""||p1==""||p2==""||db==""||ad==""||count.length==0){
         alert("fill all required details");
     }
     else{
         alert("successfully registered");
     }
}
const rst=()=>{
    window.location.href="http://127.0.0.1:5500/assign.html";
}