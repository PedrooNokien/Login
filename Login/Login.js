lgn = "Pedro"
pwd = "010101"

function autenticar(){
    var log = document.getElementById('login').value;
    var pass = document.getElementById('password').value;

    if(log == lgn & pass == pwd){
        alert('Pogchamp')
    }else{
        alert('Poggers')
    }
}