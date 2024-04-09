//First we get three ids
let buttons=document.getElementById('btn')
let inputs=document.getElementById('input')
let results=document.getElementById('result')

//put in one array
let arr=[];
//If we click it thaat function menans we know exact details
buttons.addEventListener('click',()=>{
    arr.push(input.value)
    addvalue(input.value)
    input.value=''
})
//add the values
function addvalue(items){
    let para=document.createElement('p')
    para.innerText=items
    results.appendChild(para)

    para.addEventListener('click',()=>{
        para.style.fontSize='1.5rem'
        para.style.textDecoration='line-through'
        para.style.color='green'
        items.remove()
    })
    para.addEventListener('dblclick',()=>{

        results.removeChild(para)
        remove(items)

    })

}
//Remove elemnts from index values

function remove(items){
    arr.splice(index,1)

}
