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
var tipoId = "Identificación";
//id


function validaContr() {
    if ($("#txtContr").val().trim().length == 0) {
        mensajeError("eContr", "Ingresa tu contraseña")
        return false
    } else {
        noError("eContr")
        return true
    }
}

function validaContr2() {
    if ($("#txtContr2").val().trim().length == 0) {
        mensajeError("eContr2", "Repite tu contraseña")
        return false
    } else {
        noError("eContr2")
        return true
    }
}

function validaNombre() {
    if ($("#txtNombre").val().trim().length == 0) {
        mensajeError("eNombre", "Ingresa tu nombre")
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

function passwordsIg(){
    // Verificamos si las constraseñas no coinciden
    if ($("#id_contrasena").val() != $("#txtContr2").val()) {
    
        // Si las constraseñas no coinciden mostramos un mensaje
        mensajeError("eIguales", "Las contraseñas no coinciden")
    
        return false;
    }
    
    else {
    
        // Si las contraseñas coinciden ocultamos el mensaje de error
        $(".invalid-feedback").hide()
    
        // Mostramos un mensaje mencionando que las Contraseñas coinciden
        //document.getElementById("ok").classList.remove("ocultar");
    
        // Desabilitamos el botón de login
    
        // Refrescamos la página (Simulación de envío del formulario)
    
        return true;
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
    $('#fsId').prop('disabled', true);
    $('#aceptar').prop('disabled', true);


    //Validar Contraseña
    $("#txtContr").blur(function () {
        exito = validaContr()
    });

     //Validar Contraseña2
     $("#txtContr2").blur(function () {
        exito = validaContr2()
    });

    //Validar Nombre
    $("#txtNombre").blur(function () {
        exito = validaNombre()
    });

    //Validar Email
    $("#txtEmail").blur(function () {
        exito = validaEmail()
    });

    //passwords
    $("#txtContr2").blur(function () {
        exito = passwordsIg()
        if(passwordsIg()){
            $(".invalid-feedback").hide()
        }
    });

    

    //Click en botón cerrar
    $('button[type="reset"]').click(function () {
        $('#fsId').prop('disabled', true)
        //Todos los campos limpíosíiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
        $('input[type="email"]').val('');
        $('input[type="text"]').val('');
        $('input[type="password"]').val('');
        $('input[type="password"]').val('');
        $("#exampleCheck1").prop("checked", false)
        $(".invalid-feedback").hide()
    });


    //Envío del formulario
    $("#form1").submit(function () {
        exito = false

        
        //valida antes de enviar el formulario
        
        if (
            !validaContr() ||
            !validaContr2() ||
            !validaNombre() ||
            !validaEmail() 
        ) {
            event.preventDefault()
            
        }

    });
});

function mensaje(){
    if (
        !validaContr() ||
        !validaContr2() ||
        !validaNombre() ||
        !validaEmail() 
    ) {
        $('#mensaje1').prop('hidden',false);
    }
    else{
        $('#mensaje').prop('hidden',false);
    }
    
}

