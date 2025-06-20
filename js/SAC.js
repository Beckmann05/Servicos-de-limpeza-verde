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
        for:'assunto',
        type:'select',
    },
        {
        label:'Explique a situação:',
        col: 12,
        for:'reclamação',
        type:'reclamação',
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
                    <option value="">Resultado insatisfatório</option>
                    <option value="">Feedback</option>
                    <option value="">Problemas com pagamento</option>
                    <option value="">Problemas com funcionários</option>    
                </select>
            </div>`
        }
        else if(lista_form_contrato[i].type == 'reclamação'){
            div_form_contrato.innerHTML += `
            <div class="text-center py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <textarea class="form-control feedback"></textarea>
            </div>`
            
        }
        else{
            div_form_contrato.innerHTML += `
            <div class="col-lg-${lista_form_contrato[i].col} col-sm-${2*lista_form_contrato[i].col} py-2 px-5">
                <label for="${lista_form_contrato[i].for}" class="" style="font-size: larger;">${lista_form_contrato[i].label}</label>
                <br>
                <input type=" ${lista_form_contrato[i].type}" class="form-control">
            </div>`
        }
    }
        div_form_contrato.innerHTML += `
            <div class="text-center p-3">
            <button class="btn col-2">Enviar</button>            
            </div>`
}

form_contrato()