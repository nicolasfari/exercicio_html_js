const form = document.getElementById('formulario')

let formEValido = false

function verificar(num1, num2){
    return num2 > num1
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    const num1 = parseFloat(document.getElementById('number1').value)
    const num2 = parseFloat(document.getElementById('number2').value)   
    const msgSucesso =`Tudo certo. O segundo numero digitado ${num2} é maior que o primeiro numero digitado ${num1}`

    formEValido = verificar(num1, num2);

    if(formEValido){
        alert(msgSucesso)
        form.reset();
    }else{
        alert('O segundo numero precisa ser maior que o primeiro')
    }
})

