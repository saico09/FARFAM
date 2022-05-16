//Funciones auxiliares
function mensajeError2(caja, mensaje) {
    $("#" + caja).html(mensaje)
    $("#" + caja).fadeIn()
}

function noError2(caja) {
    $("#" + caja).fadeOut()
}
function isEmail2(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


/*Validación de campos*/
var tipoId = "Identificación";
//id


function validaContr3() {
    if ($("#txtContr3").val().trim().length == 0) {
        mensajeError2("eContr3", "Ingresa tu contraseña")
        return false
    } else {
        noError2("eContr3")
        return true
    }
}


function validaEmail2() {
    if ($("#txtEmail2").val().trim().length == 0) {
        mensajeError2("eEmail2", "Ingresa tu correo electrónico")
        return false
    } else {

        if (!isEmail2($("#txtEmail2").val())) {
            mensajeError2("eEmail2", "Correo electrónico no válido")
            return false
        } else {
            noError2("eEmail2")
            return true
        }
    }
}


/*function habilitarContrasena(){
    if($('#'))
}*/


$(document).ready(function () {
    /*Configuración inicial del formulario*/

    //Todos los mensajes de error ocultos
    $(".invalid-feedback").hide()
    //Caja para ingresar n° de identificación deshabilitada

    //Validar Contraseña
    $("#txtContr3").blur(function () {
        exito = validaContr3()
    });

    //Validar Email
    $("#txtEmail2").blur(function () {
        exito = validaEmail2()
    });


    //Click en botón cerrar
    $('button[type="reset"]').click(function () {
        $('#fsId').prop('disabled', true)
        //Todos los campos limpíosíiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        $('input[type="email"]').val('');
        $('input[type="password"]').val('');
        $("#exampleCheck2").prop("checked", false)

        $(".invalid-feedback").hide()
    });


    //Envío del formulario
    $("#form2").submit(function () {
        exito = false

        
        //valida antes de enviar el formulario
        
        if (
            !validaEmail2() ||
            !validaContr3()
        ) {
            event.preventDefault()
        }

    });
});

