function sect1_galeria(){
    let sect1 = document.getElementById('galeria_1')
    
      sect1.innerHTML +=`
      <h2 class=" border-bottom border-dark text-center mb-3">
        Nossos Destaques
      </h2>`
    for(let i=0; i<9; i++){
        if(i%2==0){
            sect1.innerHTML+=`
              <div class="grid-1">
                <div class="row">
                  <div class="col-sm-12 col-lg-4 mb-3">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-8 p-2">
                    <h3 class="border-bottom ps-2 border-dark">
                      ${galeriaFotos[i].id} - ${galeriaFotos[i].titulo}
                    </h3>
                    <p class="px-2">
                      ${galeriaFotos[i].descricao}
                    </p>
                    <div class="row my-auto">
                      <div class="col-6 text-center">- ${galeriaFotos[i].localizacao}</div>
                      <div class="col-6 text-center">${galeriaFotos[i].data}</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i+1].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i+2].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
              </div>
            `
            i=i+2
        }
        else{
            sect1.innerHTML+=`
              <div class="grid-1">
                <div class="row">
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i+1].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i+2].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-lg-8 p-2">
                    <h3 class="border-bottom ps-2 border-dark">
                      ${galeriaFotos[i].id} - ${galeriaFotos[i].titulo}
                    </h3>
                    <p class="px-2">
                      ${galeriaFotos[i].descricao}
                    </p>
                    <div class="row my-auto">
                      <div class="col-6 text-center">- ${galeriaFotos[i].localizacao}</div>
                      <div class="col-6 text-center">${galeriaFotos[i].data}</div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-4 mb-3">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[i].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
              </div>
                `
            i=i+2
        }
    }
    sect1.innerHTML += `
          <div class="banner">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[9].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
          </div>
              <div class="grid-1">
                <div class="row">
                  <div class="col-sm-12 col-lg-4 mb-3">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[10].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-8 p-2">
                    <h3 class="border-bottom ps-2 border-dark">
                      ${galeriaFotos[10].id} - ${galeriaFotos[10].titulo}
                    </h3>
                    <p class="px-2">
                      ${galeriaFotos[10].descricao}
                    </p>
                    <div class="row my-auto">
                      <div class="col-6 text-center">- ${galeriaFotos[10].localizacao}</div>
                      <div class="col-6 text-center">${galeriaFotos[10].data}</div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[11].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12 my-2">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[12].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="grid-1">
                <div class="row">
                  <div class="col-lg-6 col-sm-12">
                    <div class="rounded bg-roxo p-2 m-2">
                      <img src="${galeriaFotos[14].imagem}" class="w-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-12">
                    <div class="rounded bg-roxo p-2 m-2">
                      <img src="${galeriaFotos[15].imagem}" class="w-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-lg-8 p-2">
                    <h3 class="border-bottom ps-2 border-dark">
                      ${galeriaFotos[13].id} - ${galeriaFotos[13].titulo}
                    </h3>
                    <p class="px-2">
                      ${galeriaFotos[13].descricao}
                    </p>
                    <div class="row my-auto">
                      <div class="col-6 text-center">- ${galeriaFotos[13].localizacao}</div>
                      <div class="col-6 text-center">${galeriaFotos[13].data}</div>
                    </div>
                  </div>
                  <div class="col-sm-12 col-lg-4 mb-3">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[13].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
                  </div>
                </div>
              </div>
          <div class="banner">
                    <div class="rounded bg-roxo h-100 p-2 m-2">
                      <img src="${galeriaFotos[16].imagem}" class="w-100 h-100 rounded bg-roxo" alt="">
                    </div>
          </div>
    `
}

sect1_galeria()

//MODAL
let modal = document.getElementById('modalGaleria');

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


//OFFCANVAS
let offcanvas = document.getElementById('offcanvasGaleria');
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