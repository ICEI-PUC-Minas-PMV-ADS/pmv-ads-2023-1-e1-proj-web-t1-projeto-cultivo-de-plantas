function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
    }else{
        menuMobile.classList.add('open')
    }
}


document.getElementById('senhaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const codigoValida = '12345'; // Código pré-definido
  
    var codigo = document.getElementById('icodigo').value;
    var senha = document.getElementById('isenha').value;
    var senhaconfirm = document.getElementById('iconfirme').value;
    var modal_valida = document.querySelector('#modal_valida')

    if (codigo === codigoValida && senha === senhaconfirm) {
      
    modal_valida.innerHTML = '<strong>A senha foi alterada com sucesso! :)</strong>'    
    modal_valida.setAttribute ('style' , 'display: block; color: green')
    
    console.log('Nova senha cadastrada com sucesso!');
      // Restante do código para realizar a ação desejada
    }

    else {
        modal_valida.innerHTML = '<strong>Os códigos ou as senhas não conferem :( </strong>'    
        modal_valida.setAttribute ('style' , 'display: block; color: red')

    }

  });
  

