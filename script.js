const filmes = [
    {
        titulo: 'Vingadores',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/9fRX8UKlIW7Lb9GqNsJVakWWFCi.jpg",
        descricao: "Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências.Após os eventos devastadores de 'Vingadores: Guerra Infinita', o universo está em ruínas devido aos esforços do Titã Louco, Thanos. Com a ajuda de aliados remanescentes, os Vingadores devem se reunir mais uma vez a fim de desfazer as ações de Thanos e restaurar a ordem no universo de uma vez por todas, não importando as consequências"
    },
    {
        titulo: 'Batman',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/4lj1ikfsSmMZNyfdi8R8Tv5tsgb.jpg",
        descricao: 'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.',
    },
    {
        titulo: 'Homem-Aranha',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/xaKydnMw6wR1MBAjS5seGPVusbs.jpg",
        descricao: 'Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam a descobrir o que realmente significa ser o Homem-Aranha...',
    },
    {
        titulo: 'As Branquelas',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/aJZOcorpgloDLkPP6ED0t9sXjNu.jpg",
        descricao: 'O que acontece quando dois atrapalhados agentes do FBI se disfarçam de princesas mega-ricas para se infiltrarem na alta sociedade? O resultado é situações extremamente engraçadas e diversão total ao ver estes dois irmãos azarados transformando-se em duas senhoritas refinadas e com estilo!',
    },
    {
        titulo: 'Projeto Almanaque',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/2krLUKMsKbnZk6j647IlkqlMZ2u.jpg",
        descricao: 'Um grupo de jovens acaba descobrindo instruções secretas para montar uma máquina do tempo, e decidem construir o aparelho. No entanto, os efeitos são muito diferentes do que esperavam.',
    },
    {
        titulo: 'Mortal Kombat',
        imagem: "https://media.themoviedb.org/t/p/w600_and_h900_face/4nW5X9iBrMlHMDcTsEOQWXKu3TZ.jpg",
        descricao: 'O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.',
    }
]

const listafilmes = document.getElementById("listafilmes");
function mostrarFilmes(lista) {
    listafilmes.innerHTML = ""
    lista.forEach(filme => {
        listafilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo},${filme.descricao}') ">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}


mostrarfilmes(filmes)

function verDetalhes(titulo,descricao) {
    swal.fire({
        title:titulo,
        Text: descricao,
        icon:"info"
    })
}
