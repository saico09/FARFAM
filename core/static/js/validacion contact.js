//Funciones auxiliares
function mensajeError(caja, mensaje) {
    $("#" + caja).html(mensaje)
    $("#" + caja).fadeIn()
}

function noError(caja) {
    $("#" + caja).fadeOut()
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

/*Validación de campos*/
var tipoId = "Identificación"; //BORRAR?
//id

function validaNombre() {
    if ($("#txtNombre").val().trim().length == 0) {
        mensajeError("eNombre", "Ingresa el Nombre")
        return false
    } else {
        noError("eNombre")
        return true
    }
}


function validaEmail() {
    if ($("#txtEmail").val().trim().length == 0) {
        mensajeError("eEmail", "Ingresa tu correo electrónico")
        return false
    } else {

        if (!isEmail($("#txtEmail").val())) {
            mensajeError("eEmail", "Correo electrónico no válido")
            return false
        } else {
            noError("eEmail")
            return true
        }
    }
}

function validaMensaje() {
    if ($("#txtMensaje").val().trim().length == 0) {
        mensajeError("eMensaje", "Ingresa la Mensaje ._.")
        return false
    } else {
        if ($("#txtMensaje").val().trim().length <= 10) {
            mensajeError("eMensaje", "Mensaje muy corto")
            return false
        } else {
            noError("eMensaje")
            return true
        }
        
    }
}

$(document).ready(function () {
    /*Configuración inicial del formulario*/

    //Todos los mensajes de error ocultos
    $(".invalid-feedback").hide()
    //Caja para ingresar n° de identificación deshabilitada
    $('#fsId').prop('disabled', true);



    //Validar Nombre
    $("#txtNombre").blur(function () {
        exito = validaNombre()
    });

    $("#txtEmail").blur(function () {
        exito = validaEmail()
    });

    $("#txtMensaje").blur(function () {
        exito = validaMensaje()
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
            !validaNombre() ||
            !validaEmail() ||
            !validaMensaje()
        ) {
            event.preventDefault()
        }

    });
});

function mensaje(){
    if (
        !validaNombre() ||
        !validaEmail() ||
        !validaMensaje()
    ) {
        $('#mensaje1').prop('hidden',false);
    }
    else{
        $('#mensaje').prop('hidden',false);
    }
    
}