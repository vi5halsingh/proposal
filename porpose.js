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
// function MoveTarget(){
//     const maxWidth = 380;
//   const maxHeight = 380;
//    const randomx = Math.floor(Math.random() * maxWidth);
//    const randomy = Math.floor(Math.random() * maxHeight);
//    No.style.left = randomx + 'px';
//    No.style.top = randomy + 'px';

// }

// No.addEventListener('mouseover', function(e) {
//     No.style.display = "none"

//             MoveTarget();
          
//     audio.play();

  
// });
// No.addEventListener('mouseout', function(e) {
//     No.style.display = "block"
// });
// No.addEventListener('click',async (e)=>{
//      No.innerHTML = await "yes";
//      setTimeout(() => {
//          alert("thanks for accept my proposal..., call me on : 8815915821")
        
//      }, 1000);
    
   
// });

// Yes.addEventListener('click', (e)=>{
//     alert("thanks for accept my proposal! now will you please contect me on +918815915821")
    
// if(Notification.requestPermission === "granted"){
//     showNotification()
// }
// else if(Notification.requestPermission !=='denided'){
//     Notification.requestPermission().then(permission => {
//         if(permission=="granted"){
//             showNotification()
//         }
//         else{
//         Notification.requestPermission()
//         }
//     })
// }
// });
// function showNotification(){        
// const notification =  new Notification("congratulation your crush has accepted your proposal",{
// body:"you have a responce of your proposal",
// // icon:
// });
// notification.onclick = function(){
//     window.focus();
// }
// }
