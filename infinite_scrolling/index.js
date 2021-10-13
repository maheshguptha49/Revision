let isa=document.querySelector("#isa")
let mock=document.querySelector("#mock")
async function getData(div){
   let res= await fetch("http://localhost:3001/users")
   let data=await res.json()
   data.map((item)=>{
       let newDiv=document.createElement("div")
       newDiv.textContent=item.first_name
       div.append(newDiv)
   })
}
getData(isa)
// infinite scroll for the whole page
window.addEventListener("scroll",()=>{
    if(window.pageYOffset+window.innerHeight>=document.body.scrollHeight-400){
        getData(isa)
    }
})
getData(mock)
// infinite scroll for the div
mock.addEventListener("scroll",()=>{
    console.log(mock.scrollTop,mock.clientHeight,mock.scrollHeight)
    if(mock.scrollTop+mock.clientHeight>=mock.scrollHeight){
        getData(mock)
    }
})