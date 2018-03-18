$(document).ready(function() {
    var full = $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['inicio', 'destinos', 'nosotros', 'mapa'],
        navigation: false,
        navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: true,
        continuousHorizontal: true,
        scrollHorizontally: true,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        //sectionsColor : ['#ccc', '#fff'],
        //paddingTop: '3em',
        //paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: true,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){
            // var a = ($("body").width()- $("#idInicio img").width())/2;
            // $("div.navbar-collapse").css("padding-right", a);console.log(a);

            },
        afterRender: function(){

        },
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            $(".fp-tableCell video").get(0).pause();
            let name = "video"+slideIndex;
            $("#"+name).get(0).play();
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });


});