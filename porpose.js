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

// Add message rotation functionality
// Modified message rotation with typing effect
const proposalText = document.querySelector('.box h1');
const messages = [
    "Do You Love Me? ❤️",
    "Will You Be Mine Forever? 🌹",
    "Can I Be Your Last Love? 💍",
    "Will You Grow Old With Me? 👵👴"
];

let messageIndex = 0;
let isDeleting = false;
let text = '';

function typeMessage() {
    const currentMessage = messages[messageIndex];
    
    if (!isDeleting) {
        text = currentMessage.slice(0, text.length + 1);
        proposalText.innerHTML = text + '<span class="cursor">|</span>';
        
        if (text.length === currentMessage.length) {
            isDeleting = true;
            setTimeout(typeMessage, 1500);
            return;
        }
    } else {
        text = currentMessage.slice(0, text.length - 1);
        proposalText.innerHTML = text + '<span class="cursor">|</span>';
        
        if (text.length === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
        }
    }

    setTimeout(typeMessage, isDeleting ? 50 : 100);
}
typeMessage();

