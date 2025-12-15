const tel = document.getElementById("phone");

tel.addEventListener("input", function () {
    let value = tel.value.replace(/\D/g, ""); // garde seulement les chiffres
    value = value.match(/.{1,2}/g)?.join(" ") || "";
    tel.value = value;
});