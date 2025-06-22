let section1 = document.getElementById('section-1');
let section2 = document.getElementById('section-2');

function sec1(){
  section1.innerHTML = `
  <div class="container">
      <h2>Prova de nossa Sustentabilidade</h2>
      <div class="texto-carrossel py-5">
        <h4>Práticas Ecológicas</h4>
       <div class="row border praticas-ecologicas align-itens-stretch rounded">
        <div class="col-lg-8 col-md-12 col-sm-12">
          <p>${artigos[9].paragrafo02} ${artigos[9].paragrafo01}</p>
          <p>${artigos[10].paragrafo01}</p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 d-flex" style="align-items: center;">
          <div id="carouselExampleCaptions" class="carousel slide w-100">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner rounded">
    <div class="carousel-item active">
      <img src="../img/1728322132produtos-de-limpeza-profissional-copapel.png" style="max-height: 200px; object-fit: cover;" class="d-block w-100 img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../img/4a1d1b_c9ca6f4bfcb7477a9322b3ed0de2552c~mv2.jpg" style="max-height: 200px; object-fit: cover;" class="w-100 img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="../img/Conheca-o-servico-de-Limpeza-Sustentavel-e-conte-com-o-diferencial-da-Terserv.jpg" style="max-height: 200px; object-fit: cover;" class="w-100 img-fluid" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>    
       </div>
    </div>
  </div>
  `
}


sec1();

function sec2(){
  section2.innerHTML = `
  <div class="container">
      <h4 class="text-center">Produtos Biodegradáveis</h4>
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 my-2">
           <div class="card card-produtos">
            <img src="${eventos[0].imagem}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${eventos[3].local}</h5>
              <a href="#card-1" class="btn" data-bs-toggle="collapse" >Ver mais</a>
              <div class="collapse mt-2" id="card-1">
                <p class="card-text">${poemas[5].texto}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 my-2">
           <div class="card card-produtos">
            <img src=${eventos[1].imagem} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${eventos[3].local}</h5>
              <a href="#card-2" class="btn" data-bs-toggle="collapse" >Ver mais</a>
              <div class="collapse mt-2" id="card-2">
                <p class="card-text">${poemas[6].texto}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 my-2">
           <div class="card card-produtos">
            <img src=${eventos[2].imagem} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${eventos[14].local}</h5>
              <a href="#card-3" class="btn" data-bs-toggle="collapse" >Ver mais</a>
              <div class="collapse mt-2" id="card-3">
                <p class="card-text">${poemas[7].texto}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-12 my-2">
           <div class="card card-produtos">
            <img src=${eventos[3].imagem} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${eventos[3].local}</h5>
              <a href="#card-4" class="btn" data-bs-toggle="collapse" >Ver mais</a>
              <div class="collapse mt-2" id="card-4">
                <p class="card-text">${poemas[8].texto}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

sec2();











// FOOTER
function footer (){
  let footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = `
  <div class = "container-footer">
  <div class = "container">
  <div class = "row">
  <div class = "col-lg-3 col-md-12 com-sm-12 centro">
  <div class = "logo logo-telefone"><i class="bi bi-telephone-inbound-fill"></i> (12) 32765-4321</div>
  </div>

  <div class = "col-lg-6 col-md-12 com-sm-12 d-flex my-3 centro">
  <div class = "logo logo-instagram rounded mx-1"><a href="" class = "footer-icons"><i class="bi bi-instagram"></i>@EcoCleanOFC</a></div>
  <div class = "logo logo-whatsapp rounded mx-1"><a href="" class = "footer-icons"><i class="bi bi-whatsapp"></i>(12)9812-57689</a></div>
  <div class = "logo logo-facebook rounded mx-1"><a href="" class = "footer-icons"><i class="bi bi-facebook"></i>EcoCleanLTDA</a></div>
  </div>

  <div class = "col-lg-3 col-md-12 com-sm-12 marca-dagua centro">
  <p>Todos os direitos reservados &copy;EcoClean LTDA<p>
  </div>
  </div>
  </div>
  </div>
  `
}
footer();
// FIM FOOTER