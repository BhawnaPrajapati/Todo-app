let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    inp.value="";
    let delbtn=document.createElement("button");
    delbtn.innerText= "Delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);
    
        
    });
    ul.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            let parent=event.target.parentElement;
            parent.remove();
            console.log("deleted");
        }
    })
// let delbtns=document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click",function(){              //not possible because new elements not follow the same
//         let parent=this.parentElement;
//         parent.remove();

//     })
// }