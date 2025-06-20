// <<<<<<< HEAD
// INÍCIO INDEX

function print(){
    header()
    section1()
}

print();

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
    <a href="#conteudo-2-section" class="btn btn-roxo">Conferir diferenciais</a>
  </div>
  <div class="card-footer card-yellow"">
    ${catalogoFilmesSeries[8].anoLancamento}
  </div>
</div>
        </div>
        `
    }
}

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

// FIM INDEX
// =======
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
            <div class="col-md-${lista_form_contrato[i].col} col-sm-12 py-2 px-5">
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
            <div class="col-md-${lista_form_contrato[i].col} col-sm-${2*lista_form_contrato[i].col} py-2 px-5">
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
// >>>>>>> 78242aead0b7ab6a09982eaf33e9879e7119150b
