function calcular() { 
    var t1 = document.getElementById('txtn1')
    var t2 = document.getElementById('txtn2')
    var num1 = Number(t1.value)
    var num2 = Number(t2.value)
    var res = document.getElementById('res')
    var media1 =  5/100
    var media2 = 10/100 
    var mediaResu1 = media1 + n2
    var mediaResu2 = media2 + n2  


    if ( t1.value.length === 0 || t2.value.length === 0 ) { 
        window.alert('Preencha os dados.')
    } 

    else if ( t2.value.length >= 3 ) { 
        window.alert(' número de dias incorretos.')
    }
    else { 
        
        if ( num2 >= 0 && num2 <=15) { 
             res.innerHTML = ` Sua soma é ${mediaResu1}`

        }
        else if ( num2 >= 16 && num2 <= 30) { 
            res.innerHTML = ` Sua soma é ${mediaResu2}`

        }
    }
}