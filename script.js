
const form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const resut = document.querySelector('#result');

    if(height === '' || height < 0 || isNaN(height) ){
        resut.innerHTML = "Please give a valid Height";
    }else if(weight === '' || weight < 0 || isNaN(weight) ){
        resut.innerHTML = "Please give a valid Weight";
    }else{
        const bmi = (weight / ((height*height)/1000)).toFixed(2);
        //Show The resut 
        resut.innerHTML = `<span>${bmi}</span>`
    }

    // result.innerHTML = `${weight}`;
});