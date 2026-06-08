const filmes = [
    {
        titulo: "Vingadores",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao:"Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências",
    },

    {
        titulo:"Batman",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d1/The_Dark_Knight.jpg/250px-The_Dark_Knight.jpg",
        descricao:"Como herói, o codinome Cavaleiro das Trevas reflete a sua essência: um vigilante sem superpoderes que utiliza intelecto, artes marciais, tecnologia de ponta e muito medo para combater o crime. Operando nas sombras e fora da lei, ele age com um código moral rígido para proteger Gotham City."
    },

    {
        titulo:"Velozes e Furiosos",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/2_Fast_2_Furious_2003.jpg/250px-2_Fast_2_Furious_2003.jpg",
        descricao: "Em + Velozes + Furiosos 2003, o ex-policial Brian O Conner Paul Walker faz um acordo com o FBI para evitar a prisão. Em Miami, ele se infiltra no crime organizado como motorista do traficante Carter Verone. Para isso, ele recruta a ajuda de seu velho amigo Roman Pearce Tyrese Gibson. Juntos, com a ajuda da agente secreta Monica Fuentes Eva Mendes, eles usam rachas e habilidades extremas de direção para desarticular o esquema de lavagem de dinheiro."
    },

    {
        titulo:"As branquelas",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg",
        descricao:"O que acontece quando dois atrapalhados agentes do FBI se disfarçam de princesas mega-ricas para se infiltrarem na alta sociedade? O resultado é situações extremamente engraçadas e diversão total ao ver estes dois irmãos azarados transformando-se em duas senhoritas refinadas e com estilo!",

    },

    {
        titulo:"mortal konbate2",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg",
        descricao: "O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.",
    },

    {
        titulo:"homen-aranha",
        imagem:"https://media.themoviedb.org/t/p/w94_and_h141_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg",
        descricao:"Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...",
    }
  ]

  const listafilmes = document.getElementById ("listafilmes");
  function mostrarFilmes(lista) {
    listafilmes.innerHTML =""
    lista.forEach(filme => {
        listafilmes.innerHTML += `
         <div class="col-md-4">
           <div class="card card-filme h-100">
           <img src="${filme.imagem}" class="card-img-top">
           <div class="card-body">
           <h3>${filme.titulo}</h3>
           <p>${filme.descricao}</p>
           <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}') ">Ver Detalhes</button>
        </div>
    </div>
        `
    })
  }

  mostrarFilmes(filmes)

  function verDetalhes(titulo,descricao) {
    Swal.fire({
        title: titulo,
        text: descricao,
        icon: "info"
    })
  }

    