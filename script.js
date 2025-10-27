const container = document.querySelector(".container");
const body =document.querySelector("body");
function tile(num){
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("style", `border:solid, 0.25px;  padding:0; width:${num-.5}px; height:${num-.5}px;`);

square.addEventListener("mousemove",()=>{
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    square.style.backgroundColor =`rgb(${r},${g},${b})`;
})

container.appendChild(square);}
let num =14.5;
let num2 = 64**2;
for (let i=0; i<num2; i++){
    tile(num);
}
console.log(num2);
const btn = document.querySelector(".btn");
btn.addEventListener('click',()=>{
 container.replaceChildren();
 
 
 
 const answer= prompt("How many tiles would you like per side? Max is 100.")
 const answerDiv=(960/answer)-.5;
 for (let j =0; j<answer**2; j++){
    tile(answerDiv);
 }
})

