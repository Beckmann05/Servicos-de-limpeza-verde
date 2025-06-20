// INÍCIO INDEX

function print(){
    header()
    section1()
}

print();

function header (){
    let headerBanner = document.getElementById('headerBanner');
    for(let i = 0; i < 1; i++){
        headerBanner.innerHTML = `
        <div>
        <img src = "${galeriaFotos[i].imagem}" id = "imagemHeader" class = "img-fluid rounded">
        </div>
        
        <div class = "flex-grow-1 h-200">
       <div class="card text-center">
  <div class = "card-yellow">
    ${eventos[5].local}
  </div>
  <div class="card-body card-orange">
    <h5 class="card-title">${catalogoFilmesSeries[8].titulo}</h5>
    <p class="card-text">${catalogoFilmesSeries[8].sinopse}</p>
    <a href="#conteudo-2-section" class="btn btn-roxo">Conferir diferenciais</a>
  </div>
  <div class="card-footer card-yellow"">
    ${catalogoFilmesSeries[8].anoLancamento}
  </div>
</div>
        </div>
        `
    }
}

function section1 (){
    let conteudoSection1 = document.getElementById("conteudo-1-section");
    conteudoSection1.innerHTML = "";
    for(let i = 0; i < 1; i++){
         conteudoSection1.innerHTML += `
         <div class = "row">
         <div class = "col-12">
         <div class="card mb-3 section-img">
         <img src="${galeriaFotos[2].imagem}" class="card-img-top w-100 img-fluid" style = "height: 300px;" alt="...">
         <div class="card-body">
         <h5 class="card-title">${poemas[i].titulo}</h5>
         <p class="card-text">${poemas[i].texto} ${poemas[i+1].texto} ${poemas[i+2].texto} ${poemas[i+3].texto}</p>
         <p class="card-text">${poemas[i+4].texto} ${poemas[i+5].texto}</p>
         </div>
         </div>
         </div>
         </div> `
    }
}

// FIM INDEX