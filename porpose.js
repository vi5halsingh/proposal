const buttons = document.querySelector('.buttons');
const No = document.getElementById('no')
const Yes = document.getElementById('yes')
No.addEventListener('mouseenter',()=>{
const yesIndex = Array.from(buttons.children).indexOf(Yes)
const noIndex = Array.from(buttons.children).indexOf(no)
if(yesIndex < noIndex){
    buttons.insertBefore(no,yes);
}else{
    buttons.insertBefore(yes,no);
}
})
document.addEventListener('contextmenu',(e)=>{
    alert('sorry! developer  you can contact me for this')
    e.preventDefault()
})
Yes.addEventListener('click', (e)=>{ 
       alert("thanks for accept my proposal! now will you please contect me on Ig:0_.vishal")
})