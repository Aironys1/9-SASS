import $ from 'jquery';

$(function(){
    $('#botao').on('click', function(){
        $('h1').html('HTML Alterado!!!');
    });
});
