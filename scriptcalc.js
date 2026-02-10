const ip= document.getElementById('no.ip');
const res = document.getElementById('res');
function handleclickbtn(el)
{
console.log(el.innerText);
const exp =`${ip.value}${el.innerText}`;
ip.value=exp;
if(["+","-","*","/"].includes(el.innerText)) return;
res.value= eval(exp);


}
function reset(){
    
    ip.value="";
    res.value="";
}