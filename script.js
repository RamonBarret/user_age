function verificar () {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) >= ano) {
        //Bom dia!
      window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criaca_homemp.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_homemp.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem_adultop.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homem_idosop.jpg')
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/menina_criancapq.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem_mulherp.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher_adultap.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idosa_mulherp.jpg')
            }

        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} ano(s).`
        res.appendChild(img)
    }
}