import $ from 'jquery';
import './style.css';

$(function(){
    $('#botao').on('click', function(){
        $('h1').html('Beija Flor');
        $(this).addClass('botao');

    });
});

$(function(){
    $('#botao2').on('click', function(){
        $('h2').html('Mares');
        $(this).addClass('botao2');

    });
});
