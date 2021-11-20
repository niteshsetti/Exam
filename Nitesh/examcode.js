const submits=()=>{
    let checkvalues=[]
    var firstname=document.getElementById("name").value;
    var lastname=document.getElementById("last").value;
    var date=document.getElementById("date").value;
    var areacode=document.getElementById("area").value;
    var phonenumber=document.getElementById("phonenumber").value;
    var address=document.getElementById("atext").value;
    var check=document.getElementsByName("all");
    for(let i=0;i<check.length;i++){
        if(check[i].checked){
            checkvalues.push(check[i].value)
        }
    }
    if(firstname=="" || lastname=="" || date=="" || areacode=="" || phonenumber=="" || address=="" || checkvalues.length==0){
        alert("complete Mandatory Fields");
       
    }

}
const reset=()=>{
    window.location.href="http://127.0.0.1:5500/exam.html";
}