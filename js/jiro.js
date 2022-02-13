$(function() {
            
            if(!$('html,body').hasClass('on_brand')){
               $('#bg_print').css({display:'none'})
               }
            if($('html,body').hasClass('on_brand')){
                $('#bg_print').css({display:'block'})
               }
               
            $('#brand_gnb .sub a').click(()=>{
                $('#bg_print').css({display:'block'})
            })
            
            
            $('#brand_gnb .sub a').on('click', (e) => {
                e.preventDefault();
                $(document.body).addClass('on_brand');
            })

            $('.official').click(() => {
                $(document.body).removeClass('on_brand');
                $(document.body).addClass('jinro_main');
                $('.gnb_b').removeClass('on');
                $('#bg_print').css({display:'none'});
                
            });

            $('#brand_gnb').on('mousemove', function() {
                $('.gnb_b').removeClass('on');

            });
            $('#brand_gnb').on('mouseleave', function() {
                if ($('html,body').hasClass('on_brand')) {
                    $('.gnb_b').addClass('on');
                }
            })


            $('.bt').click(() => {
                $('#wrap_inner').removeClass('on');
            })
            $('.bt2').click(() => {
                $('#wrap_inner').addClass('on');
            })

            $('.next').click(() => {
                $('.slide').css({
                    "transform": "translate3d(0px, 0px, 0px)"
                });

                $('.next').css({
                    display: 'none'
                })
                $('.prev').css({
                    display: 'block'
                })
            })
            $('.prev').click(() => {
                $('.slide').css({
                    "transform": "translate3d(-656px, 0px, 0px)"
                });
                $('.prev').css({
                    display: 'none'
                })
                $('.next').css({
                    display: 'block'
                })
            });
            var 숫자 = 0;

            $('.next2').click(() => {
                숫자--;
                if (숫자 == 0) {
                    $('.slide2').css({
                        "transform": "translate3d(-0px, 0px, 0px)"
                    });
                    $('.next2').css({
                        display: 'none'
                    })
                }
                if (숫자 == 1) {
                    $('.slide2').css({
                        "transform": "translate3d(-825px, 0px, 0px)"
                    });
                }

                if (숫자 == 2) {
                    $('.slide2').css({
                        "transform": "translate3d(-1650px, 0px, 0px)"
                    });
                }
                if (숫자 == 3) {
                    $('.slide2').css({
                        "transform": "translate3d(-2475px, 0px, 0px)"
                    });
                }
                if (숫자 == 4) {
                    $('.slide2').css({
                        "transform": "translate3d(-3300px, 0px, 0px)"
                    });
                }
                if (숫자 < 5) {
                    $('.prev2').css({
                        display: 'block'
                    })
                }
            })

            $('.prev2').click(() => {

                숫자++;


                if (숫자 > 0) {
                    $('.next2').css({
                        display: 'block'
                    })
                }
                if (숫자 == 1) {
                    $('.slide2').css({
                        "transform": "translate3d(-825px, 0px, 0px)"
                    });
                }

                if (숫자 == 2) {
                    $('.slide2').css({
                        "transform": "translate3d(-1650px, 0px, 0px)"
                    });
                }
                if (숫자 == 3) {
                    $('.slide2').css({
                        "transform": "translate3d(-2475px, 0px, 0px)"
                    });
                }
                if (숫자 == 4) {
                    $('.slide2').css({
                        "transform": "translate3d(-3300px, 0px, 0px)"
                    });
                }
                if (숫자 == 5) {
                    $('.slide2').css({
                        "transform": "translate3d(-4125px, 0px, 0px)"
                    });
                    $('.prev2').css({
                        display: 'none'
                    })
                }
            });



            $(window).scroll(() => {
                let 메인높이 = $('#main').innerHeight();
                let 인포높이 = $('#info').innerHeight();
                let 영상높이 = $('#tvcf').innerHeight();
                let 스크롤 = $(window).scrollTop();


                if (스크롤 > 메인높이) {
                    $('.a1').removeClass('active');
                    $('.a2').addClass('active');
                }
                if (스크롤 < 메인높이) {
                    $('.a1').addClass('active');
                    $('.a2').removeClass('active');
                }

                if (스크롤 > 메인높이 + 인포높이) {
                    $('.a2').removeClass('active');
                    $('.a3').addClass('active');
                }
                if (스크롤 < 메인높이 + 인포높이) {
                    $('.a3').removeClass('active');
                }
                if (스크롤 > 메인높이 + 인포높이 + 영상높이) {
                    $('.a4').addClass('active');
                    $('.a3').removeClass('active');
                }
                if (스크롤 < 메인높이 + 인포높이 + 영상높이) {
                    $('.a4').removeClass('active');
                }

                let logoH = $('.logo_history').innerHeight();
                let navH = $('#official_gnb_wrap').innerHeight();

                if (!$('html,body').hasClass('on_brand') && 스크롤 > logoH + navH) {
                    $('html,body').addClass('fixed_official_gnb');
                } else {
                    $('html,body').removeClass('fixed_official_gnb');
                }

            });

            $(".scroll_move").click(function(event) {

                event.preventDefault();

                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 300);
            });

        });
        $(document).ready(function() {
            var owl = $('.owl-carousel');

            owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 35,
                autoplay: true,
                autoplayTimeout: 8000,
                autoplayHoverPause: true
            });

            $('.owl-next').click(function() {
                owl.trigger('next.owl.carousel');
            })

            $('.owl-prev').click(function() {
                owl.trigger('prev.owl.carousel', [300]);
            })
        });
        (function () {
            var officialMainSns = $('#official_main_sns'),
                owl = officialMainSns.find('.owl-carousel');

            
                owl.owlCarousel({
                    autoplay: true,
                    loop: true,
                    items: 1,
                    smartSpeed: 400,
                    mouseDrag: true
                })
                .on('mouseover', function () {
                    owl.trigger('stop.owl.autoplay');
                })
                .on('mouseout', function () {
                    owl.trigger('play.owl.autoplay');
                })
					})();