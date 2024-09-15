const principal=document.querySelector('#load-amount-input');
const rate=document.querySelector('#interest-rate-input');
const time=document.querySelector('#months-to-pay-input');
const calculate=document.querySelector('#calculate');
const emi=document.querySelector('#emi');
 console.log(principal,rate,time);

   function calculateEMI(){
    if(principal.value=='' || rate.value=='' || time.value==''){
        alert('please enter all the values');
        return;
    }
    else{
        const p=principal.value;
        const r=rate.value/1200;
        const n=time.value;
        const emiValue=(p*r*(1+r)**n)/((1+r)**n-1);
      
        emi.textContent=emiValue.toFixed(2);
    }
   }

   Calculate.addEventListener('click',calculateEMI);