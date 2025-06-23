let div_form_contrato = document.getElementById('form_contrato_id')
let lista_form_contrato= [
    {
        label:'Nome Completo:',
        col: 6,
        for:'nome',
        type:'Text',
    },
    {
        label:'Email:',
        col: 6,
        for:'email',
        type:'email',
    },
    {
        label:'Celular:',
        col: 6,
        for:'celular',
        type:'Text',
    },
    {
        label:'Tipo de serviço:',
        col: 6,
        for:'serviço',
        type:'select',
    },
    {
        label:'CEP:',
        col: 6,
        for:'cep',
        type:'Text',
    },
    {
        label:'Endereço:',
        col: 6,
        for:'endereço',
        type:'Text',
    },
    {
        label:'Bairro:',
        col: 6,
        for:'bairro',
        type:'Text',
    },
    {
        label:'Número:',
        col: 3,
        for:'numero_casa',
        type:'Text',
    },
    {
        label:'Complemento:',
        col: 3,
        for:'complemento',
        type:'Text',
    },
]

function form_contrato(){
    div_form_contrato.innerHTML += `
            <h1 class="text-center pt-4">Contrate nossos serviços!</h1>`
    for(let i=0; i<lista_form_contrato.length; i++){
        if(lista_form_contrato[i].type == 'select'){
            div_form_contrato.innerHTML += `
            <div class="col-lg-${lista_form_contrato[i].col} col-sm-12 py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <select name="" id="" class="form-control">
                    <option value=""></option>
                    <option value="">Limpeza Domiciliar</option>
                    <option value="">Limpeza Pós-obra</option>
                    <option value="">Limpeza Corporativa</option>
                    <option value="">Sanitização</option>
                    <option value="">Zeladoria</option>
                </select>`
        }
        else{
            div_form_contrato.innerHTML += `
            <div class="col-lg-${lista_form_contrato[i].col} col-sm-${2*lista_form_contrato[i].col} py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <input type=" ${lista_form_contrato[i].type}" class="form-control">`
        }
    }
        div_form_contrato.innerHTML += `
            <div class="text-center p-3">
            <button class="btn btn-roxo col-2">Enviar</button>            
            </div>`
}

form_contrato()
//FIM CONTRATO

//MODAL
let modal = document.getElementById('modalContrato');

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
let offcanvas = document.getElementById('offcanvasContrato');
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