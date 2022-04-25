function verificarFomulario() {
    let usuario =  document.getElementById('usuario').value   
    let senha =  document.getElementById('senha').value 
    if(senha.length < 10){
        document.getElementById('senha').classList.add("erro");
        alert('senha precisa ter no minimo 10 caracteres')
    }else{
        document.getElementById('senha').classList.remove("erro");
            console.log(usuario);  
            console.log(senha);  

    }

    
}
document.addEventListener('submit',()=>{
    verificarFomulario()
})