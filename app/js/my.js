$(document).ready(function () {

// GALLERY 3D
    var galleryTop = new Swiper('.gallery-top', {
        effect: 'coverflow',
        //grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        loop: true,
        slideToClickedSlide: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 90,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 320px
            576: {
                effect: 'slide',
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                effect: 'slide',
                slidesPerView: 1
            },
            // when window width is <= 640px
            1024: {
                effect: 'slide',
                slidesPerView: 1
            }
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 5,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true,
        // Responsive breakpoints
        breakpoints: {
            // when window width is <= 576px
            576: {
                slidesPerView: 2
            },
            // when window width is <= 768px
            768: {
                slidesPerView: 3
            },
            // when window width is <= 1024px
            1024: {
                slidesPerView: 3
            }
        }
    });

    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    galleryTop.on('click', function (e) {
        console.log('galleryTop click', e, galleryTop.clickedSlide);
    });


    // SELECT STYLISE

    $('select').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    //  SCALIZE

    $('.scalize').scalize({
        // width/height
        width: 0,
        height: 0,

        // selector of markers
        selector: '.item-point',

        // circle, square, content
        styleSelector: 'circle',

        // pulse, pulse2, marker
        animationSelector: 'pulse2',

        animationPopoverIn: 'flipInY',
        animationPopoverOut: 'flipOutY'
    });


    $('.swipebox').swipebox();

    $('[data-toggle="tooltip"]').tooltip();


    // Smooth Scroll
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                });
            }
        });


    // Flying Nav Go To Top Btn
    var goToTopBtn = $('.wr-flying-nav__gototop');
    goToTopBtn.css('opacity', 0).css('right', '-100px');
    $(window).on('scroll', function (e) {
        if (goToTopBtn.length > 0 && window.scrollY > 100) {
            goToTopBtn.css('opacity', 1).css('right', 0);
        } else {
            goToTopBtn.css('opacity', 0).css('right', '-100px');
        }
    });


});

// Делаем анимацию блоков для мобильных устройств.

$(window).on('load', function () {

    var $itemSmall = $(".containerH1-itemSmall");

    var $itemSmallTypes = $(".containerH1-itemSmall__types");
    var $itemSmallTypesH1 = $(".containerH1-itemSmall__types h1");
    var $itemSmallTypesP = $(".containerH1-itemSmall__types p");
    var $itemSmallTransform = $(".transform-know-more-itemSmall");

    // var $itemSmallTypesJS = (".itemSmallTypesJS");
    // var $itemSmallTypesH1JS = (".itemSmallTypesH1JS");
    // var $itemSmallTypesPJS = (".itemSmallTypesPJS");
    // var $itemSmallTransformJS = (".itemSmallTransformJS");

    $itemSmall.on('touch', function () {

        $itemSmallTypes.toggleClass("itemSmallTypesJS");

        //$itemSmallTypesH1.css({"opacity":"1","margin-top":"200px"});
        //$itemSmallTypesH1.css({"opacity":"1" , "margin-top":"100px"});

        $itemSmallTypesH1.toggleClass("itemSmallTypesH1JS");

        //$itemSmallTypesP.css({"opacity":"1" , "margin-left":"100px"});
        $itemSmallTypesP.toggleClass("itemSmallTypesPJS");

        $itemSmallTransform.toggleClass("itemSmallTransformJS");

        return false;

    });

});


$(window).load(function () {
    // Группы объектов
    var groups = [
        {
            name: "Студия кухни nobilia",
            style: "islands#redIcon",
            items: [
                {
                    center: [47.230731, 39.724589],
                    name: "<h5 class='map__title'>График работы:</h5>" +
                    "<p class='map__text'>пн-сб: с 10:00 до 19:00,<br>" +
                    "вс: с 10:00 до 17:00</p>" +
                    "<h5 class='map__title'>Адрес:</h5>" +
                    "<p class='map__text'>г.Ростов-на-Дону,<br>" +
                    "ул.Красноармейска д.103/123" +
                    "<p class='map__text'>Телефон:  <a class='map__tel' href='tel:+7(863) 299-44-53'>  +7 (863) 299-44-53</p>"
                }
            ]
        }
    ];

    ymaps.ready(init);

    function init() {

        // Создание экземпляра карты.
        var myMap = new ymaps.Map('map', {
                center: [47.230731, 39.724589],
                zoom: 13,
                controls: ['zoomControl', 'fullscreenControl', 'geolocationControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Контейнер для меню.
            menu = $('<div class="map__menu"/>');

        for (var i = 0, l = groups.length; i < l; i++) {
            createMenuGroup(groups[i]);
        }

        function createMenuGroup(group) {

            // Пункт меню.
            var submenu = $('<div class="map__submenu"/>'),
                // Коллекция для геообъектов группы.
                collection = new ymaps.GeoObjectCollection(null, {preset: group.style});

            // Добавляем коллекцию на карту.
            myMap.geoObjects.add(collection);
            // Добавляем подменю.
            submenu
            // Добавляем пункт в меню.
                .appendTo(menu)
                // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
                .find('a')
                .bind('click', function () {
                    if (collection.getParent()) {
                        myMap.geoObjects.remove(collection);
                        submenu.hide();
                    } else {
                        myMap.geoObjects.add(collection);
                        submenu.show();
                    }
                });
            for (var j = 0, m = group.items.length; j < m; j++) {
                createSubMenu(group.items[j], collection, submenu);
            }
        }

        function createSubMenu(item, collection, submenu) {
            // Пункт подменю.
            var submenuItem = $(item.name),
                // Создаем метку.
                placemark = new ymaps.Placemark(item.center, {balloonContent: item.name});

            // Добавляем метку в коллекцию.
            collection.add(placemark);
            // Добавляем пункт в подменю.
            submenuItem
                .appendTo(submenu)
                // При клике по пункту подменю открываем/закрываем баллун у метки.
                .find('a')
                .bind('click', function () {
                    if (!placemark.balloon.isOpen()) {
                        placemark.balloon.open();
                    } else {
                        placemark.balloon.close();
                    }
                    return false;
                });
        }

        // Добавляем меню в тэг WR-MAP.
        menu.appendTo($('.wr-map'));

        myMap.behaviors.disable(['scrollZoom']);
        myMap.setBounds({
            checkZoomRange: true,
        });
        // Выставляем масштаб карты чтобы были видны все группы.
        myMap.setBounds(myMap.geoObjects.getBounds());
    }
});

