var cpf = document.getElementById("cpf");
var telefone = document.getElementById("telefone");

if (cpf) {
    cpf.addEventListener("input", function () {
        var valor = cpf.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 9) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
        } else if (valor.length > 6) {
            valor = valor.replace(/(\d{3})(\d{3})(\d{1,3})/, "$1.$2.$3");
        } else if (valor.length > 3) {
            valor = valor.replace(/(\d{3})(\d{1,3})/, "$1.$2");
        }

        cpf.value = valor;
    });
}

if (telefone) {
    telefone.addEventListener("input", function () {
        var valor = telefone.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length > 10) {
            valor = valor.replace(/(\d{2})(\d{5})(\d{1,4})/, "($1) $2-$3");
        } else if (valor.length > 6) {
            valor = valor.replace(/(\d{2})(\d{4})(\d{1,4})/, "($1) $2-$3");
        } else if (valor.length > 2) {
            valor = valor.replace(/(\d{2})(\d{1,5})/, "($1) $2");
        }

        telefone.value = valor;
    });
}
