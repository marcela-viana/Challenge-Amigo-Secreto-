let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (amigos.some(amigo => amigo.toLowerCase() === nome.toLowerCase())) {
        alert(`O nome "${nome}" já foi adicionado!`);
        input.value = "";
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos") || document.querySelector("#listaAmigos");
    if (!lista) {
        console.error("Elemento #listaAmigos não encontrado no DOM.");
        return;
    }

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione ao menos um nome.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;

    document.getElementById("btnReset").style.display = "flex";
}

function resetar() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("btnReset").style.display = "none";
}


