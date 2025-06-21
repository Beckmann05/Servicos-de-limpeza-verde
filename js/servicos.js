let main_servicos= document.getElementById('main-servicos')

//MAIN

function sect1_servicos(){
    main_servicos.innerHTML='<h1 class="text-center border-bottom border-dark p-2">Serviços realizados:</h1>'
    
    for(let i=0; i<5;i++){
        if(i%2==0){
            main_servicos.innerHTML+=`
                <div class="bg-roxo text-white row py-5">
                    <figure class="col-lg-2 text-center"><img src="${noticias[i].imagem}" class="img-servico m-2" alt=""></figure>
                    <div class="col-lg-10 row">
                        <div class="m-2">
                            <div class="d-flex align-items-center justify-content-between px-3 border-bottom">
                                <h3 class="">${noticias[i].titulo}</h3>
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
                <div class="row bg-amarelo py-5">
                    <div class="col-lg-10 row">
                        <div class="m-2">
                            <div class="d-flex align-items-center justify-content-between px-3 border-bottom">
                                <h5 class="sm-text-center">${noticias[i].dataPublicacao}</h5>
                                <h3 class="">${noticias[i].titulo}</h3>
                            </div>
                            <p>${noticias[i].resumo}</p>
                            <div class="text-start"><h4>- ${noticias[i].autor}</h4></div>
                        </div>
                    </div>
                    <figure class="col-lg-2 text-center"><img src="${noticias[i].imagem}" class="img-servico m-2" alt=""></figure>
                </div>`
        }
    }
}

sect1_servicos()

//FIM DO MAIN







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