function changerphoto(numero) {
    var image;
    if (numero == 1) {
        image = "moi.jpg";
    }
    else if (numero == 2) {
        image = "madagascar.jpg";
    }

    document.getElementById('matête').src = image;
}