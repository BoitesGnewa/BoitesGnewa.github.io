
var btn = document.getElementById('btn');
btn.onclick = function () {
    var text = document.querySelector('p.intro');
    text.classList.add('red');
    var img = document.querySelector('.desktop');
    img.style.display = 'none';
    document.querySelector('.reality').style.marginDown = "40px";
}
$(function () {
$(window).scroll(function() { 
    $('.reality').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
            $(this).addClass("fadeInUp");
            }
        });
    });
});

$(function () {
    $(window).scroll(function() {
        $('.dream').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
                }
            });
        });
    });

