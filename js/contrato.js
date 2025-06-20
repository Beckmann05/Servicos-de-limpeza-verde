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
            <button class="btn col-2">Enviar</button>            
            </div>`
}

form_contrato()


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

  <div class = "col-lg-6 col-md-12 com-sm-12 d-flex">
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
}// FOOTER
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

footer();
// >>>>>>> 78242aead0b7ab6a09982eaf33e9879e7119150b