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