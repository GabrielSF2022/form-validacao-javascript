const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

setError = (index) => {
    campos[index].style.border = '2px solid red';
}

nameValidate = () =>{
    if(campos[0].value.length < 3){
        setError(0)
    }
    else{
        console.log('ok')
    }
}
