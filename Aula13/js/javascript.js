"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const CHAVE_TEMA = "tema-despedida-entra21";
    const botaoTema = document.getElementById("alternarTema");
    const textoTema = document.getElementById("textoTema");
    const anoAtual = document.getElementById("anoAtual");

    function aplicarTema(temaEscuro) {
        document.body.classList.toggle("escuro", temaEscuro);
        botaoTema.setAttribute("aria-pressed", String(temaEscuro));
        botaoTema.setAttribute("aria-label", temaEscuro ? "Ativar tema claro" : "Ativar tema escuro");
        textoTema.textContent = temaEscuro ? "Tema claro" : "Tema escuro";
        document.documentElement.style.colorScheme = temaEscuro ? "dark" : "light";
    }

    const temaSalvo = localStorage.getItem(CHAVE_TEMA);
    aplicarTema(temaSalvo === "escuro");

    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    botaoTema.addEventListener("click", function () {
        const temaEscuro = !document.body.classList.contains("escuro");
        aplicarTema(temaEscuro);
        localStorage.setItem(CHAVE_TEMA, temaEscuro ? "escuro" : "claro");
    });
});
