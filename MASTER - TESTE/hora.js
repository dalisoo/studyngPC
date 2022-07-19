function relogar() { 
    var data = new Date ()
    var hora = 14
    var bgImg = document.getElementById('res')
    var bgRes = document.getElementById('res1')
    var bgRes1 = document.getElementById('res2')
    var bgRes2 = document.getElementById('res3')
    var btn = document.getElementById('btn')
    var sex = document.getElementsByName('radsex')
    var img = document.createElement('img')
    var img1 = document.getElementById('foto1')
    var img2 = document.getElementById('foto2')
    var img3 = document.getElementById('foto3')
    var img4 = document.getElementById('foto4')
    var nome1 = document.getElementById('nome1')
    var nome2 = document.getElementById('nome2')
    var nome3 = document.getElementById('nome3')
    var nome4 = document.getElementById('nome4')


    

    if  ( hora >=0 && hora <=12) { 
        document.body.style.background='black'
        img1.style.backgroundImage='url(erased.jpg)'
        img2.style.backgroundImage='url(hxh.jpg)'
        img3.style.backgroundImage='url(inazuma.jpg)'
        img4.style.backgroundImage='url(naruto.jpg)'
         
        btn.addEventListener('click',verificar) 
        function verificar()  
             {
                var bgImg = document.getElementById('res')
                var bgRes = document.getElementById('res1')
                var bgRes1 = document.getElementById('res2')
                var bgRes2 = document.getElementById('res3')
                var btn = document.getElementById('btn')
                var sex = document.getElementsByName('radsex')
                var img = document.createElement('img')
                img.setAttribute('id','foto')
                 
                const colecao_series_programacao = [ 
                    { nome:"Erased", sinopse: "Depois de se deparar com a mãe morta, Satoru faz uso da sua habilidade de viajar no tempo para recuar 18 anos e tentar impedir a morte dela e a de três colegas seus.", ano: "2013"},
                    { nome: " Hunter x Hunter", sinopse: "O jovem Gon sonha em ser um Hunter (caçador), assim como seu pai, que o abandonou quando ainda era pequeno. Decidido a ir atrás do que deseja, ele tem a chance de fazer um teste físico dificílimo para provar que ele é o melhor Hunter do mundo.", ano: "2011"},
                    { nome:"Inazuma Eleven", sinopse: "Ramon Junior High School tem um programa de futebol horrível que está prestes a ser encerrado. Endou Mamoru, um jogador de estrelas que já teve problemas, e um bando de jogadores trapaceiros reconstituem o time e crescem juntos enquanto lutam para se tornarem formidáveis e sacudir o mundo do futebol.", ano:"2008"},
                    { nome:"Naruto", sinopse:"Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila. Ao se graduar como ninja, descobre que tem um demônio raposa selado dentro de si.", ano:"1997"}
                
                
                ];
                
                 if ( sex[0].checked) { 
                    bgImg.style.backgroundImage='url(erased.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[0].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[0].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong> ${colecao_series_programacao[0].sinopse}  </strong>`
                
                
                 }
                 else if ( sex[1].checked) { 
                    bgImg.style.backgroundImage='url(hxh.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[1].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[1].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong>  ${colecao_series_programacao[1].sinopse} </strong> `
                
                
                
                 }
                 else if (sex[2].checked) { 
                    bgImg.style.backgroundImage='url(inazuma.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[2].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[2].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong> ${colecao_series_programacao[2].sinopse} </strong>`
                
                
                
                 }
                 else if (sex[3].checked) { 
                    bgImg.style.backgroundImage='url(naruto.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[3].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[3].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong>${colecao_series_programacao[3].sinopse} </strong>`
                
                
                
                
                 
                }
        }
    } 
    
    /*  -----------------MANHÃ --------------- */



    else if ( hora >= 13 && hora <=18 ) { 
        document.body.style.background='black'
        img1.style.backgroundImage='url(interestelar.jpg)'
        img2.style.backgroundImage='url(residente.jpg)'
        img3.style.backgroundImage='url(homemduplicado.jpg)'
        img4.style.backgroundImage='url(samuraix.jpg)'
        nome1.innerHTML = `Interestelar`
        nome2.innerHTML = `Residente Evil`
        nome3.innerHTML = `Homem Duplicado`
        nome4.innerHTML = `Samurai x `
        btn.addEventListener('click',verificar) 
        function verificar()  
             {
                var bgImg = document.getElementById('res')
                var bgRes = document.getElementById('res1')
                var bgRes1 = document.getElementById('res2')
                var bgRes2 = document.getElementById('res3')
                var btn = document.getElementById('btn')
                var sex = document.getElementsByName('radsex')
                var img = document.createElement('img')
                img.setAttribute('id','foto')
                 
                const colecao_series_programacao = [ 
                    { nome:"Interestelar", sinopse: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos.", ano: "2014"},
                    { nome: "Residente Evil", sinopse: "Alice e Rain Ocampo têm a missão de destruir um laboratório genético operado pela poderosa corporação Umbrella, um dos maiores conglomerados do mundo, onde um vírus foi disseminado, matando seu criador e ressurgindo como uma criatura demoníaca.", ano: "2002"},
                    { nome:"Homem Duplicado", sinopse: "Adam Bell é um professor de história entediado com sua rotina. A vida dele muda completamente quando ele assiste a um filme e descobre que tem um sósia. Em busca desse ator, Adam cria uma verdadeira obsessão e começa a perseguir o homem.", ano:"2013"},
                    { nome:"Samurai x ", sinopse:"Kenshin Himura ficou conhecido como um dos melhores assassinos do país. Porém, cansado de tanta matança, ele abandona sua espada durante uma batalha e jura que não matará mais ninguém.", ano:"2012"}
                
                
                ];
                
                 if ( sex[0].checked) { 
                    bgImg.style.backgroundImage='url(interestelar.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[0].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[0].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong> ${colecao_series_programacao[0].sinopse}  </strong>`
                
                
                 }
                 else if ( sex[1].checked) { 
                    bgImg.style.backgroundImage='url(residente.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[1].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[1].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong>  ${colecao_series_programacao[1].sinopse} </strong> `
                
                
                
                 }
                 else if (sex[2].checked) { 
                    bgImg.style.backgroundImage='url(homemduplicado.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[2].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[2].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong> ${colecao_series_programacao[2].sinopse} </strong>`
                
                
                
                 }
                 else if (sex[3].checked) { 
                    bgImg.style.backgroundImage='url(samuraix.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[3].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[3].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong>${colecao_series_programacao[3].sinopse} </strong>`
                
                
                
                
                 
                }
                /* ---------------- TARDE ------------------------- */
        }
    }   

    else if ( hora >=19 && hora <=23) { 
        document.body.style.background='black'
        img1.style.backgroundImage='url(steve.jpg)'
        img2.style.backgroundImage='url(sequestrada.jpg)'
        img3.style.backgroundImage='url(dont.jpg)'
        img4.style.backgroundImage='url(redesocial.jpeg)'
        nome1.innerHTML = `Steve Jobs`
        nome2.innerHTML = `Sequestrada`
        nome3.innerHTML = `Don't F**k with Cats`
        nome4.innerHTML = `Rede Sociais `
        btn.addEventListener('click',verificar) 
        function verificar()  
             {
                var bgImg = document.getElementById('res')
                var bgRes = document.getElementById('res1')
                var bgRes1 = document.getElementById('res2')
                var bgRes2 = document.getElementById('res3')
                var btn = document.getElementById('btn')
                var sex = document.getElementsByName('radsex')
                var img = document.createElement('img')
                img.setAttribute('id','foto')
                 
                const colecao_series_programacao = [ 
                    { nome:"Steve Jobs", sinopse: "O filme destaca momentos decisivos na vida de Steve Jobs, desde o lançamento do primeiro Macintosh, em 1984, e a criação da NeXT Inc, até a introdução revolucionária do iMac. Fatos da vida pessoal de Jobs também são revelados, especialmente o conturbado relacionamento com sua primeira filha Lisa.", ano: "2015"},
                    { nome: "Sequestrada a luz do dia", sinopse: "Sequestrada à luz o dia mostra a história real de Jan Broberg. Quando Jan tinha apenas 12 anos, acordou com os pés e as mão amarradas a uma cama, enquanto escutava uma gravação que lhe dava ordens diretas. As ordens afirmavam que ela havia sido sequestrada por extraterrestres", ano: "2019"},
                    { nome:"Don't F**k with Cats", sinopse: "Os vídeos terríveis de um criminoso levam um grupo de pessoas a iniciar uma caçada arriscada com destino a um submundo sombrio.", ano:"2019"},
                    { nome:"O Dilema das Redes", sinopse:"Especialistas em tecnologia do Vale do Silício soam o alarme do perigoso impacto das redes sociais na democracia e na humanidade como um todo.", ano:"2020"}
                
                
                ];
                
                 if ( sex[0].checked) { 
                    bgImg.style.backgroundImage='url(steve.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[0].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[0].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong> ${colecao_series_programacao[0].sinopse}  </strong>`
                
                
                 }
                 else if ( sex[1].checked) { 
                    bgImg.style.backgroundImage='url(sequestrada.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[1].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[1].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong>  ${colecao_series_programacao[1].sinopse} </strong> `
                
                
                
                 }
                 else if (sex[2].checked) { 
                    bgImg.style.backgroundImage='url(dont.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[2].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[2].ano} `
                    bgRes2.innerHTML = ` Sinopse: <strong> ${colecao_series_programacao[2].sinopse} </strong>`
                
                
                
                 }
                 else if (sex[3].checked) { 
                    bgImg.style.backgroundImage='url(homemduplicado.jpg)'
                    bgImg.style.border='5px solid rgba(73, 49, 6, 0.57)'
                    bgRes.innerHTML = ` Nome: ${colecao_series_programacao[3].nome} `
                    bgRes1.innerHTML = ` Ano: ${colecao_series_programacao[3].ano} `
                    bgRes2.innerHTML = `  Sinopse: <strong>${colecao_series_programacao[3].sinopse} </strong>`
                
                
                
                
                 
                }
                                /* --------NOITE ----------- */

        }

    }
}
