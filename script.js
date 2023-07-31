
function getImage(){
    let imgInput = document.querySelector("#convert").files;
    console.log(imgInput);

    //verificação de conteudo existente 
    if(imgInput.length > 0){
        let loadImg = imgInput[0];
        //permite a leitura do arquivo do compurtador
        let readArchive = new FileReader(); 
        //ao carregar o objeto
        readArchive.onload = function(archiveLoaded){
            // convertendo a imagem para base64
            let imgBase64 = archiveLoaded.target.result;
            console.log(imgBase64);
            document.querySelector("#preView").src = imgBase64;
            document.querySelector("imagemString").value = imgBase64;
        }
        // le o conteudo 
        readArchive.readAsDataURL(loadImg);
    }
}

function copyBase64ImgString() {
    let stringCopyed  = document.querySelector("#preView");
    stringCopyed.select();
    stringCopyed.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado para área de transferência! Ctrl+V em algum local para colar");
}