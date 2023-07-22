$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const endereçoDaNovaImagem = $("#endereço-imagem-nova").val();
        const novoItem = $('<li style="Display: none"></li>');
        $(`<img src="${endereçoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
        <div class=overlay-imagem-link>"/>
            <a href="${endereçoDaNovaImagem} target "_blanck" title= "Ver Imagem em tamanho real">
                Ver imagem em tamanho real
            <a/>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereço-imagem-nova').val('');
    });
});
