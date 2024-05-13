
function onCalc(s){
    const display=document.getElementById('result');
    if(display.value!=='OFF'&&display.value!=='ON'){
    if(s=='AC')display.value='';
    else display.value+=s;}
}
function deleteLast(){
    
    const display=document.getElementById('result');
    if(display.value!=='OFF'&&display.value!=='ON'){
    display.value=display.value.slice(0,-1);}
}
function calc(){
    const display=document.getElementById('result');
    display.value=eval(display.value);
}
function turnOn(){
    const display=document.getElementById('result');
    if(display.value==='OFF'){
        let time1=setTimeout(()=>{
            display.value='ON';
        },1000);
    let time=setTimeout(()=>{
        display.style.textAlign='right';
        display.value='';
        
    },3000);
    
    
    }
    else{
        display.style.textAlign='center';
        display.value='OFF';
    }
}
