let a = document.querySelector(".submit");
let b = document.querySelector(".items");
window.items=[];
window.delb=[];
window.c=[];
let i=0;
window.onload = () => {
    localStorage.clear();
};
a.addEventListener("click", () => {
let text=document.getElementById("inputt").value;
if(text.length!=0){
    c[i]=document.createElement("div");
    c[i].setAttribute("class","itemsc");
    let info = document.createElement("div");
    info.setAttribute("class", "infoitem");
    info.innerHTML=text;
    delb[i]=document.createElement("button");
    let bt=delb[i];
    delb[i].setAttribute("class",bt);
    delb[i].setAttribute("id","delb["+i+"]");
    let im=document.createElement("img");
    im.setAttribute("src","https://www.svgrepo.com/show/21045/delete-button.svg");
    im.setAttribute("class","delimg")
    bt.appendChild(im);
    c[i].appendChild(info);
    c[i].appendChild(bt);
    b.appendChild(c[i]);
    items[i]=info;
    localStorage.setItem(i,JSON.stringify(info.innerHTML));
    bt.addEventListener("click",()=>{
        let btnId = event.target.parentElement.id; 
        let index = btnId.match(/\d+/)[0]; 
        localStorage.removeItem(index);
        b.removeChild(c[index]);
    })
    i++;
}
else{
    alert("Enter any task");
}
})