
    $(document).ready(function () {
        
        // animation counter js here
        $('.wdcounter').animationCounter({
            start: 0,
            end: 90,
            step: 1,
            delay: 30,
            txt: '+'
            });

            $('.wvcounter').animationCounter({
                start: 0,
                end: 60,
                step: 1,
                delay: 30,
                txt: '+'
                });
         $('.wpcounter').animationCounter({
            start: 0,
            end: 70,
            step: 1,
            delay: 30,
            txt: '+'
            });

        // owl carousel js here

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            autoplay:true,
            autoplayTimeout: 3000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        // wow js here
        
        new WOW().init();
    });