/* //проверка прогрузки html
document.addEventListener("DOMContentLoaded", function(event){

  //объект документа с классом modal
  const modal = document.querySelector('.modal'); 
  //все объекты документа с селектором data-toggle=modal
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // объект документа с класссом modal_close
  const closeBtn = document.querySelector('.modal__close'); 
  // объект документа с класссом modal__over
  const closeOver = document.querySelector('.modal__over');

  //функция toggle переключает наличие/отсутствие класса
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  //для каждого modalBtn отслеживать элементы с событием "клик"
  //при наступлении вызвать функццию switchModal чтобы открыть окно
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  
  // при клике по объекту closeBtn вызвать функццию switchModal чтобы закрыть окно
  closeBtn.addEventListener('click', switchModal);

  // при клике по объекту closeBtn вызвать функццию switchModal чтобы закрыть окно
  closeOver.addEventListener('click', switchModal);

  // при нажатии клавиши escape, открытие/закрытие вызов функции switchModal
  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) {
      modal.classList.toggle('modal--visible');
    }
  });
}); */

//jQuery
//проверка прогрузки html
$(document).ready(function(){

  //объект документа с классом modal
  var modal = $('.modal'),
  //все объекты документа с селектором data-toggle=modal
      modalBtn = $('[data-toggle=modal]'),
  // объект документа с класссом modal_close
      closeBtn = $('.modal__close'),
  // объект документа с класссом modal__over
      closeOver = $('.modal__over');

  //функция toggle переключает наличие/отсутствие класса
    var switchModal = () => {
    modal.toggleClass('modal--visible');
  };

  //для modalBtn отслеживать событие "клик"
  //при наступлении вызвать функццию switchModal чтобы открыть окно
  modalBtn.on('click', switchModal);
  
  // при клике по объекту closeBtn вызвать функццию switchModal чтобы закрыть окно
  closeBtn.on('click', () => {
    $('.modal').removeClass('modal--visible modal-thank--visible');
  });

  // при клике по объекту closeBtn вызвать функццию switchModal чтобы закрыть окно
  closeOver.on('click', () => {
    $('.modal').removeClass('modal--visible modal-thank--visible');
  });

  // при нажатии клавиши escape - удаление класса .modal--visible
  $(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      modal.removeClass('modal--visible');
    }
  });

  // Кнопка "Листайте вниз"
  $(() => {
    $('.hero__scroll-down').click(() => {
			$('html').animate({
				scrollTop:$('#section-projects').offset().top+50
			}, 500);
    });
  });

  // кнопка прокрутки вверх
  $(() => {
		$('.scroll-up').hide();

		$(window).scroll(() => {
			if ($(this).scrollTop() > 600){
				$('.scroll-up').fadeIn();
			} else{
				$('.scroll-up').fadeOut();
      }
		});

		$('.scroll-up').click(() => {
			$('html').animate({
				scrollTop:0
			}, 500);
    });
    
  });
  

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    initialSlide: 2,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

// Позиционирование стрелок слайдера
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  var bullet = $('.swiper-pagination-bullet');
  var container = $('.swiper-container');
  var wind = $(window);
  var colSliders = 5 // Количество слайдеров

  $('.swiper-pagination').each( function() {
    $(this).css('left', (($(this).parent().width()-$(this).width())/2));
  });

  if (wind.width() <= 575) {
    prev.css('left', 5);
    next.css('right', 5);
    $('.about .swiper-button-prev').css('top', ($('.slider-container-about .swiper-slide').width()*0.637/2));
    $('.about .swiper-button-next').css('top', ($('.slider-container-about .swiper-slide').width()*0.637/2));
  }
  else {
    $('.swiper-button-prev').each( function() {
      $(this).css('margin-left', ($(this).parent().width()-prev.width()-3.4-bullets.width()-next.width())/2+7);
    });
  
    $('.swiper-button-next').each( function() {
      $(this).css('margin-right', ($(this).parent().width()-prev.width()-3.4-bullets.width()-next.width())/2+7);
    });
  }

  // Пропорциональный размер слайдера
  $('.slider-container').css('height', $('.slider-container').width()*0.59);

  $('.slider-container-about .swiper-slide').css('height', $('.slider-container-about .swiper-slide').width()*0.637);

  $('.slider-container-about').css('height', $('.slider-container-about').width()*0.637+43);

  // Пропорциональный размер видео "Главные преимущества"
  var videoContainer = $('.video-container');
  videoContainer.css('height', videoContainer.width()*0.6377);

  // Пропорциональный размер видео "Главные преимущества тень"
  var videoContainerSh = $('.main-advant__content__video--for-shadow');
  videoContainerSh.css('height', videoContainerSh.width()*0.6377);

/*   // Высота product-description__text
  var productText = $('.product-description__text');
  var maxHight = 0
  productText.each(function () {
    var productTextWidth = productText.height();
    if(productTextWidth > 0) {
      maxHight = productTextWidth;
    }
    productText.height(maxHight);
  }); */
/*   productText.height(maxHight); */



