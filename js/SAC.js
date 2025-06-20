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
        for:'serviço',
        type:'select',
    },
    {
        label:'Explique a situação:',
        col: 6,
        for:'explicação',
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
                <select name="" id="" class="form-control">
                    <option value=""></option>
                    <option value="">Feedback</option>
                    <option value="">Resultados insatisfatórios</option>
                    <option value="">Problemas com pagamento</option>
                    <option value="">Problemas com Funcionários</option>
                </select>`
        }
        else if(lista_form_contrato[i].type == 'Textarea'){
            div_form_contrato.innerHTML += `
            <div class="py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="text-center" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <textarea class="form-control"></textarea>`
            
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
  <div class = "col-lg-3 col-md-12 com-sm-12 centro">
  <div class = "logo logo-telefone"><i class="bi bi-telephone-inbound-fill"></i> (12) 32765-4321</div>
  </div>

  <div class = "col-lg-6 col-md-12 com-sm-12 d-flex my-3 centro">
  <div class = "logo logo-instagram"><i class="bi bi-instagram"></i> Instagram</div>
  <div class = "logo logo-whatsapp"><i class="bi bi-whatsapp"></i> Whatsapp</div>
  <div class = "logo logo-facebook"><i class="bi bi-facebook"></i> Facebook</div>
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