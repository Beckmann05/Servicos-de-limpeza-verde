function sect1_galeria(){
    let sect1 = document.getElementById('galeria_1')
    for(let i=0; i<9; i++){
        if(i%2==0){
            sect1.innerHTML+=`
                <div class="row col-md-6">
                    <figure class="col-md-2 h-100 p-3" style="height: fit-content;"><img src="${galeriaFotos[i].imagem}" alt="" class="w-100 h-100"></figure>
                    <div class="col-md-10 p-3">
                        <h3 class='border-bottom border-dark p-2'>${galeriaFotos[i].id} - ${galeriaFotos[i].titulo}</h3>
                        <p class=''>${galeriaFotos[i].descricao}</p>
                        <div class='row'>
                            <p class='col-md-6 mt-4'>- ${galeriaFotos[i].localizacao} </p>
                            <p class='col-md-6 mt-4 text-end'> ${galeriaFotos[i].data} </p>
                        </div>
                    </div>
                </div>
                <div class="row col-md-6 p-3">
                    <figure class=" col-md-6">
                        <img src="${galeriaFotos[i+1].imagem}" alt="" class="w-100">
                    </figure>
                    <figure class=" col-md-6">
                        <img src="${galeriaFotos[i+2].imagem}" alt="" class="w-100">
                    </figure>
                </div>
            `
            i=i+2
        }
        else{
            sect1.innerHTML+=`
                <div class="row col-md-6 p-3">
                    <figure class=" col-md-6">
                        <img src="https://picsum.photos/800/600" alt="" class="w-100">
                    </figure>
                    <figure class=" col-md-6">
                        <img src="https://picsum.photos/800/600" alt="" class="w-100">
                    </figure>
                </div>
                <div class="row col-md-6">
                    <div class="col-md-10 p-3">
                        <h3 class='border-bottom border-dark p-2'>${galeriaFotos[i].id} - ${galeriaFotos[i].titulo}</h3>
                        <p class=''>${galeriaFotos[i].descricao}</p>
                        <div class='row'>
                            <p class='col-md-6 mt-4'>- ${galeriaFotos[i].localizacao} </p>
                            <p class='col-md-6 mt-4 text-end'> ${galeriaFotos[i].data} </p>
                        </div>
                    </div>
                    <figure class="col-md-2 h-100 p-3" style="height: fit-content;"><img src="${galeriaFotos[i].imagem}" alt="" class="w-100 h-100"></figure>
                </div>
                `
            i=i+2
        }
    }
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
          <a class="nav-link nav-link-offcanvas" href="../pages/produtos.html">Produtos Usados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link nav-link-offcanvas" href="../pages/endereços.html">Endereços</a>
        </li>
        <li class="nav-item">
          <a href="../pages/SAC.html" class="nav-link nav-link-offcanvas" aria-disabled="true">Contato</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle nav-link-offcanvas" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
// >>>>>>> 78242aead0b7ab6a09982eaf33e9879e7119150b