console.log("cHTML");

const navlink = [
    {
        lable: "HTML ALPHA",
        ahref:[
            {atext:"what is HTML", address:"../CHTML/homehtml.html"},
            {atext:"Editors", address:"../CHTML/editor.html"},
            {atext:"HTML Page Skeleton", address:"../CHTML/HTMlSkeleton.html"},
            {atext:"HTML ELEMENTS", address:"../CHTML/html-elements.html"},
            {atext:"HTML TEXTS", address:"../CHTML/html-texts.html"},
            {atext:"html basic", address:"../CHTML/sample.html"},
            {atext:"html intro", address:"subhro"},
            {atext:"html basic", address:"dvsd"},
            {atext:"html intro", address:"dscvds"},
            {atext:"html basic", address:"dvsd"},
        ]
    },
    {
        lable: "HTML BETA",
        ahref:[
            {atext:"html intro", address:"dscvds"},
            {atext:"html basic", address:"dvsd"},
            {atext:"html intro", address:"dscvds"},
            {atext:"html basic", address:"dvsd"},
            {atext:"html intro", address:"dscvds"},
        ]
    },
 
]
let sidenav = document.getElementById("sidenav")
navlink.forEach((e)=>{
    let navbox = document.createElement("div")
    navbox.className = "navbox";
    let lablee = document.createElement("h5")
    lablee.className = "navlab";
    lablee.innerText = e.lable.trim()
    sidenav.appendChild(navbox).appendChild(lablee)
    
    e.ahref.forEach((a)=>{
        let link = document.createElement("a")
        link.className = "linka"
        link.innerHTML = a.atext.trim() + "<br>"
        link.href = a.address
        navbox.appendChild(link)
    })
})

let page = window.location.pathname
let loction = Array.from(document.querySelectorAll(".linka"))
// console.log(loction);

loction.forEach((n)=>{
    if(n.href.includes(`${page}`)){
        n.classList.add("act")
    }
})


let runbtn = Array.from(document.querySelectorAll(".codebtn"))

runbtn.forEach((e)=>{
    e.addEventListener("click",(r)=>{
       let parent = r.target.parentNode
       let child = Array.from(parent.children)

       let code = child[0].value
       let frame = child[2]
       
       
       if (frame.style.display == "block") {
           frame.style.display = "none"
           r.target.innerText = "see output"
        } else {
            frame.style.display = "block"
            frame.contentDocument.body.innerHTML =code;
            r.target.innerText = "close output"
        }
        child[0].addEventListener("keyup",()=>{
            let keycode = child[0].value
            frame.contentDocument.body.innerHTML =keycode;
        })
    })
})


    // let next = document.getElementById("next")
    // next.addEventListener("click",()=>{
    //     loction.filter((e,index)=>{
    //         if(e.href == window.location.href){
    //             let numb = index+1
    //             let path = loction[numb].href
    //             window.location = path
    //         }
    //     })
    // })

const nextpage = ()=>{
    loction.filter((e,index)=>{
        if(e.href == window.location.href){
            console.log(loction);
            let numb = index+1
            let path = loction[numb].href
            window.location = path
        }
    })
}
const prevpage = ()=>{
    loction.filter((e,index)=>{
        if(e.href == window.location.href){
            let numb1 = index-1
            let path = loction[numb1].href
            window.location = path
        }
    })
}

const nextbar = ()=>{
    let maintag = document.querySelector("main")
    let nextbar = document.createElement("div")
    let next = document.createElement("button")
    let prev = document.createElement("button")
    nextbar.id = "nextbar"
    next.textContent = "next"
    prev.textContent = "prev"
    next.addEventListener("click",()=>{nextpage()})
    prev.addEventListener("click",()=>{prevpage()})
    nextbar.appendChild(prev)
    nextbar.appendChild(next)
    maintag.insertAdjacentElement("beforeend",nextbar)
}
nextbar()






