$( function() {
    $( "#tabs" ).tabs();
    $('.slider-wrapper').slick({
        arrows: false,
        dots: true

    });
  } );

  const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        // Если меню открыто, добавляем класс no-scroll
        body.classList.add('no-scroll');
    } else {
        // Если меню закрыто, убираем класс no-scroll
        body.classList.remove('no-scroll');
    }
});