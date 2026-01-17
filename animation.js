let collection = document.getElementsByClassName("hide");
let plane=document.getElementById("plane");
let trail = document.getElementById("trail"); 
let arr = [...collection,plane,trail]
arr.forEach(element => {
    element.style.opacity=0;
    setTimeout(() => {
        element.style.opacity=1;
    }, 5000);
});
setTimeout(()=>{
    setInterval(()=>{
        let fonts = ['Roboto','Poppins','Pacifico','Oswald','Pinyon Script','Limelight','Fascinate'];
        let randomNumber = Math.floor(Math.random()*7);
        let fontUsed = fonts[randomNumber]
        let letters = ['A','M','D','R','A','P'];
        let text = document.getElementById('name');
        text.innerHTML="";
        let htm = text.innerHTML
        let i = 0;
        text.style.fontFamily=`${fontUsed}`;
        const textAnimation = setInterval(()=>{
            if(i==6){
               clearInterval(textAnimation);
            }
            else{
               text.innerHTML += letters[i];
               i++
            }
        },300)
    },3000)
},8000);

