// 1. Mensagem de 'Olá Mundo'
document.getElementById("hello-world").innerText = "Olá Mundo";

// 2. Soma de 2 inteiros
const a = 5;
const b = 10;
const sum = a + b;
document.getElementById("sum").innerText = `A soma de ${a} e ${b} é ${sum}`;

// 3. Alterar propriedade de um elemento por id
document.getElementById("changeById").addEventListener("click", function () {
    document.getElementById("hello-world").innerText = "Mensagem alterada por ID";
});

// 4. Alterar propriedade de um elemento por name
document.getElementsByName("changeByName")[0].addEventListener("change", function () {
    this.value = "Valor alterado por Name";
});

// 5. Alterar propriedade de um elemento por class
const elementsByClass = document.getElementsByClassName("changeByClass");
for (let i = 0; i < elementsByClass.length; i++) {
    elementsByClass[i].addEventListener("click", function () {
        this.innerText = "Alterado por Classe";
    });
}

