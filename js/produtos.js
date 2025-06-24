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
    </div>
    <div class="carousel-item">
      <img src="../img/4a1d1b_c9ca6f4bfcb7477a9322b3ed0de2552c~mv2.jpg" style="max-height: 200px; object-fit: cover;" class="w-100 img-fluid" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../img/Conheca-o-servico-de-Limpeza-Sustentavel-e-conte-com-o-diferencial-da-Terserv.jpg" style="max-height: 200px; object-fit: cover;" class="w-100 img-fluid" alt="...">
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
              <button class="btn btn-roxo" data-bs-target = "#card-1" data-bs-toggle="collapse">Ver mais</button>
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
              <button class="btn btn-roxo" data-bs-target = "#card-2" data-bs-toggle="collapse">Ver mais</button>
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
              <button class="btn btn-roxo" data-bs-target = "#card-3" data-bs-toggle="collapse">Ver mais</button>
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
              <button class="btn btn-roxo" data-bs-target = "#card-4" data-bs-toggle="collapse">Ver mais</button>
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

//MODAL
let modal = document.getElementById('modalProdutos');

function printModal(){
  modal.innerHTML = `
  <div id="modalHtmlLogin">
    <div class="modal fade" id="exampleModalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Log-in</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="container">
          <div class="row">
            <div class="mb-3 col-12">
                <label >Usuário:</label>
                <input type="email" class="form-control">
            </div>

            <div class="mb-3 col-12">
                <label>Email:</label>
                <input type="text" class="form-control">
            </div>

            <div class="mb-3 col-6">
                <label >Senha:</label>
                <input type="password" class="form-control">
            </div>

            <div class="mt-3 col-6">
             <span><a href="">Esqueceu a senha ?</a></span>
          </div>

        </div>
      </div>

        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="modalHtmlNew">
  <div class="modal fade" id="exampleModalNew" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Novo aqui ?</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <div class="container">
          <div class="row">
            <div class="mb-3 col-12">
                <label >Usuário:</label>
                <input type="email" class="form-control">
            </div>

            <div class="mb-3 col-12">
                <label>Email:</label>
                <input type="text" class="form-control">
            </div>

            <div class="mb-3 col-6">
                <label >Senha:</label>
                <input type="password" class="form-control">
            </div>

            <div class="mb-3 col-6">
              <label >Confirme a senha:</label>
              <input type="password" class="form-control">
          </div>

        </div>
      </div>

        
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
          <button type="button" class="btn btn-primary">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</div>
  `
}

printModal()
//FIM MODAL


//OFF CANVAS
let offcanvas = document.getElementById('offcanvasProdutos');
function printOffcanvas(){
  offcanvas.innerHTML = `
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Nosso Menu</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link nav-link-roxo nav-link-offcanvas" href="../pages/produtos.html">Produtos Usados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-roxo nav-link-offcanvas" href="../pages/endereços.html">Endereços</a>
        </li>
        <li class="nav-item">
          <a href="../pages/SAC.html" class="nav-link nav-link-roxo nav-link-offcanvas" aria-disabled="true">Contato</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link nav-link-roxo dropdown-toggle nav-link-offcanvas" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Serviços
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item nav-link-offcanvas" href="../pages/servicos.html">Nossos serviços</a></li>
            <li><a class="dropdown-item nav-link-offcanvas" href="../pages/galeria.html">Nossos resultados</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item nav-link-offcanvas" href="../pages/contrato.html">Contrate-nos</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
              <button class="btn btn-roxo" type="button"
              data-bs-toggle="modal" data-bs-target="#exampleModalNew">Cadastre-se</button>
               <button class="btn btn-roxo ms-3" type="button"
              data-bs-toggle="modal" data-bs-target="#exampleModalLogin">Log-in</button>
            </form>
  </div>
</div>
  `
}

printOffcanvas();
//FIM OFF CANVAS








// FOOTER
function footer (){
  let footerContainer = document.getElementById('footer');
  footerContainer.innerHTML = `
  <div class = "container-footer">
    <div class = "container">
      <div class = "row">
       <div class = "col-lg-3 col-md-6 col-sm-12 my-2">
          <div class = "logo logo-instagram rounded">
            <a href="" class = "footer-icons">
              <i class="bi bi-instagram"></i> @EcoClean
            </a>
          </div>
       </div>

       <div class = "col-lg-3 col-md-6 col-sm-12 my-2">
          <div class = "logo logo-whatsapp rounded">
            <a href="" class = "footer-icons">
              <i class="bi bi-whatsapp"></i> (12)9812-5768
            </a>
          </div>
       </div>

       <div class = "col-lg-3 col-md-6 col-sm-12 my-2">
          <div class = "logo logo-facebook rounded">
            <a href="" class = "footer-icons">
              <i class="bi bi-facebook"></i> EcoCleanLTDA
            </a>
          </div>
       </div>

       <div class = "col-lg-3 col-md-6 col-sm-12 marca-dagua ">
          <p>Todos os direitos reservados <br> &copy;EcoClean LTDA.<p>
       </div>

      </div>
    </div>
  </div>
  `
}
footer();
// >>>>>>> 78242aead0b7ab6a09982eaf33e9879e7119150b