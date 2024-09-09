function psqAnfibios() {

    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let dado of anfibios.anfibio){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    };
    section.innerHTML = resultados;
};

function psqMamiferos(){

    let section = document.getElementById("resultados-pesquisa");

    let resultados = `<h2>${mamiferos.categorias[0].titulo1}</h2>`;

    for (let dado of mamiferos.lagomorfos){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    };

    resultados += `<h2>${mamiferos.categorias[0].titulo2}</h2>`;

    for (let dado of mamiferos.roedores){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    }
    
    resultados += `<h2>${mamiferos.categorias[0].titulo3}</h2>`;

    for (let dado of mamiferos.outrosMamiferos){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    }

    section.innerHTML = resultados;
};

function psqRepteis(){

    let section = document.getElementById("resultados-pesquisa");

    let resultados = `<h2>${repteis.categorias[0].titulo1}</h2>`;

    for (let dado of repteis.lagartos){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    };

    resultados += `<h2>${repteis.categorias[0].titulo2}</h2>`;

    for (let dado of repteis.serpentes){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    }

    resultados += `<h2>${repteis.categorias[0].titulo3}</h2>`;

    for (let dado of repteis.tartarugas){
        resultados += `
        <div class="item-resultado">
        <div class="img-resultado">
            <img src="${dado.foto}">
        </div>
        <h3>${dado.nome}</h3>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        `
    }
    section.innerHTML = resultados;
};