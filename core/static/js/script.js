function getClima(codigo) {
    var url = 'https://api.gael.cloud/general/public/clima/' + codigo;

    $.getJSON(
        url,
        function (data) {
            var estacion = data.Estacion
            var temperatura = data.Temp
            var estado = data.Estado

            $("#estacion").html( data.Estacion)
            $("#estado").html(data.Estado)                
            $("#temperatura").html(data.Temp+'ºC')
                 
        }
    )
}
$(document).ready(function(){

  

$.getJSON(
    'https://api.gael.cloud/general/public/clima/', //URL API
    function (data) {  //QUE HACER CON LOS DATOS
        $.each(data, function (i, item) {
            $("#clima").append(
                '<option value="' + item.Codigo + '">' + item.Estacion + '</option>'
            );
        })
    }
);

$("#verClima").click(function () {
    var codigo = $("#clima").val()
    getClima(codigo)
});

$(document).ready(function(){
    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});


});