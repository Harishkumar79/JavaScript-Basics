let body = document.querySelector("body")
let btn = document.querySelector("button")
let currMode = "light"

btn.addEventListener("click" , () => {
    if(currMode == "light"){
        currMode = "dark"
        body.classList.add("dark")
    }else{
        currMode = "light"
        body.classList.remove("dark")
    }
})

let para = document.createElement("p")

para.innerText = "hello world"
body.prepend(para)


// 1st method 
// para.onmouseover = () => {
//     para.style.color = "yellow"
// }


// 2nd method
para.addEventListener("mouseover" , () => {
    para.classList.add("para_style")

    setTimeout(()=>{
        para.classList.remove("para_style")
    },500)
})