// <<<<<<< HEAD
// INÍCIO INDEX

// IMPRIMIR NO SITE
function print(){
    header()
    section1()
    footer()
}

print();
//**************** */


// HEADER
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
    <a href="pages/contrato.html" class="btn btn-roxo">Contratar nossos serviços</a>
  </div>
  <div class="card-footer card-yellow"">
    ${catalogoFilmesSeries[8].anoLancamento}
  </div>
</div>
        </div>
        `
    }
}
// FIM HEADER


// SECTION-1
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
// FIM SECTION-1

// FOOTER
function footer (){
  let footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = `
  <div class = "container-footer">
  <div class = "container">
  <div class = "row">
  <div class = "col-lg-3 col-md-12 com-sm-12">
  <div class = "logo logo-telefone"><i class="bi bi-telephone-inbound-fill"></i> (12) 32765-4321</div>
  </div>

  <div class = "col-lg-6 col-md-12 com-sm-12 d-flex my-3">
  <div class = "logo logo-instagram"><i class="bi bi-instagram"></i> Instagram</div>
  <div class = "logo logo-whatsapp"><i class="bi bi-whatsapp"></i> Whatsapp</div>
  <div class = "logo logo-facebook"><i class="bi bi-facebook"></i> Instagram</div>
  </div>

  <div class = "col-lg-3 col-md-12 com-sm-12 marca-dagua">
  <p>Todos os direitos reservados &copy;EcoClean LTDA<p>
  </div>
  </div>
  </div>
  </div>
  `
}

// FIM INDEX
// =======
