let cal,mt,mo,ft,fo,test,option;
function calculate(){
    mt=parseInt(document.getElementById("matrictotal").value);
    mo=parseInt(document.getElementById("matricobt").value);
    ft=parseInt(document.getElementById("firsttotal").value);
    fo=parseInt(document.getElementById("firstobtained").value);
    test=parseInt(document.getElementById("testobtained").value);
    option=document.getElementById("selection").value;
    if(option=="ECAT"){
        cal=(mo*17/mt)+(fo*50/ft)+(test*33/400)

    }
    else if(option=="NET"){
        
        cal=(mo*10/mt)+(fo*15/ft)+(test*75/200)
    }
    document.getElementById("result").innerText=`Your ${option} aggregate is:`+cal;
document.getElementById("matrictotal").value = "";
document.getElementById("matricobt").value = "";
document.getElementById("firsttotal").value = "";
document.getElementById("firstobtained").value = "";
document.getElementById("testobtained").value = "";
document.getElementById("selection").value = "";}