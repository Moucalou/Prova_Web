let livro = {}

function salvarDados() {
    const novaLinha = document.createElement("tr");
    const campoISBN = document.createElement("tr")
    const campoTitulo = document.createElement("tr");
    const campoSubtitulo = document.createElement("tr");
    const campoAutores = document.createElement("tr");
    const campoEditora = document.createElement("tr");
    const campoSinopse = document.createElement("tr");
    const campoAno = document.createElement("tr");
    const campoPaginas = document.createElement("tr");
    const campoCategoria = document.createElement("tr");

    campoTitulo.innerText = "Titulo: " + livro.titulo;
    campoISBN.innerText = "ISBN: " + livro.isbn;
    campoSubtitulo.innerText = "Subtitulo" + livro.subtitulo;
    campoAutores.innerText = "Autores: " + livro.autores;
    campoEditora.innerText = "Editora: " + livro.editora;
    campoSinopse.innerText = "Sinopse: " + livro.sinopse;
    campoAno.innerText = "Ano: " + livro.ano;
    campoPaginas.innerText = "Paginas: " + livro.paginas;
    campoCategoria.innerText = "Categoria: " + livro.categoria;

    novaLinha.appendChild(campoTitulo);
    novaLinha.appendChild(campoISBN);
    novaLinha.appendChild(campoSubtitulo);
    novaLinha.appendChild(campoAutores);
    novaLinha.appendChild(campoEditora);
    novaLinha.appendChild(campoSinopse);
    novaLinha.appendChild(campoAno);
    novaLinha.appendChild(campoPaginas);
    novaLinha.appendChild(campoCategoria);

    const inputLista = document.getElementById("input_salvos")
    inputLista.appendChild(novaLinha);

    console.log("Lista salva")
}

function Dados(json) {
    campoTitulo = json.title;
    campoSubtitulo = json.subtitle;
    campoAutores = json.authors;
    campoEditora = json.publisher;
    campoSinopse = json.synopsis;
    campoAno = json.year;
    campoPaginas = json.page_count;
    campoCategoria = json.subjects[0];
    
    livro = {
        "isbn": json.isbn,
        "titulo": json.title,
        "subtitulo": json.subtitle,
        "autores": json.authors,
        "editora": json.publisher,
        "sinopse": json.synopsis,
        "ano": json.year,
        "paginas": json.page_count,
        "categoria": json.subjects[0],
    }

    console.log("Dados armazenados");
    console.log(livro)

    criarLinha(livro)
}

function criarLinha(livro) {
    const novaLinha = document.createElement("tr");
    const campoISBN = document.createElement("tr")
    const campoTitulo = document.createElement("tr");
    const campoSubtitulo = document.createElement("tr");
    const campoAutores = document.createElement("tr");
    const campoEditora = document.createElement("tr");
    const campoSinopse = document.createElement("tr");
    const campoAno = document.createElement("tr");
    const campoPaginas = document.createElement("tr");
    const campoCategoria = document.createElement("tr");

    campoTitulo.innerText = "Titulo: " + livro.titulo;
    campoISBN.innerText = "ISBN: " + livro.isbn;
    campoSubtitulo.innerText = "Subtitulo" + livro.subtitulo;
    campoAutores.innerText = "Autores: " + livro.autores;
    campoEditora.innerText = "Editora: " + livro.editora;
    campoSinopse.innerText = "Sinopse: " + livro.sinopse;
    campoAno.innerText = "Ano: " + livro.ano;
    campoPaginas.innerText = "Paginas: " + livro.paginas;
    campoCategoria.innerText = "Categoria: " + livro.categoria;

    novaLinha.appendChild(campoTitulo);
    novaLinha.appendChild(campoISBN);
    novaLinha.appendChild(campoSubtitulo);
    novaLinha.appendChild(campoAutores);
    novaLinha.appendChild(campoEditora);
    novaLinha.appendChild(campoSinopse);
    novaLinha.appendChild(campoAno);
    novaLinha.appendChild(campoPaginas);
    novaLinha.appendChild(campoCategoria);

    const tabelaInfos = document.getElementById("tabela_infos")
    tabelaInfos.appendChild(novaLinha);

    console.log("Nova tabela criada")
}

function buscarLivro() {
    if (livro) {
        livro = null;
            const tabelaInfos = document.getElementById("tabela_infos")
tabelaInfos.innerHTML = ''
    }
    const inputISBN = document.getElementById("input_isbn");
    const ISBN = inputISBN.value;
    console.log("Buscando ISBN" + ISBN);
    fetch("https://brasilapi.com.br/api/isbn/v1/" + ISBN)
    .then ((resposta) => {
        return resposta.json();
    })
    .then ((json) => {
        console.log("Dados do livro encontrados")
        Dados(json);
    })
}

function configurarEventos() {
    const inputISBN = document.getElementById("buscar");
    inputISBN.addEventListener("click", buscarLivro);
    const inputSalvar = document.getElementById("Salvar")
    inputSalvar.addEventListener("click", salvarDados);
}

window.addEventListener("load", configurarEventos);