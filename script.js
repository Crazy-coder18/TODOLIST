let a=document.querySelector("btn-submit");
let b=document.querySelector(".itemsc");
a.addEventListener("click",()=>{
    let info=document.createElement("div");
    info.setAttribute("class","infoitem");
    console.log(info);
    alert("infobox created")
    let del=document.createElement("button");
    del.setAttribute("class","delb");
    let imgs=document.createElement("img");
    imgs.setAttribute("class","delimg");
    imgs.setAttribute("src","https://www.svgrepo.com/show/21045/delete-button.svg");
    del.appendChild(imgs);
    b.appendChild(info);
    b.appendChild(del);   
})