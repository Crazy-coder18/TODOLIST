
let a = document.querySelector(".submit");
let b = document.querySelector(".items");
a.addEventListener("click", () => {
let text=document.getElementById("inputt").value;
    alert("hello");
    let c=document.createElement("div");
    c.setAttribute("class","itemsc");
    let info = document.createElement("div");
    info.setAttribute("class", "infoitem");
    info.innerHTML=text;
    b.appendChild(info)
    let delb=document.createElement("button");
    delb.setAttribute("class","delb");
    let im=document.createElement("img");
    im.setAttribute("src","https://www.svgrepo.com/show/21045/delete-button.svg");
    im.setAttribute("class","delimg")
    delb.appendChild(im);
    c.appendChild(info);
    c.appendChild(delb);
    b.appendChild(c);
    
})