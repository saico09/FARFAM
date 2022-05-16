//Funciones auxiliares
function mensajeError(caja, mensaje) {
    $("#" + caja).html(mensaje)
    $("#" + caja).fadeIn()
}

function noError(caja) {
    $("#" + caja).fadeOut()
}

/*Validación de campos*/
var tipoId = "Identificación"; //BORRAR?
//id

function validaTitulo() {
    if ($("#txtTitulo").val().trim().length == 0) {
        mensajeError("eTitulo", "Ingresa el Titulo")
        return false
    } else {
        noError("eTitulo")
        return true
    }
}

function validaFotaza() {
    if ($("#fotaza").val()) {
        noError("eFotaza")
        return true
    } else {
        mensajeError("efotaza", "Seleccione un archivo")
        return false
    }
}

function validaLead() {
    if ($("#txtLead").val().trim().length == 0) {
        mensajeError("eLead", "Ingresa la entradilla")
        return false
    } else {
        noError("eLead")
        return true
    }
}

function validaNoticia() {
    if ($("#txtNoticia").val().trim().length == 0) {
        mensajeError("eNoticia", "Ingresa la Noticia ._.")
        return false
    } else {
        noError("eNoticia")
        return true
    }
}

$(document).ready(function () {
    /*Configuración inicial del formulario*/

    //Todos los mensajes de error ocultos
    $(".invalid-feedback").hide()
    //Caja para ingresar n° de identificación deshabilitada
    $('#fsId').prop('disabled', true);



    //Validar Nombre
    $("#txtTitulo").blur(function () {
        exito = validaTitulo()
    });

    $("#fotaza").blur(function () {
        exito = validaFotaza()
    });

    $("#txtLead").blur(function () {
        exito = validaLead()
    });

    $("#txtNoticia").blur(function () {
        exito = validaNoticia()
    });


    //Click en botón cerrar
    $('button[type="reset"]').click(function () {
        $('#fsId').prop('disabled', true)
        //Todos los campos limpíosíiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        $('input[type="text"]').val('');
    });


    //Envío del formulario
    $("#formNot").submit(function () {
        exito = false
        //valida antes de enviar el formulario
        
        if (
            !validaTitulo() ||
            !validafotaza() ||
            !validaLead() ||
            !validaNoticia()
        ) {
            event.preventDefault()
        }

    });
});