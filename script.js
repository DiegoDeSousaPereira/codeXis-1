$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
 
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });

     $('.carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true, // adicionando autoplay
        autoplayTimeout:2000, // define o tempo de transição do slide
        autoplayHoverPause:true,
        autoplaySpeed: 500, // 2 segundos
     
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
      })


     var typed = new Typed(".typing", {
         strings:["OUSADOS", "EFICIENTES" ,"CONFIÀVEIS"],
         typeSpeed:100,
         backSpeed:60,
         loop:true
     });
     var typed = new Typed(".typing-2", {
        strings:["YouTuber", "Desenvolvedor", "Designer", "Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });

    $('.menu-btn').on('click', function() {
        $('ul.menu').toggleClass('menu-ativo');
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    });
    
    $('#enviar').on('click', function() {
        const nome = encodeURIComponent($('#nome').val());
        const email = encodeURIComponent($('#email').val());
        const sobrenome = encodeURIComponent($('#sobrenome').val());
        const mensagem = encodeURIComponent($('#mensagem').val());
        const numeroWhatsApp = '5588993106463';

        const mensagemFormatada = `Nome: ${nome}\nSobrenome: ${sobrenome}\nEmail: ${email}\nMensagem: ${mensagem}`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemFormatada}`;

        window.open(urlWhatsApp, '_blank');
    });
    
});
   document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.navbar .menu');
    var menuIcon = document.querySelector('.menu-btn i');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuIcon.classList.toggle('active');
    });
});