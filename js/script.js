function createPostContainer(mensagem) {
    const postCreator = document.querySelector(".post_creator");

    const postContainer = document.createElement("div");
    postContainer.classList.add("post_container");

    const profileDiv = createProfileRow();
    const postDescription = createPostDescription(mensagem);
    const postFooter = createPostFooter();
    
    postContainer.append(profileDiv, postDescription, postFooter);
    //main.append(postContainer);
    postCreator.after(postContainer);
}

function createPostFooter(){
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const numbers = createPostNumbers();
    const icons = createPostIcons();

    postRow.append(numbers, icons);

    return postRow;
}

function createPostIcons(){
    const atividade = document.createElement("div");
    atividade.classList.add("atividades_icons");

    //likes
    const divLikes = document.createElement("div");
    const iconLike = document.createElement("img");
    iconLike.src = "./assets/img/afirmativo.png";

    divLikes.append(iconLike);
    divLikes.innerHTML = divLikes.innerHTML + " Like ";

    //comentarios
    const divComments = document.createElement("div");
    const iconComments = document.createElement("img");
    iconComments.src = "./assets/img/comentarios.png";

    divComments.append(iconComments);
    divComments.innerHTML = divComments.innerHTML + " Comments "

    //compartilhamentos
    const divShares = document.createElement("div");
    const iconShares = document.createElement("img");
    iconShares.src = "./assets/img/refazer.png";

    divShares.append(iconShares);
    divShares.innerHTML = divShares.innerHTML + " Shares "


    atividade.append(divLikes, divComments, divShares);

    return atividade;
}

function createPostNumbers(){
    const numbers = document.createElement("div");
    numbers.classList.add("numbers");

    const numbersLeft = document.createElement("div");
    numbersLeft.classList.add("numbers_left");

    const numbersRigth = document.createElement("div");
    numbersRigth.classList.add("numbers_rigth");


    const spanComentarios = document.createElement("span");
    const spanCompartilhamentos = document.createElement("span");

    spanComentarios.innerText = " 0 Comments ";
    spanCompartilhamentos.innerText = " 0 Shares ";

    numbersRigth.append(spanComentarios, spanCompartilhamentos);

    numbers.append(numbersLeft, numbersRigth);

    return numbers;

}

function createPostDescription(mensagem){
    const paragraph = document.createElement("p");
    paragraph.classList.add("post_description");
    paragraph.innerText = mensagem

    return paragraph;

}

function createProfileRow(){
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const userProfile = document.createElement("div");
    userProfile.classList.add("user_profile");

    const img = document.createElement("img");
    img.src = "./assets/img/will_perfil.jpg"

    const info = document.createElement("div");
    const usuario = document.createElement("p");
    const span = document.createElement("span");

    usuario.innerText = "William Felix";
    span.innerText = "14 de Abril de 2022 às 21:04";

    info.append(usuario, span);
    userProfile.append(img, info);
    postRow.append(userProfile);

    return postRow;
}

const postInput = document.querySelector("#post_input");
postInput.addEventListener("keydown", function(evento){

    if (evento.code === "Enter" || evento.code === "NumpadEnter") {
        const texto = evento.target.value;

        createPostContainer(texto);

        evento.target.value = " ";

    }
})