  
  function relogar() { 
  var html = document.querySelector('body')
  var data = new Date ()
  var hora = data.getHours()
  var fundo = document.getElementById('fundo')

  
  
  if ( hora >= 0 && hora < 12 ) { 
    document.body.style.backgroundColor='black'
  }
else if  ( hora >= 13 && hora < 18) { 
  document.body.style.backgroundColor='green'



  }

   else if ( hora > 19 && hora < 22) { 
    fundo.style.background='green'
    document.body.style.background='red'
    


   }
}