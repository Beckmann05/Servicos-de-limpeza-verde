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
        label:'Assunto:',
        col: 6,
        for:'servico',
        type:'select',
    },
    {
        label:'Explique a situação:',
        col: 6,
        for:'explicacao',
        type:'Textarea',
    },
]

function form_contrato(){
    div_form_contrato.innerHTML += `
            <h1 class="text-center pt-4">Entre em contato conosco</h1>`
    for(let i=0; i<lista_form_contrato.length; i++){
        if(lista_form_contrato[i].type == 'select'){
            div_form_contrato.innerHTML += `
            <div class="col-lg-${lista_form_contrato[i].col} col-sm-12 py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <select name="" id="${lista_form_contrato[i].for}" class="form-control">
                    <option value=""></option>
                    <option value="1">Feedback</option>
                    <option value="2">Resultados insatisfatórios</option>
                    <option value="3">Problemas com pagamento</option>
                    <option value="4">Problemas com Funcionários</option>
                </select>`
        }
        else if(lista_form_contrato[i].type == 'Textarea'){
            div_form_contrato.innerHTML += `
            <div class="py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="text-center" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <textarea class="form-control" id="${lista_form_contrato[i].for}"></textarea>`
            
        }
        else{
            div_form_contrato.innerHTML += `
            <div class="col-lg-${lista_form_contrato[i].col} col-sm-${2*lista_form_contrato[i].col} py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <input type=" ${lista_form_contrato[i].type}" id="${lista_form_contrato[i].for}" class="form-control">`
        }
    }
        div_form_contrato.innerHTML += `
            <div class="text-center p-3">
            <button class="btn btn-roxo col-2" id="btn-sac">Enviar</button>            
            </div>`
}

form_contrato()

// CARD-DEPOIMENTO
let cardDepoimento = document.getElementById('cardDepoimento')
function printDepoimento(){
  cardDepoimento.innerHTML = ""
  for(let i = 0; i < 4; i++){
    cardDepoimento.innerHTML += `
    <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="mb-5 card card-depoimento">
              <div class="display-6 card-title-depoimento rounded"><i class=" ms-2 bi bi-chat-quote"></i></div>
  <div class="card-body card-body-depoimento rounded">
    <h5 class="card-title">${poemas[i].titulo}</h5>
    <p class="card-text">${poemas[i+6].texto}</p>
    <div class="d-flex mt-5">
      <div>
      <img class="rounded-circle imagem-card-sac" src=${poemas[i].imagem} alt="">
    </div>
    <span class="d-flex ms-3 align-items-center justify-content-center">${poemas[i].autor}</span>
  </div>
  </div>
</div>
          </div>
    `
  }
}

printDepoimento();
// FIM CARD-DEPOIMENTO


//MODAL
let modal = document.getElementById('modalSac');

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
let offcanvas = document.getElementById('offcanvasSac');
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


function alerts(){
  let estado = 'certo'
  let id = ''
  for( let i = 0; i<lista_form_contrato.length; i++){
      id= lista_form_contrato[i].for
    if(document.getElementById(id).value == ""){
      estado = ''
    }}
  if(estado == 'certo'){
    alert('Enviado com sucesso, entraremos em contato em breve')
    limpar()
  }
  else{
    alert('Por favor, preencha todos os campos')
  }
}
function limpar(){
  let id = ''
  for( let i = 0; i<lista_form_contrato.length; i++){
      id= lista_form_contrato[i].for
      document.getElementById(id).value = ""}
}

document.getElementById('btn-sac').addEventListener('click', alerts)
