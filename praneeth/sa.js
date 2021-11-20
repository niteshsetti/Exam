

const submits=()=>{
    let checkvalues=[]
    var firstname = document.getElementById("jsfname").value;
    var lastname = document.getElementById("jslname").value;
    var date = document.getElementById("jsbdate").value;
    var areacode = document.getElementById("jsac").value;
    var phonenumber = document.getElementById("jsph").value;
    var address = document.getElementById("jsaddr").value;
    var check= document.getElementsByName("cbvalue");
    for(let i=0;i<check.length;i++){
        if(check[i].checked){
            checkvalues.push(check[i].value)
        }
    }
    if(firstname=="" || lastname=="" || date=="" || areacode=="" || phonenumber=="" || address=="" || checkvalues.length==0){
        alert("complete Mandatory Fields");
    }
    else{
        alert("Success");
    window.location.href="http://127.0.0.1:5500/index.html";
    }
}

const reset=()=>{
    window.location.href="http://127.0.0.1:5500/index.html";
}
function aa(){
      var inp= document.getElementsByName("cbvalue");
      
      var a = 0;
            for (var i = 0; i < inp.length; i++) {
                if (inp[i].checked == true) {
                    a++;
                }
            }
            
            if (a < 1) {
               document.getElementById("m").innerText = "Error";
                document.getElementById("m").style.color = "red";
            }

            else if (a >= 1) {
                document.getElementById("m").innerText = "Success";
                document.getElementById("m").style.color = "green";
            }
}