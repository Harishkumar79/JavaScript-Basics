// Create a element and display them using DOM

// let heading = document.createElement("h1")
let heading1 = document.createElement("h1")
let heading2 = document.createElement("h2")
let heading3 = document.createElement("h3")

// heading.innerText = "hello World"
heading1.innerText = "hello World"
heading2.innerText = "hello World"
heading3.innerText = "hello World"

let div = document.querySelector("div")
div.style.backgroundColor = "yellow"
heading1.style.backgroundColor = "blue"
heading2.style.backgroundColor = "green"
heading3.style.backgroundColor = "pink"

// div.append(heading) // add elemet at the ending of the node
// div.prepend(heading)   // add elemet at the starting of the node
// div.before(heading)  // add elemet before the node
// div.after(heading)   // add elemet after the node


// div.append(heading1)
// div.append(heading2)
// div.append(heading3)
div.append("hello") // it allow strings also but appendChild() not

// div.append(heading1 , heading2 , heading3) // allow multiple node to add
div.append(heading1).append(heading2).append(heading3)// Not allowed heirarcy

// div.appendChild(heading1 , heading2 , heading3) // Not allow multiple node to add only show 1st
// div.appendChild(heading1).appendChild(heading2).appendChild(heading3) // add in heirarchical order


// heading.style.color = "blue"
// heading.style.fontStyle = "italic"
// heading.innerHTML = "<u>HEllO WORLD</u>"

// document.querySelector("p").remove() // this will delete the paragraph node


