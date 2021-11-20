function reset()
{
    window.location.href="http://127.0.0.1:5500/exam.html"
}
function check()
{
    l=[];
  var k = document.getElementsByName("c")
  for(i=0;i<k.length;i++)
  {
      if(k[i].checked)
        l.push(k[i].value)
  }
  a=document.getElementById("lname")
  s=document.getElementById("lname")
  d=document.getElementById("pn")
  f=document.getElementById("pno")
  g=document.getElementById("dob")
  h=document.getElementById("address")
  if((l.length==0)||(a=="")||(s=="")||(d=="")||(f=="")||(g=="")||(h==""))
    alert("enter required details")
  else{
      alert("REGISTRATION SUCCESSFUL")
      window.location.href="http://127.0.0.1:5500/exam.html"
      
  }
}