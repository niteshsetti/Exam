const reset=()=>{
    window.location.href="http://127.0.0.1:5500/exam1.html"
}
function validate(){
    let fname= document.getElementById("fname").value
    let lname= document.getElementById("lname").value
    let date = document.getElementById("dob").value
    let arcode = document.getElementById("arcode").value 
    let phno = document.getElementById("phno").value
    let c=document.getElementsByName("cbox")
    let l=[]
    for(let i=0;i<c.length;i++){
        if(c[i].checked){
            l.push(c[i].value)
        }
    }
    let add = document.getElementById("add").value

    if(fname==""||lname==""||date==""||arcode==""||phno==""||l.length==0||add==""){
        alert("Complete all the required fields.")
    }
    else{
        alert("Registration Successful..")
        window.location.href="http://127.0.0.1:5500/exam1.html"
    }
}
