const btn = document.querySelector('.calcular');

btn.addEventListener("click", function(e) {

    e.preventDefault();

    let num = document.querySelector('.num');
    let valor = num.value;
    let resp = document.querySelector('.resp');
    let refri = ((valor*400)/2)/1000

    resp.innerHTML += `<p>Para ${valor} pessoas, você vai precisar de:</p>`
    resp.innerHTML += `<p>${refri} Refrigerantes de 2L.</p>`
    resp.innerHTML += `<p>${valor/10}Kg de bolo.</p>`
    resp.innerHTML += `<p>${valor/10} Cento de salgado.</p>`
    resp.innerHTML += `<p>${(valor*8)/100} Cento de doce.</p>`


})


