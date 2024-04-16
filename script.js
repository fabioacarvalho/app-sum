let numbers = document.querySelector(".numbers")


for(let x = 1; x <= 9; x++){
    let div = `<div id="number-${x}" class="number"><span>${x}</span></div>`
    numbers.innerHTML += div;
}




let confirmButton = document.querySelector("#confirm");

confirmButton.addEventListener("click", function () {
    let num1 = parseFloat($("#first-number").val());
    let num2 = parseFloat($("#second-number").val());
    let result = parseFloat($("#result-number").val());
    let title = $("#title-header");
    
    if(!num1 || !num2 || !result){
        return alert("Por favor insira os valores para soma e resultado")
    }

    if (isNaN(num1) || isNaN(num2) || isNaN(result)) {
        console.error("Erro: elementos não encontrados ou valores inválidos.");
        return; // Saia da função se algum elemento não for encontrado ou algum valor for inválido
    }


    if (num1 + num2 === result) {
        $(".content").remove()
        $("#new-game").attr("style", "display: block;")
        $("#title-header").text("Parabéns você acertou!!!");

    } else {
        $(".content").remove()
        $("#title-header").text("Poxa não foi dessa vez o resultado correto era " + (num1 + num2)  + ", mas não tem problema, tente mais uma vez.");
        $("#new-game").attr("style", "display: block;")
    }
});

$("#new-game").on("click", function(){
    window.location.reload()
})