// Иинициализация wow
  new WOW().init();

  
// Валидация формы
  $('.form').each( function validateForm() {
    $(this).validate({
      // Класс, который будет присваиваться для элементов (полей) с ошибкой
      errorClass: "invalid",
      //onclick: false,
      // Error label устанавливается у соответствующего label
/*       errorLabelContainer: ".label-error",
      wrapper: "label",
      submitHandler: function() { alert("Submitted!") }, */
/*       errorPlacement: function(error, element) {
        error.appendTo("label");
      }, */
      errorPlacement: function (error, element) {
        if (element.attr("type") == "checkbox") {
            return element.next('label').append(error);
        }
    
         error.insertAfter($(element));
    },

      // Правила
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },     
        // строчное правило
        userPhone: {
          required: true,
          minlength: 17
        },
        // правило-объект (блок)
        userEmail: {
          required: true,
          email: true
        },
        policyCheckbox: {
          required: true
        }
      }, 
      // сообщения
      messages: {
        userName: {
          required: "* Заполните поле",
          minlength: "* Должно быть не менее 2 символов",
          maxlength: "* Должно быть не более 15 символов"
        },
        userPhone: "* Заполните поле",
        userEmail: {
          required: "* Заполните поле",
          email: "* Введите корректный email"
        },
        policyCheckbox: {
          required: "* Поставте галочку"
        }
      },

      submitHandler:
      function (form) {
        $.ajax({
          type: 'POST',
          url: 'send.php',
          data: $(form).serialize(), // Склеивание всех данных с формы
          success: function (response) { // Сценарий для удачной отправки
            console.log('данные ' + response);
            $(form)[0].reset();
            $('.modal').removeClass('modal--visible');
            $('.modal-thank').toggleClass('modal-thank--visible');
          },
          error: function (jqXHR, textStatus, errorThrown) { // Сценарий для не удачной отправки
            console.error(jqXHR + " " + textStatus);
          }
          
        });
        return false; 
      }
    });
  });

  // Маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
  $('[type=telTextHold]').mask('+7(000) 000-00-00');

// End
});

// отложенная загрузка яндекс карты
setTimeout(function(){
  const elemYaMap = document.createElement('script');
  elemYaMap.async = true;
  elemYaMap.type = 'text/javascript';
  elemYaMap.src = 'https://api-maps.yandex.ru/2.1/?apikey=28850313-e4da-46be-8c91-b9c747dedcf8&lang=ru_RU&onload=init';
  document.getElementsByTagName('body')[0].appendChild(elemYaMap);
}, 2000);
//обязательно onload в конце src вместо ymaps.ready(init);

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
//ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    center: [47.233497, 39.691180],
    zoom: 18,
    controls: ['routeButtonControl', 'zoomControl']
  }, {
      searchControlProvider: 'yandex#search'
  }),

  // Создаём макет содержимого.
  MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  ),

  myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Repair Design',
        balloonContent: 'Пн - Пт: с 9:00 до 18:00'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/footer/map-marker.png',
        // Размеры метки.
        iconImageSize: [26, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-10, -50]
    });
  myMap.geoObjects.add(myPlacemark)

  myMap.behaviors.disable('scrollZoom'); // Отключение масштабирования прокруткой

  // Добавим элемент управления (построитель маршрута) в левый угол карты
  // и зададим начальную и конечную точки маршрута.
  myMap.controls.add('routeButtonControl', {
    size: "large",
    float: "left",
    floatIndex: 1000,
  });
  myMap.controls.get('routeButtonControl')
    .routePanel.state.set({
        fromEnabled: true,
        to: [47.233497, 39.691180],
        type: "auto"      
  });
}

// Видео с youtube
var player;
$('.video__play').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    videoId: 'vaJN0KhzuUs',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}

//11111111111111111111111111111
var player;
$('.video__play-1').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-1', {
    width: '100%',
    videoId: 'vaJN0KhzuUs',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}
//22222222222222222222222222222
var player;
$('.video__play-2').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-2', {
    width: '100%',
    videoId: 'LG0mip85vrI',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}
//333333333333333333333333333
var player;
$('.video__play-3').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-3', {
    width: '100%',
    height: '100%',
    videoId: '54S7CMbo0bo',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}
//44444444444444444444444444444
var player;
$('.video__play-4').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-4', {
    width: '100%',
    videoId: 'FGMiF0kwh5M',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}
//555555555555555555555555555
var player;
$('.video__play-5').on('click', function onYouTubeIframeAPIReady() {
  player = new YT.Player('player-5', {
    width: '100%',
    videoId: '7E0sx40MPwI',
    events: {
      'onReady': videoPlay
    }
  });
})
function videoPlay(event) {
  event.target.playVideo();
}

// Автообновление страницы при изменении размера окна на 10%
var s_win_w = $(window).width();
$(window).resize(function(){
  win_w = $(window).width();
  if (win_w >= s_win_w*1.1 || win_w <= s_win_w*0.9) {
    location.reload();
  }
});