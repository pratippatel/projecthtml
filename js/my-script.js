var menubtn= document.getElementById("btn");

menubtn.addEventListener("click",changes);
 var ins= document.getElementsByClassName("navigation")[0];
function changes()
{
    if(menubtn.className=="btn-open")
        {
           
            ins.style.opacity=1;
            ins.style.transition=".8s";
            menubtn.className="btn-close";
            
        }
    else if(menubtn.className=="btn-close") {
        
        ins.style.opacity=0;
        ins.style.transition=".8s";
        menubtn.className="btn-open";
        
    }
}

