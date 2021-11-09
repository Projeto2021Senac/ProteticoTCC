function getServicoTerceiro(valor) {
    var valorAjax = valor;
    $('#servico_terceiro').html('<option value = 0>Aguardando...</option');
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: 'TerceiroServico.php?id_terceiro=' + valorAjax,
        success: function(dados) {
            if (dados != null) {
                var options = "<option value='' hidden>Escolher Servico</option>";
                for (var i = 0; i < dados.length; i++) {
                    options += '<option value="' + dados[i].id + '">' + dados[i].nomeServico + '</option>';
                }
                if (valorAjax != 0) {
                    $('#servico_terceiro').html(options).show();
                }
            }
        }
    })
}
function habilitar() {
    if (document.getElementById('denteOuro').checked) {
        document.getElementById('qtdOuro').removeAttribute("disabled");
    } else {
        document.getElementById('qtdOuro').value = "";
        document.getElementById('qtdOuro').setAttribute("disabled", "disabled");
    }
}
/*$(function(){
    let = identificacao = document.querySelector("#identificacao").value;
    console.log(identificacao);
    $("#busca").autocomplete({
        source:"autoComplete.php?teste=" + identificacao 
    });
});*/



function ConsultasAbertas() {
    
    var valorAjax = document.getElementById('aux').value;
    $('#apresentaProntuario').html('<p>Aguardando...</p>');
    $.ajax({
        type: 'POST',
        dataType: "json",
        url: 'prontuarioAbrirProntuario.php?prontuario=' + valorAjax,
        success: function(dados) {
            if (dados !== null) {
                var tabela = '<thead><tr><th>Prontuario</th></tr></thead>';
                for (var i = 0; i < dados.length; i++) {
                    tabela+= '<tbody><tr><td class "table-success">' + dados[i].prontuario + '</td></tr></tbody>';
                    //$('#apresentaProntuario').append('<tbody><tr><td class "table-success">' + dados[i].prontuario + '</td></tr></tbody>');
                    
                }
                $('#apresentaProntuario').html(tabela).show();
                /*if (valorAjax !== 0) {
                    $('#apresentaProntuario').html(tabela).show();
                }*/
            }
        }
    })
}
