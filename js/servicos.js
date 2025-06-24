let main_servicos= document.getElementById('main-servicos')

//MAIN

function sect1_servicos(){
    main_servicos.innerHTML='<h1 class="text-center border-bottom border-dark p-2">Serviços realizados:</h1>'
    
    for(let i=0; i<5;i++){
        if(i%2==0){
            main_servicos.innerHTML+=`
                <div class="bg-roxo text-white row py-5 my-3 rounded">
                    <div class="col-lg-3 text-center">
                      <img src="${noticias[i].imagem}" class="img-servico m-2" alt="">
                    </div>
                    <div class="col-lg-9">
                        <div class="m-2">
                            <div class="d-flex align-items-center justify-content-between px-3 border-bottom">
                                <h4 class="">${noticias[i].titulo} <i class="bi bi-bucket"></i></h4>
                                <h5 class="">${noticias[i].dataPublicacao}</h5>
                            </div>
                            <p>${noticias[i].resumo}</p>
                            <div class="text-end"><h4>- ${noticias[i].autor}</h4></div>
                        </div>
                    </div>
                </div>`
        }
        else{
            main_servicos.innerHTML+=`
                <div class="row bg-amarelo py-5 my-3 rounded">
                    <div class="col-lg-9">
                        <div class="m-2">
                            <div class="d-flex align-items-center justify-content-between px-3 border-bottom">
                                <h5 class="sm-text-center">${noticias[i].dataPublicacao}</h5>
                                <h4 class=""><i class="bi bi-leaf-fill"></i> ${noticias[i].titulo}</h4>
                            </div>
                            <p>${noticias[i].resumo}</p>
                            <div class="text-start"><h4>- ${noticias[i].autor}</h4></div>
                        </div>
                    </div>
                    <figure class="col-lg-3 text-center"><img src="${noticias[i].imagem}" class="img-servico m-2" alt=""></figure>

                </div>`
        }
    }
}

sect1_servicos()

//FIM DO MAIN


//MODAL
let modal = document.getElementById('modalServicos');

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
let offcanvas = document.getElementById('offcanvasServicos');
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
  <div class = "logo logo-instagram rounded"><a href="" class = "footer-icons"><i class="bi bi-instagram"></i>@EcoCleanOFC</a></div>
  <div class = "logo logo-whatsapp rounded"><a href="" class = "footer-icons"><i class="bi bi-whatsapp"></i>(12)9812-5768</a></div>
  <div class = "logo logo-facebook rounded"><a href="" class = "footer-icons"><i class="bi bi-facebook"></i>EcoCleanLTDA</a></div>
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