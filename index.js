function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleaÑos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleaÑos.getFullYear();
    var m = hoy.getMonth() - cumpleaÑos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleaÑos.getDate())) {
        edad--;
    }

    return edad;
}