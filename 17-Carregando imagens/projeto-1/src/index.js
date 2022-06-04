import $ from 'jquery';
import './style.css';
import CameraGallery from './images/camera1.png';


$(function(){
    $('#botao').on('click', function(){
        $('h1').html('Beija Flor');
        $(this).addClass('botao');

        $('#imagem').attr('src', CameraGallery);

    });
});

$(function(){
    $('#botao2').on('click', function(){
        $('h2').html('Mares');
        $(this).addClass('botao2');

    });
});
