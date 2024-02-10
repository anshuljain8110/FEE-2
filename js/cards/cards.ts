

console.log('hi');

function createACard(text1:string,text2:string): HTMLDivElement {
  const card = document.createElement('div');
  card.className = 'card';

  const h5 = document.createElement('h5');
  const p = document.createElement('p');


  h5.innerHTML = text1;
  p.innerHTML = text2;

  card.appendChild(h5);
  card.appendChild(p);

  return card;
}

function validateAddButton(){
  let bttn = document.getElementById("addItem") as HTMLButtonElement
    if(
        ((document.getElementById('title') as HTMLInputElement)?.value==="") || 
        (document.getElementById('desc') as HTMLInputElement)?.value===""){
          bttn.disabled=true
    }
    else{
        bttn.disabled=false
    }
}

function initialSetup(){
  if(!localStorage.getItem('feedata')){
    localStorage.setItem("feedata",JSON.stringify({'data':[]}))
  }
  populate()
}

function populate(){
  let divToPopulate = document.getElementById('cards')
  if (!divToPopulate) {
    console.error("Element with id 'cards' not found.");
    return;
  }
  divToPopulate.innerHTML=""
  let data = localStorage.getItem('feedata')
  let obj = JSON.parse(data?data:JSON.stringify({'data':[]}))['data']
  if(obj.length===0){
    divToPopulate.innerHTML="<div></div><h2>Looks like you have no note show😅 <br>Please add one</h2>"
  }
  console.log(obj)
  for(let x=0;x<obj.length;x++){
    divToPopulate.appendChild(createACard(obj[x]['title'],obj[x]['desc']))
  }
}

function handleClick() {
  let title = document.getElementById('title') as HTMLInputElement
  let desc = document.getElementById('desc') as HTMLInputElement
  let data = localStorage.getItem('feedata')
  let arr = JSON.parse(data?data:JSON.stringify({'data':[]}))['data']
  arr=[...arr,{'title':title?.value,'desc':desc?.value}]
  localStorage.setItem("feedata",JSON.stringify({'data':arr}))
  title.value=""
  desc.value=""
  let btn = document.getElementById("addItem") as HTMLButtonElement
  btn.disabled=true
  populate()
}


initialSetup()