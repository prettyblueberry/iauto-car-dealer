import {useEffect, useState, useRef} from "react";
import { listOpen } from "api/auction";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
// import { Link } from "@mui/icons-material";

function useInterval(callback, delay) {
    const savedCallback = useRef();
    
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
}
const timeNow = Date.now();
function HtmlRJX() {
    const [nowTime, setNowTime] = useState(Date.now());
    const [auctions, setAuctions] = useState([]);
    const [fixedValue, setFixedValue] = useState(0);

    useInterval(() => {
        setNowTime(nowTime + 1000);
    }, 1000);

    useEffect(()=>{
        document.addEventListener("DOMContentLoaded", function () {
            const swiper = new Swiper(".swiper", {
                autoplay: {
                    delay: 3500,
                },
                direction: "horizontal",
                loop: true,
                effect: "fade",
                speed: 500,
                // Navigation arrows
                navigation: {
                    nextEl: ".stm_swiper-button-next",
                    prevEl: ".stm_swiper-button-prev",
                },
            });
        });

        (function ($) {
            $(window).on("load", function () {
                var total_height = 660;
                if ($(window).width() > 991) {
                    $(".stm_collage_62678 .collage_wrap").css("height", total_height);
                }
            });

            $(window).on("resize", function () {
                var total_height = 660;
                if ($(window).width() > 991) {
                    $(".stm_collage_62678 .collage_wrap").css("height", total_height);
                } else {
                    $(".stm_collage_62678 .collage_wrap").css("height", "");
                }
            });
        })(jQuery);

        (function ($) {
            "use strict";

            var featured_vehicles_carousel_92416 = $(".featured_vehicles_carousel_92416");

            function ev_make_slide_hoverable() {
                let original_width = 0;
                let original_height = 0;

                // Try getting width and height from non-hoverable galleries around the carousel
                featured_vehicles_carousel_92416
                    .find(".owl-stage .owl-item")
                    .each(function () {
                        if (
                            $(this).find(".interactive-hoverable").length === 0 &&
                            original_width === 0 &&
                            original_height === 0
                        ) {
                            if (
                                $(this).find(".listing-car-item-inner").width() > 0 &&
                                $(this).find(".listing-car-item-inner").height() > 0
                            ) {
                                original_width = $(this).find(".listing-car-item-inner").width();
                                original_height = $(this).find(".listing-car-item-inner").height();
                            }
                        }
                    });

                // If all carousel items are hoverable, fallback to default height and search for width
                if (original_width === 0 && original_height === 0) {
                    featured_vehicles_carousel_92416
                        .find(".owl-stage .owl-item.active")
                        .each(function () {
                            if (original_width === 0) {
                                original_width = $(this).width() - 30; // minus padding-x
                            }
                        });

                    // electric vehicle demo carousel item image default height
                    original_height = 296;
                }

                if (original_width > 0 && original_height > 0) {
                    featured_vehicles_carousel_92416
                        .find(".owl-stage .owl-item")
                        .each(function () {
                            if ($(this).find(".interactive-hoverable").length > 0) {
                                $(this)
                                    .find(".interactive-hoverable")
                                    .css("min-width", original_width);
                                $(this)
                                    .find(".interactive-hoverable")
                                    .css("min-height", original_height);
                            }
                        });
                }
            }

            $(window).on("load", function () {
                featured_vehicles_carousel_92416.on(
                    "initialized.owl.carousel",
                    function (e) {
                        setTimeout(function () {
                            featured_vehicles_carousel_92416
                                .find(".owl-nav, .owl-dots")
                                .wrapAll("<div class='owl-controls'></div>");
                            ev_make_slide_hoverable();
                        }, 500);
                    }
                );

                var owlRtl = false;
                if ($("body").hasClass("rtl")) {
                    owlRtl = true;
                }

                var owlLoop = true;

                featured_vehicles_carousel_92416.owlCarousel({
                    rtl: owlRtl,
                    items: 3,
                    dots: true,
                    autoplay: false,
                    slideBy: 3,
                    loop: owlLoop,
                    responsive: {
                        0: {
                            items: 1,
                            slideBy: 1,
                            dots: false,
                        },
                        768: {
                            items: 2,
                            slideBy: 2,
                            dots: true,
                        },
                        992: {
                            items: 3,
                            slideBy: 3,
                        },
                    },
                });

                $(".stm-hex-next_92416").on("click", function () {
                    featured_vehicles_carousel_92416.trigger("prev.owl.carousel");
                });

                $(".stm-hex-prev_92416").on("click", function () {
                    featured_vehicles_carousel_92416.trigger("next.owl.carousel");
                });

                featured_vehicles_carousel_92416.find(".owl-nav.disabled").remove();
            });

            $(window).on("resize", function () {
                setTimeout(function () {
                    ev_make_slide_hoverable();
                }, 500);
            });
        })(jQuery);

        (function ($) {
            $(document).on("ready", function () {
                var heights = [];
                var selector = $(
                    "#ev_recent_94744 .car-listing-row .ev-filter-loop .listing-car-item-meta"
                );
                if (typeof selector !== undefined) {
                    selector.each(function () {
                        heights.push($(this).outerHeight());
                    });

                    if (heights.length > 0) {
                        var min_height = Math.max.apply(Math, heights);
                        if (min_height > 0) {
                            selector.each(function () {
                                $(this).css("min-height", min_height + "px");
                            });
                        }
                    }
                }
            });
        })(jQuery);

        jQuery(window).on("load", function ($) {
            var counter_64996 = new countUp("counter_64996", 0, 15514, 0, 2.5, {
                useEasing: true,
                useGrouping: true,
                separator: " ",
            });

            jQuery(window).on("scroll", function () {
                if (jQuery("#counter_64996").is_on_screen()) {
                    counter_64996.start();
                }
            });
        });

        jQuery(window).on("load", function ($) {
            var counter_88415 = new countUp("counter_88415", 0, 1201, 0, 2.5, {
                useEasing: true,
                useGrouping: true,
                separator: " ",
            });

            jQuery(window).on("scroll", function () {
                if (jQuery("#counter_88415").is_on_screen()) {
                    counter_88415.start();
                }
            });
        });

        jQuery(window).on("load", function ($) {
            var counter_46374 = new countUp("counter_46374", 0, 2150, 0, 2.5, {
                useEasing: true,
                useGrouping: true,
                separator: " ",
            });

            jQuery(window).on("scroll", function () {
                if (jQuery("#counter_46374").is_on_screen()) {
                    counter_46374.start();
                }
            });
        });

        jQuery(window).on("load", function ($) {
            var counter_22579 = new countUp("counter_22579", 0, 3800, 0, 2.5, {
                useEasing: true,
                useGrouping: true,
                separator: " ",
            });

            jQuery(window).on("scroll", function () {
                if (jQuery("#counter_22579").is_on_screen()) {
                    counter_22579.start();
                }
            });
        });

        (function ($) {
            "use strict";

            var $owl = $(".partners-carousel-27842");

            var owlRtl = false;
            if ($("body").hasClass("rtl")) {
                owlRtl = true;
            }

            $(document).ready(function () {
                $owl.owlCarousel({
                    rtl: owlRtl,
                    items: 3,
                    smartSpeed: 800,
                    dots: false,
                    margin: 10,
                    nav: true,
                    navElement: "div",
                    autoplay: false,
                    loop: true,
                    navText: "",
                    responsiveRefreshRate: 100,
                    responsive: {
                        0: {
                            items: 2,
                        },
                        500: {
                            items: 3,
                        },
                        768: {
                            items: 4,
                        },
                        992: {
                            items: 7,
                        },
                        1025: {
                            items: 6,
                        },
                    },
                });
                $owl.on("click", ".stm-owl-prev", function () {
                    $owl.trigger("prev.owl.carousel");
                });
                $owl.on("click", ".stm-owl-next", function () {
                    $owl.trigger("next.owl.carousel");
                });
            });
        })(jQuery);

        return () => {
            jQuery(window).off("load");
            jQuery(window).off("scroll");
        }

    },[]);
    
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal
        listOpen(signal).then((result) => {
          if (!result) {
            // setRedirectToSignin(true)
          } else {
            setAuctions(result);
          }
        })
        return function cleanup(){
          abortController.abort()
        }
    }, [fixedValue])

    const dateStart = new Date(timeNow);

    return (
        <div id="main">
            <div className="container">
                <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
                     className="vc_row wpb_row vc_row-fluid vc_custom_1634545131978 vc_row-no-padding" style={{
                    position: 'relative',
                    left: '-604.375px',
                    boxSizing: 'border-box',
                    width: '2378px',
                    maxWidth: '2378px'
                }}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="stm_ev_swiper_slider">
                                    {/* Slider main container */}
                                    <div className="
                        swiper
                        swiper-fade
                        swiper-initialized
                        swiper-horizontal
                        swiper-pointer-events
                      ">
                                        {/* Additional required wrapper */}
                                        <div className="swiper-wrapper" id="swiper-wrapper-c101028fdc28e5b304"
                                             aria-live="off" style={{transitionDuration: '0ms'}}>
                                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-prev"
                                                 style={{
                                                     background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/audi_slide.jpg")',
                                                     width: '2378px',
                                                     opacity: 1,
                                                     transform: 'translate3d(0px, 0px, 0px)',
                                                     transitionDuration: '0ms'
                                                 }} data-swiper-slide-index={4} role="group" aria-label="5 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">
                                                            Advanced features.<br/>Environment friendly.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/audi-logo.png"
                                                                 alt="Audi 2021 E-tron GT 320 "/>
                                                            <h3 className="heading-font">Audi 2021 E-tron GT
                                                                320</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">81.4kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">378mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">4.4s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">320hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="price_label">Our price</h4>
                                                            <h3>$75 000</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">
                                                                More info
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Slides */}
                                            <div className="swiper-slide swiper-slide-visible swiper-slide-active"
                                                 style={{
                                                     background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/mb_eqe_350.jpg")',
                                                     width: '2378px',
                                                     opacity: 1,
                                                     transform: 'translate3d(-2378px, 0px, 0px)',
                                                     transitionDuration: '0ms'
                                                 }} data-swiper-slide-index={0} role="group" aria-label="1 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">Drive the future,<br/>today.</p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/mb-logo.png"
                                                                 alt="Mercedes-Benz 2023 EQE 350 "/>
                                                            <h3 className="heading-font">Mercedes-Benz 2023 EQE
                                                                350</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">90.0kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">410mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">3.2s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">350hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="sale_price">$65 000</h4>
                                                            <h3>$58 900</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide swiper-slide-next" style={{
                                                background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/porsche_slide.jpg")',
                                                width: '2378px',
                                                opacity: 0,
                                                transform: 'translate3d(-4756px, 0px, 0px)',
                                                transitionDuration: '0ms'
                                            }} data-swiper-slide-index={1} role="group" aria-label="2 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">Visualize, Customize,<br/>Actualize.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/porsche_logo.png"
                                                                 alt="Porsche 2020 Taycan 340 "/>
                                                            <h3 className="heading-font">Porsche 2020 Taycan
                                                                340</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">73.0kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">388mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">4.3s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">340hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="price_label">Best deal</h4>
                                                            <h3>$123 800</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{
                                                background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/jaguar_slide.jpg")',
                                                width: '2378px',
                                                opacity: 0,
                                                transform: 'translate3d(-7134px, 0px, 0px)',
                                                transitionDuration: '0ms'
                                            }} data-swiper-slide-index={2} role="group" aria-label="3 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">
                                                            The ultimate all-electric<br/>performance SUV
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/jaguar_logo.png"
                                                                 alt="Jaguar 2022 I-Pace 412 "/>
                                                            <h3 className="heading-font">Jaguar 2022 I-Pace 412</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">78.4kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">361mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">3.8s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">412hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="sale_price">$77 855</h4>
                                                            <h3>$75 000</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" style={{
                                                background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/vw_slide.jpg")',
                                                width: '2378px',
                                                opacity: 0,
                                                transform: 'translate3d(-9512px, 0px, 0px)',
                                                transitionDuration: '0ms'
                                            }} data-swiper-slide-index={3} role="group" aria-label="4 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">Lower maintenance.<br/>Smarter
                                                            choice.</p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/vw_logo.png"
                                                                 alt="Volkswagen 2021 ID3 300 "/>
                                                            <h3 className="heading-font">Volkswagen 2021 ID3
                                                                300</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">98.0kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">420mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">2.9s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">300hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="sale_price">$35 000</h4>
                                                            <h3>$30 000</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide swiper-slide-duplicate-prev" style={{
                                                background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/audi_slide.jpg")',
                                                width: '2378px',
                                                opacity: 0,
                                                transform: 'translate3d(-11890px, 0px, 0px)',
                                                transitionDuration: '0ms'
                                            }} data-swiper-slide-index={4} role="group" aria-label="5 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">
                                                            Advanced features.<br/>Environment friendly.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/audi-logo.png"
                                                                 alt="Audi 2021 E-tron GT 320 "/>
                                                            <h3 className="heading-font">Audi 2021 E-tron GT
                                                                320</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">81.4kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">378mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">4.4s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">320hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="price_label">Our price</h4>
                                                            <h3>$75 000</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                                                style={{
                                                    background: 'url("https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/mb_eqe_350.jpg")',
                                                    width: '2378px',
                                                    opacity: 0,
                                                    transform: 'translate3d(-14268px, 0px, 0px)',
                                                    transitionDuration: '0ms'
                                                }} data-swiper-slide-index={0} role="group" aria-label="1 / 5">
                                                <div className="slider_text_wrapper">
                                                    <div className="slider_text">
                                                        <p className="heading-font">Drive the future,<br/>today.</p>
                                                    </div>
                                                </div>
                                                <div className="slider_listing_attrs_wrapper">
                                                    <div className="slider_listing_attrs">
                                                        <div className="logo_title">
                                                            <img src="./assets/mb-logo.png"
                                                                 alt="Mercedes-Benz 2023 EQE 350 "/>
                                                            <h3 className="heading-font">Mercedes-Benz 2023 EQE
                                                                350</h3>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-battery"/>
                                                            <p className="attr attr_name">Battery Size</p>
                                                            <p className="attr attr_value">90.0kWh</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-location-flag"/>
                                                            <p className="attr attr_name">Electric Range</p>
                                                            <p className="attr attr_value">410mi</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                            <p className="attr attr_name">0-60 mph</p>
                                                            <p className="attr attr_value">3.2s</p>
                                                        </div>
                                                        <div className="listing_attr">
                                                            <i className="stm-icon-engine"/>
                                                            <p className="attr attr_name">Engine</p>
                                                            <p className="attr attr_value">350hp</p>
                                                        </div>
                                                        <div className="listing_price">
                                                            <h4 className="sale_price">$65 000</h4>
                                                            <h3>$58 900</h3>
                                                            <a href="https://auction.iauto.no"
                                                               className="slider_attr_btn">More info</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slider_hexagon_nav stm_swiper-button-prev" tabIndex={0}
                                             role="button" aria-label="Previous slide"
                                             aria-controls="swiper-wrapper-c101028fdc28e5b304">
                                            <div className="fa-stack">
                                                <i className="stm-icon-hexagon-left initial"/>
                                                <i className="stm-icon-hexagon-fill fa-stack-2x hovered"/>
                                                <i className="fas fa-chevron-left fa-stack-1x hovered"/>
                                            </div>
                                        </div>
                                        <div className="slider_hexagon_nav stm_swiper-button-next" tabIndex={0}
                                             role="button" aria-label="Next slide"
                                             aria-controls="swiper-wrapper-c101028fdc28e5b304">
                                            <div className="fa-stack">
                                                <i className="stm-icon-hexagon-right initial"/>
                                                <i className="stm-icon-hexagon-fill fa-stack-2x hovered"/>
                                                <i className="fas fa-chevron-right fa-stack-1x hovered"/>
                                            </div>
                                        </div>
                                        <span className="swiper-notification" aria-live="assertive"
                                              aria-atomic="true"/>
                                    </div>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    /* Small devices (landscape phones, 576px and up) */\n                    @media (min-width: 576px) {\n                      .stm_ev_swiper_slider .swiper {\n                        height: 310px !important;\n                      }\n                    }\n\n                    /* Medium devices (tablets, 768px and up) */\n                    @media (min-width: 768px) {\n                      .stm_ev_swiper_slider .swiper {\n                        height: 500px !important;\n                      }\n                    }\n\n                    /* Large devices (desktops, 992px and up) */\n                    @media (min-width: 992px) {\n                      .stm_ev_swiper_slider .swiper {\n                        height: 600px !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs\n                        .listing_attr {\n                        padding: 20px 50px 20px 0 !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs\n                        > div {\n                        padding-right: 30px !important;\n                        margin-right: 30px !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs\n                        .logo_title {\n                        padding-right: 20px !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs\n                        h3 {\n                        font-size: 24px !important;\n                      }\n                    }\n\n                    /* X-Large devices (large desktops, 1200px and up) */\n                    @media (min-width: 1200px) {\n                      .stm_ev_swiper_slider .swiper {\n                        height: 750px !important;\n                      }\n                    }\n\n                    /* Large devices (desktops, 992px and up) */\n                    @media (min-width: 1400px) {\n                      .stm_ev_swiper_slider .swiper {\n                        height: 967px !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs {\n                        min-width: 1225px !important;\n                        padding: 42px !important;\n                      }\n\n                      .stm_ev_swiper_slider\n                        .swiper\n                        .swiper-slide\n                        .slider_listing_attrs_wrapper\n                        .slider_listing_attrs\n                        .listing_attr {\n                        min-width: 134px !important;\n                      }\n                    }\n                  "}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row-full-width"/>
                <div className="vc_row wpb_row vc_row-fluid vc_custom_1634542160013">
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 vc_col-xs-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <h1 style={{
                                    fontSize: '42px',
                                    color: '#191e2b',
                                    lineHeight: '50px',
                                    textAlign: 'left'
                                }} className="vc_custom_heading vc_custom_1637143824735">
                                    WHY ELECTRIC<br/>
                                    VEHICLES?
                                </h1>
                                <div className="stm_ev_photo_collage stm_collage_62678">
                                    <div className="collage_wrap" style={{height: '660px'}}>
                                        <img src="./assets/collage-1.jpg" alt="Photo collage"/>
                                        <img src="./assets/collage-2.jpg" style={{top: '169px'}}
                                             alt="Photo collage"/>
                                        <img src="./assets/collage-3.jpg" style={{top: '383px'}}
                                             alt="Photo collage"/>
                                    </div>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    @media (min-width: 992px) {\n                      .stm_collage_62678 .collage_wrap img:nth-child(even) {\n                        border: 15px solid #ffffff;\n                        left: 120px;\n                      }\n                    }\n                  "}}/>
                            </div>
                        </div>
                    </div>
                    <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-md-6 vc_col-xs-12"
                         id="why_block_icons">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="
                      icon-box
                      vc_custom_1638330374491
                      icon_box_31960
                      stm-layout-box-car_dealer
                    " style={{color: '#232628'}}>
                                    <div className="boat-line"/>
                                    <div
                                        className="icon boat-third-color icon_element_86423 vc_custom_1638330374490"
                                        style={{fontSize: '79px', color: '#0d46ff'}}>
                                        <i className="stm-icon-checked"/>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="title heading-font" style={{color: '#232628'}}>Safety</h3>
                                        <div className="content heading-font" style={{fontSize: '14px'}}>
                                            <p className="p1">
                                                Electric Cars are extremely reliable and secure. After all,
                                                electricity is
                                                not flammable!
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    \t.icon_element_86423 i::before {\n                    \tcolor: #0d46ff!important;\n                    }\n\n                    \t\t.icon_box_31960 {\n                    \t\tbackground-color: #ffffff;\n                    \t}\n\n                    \t.icon_box_31960 .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 0.9);\n                    \t}\n\n                    \t.icon_box_31960:hover .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 1);\n                    \t}\n\n                    \t.icon-box .icon-text .content a {\n                    \tcolor: #232628;\n                    }\n                  "}}/>
                                <div className="
                      icon-box
                      vc_custom_1638330391111
                      icon_box_75269
                      stm-layout-box-car_dealer
                    " style={{color: '#232628'}}>
                                    <div className="boat-line"/>
                                    <div
                                        className="icon boat-third-color icon_element_51909 vc_custom_1638330391111"
                                        style={{fontSize: '79px', color: '#0d46ff'}}>
                                        <i className="stm-icon-charging-cost"/>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="title heading-font" style={{color: '#232628'}}>Fuel Cost</h3>
                                        <div className="content heading-font" style={{fontSize: '14px'}}>
                                            <p className="p1">
                                                Electricity is known for its relatively cheap cost and, as a result,
                                                will
                                                be much more affordable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    \t.icon_element_51909 i::before {\n                    \tcolor: #0d46ff!important;\n                    }\n\n                    \t\t.icon_box_75269 {\n                    \t\tbackground-color: #ffffff;\n                    \t}\n\n                    \t.icon_box_75269 .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 0.9);\n                    \t}\n\n                    \t.icon_box_75269:hover .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 1);\n                    \t}\n\n                    \t.icon-box .icon-text .content a {\n                    \tcolor: #232628;\n                    }\n                  "}}/>
                                <div className="
                      icon-box
                      vc_custom_1638330429441
                      icon_box_63052
                      stm-layout-box-car_dealer
                    " style={{color: '#232628'}}>
                                    <div className="boat-line"/>
                                    <div
                                        className="icon boat-third-color icon_element_32393 vc_custom_1638330429439"
                                        style={{fontSize: '79px', color: '#0d46ff'}}>
                                        <i className="stm-icon-car-spin"/>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="title heading-font" style={{color: '#232628'}}>
                                            Driver Fatigue &amp; Silence
                                        </h3>
                                        <div className="content heading-font" style={{fontSize: '14px'}}>
                                            <p className="p1">
                                                Less noise means living in large cities with electric cars is much
                                                more
                                                comfortable.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    \t.icon_element_32393 i::before {\n                    \tcolor: #0d46ff!important;\n                    }\n\n                    \t\t.icon_box_63052 {\n                    \t\tbackground-color: #ffffff;\n                    \t}\n\n                    \t.icon_box_63052 .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 0.9);\n                    \t}\n\n                    \t.icon_box_63052:hover .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 1);\n                    \t}\n\n                    \t.icon-box .icon-text .content a {\n                    \tcolor: #232628;\n                    }\n                  "}}/>
                                <div
                                    className="icon-box vc_custom_1638330444326 icon_box_2665 stm-layout-box-car_dealer"
                                    style={{color: '#232628'}}>
                                    <div className="boat-line"/>
                                    <div className="icon boat-third-color icon_element_4188 vc_custom_1638330444325"
                                         style={{fontSize: '79px', color: '#0d46ff'}}>
                                        <i className="stm-icon-no-oil-sign"/>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="title heading-font"
                                            style={{color: '#232628'}}>Maintenance</h3>
                                        <div className="content heading-font" style={{fontSize: '14px'}}>
                                            <p className="p1">
                                                Simplified design – repairs are less expensive and take less time.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    \t.icon_element_4188 i::before {\n                    \tcolor: #0d46ff!important;\n                    }\n\n                    \t\t.icon_box_2665 {\n                    \t\tbackground-color: #ffffff;\n                    \t}\n\n                    \t.icon_box_2665 .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 0.9);\n                    \t}\n\n                    \t.icon_box_2665:hover .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 1);\n                    \t}\n\n                    \t.icon-box .icon-text .content a {\n                    \tcolor: #232628;\n                    }\n                  "}}/>
                                <div className="
                      icon-box
                      vc_custom_1637584984758
                      icon_box_34289
                      stm-layout-box-car_dealer
                    " style={{color: '#232628'}}>
                                    <div className="boat-line"/>
                                    <div
                                        className="icon boat-third-color icon_element_75590 vc_custom_1637584984758"
                                        style={{fontSize: '79px', color: '#0d46ff'}}>
                                        <i className="stm-icon-leaf"/>
                                    </div>
                                    <div className="icon-text">
                                        <h3 className="title heading-font"
                                            style={{color: '#232628'}}>Environment</h3>
                                        <div className="content heading-font" style={{fontSize: '14px'}}>
                                            <p>
                          <span style={{color: '#555555'}}>Owners of electric or hybrid vehicles have a much lower cost to run.
                            The fuel cost to run an EV is roughly one third the cost of a gasoline
                            powered car.</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="clearfix"/>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    \t.icon_element_75590 i::before {\n                    \tcolor: #0d46ff!important;\n                    }\n\n                    \t\t.icon_box_34289 {\n                    \t\tbackground-color: #ffffff;\n                    \t}\n\n                    \t.icon_box_34289 .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 0.9);\n                    \t}\n\n                    \t.icon_box_34289:hover .icon-box-bottom-triangle {\n                    \t\tborder-right-color: rgba(255,255,255, 1);\n                    \t}\n\n                    \t.icon-box .icon-text .content a {\n                    \tcolor: #232628;\n                    }\n                  "}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true"
                     className="vc_row wpb_row vc_row-fluid vc_custom_1637661994854" style={{
                    position: 'relative',
                    left: '-604.375px',
                    boxSizing: 'border-box',
                    width: '2378px',
                    maxWidth: '2378px'
                }}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="ev_featured_vehicles_carousel vc_custom_1638265459115">
                                    <div className="title_nav">
                                        <div className="title heading-font" style={{color: '#ffffff'}}>FEATURED
                                            ITEMS
                                        </div>
                                        <div className="hexagon_nav">
                                            <div className="fa-stack stm-hex-next_92416">
                                                <i className="stm-icon-hexagon-left initial"/>
                                                <i className="stm-icon-hexagon-fill fa-stack-2x hovered"/>
                                                <i className="fas fa-chevron-left fa-stack-1x hovered"/>
                                            </div>
                                            <div className="fa-stack stm-hex-prev_92416">
                                                <i className="stm-icon-hexagon-right initial"/>
                                                <i className="stm-icon-hexagon-fill fa-stack-2x hovered"/>
                                                <i className="fas fa-chevron-right fa-stack-1x hovered"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing-car-items-units">
                                        <div className="
                          listing-car-items listing-cars-carousel
                          owl-carousel
                          text-center
                          clearfix
                          featured_vehicles_carousel_92416
                          owl-loaded owl-drag
                        ">
                                            <div className="owl-stage-outer">
                                                <div className="owl-stage" style={{
                                                    transform: 'translate3d(-5578px, 0px, 0px)',
                                                    transition: 'all 0s ease 0s',
                                                    width: '11158px'
                                                }}>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-5f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-18-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-24-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>3 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-57-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Audi 2021
                                                                                </div>
                                                                                E-tron GT 320
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Our price </span>
                                                                                    $75 000
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-5a-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-7f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-8b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>6 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-9b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Jaguar
                                                                                    2022
                                                                                </div>
                                                                                I-Pace 412
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $75 000
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-1e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-22-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-58-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan-2021-1600-05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>7 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan-2021-1600-8e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Porsche
                                                                                    2020
                                                                                </div>
                                                                                Taycan 340
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Best deal </span>
                                                                                    $123 800
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/02-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/03-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/04-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div
                                                                                    className="labels">Mercedes-Benz
                                                                                    2023
                                                                                </div>
                                                                                EQE 350
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $58 900
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-4d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-5d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-6c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>6 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-18-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Toyota
                                                                                    2021
                                                                                </div>
                                                                                Prius 320
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $30 999
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-0d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>9 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-02-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Nissan
                                                                                    2022
                                                                                </div>
                                                                                Leaf 292
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Price </span>
                                                                                    $32 400
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>3 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div
                                                                                    className="labels">Mercedes-Benz
                                                                                    2021
                                                                                </div>
                                                                                EQS 315
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $99 500
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-03-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>1 more photo</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0a-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Chevrolet
                                                                                    2018
                                                                                </div>
                                                                                Bolt 280
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $38 990
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item active" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-5f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-18-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-24-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>3 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Audi-e-tron_GT_quattro-2022-1600-57-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Audi E-tron GT"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Audi 2021
                                                                                </div>
                                                                                E-tron GT 320
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Our price </span>
                                                                                    $75 000
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item active" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-5a-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-7f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-8b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>6 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Jaguar-I-Pace-2019-1600-9b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Jaguar I Pace"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Jaguar
                                                                                    2022
                                                                                </div>
                                                                                I-Pace 412
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $75 000
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item active" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-1e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-22-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan_4S_Cross_Turismo-2022-1600-58-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan-2021-1600-05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>7 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Porsche-Taycan-2021-1600-8e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Porsche Taycan 4S"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Porsche
                                                                                    2020
                                                                                </div>
                                                                                Taycan 340
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Best deal </span>
                                                                                    $123 800
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/02-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/03-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/04-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/05-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz 2023 EQE"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div
                                                                                    className="labels">Mercedes-Benz
                                                                                    2023
                                                                                </div>
                                                                                EQE 350
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $58 900
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-4d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-5d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-6c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>6 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Toyota-Prius-2019-1600-18-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Toyota Prius"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Toyota
                                                                                    2021
                                                                                </div>
                                                                                Prius 320
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $30 999
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-0d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-1e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>9 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Nissan-Leaf-2018-1600-02-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Nissan Leaf"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Nissan
                                                                                    2022
                                                                                </div>
                                                                                Leaf 292
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> Price </span>
                                                                                    $32 400
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-01-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0d-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>3 more photos</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Mercedes-Benz EQS"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div
                                                                                    className="labels">Mercedes-Benz
                                                                                    2021
                                                                                </div>
                                                                                EQS 315
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $99 500
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-item cloned" style={{width: '697.33px'}}>
                                                        <div className="dp-in">
                                                            <div className="listing-car-item">
                                                                <div className="listing-car-item-inner">
                                                                    <a href="https://auction.iauto.no"
                                                                       className="rmv_txt_drctn"
                                                                       title="Featured listing">
                                                                        <div className="interactive-hoverable"
                                                                             style={{
                                                                                 minWidth: '667.324px',
                                                                                 minHeight: '296px'
                                                                             }}>
                                                                            <div className="hoverable-wrap">
                                                                                <div
                                                                                    className="hoverable-unit active">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-03-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0c-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0e-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0f-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="hoverable-unit">
                                                                                    <div className="thumb">
                                                                                        <div className="remaining">
                                                                                            <i className="stm-icon-album"/>
                                                                                            <p>1 more photo</p>
                                                                                        </div>
                                                                                        <img
                                                                                            src="./assets/Chevrolet-Bolt_EUV-2022-1600-0a-536x382.jpg"
                                                                                            className="lazy img-responsive"
                                                                                            alt="Chevrolet Bolt"/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="hoverable-indicators">
                                                                                <div className="indicator active"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                                <div className="indicator"/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="listing-car-item-meta heading-font">
                                                                            <div className="car-title">
                                                                                <div className="labels">Chevrolet
                                                                                    2018
                                                                                </div>
                                                                                Bolt 280
                                                                            </div>
                                                                            <div className="price_details">
                                                                                <div className="car-price">
                                                                                    <span> MSRP: </span>
                                                                                    $38 990
                                                                                </div>
                                                                                <div
                                                                                    className="details_btn">Details
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-controls">
                                                <div className="owl-dots">
                                                    <button role="button" className="owl-dot"></button>
                                                    <button role="button" className="owl-dot active">
                                                    </button>
                                                    <button role="button" className="owl-dot"></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row-full-width"/>
                <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div id="ev_recent_94744"
                                     className="ev_recent_listings_grid vc_custom_1634644480171">
                                    <div className="title_nav">
                                        <div className="title heading-font">RECENTLY ADDED</div>
                                        <div className="all_listings">
                                            <a href="https://auction.iauto.no" className="view_all_button">
                                                View all inventory
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row car-listing-row">
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-01-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-01-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-01-510x320.jpg 2x
                                      " src="./assets/Volkswagen-e-Golf-2017-1600-01-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Volkswagen e-Golf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-0e-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-0e-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-0e-510x320.jpg 2x
                                      " src="./assets/Volkswagen-e-Golf-2017-1600-0e-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Volkswagen e-Golf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-1e-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-1e-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-1e-510x320.jpg 2x
                                      " src="./assets/Volkswagen-e-Golf-2017-1600-1e-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Volkswagen e-Golf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-15-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-15-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-15-510x320.jpg 2x
                                      " src="./assets/Volkswagen-e-Golf-2017-1600-15-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Volkswagen e-Golf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>2 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-20-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-20-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Volkswagen-e-Golf-2017-1600-20-510x320.jpg 2x
                                      " src="./assets/Volkswagen-e-Golf-2017-1600-20-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Volkswagen e-Golf"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={772}
                                                         data-title="Volkswagen 2021 e-Golf 330 "
                                                         data-toggle="tooltip" data-placement="right" data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Volkswagen 2021</div>
                                                            e-Golf 330
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>380mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>81.5kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>187kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.8s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-01-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-01-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-01-510x320.jpg 2x
                                      " src="./assets/Toyota-Prius-2019-1600-01-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Toyota Prius"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-4d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-4d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-4d-510x320.jpg 2x
                                      " src="./assets/Toyota-Prius-2019-1600-4d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Toyota Prius"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-5d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-5d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-5d-510x320.jpg 2x
                                      " src="./assets/Toyota-Prius-2019-1600-5d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Toyota Prius"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-6c-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-6c-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-6c-510x320.jpg 2x
                                      " src="./assets/Toyota-Prius-2019-1600-6c-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Toyota Prius"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>6 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-18-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-18-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Toyota-Prius-2019-1600-18-510x320.jpg 2x
                                      " src="./assets/Toyota-Prius-2019-1600-18-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Toyota Prius"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="stm-badge-directory heading-font">Special
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={759}
                                                         data-title="Toyota 2021 Prius 320 " data-toggle="tooltip"
                                                         data-placement="right" data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Toyota 2021</div>
                                                            Prius 320
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>378mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>81.5kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>172kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.1s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-04-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-04-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-04-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_X-2017-1600-04-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model X"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0f-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0f-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0f-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_X-2017-1600-0f-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model X"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1b-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_X-2017-1600-1b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model X"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1c-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1c-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-1c-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_X-2017-1600-1c-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model X"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>1 more photo</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0a-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0a-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_X-2017-1600-0a-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_X-2017-1600-0a-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model X"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={741}
                                                         data-title="Tesla 2022 Model X 350 " data-toggle="tooltip"
                                                         data-placement="right" data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Tesla 2022</div>
                                                            Model X 350
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>334mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>90.7kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>185kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>5.2s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/main-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/main-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/main-510x320.jpg 2x
                                      " src="./assets/main-255x160.jpg" className="lazy img-responsive"
                                                                        alt="Tesla Model S"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-88-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-88-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-88-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_S_UK-Version-2013-1600-88-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model S"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-92-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-92-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S_UK-Version-2013-1600-92-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_S_UK-Version-2013-1600-92-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model S"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0a-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0a-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0a-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_S-2021-1600-0a-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model S"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>4 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0c-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0c-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Tesla-Model_S-2021-1600-0c-510x320.jpg 2x
                                      " src="./assets/Tesla-Model_S-2021-1600-0c-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Tesla Model S"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={730}
                                                         data-title="Tesla 2021 Model S 320 " data-toggle="tooltip"
                                                         data-placement="right" data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Tesla 2021</div>
                                                            Model S 320
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>378mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>81.4kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>172kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.4s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-0b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-0b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-0b-510x320.jpg 2x
                                      " src="./assets/Peugeot-e-2008-2020-1600-0b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Peugeot e2008"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-1f-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-1f-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-1f-510x320.jpg 2x
                                      " src="./assets/Peugeot-e-2008-2020-1600-1f-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Peugeot e2008"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-2e-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-2e-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-2e-510x320.jpg 2x
                                      " src="./assets/Peugeot-e-2008-2020-1600-2e-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Peugeot e2008"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-3d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-3d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-3d-510x320.jpg 2x
                                      " src="./assets/Peugeot-e-2008-2020-1600-3d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Peugeot e2008"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>5 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-12-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-12-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Peugeot-e-2008-2020-1600-12-510x320.jpg 2x
                                      " src="./assets/Peugeot-e-2008-2020-1600-12-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Peugeot e2008"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={709}
                                                         data-title="Peugeot 2022 e2008 321 " data-toggle="tooltip"
                                                         data-placement="right"
                                                         data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Peugeot 2022</div>
                                                            e2008 321
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>378mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>81.4kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>169kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.6s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-0d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-0d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-0d-510x320.jpg 2x
                                      " src="./assets/Nissan-Leaf-2018-1600-0d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Nissan Leaf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1b-510x320.jpg 2x
                                      " src="./assets/Nissan-Leaf-2018-1600-1b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Nissan Leaf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1d-510x320.jpg 2x
                                      " src="./assets/Nissan-Leaf-2018-1600-1d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Nissan Leaf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1e-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1e-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-1e-510x320.jpg 2x
                                      " src="./assets/Nissan-Leaf-2018-1600-1e-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Nissan Leaf"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>9 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-02-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-02-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Nissan-Leaf-2018-1600-02-510x320.jpg 2x
                                      " src="./assets/Nissan-Leaf-2018-1600-02-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Nissan Leaf"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="stm-badge-directory heading-font">Special
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={693}
                                                         data-title="Nissan 2022 Leaf 292 " data-toggle="tooltip"
                                                         data-placement="right"
                                                         data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Nissan 2022</div>
                                                            Leaf 292
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>381mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>72.6kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>122kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.9s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-01-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-01-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-01-510x320.jpg 2x
                                      " src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-01-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Mercedes-Benz EQS"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0d-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0d-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0d-510x320.jpg 2x
                                      " src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0d-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Mercedes-Benz EQS"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0c-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0c-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-0c-510x320.jpg 2x
                                      " src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-0c-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Mercedes-Benz EQS"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-510x320.jpg 2x
                                      " src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-1-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Mercedes-Benz EQS"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>3 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Mercedes-Benz-EQS53_AMG-2022-1600-1b-510x320.jpg 2x
                                      " src="./assets/Mercedes-Benz-EQS53_AMG-2022-1600-1b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Mercedes-Benz EQS"/>
                                                                </div>
                                                            </div>
                                                            <div className="stm-badge-directory heading-font">Buy
                                                                now
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={683}
                                                         data-title="Mercedes-Benz 2021 EQS 315 "
                                                         data-toggle="tooltip" data-placement="right"
                                                         data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Mercedes-Benz 2021</div>
                                                            EQS 315
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>377mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>87.4kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>170kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>5.2s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="
                          col-md-3 col-sm-4 col-xs-12 col-xxs-12
                          stm-template-front-loop
                          ev-filter-loop
                        ">
                                            <a href="https://auction.iauto.no" className="rmv_txt_drctn xx">
                                                <div className="image">
                                                    <div className="interactive-hoverable">
                                                        <div className="hoverable-wrap">
                                                            <div className="hoverable-unit active">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-510x320.jpg 2x
                                      " src="./assets/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Hyundai Ioniq"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-1b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-1b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-1b-510x320.jpg 2x
                                      " src="./assets/Hyundai-Ioniq_5-2022-1600-1b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Hyundai Ioniq"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-3c-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-3c-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-3c-510x320.jpg 2x
                                      " src="./assets/Hyundai-Ioniq_5-2022-1600-3c-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Hyundai Ioniq"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-4b-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-4b-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-4b-510x320.jpg 2x
                                      " src="./assets/Hyundai-Ioniq_5-2022-1600-4b-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Hyundai Ioniq"/>
                                                                </div>
                                                            </div>
                                                            <div className="hoverable-unit">
                                                                <div className="thumb">
                                                                    <div className="remaining">
                                                                        <i className="stm-icon-album"/>
                                                                        <p>5 more photos</p>
                                                                    </div>
                                                                    <img
                                                                        data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-5e-255x160.jpg"
                                                                        srcSet="
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-5e-255x160.jpg 1x,
                                        https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-5e-510x320.jpg 2x
                                      " src="./assets/Hyundai-Ioniq_5-2022-1600-5e-255x160.jpg"
                                                                        className="lazy img-responsive"
                                                                        alt="Hyundai Ioniq"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="hoverable-indicators">
                                                            <div className="indicator active"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                            <div className="indicator"/>
                                                        </div>
                                                    </div>
                                                    <div className="stm-listing-compare stm-compare-directory-new"
                                                         data-post-type="listings" data-id={657}
                                                         data-title="Hyundai 2019 Ioniq 295 " data-toggle="tooltip"
                                                         data-placement="right"
                                                         data-original-title="Add to compare">
                                                        <i className="stm-boats-icon-add-to-compare"/>
                                                    </div>
                                                </div>
                                                {/* image */}
                                                <div className="listing-car-item-meta"
                                                     style={{minHeight: '187.25px'}}>
                                                    <div className="car-meta-top heading-font clearfix">
                                                        <div className="car-title">
                                                            <div className="labels">Hyundai 2019</div>
                                                            Ioniq 295
                                                        </div>
                                                    </div>
                                                    <div className="car-meta-bottom">
                                                        <ul>
                                                            <li title="Electric Range">
                                                                <i className="stm-icon-location-flag"/>
                                                                <span>410mi</span>
                                                            </li>
                                                            <li title="Battery Size">
                                                                <i className="stm-icon-battery"/>
                                                                <span>78.4kWh</span>
                                                            </li>
                                                            <li title="Power">
                                                                <i className="stm-icon-charge-bolt"/>
                                                                <span>164kW</span>
                                                            </li>
                                                            <li title="0-60 mph">
                                                                <i className="stm-icon-speedometer-circular-tool"/>
                                                                <span>4.0s</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="title_nav">
                                    <div className="title heading-font" style={{fontSize: '50px', fontFamily: 'rubic verdana' ,fontWeight: 'bold'}}>Recently Auctions</div>
                                    </div>
                                    <div className="row car-listing-row">
                                        <Grid  sx={{ mt: 3 }}>
                                            {
                                                auctions.map((auction, index) => {
                                                return (
                                                    <div className="
                                                        col-md-3 col-sm-4 col-xs-12 col-xxs-12
                                                        stm-template-front-loop
                                                        ev-filter-loop
                                                    " key={new Date() + index}>
                                                        <Link to={"pages/auction-pages/bidding-auction/" + auction._id} className="rmv_txt_drctn xx">
                                                            <div className="image">
                                                                <div className="interactive-hoverable">
                                                                    <div className="hoverable-wrap">
                                                                        <div className="hoverable-unit active">
                                                                            <div className="thumb">
                                                                                {/* <AuctionCard image = {auction.image} className="lazy img-responsive"/> */}
                                                                                <img
                                                                                    // data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                                    // srcSet="
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg 1x,
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-510x320.jpg 2x" 
                                                                                    src={`data:${auction.image.contentType[0]};base64,${auction.image.data[0]}`}
                                                                                    className="lazy img-responsive"
                                                                                    alt={auction.itemName}/>
                                                                                    
                                                                            </div>
                                                                        </div>
                                                                        <div className="hoverable-unit">
                                                                            <div className="thumb">
                                                                            <img
                                                                                    // data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                                    // srcSet="
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg 1x,
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-510x320.jpg 2x" 
                                                                                    src={`data:${auction.image.contentType[1]};base64,${auction.image.data[1]}`}
                                                                                    className="lazy img-responsive"
                                                                                    alt={auction.itemName}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="hoverable-unit">
                                                                            <div className="thumb">
                                                                            <img
                                                                                    // data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                                    // srcSet="
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg 1x,
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-510x320.jpg 2x" 
                                                                                    src={`data:${auction.image.contentType[2]};base64,${auction.image.data[2]}`}
                                                                                    className="lazy img-responsive"
                                                                                    alt={auction.itemName}/>
                                                                            </div>
                                                                        </div>
                                                                        <div className="hoverable-unit">
                                                                            <div className="thumb">
                                                                            <img
                                                                                    // data-src="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg"
                                                                                    // srcSet="
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-255x160.jpg 1x,
                                                                                    //             https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/Hyundai-Ioniq_5-2022-1600-01-510x320.jpg 2x" 
                                                                                    src={`data:${auction.image.contentType[3]};base64,${auction.image.data[3]}`}
                                                                                    className="lazy img-responsive"
                                                                                    alt={auction.itemName}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="hoverable-indicators">
                                                                        <div className="indicator active"/>
                                                                        <div className="indicator"/>
                                                                        <div className="indicator"/>
                                                                        <div className="indicator"/>
                                                                    </div>
                                                                </div>
                                                                <div className="stm-listing-compare stm-compare-directory-new"
                                                                    data-post-type="listings" data-id={657}
                                                                    data-title="Hyundai 2019 Ioniq 295 " data-toggle="tooltip"
                                                                    data-placement="right" 
                                                                    data-original-title="Add to compare">
                                                                    <i className="stm-boats-icon-add-to-compare"/>
                                                                </div>
                                                            </div>
                                                            {/* image */}
                                                            <div className="listing-car-item-meta"
                                                                style={{minHeight: '187.25px'}}>
                                                                <div className="car-meta-top heading-font clearfix">
                                                                    <div className="car-title">
                                                                        <div className="labels"></div>
                                                                        {auction.itemName}
                                                                    </div>
                                                                </div>
                                                                <div className="car-meta-bottom">
                                                                    <ul>
                                                                        <li title="Electric Range">
                                                                            <i className="stm-icon-location-flag"/>
                                                                            <span>410mi</span>
                                                                        </li>
                                                                        <li title="Battery Size">
                                                                            <i className="stm-icon-battery"/>
                                                                            <span>78.4kWh</span>
                                                                        </li>
                                                                        <li title="Power">
                                                                            <i className="stm-icon-charge-bolt"/>
                                                                            <span>164kW</span>
                                                                        </li>
                                                                        <li title="0-60 mph">
                                                                            <i className="stm-icon-speedometer-circular-tool"/>
                                                                            <span>4.0s</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                                })
                                            }
                                        </Grid>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-vc-full-width="true" data-vc-full-width-init="true"
                     className="vc_row wpb_row vc_row-fluid vc_custom_1634716334550" style={{
                    position: 'relative',
                    left: '-604.375px',
                    boxSizing: 'border-box',
                    width: '2378px',
                    maxWidth: '2378px',
                    paddingLeft: '604.375px',
                    paddingRight: '603.625px'
                }}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <h1 style={{
                                    fontSize: '42px',
                                    color: '#ffffff',
                                    lineHeight: '55px',
                                    textAlign: 'left'
                                }} className="vc_custom_heading vc_custom_1638265713255">
                                    OVER 10 YEARS WE SELL<br/>
                                    ELECTRIC CARS
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row-full-width"/>
                <div data-vc-full-width="true" data-vc-full-width-init="true"
                     className="vc_row wpb_row vc_row-fluid vc_custom_1638265757703" style={{
                    position: 'relative',
                    left: '-604.375px',
                    boxSizing: 'border-box',
                    width: '2378px',
                    maxWidth: '2378px',
                    paddingLeft: '604.375px',
                    paddingRight: '603.625px'
                }}>
                    <div className="
                wpb_column
                vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6 vc_col-xs-12
              ">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="stm-counter-electric stm-counter clearfix">
                                    <div className="stm-ev-counter heading-font" id="counter_64996">15 514</div>
                                    <div className="stm-counter-label">
                                        <div className="h4">CARS SOLD</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="
                wpb_column
                vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6 vc_col-xs-12
              ">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="stm-counter-electric stm-counter clearfix">
                                    <div className="stm-ev-counter heading-font" id="counter_88415">1 201</div>
                                    <div className="stm-counter-label">
                                        <div className="h4">CARS FOR SALE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="
                wpb_column
                vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6 vc_col-xs-12
              ">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="stm-counter-electric stm-counter clearfix">
                                    <div className="stm-ev-counter heading-font" id="counter_46374">2 150</div>
                                    <div className="stm-counter-label">
                                        <div className="h4">REVIEWS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="
                wpb_column
                vc_column_container vc_col-sm-6 vc_col-lg-3 vc_col-md-6 vc_col-xs-12
              ">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="stm-counter-electric stm-counter clearfix">
                                    <div className="stm-ev-counter heading-font" id="counter_22579">3 800</div>
                                    <div className="stm-counter-label">
                                        <div className="h4">VISITORS PER DAY</div>
                                    </div>
                                </div>
                                <style
                                    dangerouslySetInnerHTML={{__html: "\n                    #counter_22579::after {\n                      content: \"+\";\n                    }\n                  "}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row-full-width"/>
                <div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-parallax="1.5"
                     data-vc-parallax-image className="
              vc_row
              wpb_row
              vc_row-fluid vc_custom_1638208081288 vc_general vc_parallax
              stm-fixed-bg
              vc_parallax-content-moving
            " style={{
                    position: 'relative',
                    left: '-604.375px',
                    boxSizing: 'border-box',
                    width: '2378px',
                    maxWidth: '2378px',
                    paddingLeft: '604.375px',
                    paddingRight: '603.625px'
                }}>
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1638265853796">
                                    <div className="wpb_column vc_column_container vc_col-sm-4">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="wpb_text_column wpb_content_element">
                                                    <div className="wpb_wrapper">
                                                        <h4 className="heading-font" style={{
                                                            color: '#ffffff',
                                                            fontSize: '18px',
                                                            marginBottom: '22px',
                                                            fontWeight: 600
                                                        }}>
                                                            FINANCING MADE EASY
                                                        </h4>
                                                        <p style={{
                                                            color: '#ffffff',
                                                            fontSize: '14px',
                                                            fontWeight: 400,
                                                            fontFamily: 'Montserrat'
                                                        }}>
                                                            Distillery succulents twee leggings thundercats. Shabby
                                                            chic ramps
                                                            gochujang pickled. Etsy offal literally fingerstache
                                                            pickled, pork
                                                            belly mlkshk irony tumeric.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-4">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="wpb_text_column wpb_content_element">
                                                    <div className="wpb_wrapper">
                                                        <h4 className="heading-font" style={{
                                                            color: '#ffffff',
                                                            fontSize: '18px',
                                                            marginBottom: '22px'
                                                        }}>
                                                            TRUSTED BY THOUSANDS
                                                        </h4>
                                                        <p style={{
                                                            color: '#ffffff',
                                                            fontSize: '14px',
                                                            fontWeight: 400,
                                                            fontFamily: 'Montserrat'
                                                        }}>
                                                            Distillery succulents twee leggings thundercats. Shabby
                                                            chic ramps
                                                            gochujang pickled. Etsy offal literally fingerstache
                                                            pickled, pork
                                                            belly mlkshk irony tumeric.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpb_column vc_column_container vc_col-sm-4">
                                        <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                                <div className="wpb_text_column wpb_content_element">
                                                    <div className="wpb_wrapper">
                                                        <h4 className="heading-font" style={{
                                                            color: '#ffffff',
                                                            fontSize: '18px',
                                                            marginBottom: '22px'
                                                        }}>
                                                            WIDE RANGE OF BRANDS
                                                        </h4>
                                                        <p style={{
                                                            color: '#ffffff',
                                                            fontSize: '14px',
                                                            fontWeight: 400,
                                                            fontFamily: 'Montserrat'
                                                        }}>
                                                            Distillery succulents twee leggings thundercats. Shabby
                                                            chic ramps
                                                            gochujang pickled. Etsy offal literally fingerstache
                                                            pickled, pork
                                                            belly mlkshk irony tumeric.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="
                      stm-carousel-brands
                      owl-carousel
                      partners-carousel-27842
                      owl-loaded owl-drag
                    ">
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" style={{
                                            transform: 'translate3d(-1725px, 0px, 0px)',
                                            transition: 'all 0s ease 0s',
                                            width: '3451px'
                                        }}>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={84} height={71}
                                                             src="./assets/nissan-logo-white.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="nissan-logo-white"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={56} height={72} src="./assets/Tesla_Motors.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Tesla_Motors"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={70} height={70} src="./assets/Path_109.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Path_109"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74} src="./assets/Group_454.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Group_454"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74}
                                                             src="./assets/BMW-logo-fallback.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="BMW-logo-fallback"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={120} height={72} src="./assets/audi@1x.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="audi@1x"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={84} height={71}
                                                             src="./assets/nissan-logo-white.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="nissan-logo-white"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={56} height={72} src="./assets/Tesla_Motors.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Tesla_Motors"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={70} height={70} src="./assets/Path_109.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Path_109"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74} src="./assets/Group_454.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Group_454"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74}
                                                             src="./assets/BMW-logo-fallback.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="BMW-logo-fallback"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={120} height={72} src="./assets/audi@1x.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="audi@1x"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={84} height={71}
                                                             src="./assets/nissan-logo-white.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="nissan-logo-white"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={56} height={72} src="./assets/Tesla_Motors.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Tesla_Motors"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned active"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={70} height={70} src="./assets/Path_109.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Path_109"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74} src="./assets/Group_454.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="Group_454"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={74} height={74}
                                                             src="./assets/BMW-logo-fallback.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="BMW-logo-fallback"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="owl-item cloned"
                                                 style={{width: '181.667px', marginRight: '10px'}}>
                                                <div className="brands-carousel-item">
                                                    <div className="brands-carousel-item-inner">
                                                        <img width={120} height={72} src="./assets/audi@1x.png"
                                                             className="attachment-full" alt="" loading="lazy"
                                                             title="audi@1x"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="owl-nav disabled">
                                        <div className="owl-prev"/>
                                        <div className="owl-next"/>
                                    </div>
                                    <div className="owl-dots disabled"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vc_parallax-inner skrollable skrollable-before" data-bottom-top="top: -50%;"
                         data-top-bottom="top: 0%;"
                         style={{height: '150%', backgroundImage: 'url("")', top: '-50%'}}/>
                </div>
                <div className="vc_row-full-width"/>
                <div className="vc_row wpb_row vc_row-fluid vc_custom_1634722728325">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <div className="ev_online_shop_products">
                                    <div className="title_nav">
                                        <div className="title heading-font">EV ACCESSORIES</div>
                                        <div className="all_listings">
                                            <a href="https://auction.iauto.no" className="view_all_button">
                                                Online shop
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row car-listing-row">
                                        <div
                                            className="col-md-4 col-sm-6 col-xs-12 col-xxs-12 ev_shop_products_item">
                                            <div className="image">
                                                <img width={350} height={356}
                                                     src="./assets/wallbox-pulsar-plus-ocpp-evc-5m-type-1-74kw-white-350x356.jpg"
                                                     className="attachment-stm-img-350-356 size-stm-img-350-356"
                                                     alt="Wallbox type 1 7.4 kW" decoding="async" loading="lazy"
                                                     data-retina="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/wallbox-pulsar-plus-ocpp-evc-5m-type-1-74kw-white-798x466.jpg"/>
                                                <div className="btn_wrap">
                                                    <a href="https://auction.iauto.no" value={547}
                                                       className="ajax_add_to_cart add_to_cart_button"
                                                       data-product_id={547} data-product_sku
                                                       aria-label="Add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            {/* image */}
                                            <a href="https://auction.iauto.no">
                                                <h3 className="product_title">Wallbox type 1 7.4 kW</h3>
                                            </a>
                                            <p className="product_price">
                                                    <span className="woocommerce-Price-amount amount"><span
                                                        className="woocommerce-Price-currencySymbol">$</span>380.00</span>
                                            </p>
                                        </div>
                                        <div
                                            className="col-md-4 col-sm-6 col-xs-12 col-xxs-12 ev_shop_products_item">
                                            <div className="image">
                                                <img width={350} height={356}
                                                     src="./assets/products-1780-350x356.jpg"
                                                     className="attachment-stm-img-350-356 size-stm-img-350-356"
                                                     alt="Zeta Type XL Racing Seat" decoding="async" loading="lazy"
                                                     data-retina="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/products-1780-798x466.jpg"/>
                                                <div className="btn_wrap">
                                                    <a href="https://auction.iauto.no" value={175}
                                                       className="ajax_add_to_cart add_to_cart_button"
                                                       data-product_id={175} data-product_sku
                                                       aria-label="Add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            {/* image */}
                                            <a href="https://auction.iauto.no">
                                                <h3 className="product_title">Zeta Type XL Racing Seat</h3>
                                            </a>
                                            <p className="product_price">
                                                    <span className="woocommerce-Price-amount amount"><span
                                                        className="woocommerce-Price-currencySymbol">$</span>800.00</span>
                                                <span className="woocommerce-Price-amount amount"><span
                                                    className="woocommerce-Price-currencySymbol">$</span>735.99</span>
                                            </p>
                                        </div>
                                        <div
                                            className="col-md-4 col-sm-6 col-xs-12 col-xxs-12 ev_shop_products_item">
                                            <div className="image">
                                                <img width={350} height={356} src="./assets/1-350x356.jpg"
                                                     className="attachment-stm-img-350-356 size-stm-img-350-356"
                                                     alt="Wallbox eMH3" decoding="async" loading="lazy"
                                                     data-retina="https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/1-798x466.jpg"/>
                                                <div className="btn_wrap">
                                                    <a href="https://auction.iauto.no" value={542}
                                                       className="ajax_add_to_cart add_to_cart_button"
                                                       data-product_id={542} data-product_sku
                                                       aria-label="Add to cart">
                                                        Add to cart
                                                    </a>
                                                </div>
                                            </div>
                                            {/* image */}
                                            <a href="https://auction.iauto.no">
                                                <h3 className="product_title">Wallbox eMH3</h3>
                                            </a>
                                            <p className="product_price">
                                                    <span className="woocommerce-Price-amount amount"><span
                                                        className="woocommerce-Price-currencySymbol">$</span>3,465.00</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vc_row wpb_row vc_row-fluid">
                    <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                            <div className="wpb_wrapper">
                                <style type="text/css"
                                       dangerouslySetInnerHTML={{__html: "\n                    .vc_custom_1638208212397 {\n                      background-image: url(https://motors.stylemixthemes.com/ev-dealership/wp-content/uploads/sites/21/2021/11/contact_background.jpg?id=940) !important;\n                      background-position: center !important;\n                      background-repeat: no-repeat !important;\n                      background-size: cover !important;\n                    }\n                    .vc_custom_1637147379403 {\n                      background-color: #102127 !important;\n                    }\n                    .vc_custom_1638208456824 {\n                      margin-bottom: 35px !important;\n                    }\n                    .vc_custom_1637732632862 {\n                      margin-top: 5px !important;\n                    }\n                    .vc_custom_1637732632863 {\n                      margin-bottom: 35px !important;\n                      padding-top: 50px !important;\n                      padding-right: 50px !important;\n                      padding-bottom: 0px !important;\n                      padding-left: 50px !important;\n                    }\n                    .vc_custom_1637732455014 {\n                      margin-top: 2px !important;\n                    }\n                    .vc_custom_1637732455015 {\n                      margin-bottom: 35px !important;\n                      padding-top: 0px !important;\n                      padding-right: 50px !important;\n                      padding-bottom: 0px !important;\n                      padding-left: 50px !important;\n                    }\n                    .vc_custom_1637732640584 {\n                      margin-top: 9px !important;\n                    }\n                    .vc_custom_1637732640587 {\n                      margin-bottom: 40px !important;\n                      padding-top: 0px !important;\n                      padding-right: 50px !important;\n                      padding-bottom: 0px !important;\n                      padding-left: 50px !important;\n                    }\n                    .vc_custom_1637124047867 {\n                      margin-top: 20px !important;\n                      margin-bottom: 50px !important;\n                    }\n                  "}}/>
                                <div className="sidebar-area-vc stm-sidebar-mode-vc">
                                    <div id="ev_footer_contact_block" data-vc-full-width="true"
                                         data-vc-full-width-init="true" data-vc-stretch-content="true" className="
                        vc_row
                        wpb_row
                        vc_row-fluid
                        ev_footer_contact_block
                        vc_row-o-equal-height vc_row-flex vc_row-no-padding vc_row-o-full-height
                      " style={{
                                        position: 'relative',
                                        left: '-604.375px',
                                        boxSizing: 'border-box',
                                        width: '2378px',
                                        maxWidth: '2378px'
                                    }}>
                                        <div className="
                          wpb_column
                          vc_column_container vc_col-sm-12 vc_col-md-8 vc_col-xs-12 vc_col-has-fill
                        ">
                                            <div className="vc_column-inner vc_custom_1638208212397">
                                                <div className="wpb_wrapper">
                                                    <div className="stm-contact-us-form-wrapper">
                                                        <h2 className="heading-font">Need a special deal? Contact
                                                            us</h2>
                                                        <div className="wpcf7 js" id="wpcf7-f837-p22-o1"
                                                             lang="en-US" dir="ltr">
                                                            <div className="screen-reader-response">
                                                                <p role="status" aria-live="polite"
                                                                   aria-atomic="true" className="stm-hidden"/>
                                                                <ul/>
                                                            </div>
                                                            <form action="/" method="post"
                                                                  className="wpcf7-form init"
                                                                  aria-label="Contact form" noValidate="novalidate"
                                                                  data-status="init">
                                                                <div style={{display: 'none'}}>
                                                                    <input type="hidden" name="_wpcf7"
                                                                           defaultValue={837}
                                                                           style={{height: '10px'}}/>
                                                                    <input type="hidden" name="_wpcf7_version"
                                                                           defaultValue="5.7.2"
                                                                           style={{height: '10px'}}/>
                                                                    <input type="hidden" name="_wpcf7_locale"
                                                                           defaultValue="en_US"
                                                                           style={{height: '10px'}}/>
                                                                    <input type="hidden" name="_wpcf7_unit_tag"
                                                                           defaultValue="wpcf7-f837-p22-o1"
                                                                           style={{height: '10px'}}/>
                                                                    <input type="hidden"
                                                                           name="_wpcf7_container_post"
                                                                           defaultValue={22}
                                                                           style={{height: '10px'}}/>
                                                                    <input type="hidden"
                                                                           name="_wpcf7_posted_data_hash"
                                                                           defaultValue style={{height: '10px'}}/>
                                                                </div>
                                                                <label>
                                                                    Your name
                                                                    <span className="wpcf7-form-control-wrap"
                                                                          data-name="your-name"><input size={40}
                                                                                                       className="
                                          wpcf7-form-control wpcf7-text wpcf7-validates-as-required
                                        " aria-required="true" aria-invalid="false" defaultValue type="text"
                                                                                                       name="your-name"
                                                                                                       style={{height: '10px'}}/></span>
                                                                </label>
                                                                <label>
                                                                    Your email
                                                                    <span className="wpcf7-form-control-wrap"
                                                                          data-name="your-email"><input size={40}
                                                                                                        className="
                                          wpcf7-form-control
                                          wpcf7-text
                                          wpcf7-email
                                          wpcf7-validates-as-required
                                          wpcf7-validates-as-email
                                        " aria-required="true" aria-invalid="false" defaultValue type="email"
                                                                                                        name="your-email"
                                                                                                        style={{height: '10px'}}/></span>
                                                                </label>
                                                                <label>
                                                                    Subject
                                                                    <span className="wpcf7-form-control-wrap"
                                                                          data-name="your-subject"><input size={40}
                                                                                                          className="
                                          wpcf7-form-control wpcf7-text wpcf7-validates-as-required
                                        " aria-required="true" aria-invalid="false" defaultValue type="text"
                                                                                                          name="your-subject"
                                                                                                          style={{height: '10px'}}/></span>
                                                                </label>
                                                                <label>
                                                                    Your message (optional)
                                                                    <span className="wpcf7-form-control-wrap"
                                                                          data-name="your-message">
                                      <textarea cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea"
                                                aria-invalid="false" name="your-message" style={{height: '10px'}}
                                                defaultValue={""}/>
                                    </span>
                                                                </label>
                                                                <input
                                                                    className="wpcf7-form-control has-spinner wpcf7-submit"
                                                                    type="submit" defaultValue="Submit"/><span
                                                                className="wpcf7-spinner"/>
                                                                <div className="wpcf7-response-output"
                                                                     aria-hidden="true"/>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="
                          wpb_column
                          vc_column_container vc_col-sm-12 vc_col-md-4 vc_col-xs-12 vc_col-has-fill
                        ">
                                            <div className="vc_column-inner vc_custom_1637147379403">
                                                <div className="wpb_wrapper">
                                                    <div style={{
                                                        width: '100%',
                                                        height: '450px',
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    }} id="stm_map-82402"
                                                         className="stm_gmap vc_custom_1638208456824">
                                                        <div style={{
                                                            height: '100%',
                                                            width: '100%',
                                                            position: 'absolute',
                                                            top: '0px',
                                                            left: '0px',
                                                            backgroundColor: 'rgb(229, 227, 223)'
                                                        }}>
                                                            <div className="gm-style" style={{
                                                                position: 'absolute',
                                                                zIndex: 0,
                                                                left: '0px',
                                                                top: '0px',
                                                                height: '100%',
                                                                width: '100%',
                                                                padding: '0px',
                                                                borderWidth: '0px',
                                                                margin: '0px'
                                                            }}>
                                                                <div>
                                                                    <button draggable="false"
                                                                            aria-label="Keyboard shortcuts"
                                                                            title="Keyboard shortcuts" type="button"
                                                                            style={{
                                                                                background: 'none transparent',
                                                                                display: 'block',
                                                                                border: 'none',
                                                                                margin: '0px',
                                                                                padding: '0px',
                                                                                textTransform: 'none',
                                                                                appearance: 'none',
                                                                                position: 'absolute',
                                                                                cursor: 'pointer',
                                                                                userSelect: 'none',
                                                                                zIndex: 1000002,
                                                                                outlineOffset: '3px',
                                                                                right: '0px',
                                                                                bottom: '0px',
                                                                                transform: 'translateX(100%)'
                                                                            }}/>
                                                                </div>
                                                                <div tabIndex={0} aria-label="Map"
                                                                     aria-roledescription="map" role="region"
                                                                     style={{
                                                                         position: 'absolute',
                                                                         zIndex: 0,
                                                                         left: '0px',
                                                                         top: '0px',
                                                                         height: '100%',
                                                                         width: '100%',
                                                                         padding: '0px',
                                                                         borderWidth: '0px',
                                                                         margin: '0px',
                                                                         cursor: 'url("https://maps.gstatic.com/mapfiles/openhand_8_8.cur"), default',
                                                                         touchAction: 'pan-x pan-y'
                                                                     }}
                                                                     aria-describedby="6B160AF7-20A9-4ECA-A71E-C4E3997D3B36">
                                                                    <div style={{
                                                                        zIndex: 1,
                                                                        position: 'absolute',
                                                                        left: '50%',
                                                                        top: '50%',
                                                                        width: '100%',
                                                                        willChange: 'transform',
                                                                        transform: 'translate(0px, 0px)'
                                                                    }}>
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            left: '0px',
                                                                            top: '0px',
                                                                            zIndex: 100,
                                                                            width: '100%'
                                                                        }}>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: 0
                                                                            }}>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    zIndex: 990,
                                                                                    transform: 'matrix(1, 0, 0, 1, -183, -22)'
                                                                                }}>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '-256px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '-512px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '-512px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '-512px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '-256px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '0px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '-256px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '0px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '0px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '-256px',
                                                                                        top: '0px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '-256px',
                                                                                        top: '-256px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '-512px',
                                                                                        top: '0px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        left: '-512px',
                                                                                        top: '-256px',
                                                                                        width: '256px',
                                                                                        height: '256px'
                                                                                    }}>
                                                                                        <div style={{
                                                                                            width: '256px',
                                                                                            height: '256px'
                                                                                        }}/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            left: '0px',
                                                                            top: '0px',
                                                                            zIndex: 101,
                                                                            width: '100%'
                                                                        }}/>
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            left: '0px',
                                                                            top: '0px',
                                                                            zIndex: 102,
                                                                            width: '100%'
                                                                        }}/>
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            left: '0px',
                                                                            top: '0px',
                                                                            zIndex: 103,
                                                                            width: '100%'
                                                                        }}>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: -1
                                                                            }}>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    zIndex: 990,
                                                                                    transform: 'matrix(1, 0, 0, 1, -183, -22)'
                                                                                }}>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '-256px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '-256px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '-256px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '-512px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '256px',
                                                                                        top: '-512px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '512px',
                                                                                        top: '-512px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '-256px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '-256px',
                                                                                        top: '-256px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '-512px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        overflow: 'hidden',
                                                                                        position: 'absolute',
                                                                                        left: '-512px',
                                                                                        top: '-256px'
                                                                                    }}/>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{
                                                                                width: '85px',
                                                                                height: '85px',
                                                                                overflow: 'hidden',
                                                                                position: 'absolute',
                                                                                left: '-43px',
                                                                                top: '-85px',
                                                                                zIndex: 0
                                                                            }}>
                                                                                <img alt=""
                                                                                     src="./assets/pin_location.png"
                                                                                     draggable="false" style={{
                                                                                    position: 'absolute',
                                                                                    left: '0px',
                                                                                    top: '0px',
                                                                                    userSelect: 'none',
                                                                                    width: '85px',
                                                                                    height: '85px',
                                                                                    border: '0px',
                                                                                    padding: '0px',
                                                                                    margin: '0px',
                                                                                    maxWidth: 'none',
                                                                                    opacity: 1
                                                                                }}/>
                                                                            </div>
                                                                        </div>
                                                                        <div style={{
                                                                            position: 'absolute',
                                                                            left: '0px',
                                                                            top: '0px',
                                                                            zIndex: 0
                                                                        }}>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                zIndex: 990,
                                                                                transform: 'matrix(1, 0, 0, 1, -183, -22)'
                                                                            }}>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '256px',
                                                                                    top: '-256px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt" style={{
                                                                                        width: '256px',
                                                                                        height: '256px',
                                                                                        userSelect: 'none',
                                                                                        border: '0px',
                                                                                        padding: '0px',
                                                                                        margin: '0px',
                                                                                        maxWidth: 'none'
                                                                                    }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '0px',
                                                                                    top: '-256px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(1)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '0px',
                                                                                    top: '-512px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(2)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '256px',
                                                                                    top: '-512px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(3)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '512px',
                                                                                    top: '-512px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(4)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '512px',
                                                                                    top: '-256px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(5)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '512px',
                                                                                    top: '0px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(6)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '256px',
                                                                                    top: '0px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(7)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '0px',
                                                                                    top: '0px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(8)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '-256px',
                                                                                    top: '0px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(9)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '-256px',
                                                                                    top: '-256px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(10)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '-512px',
                                                                                    top: '0px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(11)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'absolute',
                                                                                    left: '-512px',
                                                                                    top: '-256px',
                                                                                    width: '256px',
                                                                                    height: '256px',
                                                                                    transition: 'opacity 200ms linear 0s'
                                                                                }}>
                                                                                    <img draggable="false" alt=""
                                                                                         role="presentation"
                                                                                         src="./assets/vt(12)"
                                                                                         style={{
                                                                                             width: '256px',
                                                                                             height: '256px',
                                                                                             userSelect: 'none',
                                                                                             border: '0px',
                                                                                             padding: '0px',
                                                                                             margin: '0px',
                                                                                             maxWidth: 'none'
                                                                                         }}/>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{
                                                                        zIndex: 3,
                                                                        position: 'absolute',
                                                                        height: '100%',
                                                                        width: '100%',
                                                                        padding: '0px',
                                                                        borderWidth: '0px',
                                                                        margin: '0px',
                                                                        left: '0px',
                                                                        top: '0px',
                                                                        touchAction: 'pan-x pan-y'
                                                                    }}>
                                                                        <div style={{
                                                                            zIndex: 4,
                                                                            position: 'absolute',
                                                                            left: '50%',
                                                                            top: '50%',
                                                                            width: '100%',
                                                                            willChange: 'transform',
                                                                            transform: 'translate(0px, 0px)'
                                                                        }}>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: 104,
                                                                                width: '100%'
                                                                            }}/>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: 105,
                                                                                width: '100%'
                                                                            }}/>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: 106,
                                                                                width: '100%'
                                                                            }}>
                                                                                    <span
                                                                                        id="0D1CB9E7-2A06-40ED-8C95-C6D74FCA203E"
                                                                                        style={{display: 'none'}}>To navigate, press the arrow keys.</span>
                                                                                <div style={{
                                                                                    width: '85px',
                                                                                    height: '85px',
                                                                                    overflow: 'hidden',
                                                                                    position: 'absolute',
                                                                                    cursor: 'pointer',
                                                                                    touchAction: 'none',
                                                                                    left: '-43px',
                                                                                    top: '-85px',
                                                                                    zIndex: 0
                                                                                }} tabIndex={-1}>
                                                                                    <img alt=""
                                                                                         src="./assets/transparent.png"
                                                                                         draggable="false" style={{
                                                                                        width: '85px',
                                                                                        height: '85px',
                                                                                        userSelect: 'none',
                                                                                        border: '0px',
                                                                                        padding: '0px',
                                                                                        margin: '0px',
                                                                                        maxWidth: 'none'
                                                                                    }}/>
                                                                                </div>
                                                                            </div>
                                                                            <div style={{
                                                                                position: 'absolute',
                                                                                left: '0px',
                                                                                top: '0px',
                                                                                zIndex: 107,
                                                                                width: '100%'
                                                                            }}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="gm-style-moc" style={{
                                                                        zIndex: 4,
                                                                        position: 'absolute',
                                                                        height: '100%',
                                                                        width: '100%',
                                                                        padding: '0px',
                                                                        borderWidth: '0px',
                                                                        margin: '0px',
                                                                        left: '0px',
                                                                        top: '0px',
                                                                        opacity: 0,
                                                                        transitionDuration: '0.2s'
                                                                    }}>
                                                                        <p className="gm-style-mot"/>
                                                                    </div>
                                                                    <div className="LGLeeN-keyboard-shortcuts-view"
                                                                         id="6B160AF7-20A9-4ECA-A71E-C4E3997D3B36"
                                                                         style={{display: 'none'}}>
                                                                        <table>
                                                                            <tbody>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                                                                        aria-label="Left arrow">←</kbd>
                                                                                </td>
                                                                                <td aria-label="Move left.">Move
                                                                                    left
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                                                                        aria-label="Right arrow">→</kbd>
                                                                                </td>
                                                                                <td aria-label="Move right.">Move
                                                                                    right
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                                                                        aria-label="Up arrow">↑</kbd>
                                                                                </td>
                                                                                <td aria-label="Move up.">Move up
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key"
                                                                                        aria-label="Down arrow">↓</kbd>
                                                                                </td>
                                                                                <td aria-label="Move down.">Move
                                                                                    down
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">+</kbd>
                                                                                </td>
                                                                                <td aria-label="Zoom in.">Zoom in
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">-</kbd>
                                                                                </td>
                                                                                <td aria-label="Zoom out.">Zoom
                                                                                    out
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">Home</kbd>
                                                                                </td>
                                                                                <td aria-label="Jump left by 75%.">Jump
                                                                                    left by 75%
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">End</kbd>
                                                                                </td>
                                                                                <td aria-label="Jump right by 75%.">
                                                                                    Jump right by 75%
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">Page
                                                                                        Up</kbd>
                                                                                </td>
                                                                                <td aria-label="Jump up by 75%.">Jump
                                                                                    up by 75%
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td style={{textAlign: 'right'}}>
                                                                                    <kbd
                                                                                        className="VdnQmO-keyboard-shortcuts-view--shortcut-key">Page
                                                                                        Down</kbd>
                                                                                </td>
                                                                                <td aria-label="Jump down by 75%.">Jump
                                                                                    down by 75%
                                                                                </td>
                                                                            </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <iframe aria-hidden="true" frameBorder={0}
                                                                        tabIndex={-1} style={{
                                                                    zIndex: -1,
                                                                    position: 'absolute',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    top: '0px',
                                                                    left: '0px',
                                                                    border: 'none'
                                                                }} src="./assets/saved_resource.html"/>
                                                                <div style={{
                                                                    pointerEvents: 'none',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    boxSizing: 'border-box',
                                                                    position: 'absolute',
                                                                    zIndex: 1000002,
                                                                    opacity: 0,
                                                                    border: '2px solid rgb(26, 115, 232)'
                                                                }}/>
                                                                <div/>
                                                                <div/>
                                                                <div/>
                                                                <div/>
                                                                <div>
                                                                    <button draggable="false"
                                                                            aria-label="Toggle fullscreen view"
                                                                            title="Toggle fullscreen view"
                                                                            type="button" aria-pressed="false"
                                                                            className="gm-control-active gm-fullscreen-control"
                                                                            style={{
                                                                                background: 'none rgb(255, 255, 255)',
                                                                                border: '0px',
                                                                                margin: '10px',
                                                                                padding: '0px',
                                                                                textTransform: 'none',
                                                                                appearance: 'none',
                                                                                position: 'absolute',
                                                                                cursor: 'pointer',
                                                                                userSelect: 'none',
                                                                                borderRadius: '2px',
                                                                                height: '40px',
                                                                                width: '40px',
                                                                                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 1px 4px -1px',
                                                                                overflow: 'hidden',
                                                                                display: 'none',
                                                                                top: '0px',
                                                                                right: '0px'
                                                                            }}>
                                                                        <img
                                                                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                                            alt="" style={{
                                                                            height: '18px',
                                                                            width: '18px'
                                                                        }}/><img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23333%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                                        alt="" style={{
                                                                        height: '18px',
                                                                        width: '18px'
                                                                    }}/><img
                                                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2018%2018%22%3E%3Cpath%20fill%3D%22%23111%22%20d%3D%22M0%200v6h2V2h4V0H0zm16%200h-4v2h4v4h2V0h-2zm0%2016h-4v2h6v-6h-2v4zM2%2012H0v6h6v-2H2v-4z%22/%3E%3C/svg%3E"
                                                                        alt=""
                                                                        style={{height: '18px', width: '18px'}}/>
                                                                    </button>
                                                                </div>
                                                                <div/>
                                                                <div/>
                                                                <div/>
                                                                <div/>
                                                                <div/>
                                                                <div>
                                                                    <div style={{
                                                                        margin: '0px 5px',
                                                                        zIndex: 1000000,
                                                                        position: 'absolute',
                                                                        left: '0px',
                                                                        bottom: '0px'
                                                                    }}>
                                                                        <a target="_blank" rel="noopener"
                                                                           title="Open this area in Google Maps (opens a new window)"
                                                                           aria-label="Open this area in Google Maps (opens a new window)"
                                                                           href="https://maps.google.com/maps?ll=40.690968,-73.929045&z=10&t=m&hl=en-US&gl=US&mapclient=apiv3"
                                                                           style={{display: 'inline'}}>
                                                                            <div style={{
                                                                                width: '66px',
                                                                                height: '26px'
                                                                            }}>
                                                                                <img alt="Google"
                                                                                     src="data:image/svg+xml,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%2069%2029%22%3E%3Cg%20opacity%3D%22.3%22%20fill%3D%22%23000%22%20stroke%3D%22%23000%22%20stroke-width%3D%221.5%22%3E%3Cpath%20d%3D%22M17.4706%207.33616L18.0118%206.79504%2017.4599%206.26493C16.0963%204.95519%2014.2582%203.94522%2011.7008%203.94522c-4.613699999999999%200-8.50262%203.7551699999999997-8.50262%208.395779999999998C3.19818%2016.9817%207.0871%2020.7368%2011.7008%2020.7368%2014.1712%2020.7368%2016.0773%2019.918%2017.574%2018.3689%2019.1435%2016.796%2019.5956%2014.6326%2019.5956%2012.957%2019.5956%2012.4338%2019.5516%2011.9316%2019.4661%2011.5041L19.3455%2010.9012H10.9508V14.4954H15.7809C15.6085%2015.092%2015.3488%2015.524%2015.0318%2015.8415%2014.403%2016.4629%2013.4495%2017.1509%2011.7008%2017.1509%209.04835%2017.1509%206.96482%2015.0197%206.96482%2012.341%206.96482%209.66239%209.04835%207.53119%2011.7008%207.53119%2013.137%207.53119%2014.176%208.09189%2014.9578%208.82348L15.4876%209.31922%2016.0006%208.80619%2017.4706%207.33616z%22/%3E%3Cpath%20d%3D%22M24.8656%2020.7286C27.9546%2020.7286%2030.4692%2018.3094%2030.4692%2015.0594%2030.4692%2011.7913%2027.953%209.39009%2024.8656%209.39009%2021.7783%209.39009%2019.2621%2011.7913%2019.2621%2015.0594c0%203.25%202.514499999999998%205.6692%205.6035%205.6692zM24.8656%2012.8282C25.8796%2012.8282%2026.8422%2013.6652%2026.8422%2015.0594%2026.8422%2016.4399%2025.8769%2017.2905%2024.8656%2017.2905%2023.8557%2017.2905%2022.8891%2016.4331%2022.8891%2015.0594%2022.8891%2013.672%2023.853%2012.8282%2024.8656%2012.8282z%22/%3E%3Cpath%20d%3D%22M35.7511%2017.2905v0H35.7469C34.737%2017.2905%2033.7703%2016.4331%2033.7703%2015.0594%2033.7703%2013.672%2034.7343%2012.8282%2035.7469%2012.8282%2036.7608%2012.8282%2037.7234%2013.6652%2037.7234%2015.0594%2037.7234%2016.4439%2036.7554%2017.2961%2035.7511%2017.2905zM35.7387%2020.7286C38.8277%2020.7286%2041.3422%2018.3094%2041.3422%2015.0594%2041.3422%2011.7913%2038.826%209.39009%2035.7387%209.39009%2032.6513%209.39009%2030.1351%2011.7913%2030.1351%2015.0594%2030.1351%2018.3102%2032.6587%2020.7286%2035.7387%2020.7286z%22/%3E%3Cpath%20d%3D%22M51.953%2010.4357V9.68573H48.3999V9.80826C47.8499%209.54648%2047.1977%209.38187%2046.4808%209.38187%2043.5971%209.38187%2041.0168%2011.8998%2041.0168%2015.0758%2041.0168%2017.2027%2042.1808%2019.0237%2043.8201%2019.9895L43.7543%2020.0168%2041.8737%2020.797%2041.1808%2021.0844%2041.4684%2021.7772C42.0912%2023.2776%2043.746%2025.1469%2046.5219%2025.1469%2047.9324%2025.1469%2049.3089%2024.7324%2050.3359%2023.7376%2051.3691%2022.7367%2051.953%2021.2411%2051.953%2019.2723v-8.8366zm-7.2194%209.9844L44.7334%2020.4196C45.2886%2020.6201%2045.878%2020.7286%2046.4808%2020.7286%2047.1616%2020.7286%2047.7866%2020.5819%2048.3218%2020.3395%2048.2342%2020.7286%2048.0801%2021.0105%2047.8966%2021.2077%2047.6154%2021.5099%2047.1764%2021.7088%2046.5219%2021.7088%2045.61%2021.7088%2045.0018%2021.0612%2044.7336%2020.4201zM46.6697%2012.8282C47.6419%2012.8282%2048.5477%2013.6765%2048.5477%2015.084%2048.5477%2016.4636%2047.6521%2017.2987%2046.6697%2017.2987%2045.6269%2017.2987%2044.6767%2016.4249%2044.6767%2015.084%2044.6767%2013.7086%2045.6362%2012.8282%2046.6697%2012.8282zM55.7387%205.22081v-.75H52.0788V20.4412H55.7387V5.22081z%22/%3E%3Cpath%20d%3D%22M63.9128%2016.0614L63.2945%2015.6492%2062.8766%2016.2637C62.4204%2016.9346%2061.8664%2017.3069%2061.0741%2017.3069%2060.6435%2017.3069%2060.3146%2017.2088%2060.0544%2017.0447%2059.9844%2017.0006%2059.9161%2016.9496%2059.8498%2016.8911L65.5497%2014.5286%2066.2322%2014.2456%2065.9596%2013.5589%2065.7406%2013.0075C65.2878%2011.8%2063.8507%209.39832%2060.8278%209.39832%2057.8445%209.39832%2055.5034%2011.7619%2055.5034%2015.0676%2055.5034%2018.2151%2057.8256%2020.7369%2061.0659%2020.7369%2063.6702%2020.7369%2065.177%2019.1378%2065.7942%2018.2213L66.2152%2017.5963%2065.5882%2017.1783%2063.9128%2016.0614zM61.3461%2012.8511L59.4108%2013.6526C59.7903%2013.0783%2060.4215%2012.7954%2060.9017%2012.7954%2061.067%2012.7954%2061.2153%2012.8161%2061.3461%2012.8511z%22/%3E%3C/g%3E%3Cpath%20d%3D%22M11.7008%2019.9868C7.48776%2019.9868%203.94818%2016.554%203.94818%2012.341%203.94818%208.12803%207.48776%204.69522%2011.7008%204.69522%2014.0331%204.69522%2015.692%205.60681%2016.9403%206.80583L15.4703%208.27586C14.5751%207.43819%2013.3597%206.78119%2011.7008%206.78119%208.62108%206.78119%206.21482%209.26135%206.21482%2012.341%206.21482%2015.4207%208.62108%2017.9009%2011.7008%2017.9009%2013.6964%2017.9009%2014.8297%2017.0961%2015.5606%2016.3734%2016.1601%2015.7738%2016.5461%2014.9197%2016.6939%2013.7454h-4.9931V11.6512h7.0298C18.8045%2012.0207%2018.8456%2012.4724%2018.8456%2012.957%2018.8456%2014.5255%2018.4186%2016.4637%2017.0389%2017.8434%2015.692%2019.2395%2013.9838%2019.9868%2011.7008%2019.9868zM29.7192%2015.0594C29.7192%2017.8927%2027.5429%2019.9786%2024.8656%2019.9786%2022.1884%2019.9786%2020.0121%2017.8927%2020.0121%2015.0594%2020.0121%2012.2096%2022.1884%2010.1401%2024.8656%2010.1401%2027.5429%2010.1401%2029.7192%2012.2096%2029.7192%2015.0594zM27.5922%2015.0594C27.5922%2013.2855%2026.3274%2012.0782%2024.8656%2012.0782S22.1391%2013.2937%2022.1391%2015.0594C22.1391%2016.8086%2023.4038%2018.0405%2024.8656%2018.0405S27.5922%2016.8168%2027.5922%2015.0594zM40.5922%2015.0594C40.5922%2017.8927%2038.4159%2019.9786%2035.7387%2019.9786%2033.0696%2019.9786%2030.8851%2017.8927%2030.8851%2015.0594%2030.8851%2012.2096%2033.0614%2010.1401%2035.7387%2010.1401%2038.4159%2010.1401%2040.5922%2012.2096%2040.5922%2015.0594zM38.4734%2015.0594C38.4734%2013.2855%2037.2087%2012.0782%2035.7469%2012.0782%2034.2851%2012.0782%2033.0203%2013.2937%2033.0203%2015.0594%2033.0203%2016.8086%2034.2851%2018.0405%2035.7469%2018.0405%2037.2087%2018.0487%2038.4734%2016.8168%2038.4734%2015.0594zM51.203%2010.4357v8.8366C51.203%2022.9105%2049.0595%2024.3969%2046.5219%2024.3969%2044.132%2024.3969%2042.7031%2022.7955%2042.161%2021.4897L44.0417%2020.7095C44.3784%2021.5143%2045.1997%2022.4588%2046.5219%2022.4588%2048.1479%2022.4588%2049.1499%2021.4487%2049.1499%2019.568V18.8617H49.0759C48.5914%2019.4612%2047.6552%2019.9786%2046.4808%2019.9786%2044.0171%2019.9786%2041.7668%2017.8352%2041.7668%2015.0758%2041.7668%2012.3%2044.0253%2010.1319%2046.4808%2010.1319%2047.6552%2010.1319%2048.5914%2010.6575%2049.0759%2011.2323H49.1499V10.4357H51.203zM49.2977%2015.084C49.2977%2013.3512%2048.1397%2012.0782%2046.6697%2012.0782%2045.175%2012.0782%2043.9267%2013.3429%2043.9267%2015.084%2043.9267%2016.8004%2045.175%2018.0487%2046.6697%2018.0487%2048.1397%2018.0487%2049.2977%2016.8004%2049.2977%2015.084zM54.9887%205.22081V19.6912H52.8288V5.22081H54.9887zM63.4968%2016.6854L65.1722%2017.8023C64.6301%2018.6072%2063.3244%2019.9869%2061.0659%2019.9869%2058.2655%2019.9869%2056.2534%2017.827%2056.2534%2015.0676%2056.2534%2012.1439%2058.2901%2010.1483%2060.8278%2010.1483%2063.3818%2010.1483%2064.6301%2012.1768%2065.0408%2013.2773L65.2625%2013.8357%2058.6843%2016.5623C59.1853%2017.5478%2059.9737%2018.0569%2061.0741%2018.0569%2062.1746%2018.0569%2062.9384%2017.5067%2063.4968%2016.6854zM58.3312%2014.9115L62.7331%2013.0884C62.4867%2012.4724%2061.764%2012.0454%2060.9017%2012.0454%2059.8012%2012.0454%2058.2737%2013.0145%2058.3312%2014.9115z%22%20fill%3D%22%23fff%22/%3E%3C/svg%3E"
                                                                                     draggable="false" style={{
                                                                                    position: 'absolute',
                                                                                    left: '0px',
                                                                                    top: '0px',
                                                                                    width: '66px',
                                                                                    height: '26px',
                                                                                    userSelect: 'none',
                                                                                    border: '0px',
                                                                                    padding: '0px',
                                                                                    margin: '0px'
                                                                                }}/></div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div/>
                                                                <div>
                                                                    <div style={{
                                                                        display: 'inline-flex',
                                                                        position: 'absolute',
                                                                        right: '0px',
                                                                        bottom: '0px'
                                                                    }}>
                                                                        <div className="gmnoprint"
                                                                             style={{zIndex: 1000001}}>
                                                                            <div draggable="false"
                                                                                 className="gm-style-cc" style={{
                                                                                userSelect: 'none',
                                                                                position: 'relative',
                                                                                height: '14px',
                                                                                lineHeight: '14px'
                                                                            }}>
                                                                                <div style={{
                                                                                    opacity: '0.7',
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    position: 'absolute'
                                                                                }}>
                                                                                    <div style={{width: '1px'}}/>
                                                                                    <div style={{
                                                                                        backgroundColor: 'rgb(245, 245, 245)',
                                                                                        width: 'auto',
                                                                                        height: '100%',
                                                                                        marginLeft: '1px'
                                                                                    }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'relative',
                                                                                    paddingRight: '6px',
                                                                                    paddingLeft: '6px',
                                                                                    boxSizing: 'border-box',
                                                                                    fontFamily: 'Roboto, Arial, sans-serif',
                                                                                    fontSize: '10px',
                                                                                    color: 'rgb(0, 0, 0)',
                                                                                    whiteSpace: 'nowrap',
                                                                                    direction: 'ltr',
                                                                                    textAlign: 'right',
                                                                                    verticalAlign: 'middle',
                                                                                    display: 'inline-block'
                                                                                }}>
                                                                                    <button draggable="false"
                                                                                            aria-label="Keyboard shortcuts"
                                                                                            title="Keyboard shortcuts"
                                                                                            type="button" style={{
                                                                                        background: 'none',
                                                                                        display: 'inline-block',
                                                                                        border: '0px',
                                                                                        margin: '0px',
                                                                                        padding: '0px',
                                                                                        textTransform: 'none',
                                                                                        appearance: 'none',
                                                                                        position: 'relative',
                                                                                        cursor: 'pointer',
                                                                                        userSelect: 'none',
                                                                                        color: 'rgb(0, 0, 0)',
                                                                                        fontFamily: 'inherit',
                                                                                        lineHeight: 'inherit'
                                                                                    }}>
                                                                                        Keyboard shortcuts
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="gmnoprint"
                                                                             style={{zIndex: 1000001}}>
                                                                            <div draggable="false"
                                                                                 className="gm-style-cc" style={{
                                                                                userSelect: 'none',
                                                                                position: 'relative',
                                                                                height: '14px',
                                                                                lineHeight: '14px'
                                                                            }}>
                                                                                <div style={{
                                                                                    opacity: '0.7',
                                                                                    width: '100%',
                                                                                    height: '100%',
                                                                                    position: 'absolute'
                                                                                }}>
                                                                                    <div style={{width: '1px'}}/>
                                                                                    <div style={{
                                                                                        backgroundColor: 'rgb(245, 245, 245)',
                                                                                        width: 'auto',
                                                                                        height: '100%',
                                                                                        marginLeft: '1px'
                                                                                    }}/>
                                                                                </div>
                                                                                <div style={{
                                                                                    position: 'relative',
                                                                                    paddingRight: '6px',
                                                                                    paddingLeft: '6px',
                                                                                    boxSizing: 'border-box',
                                                                                    fontFamily: 'Roboto, Arial, sans-serif',
                                                                                    fontSize: '10px',
                                                                                    color: 'rgb(0, 0, 0)',
                                                                                    whiteSpace: 'nowrap',
                                                                                    direction: 'ltr',
                                                                                    textAlign: 'right',
                                                                                    verticalAlign: 'middle',
                                                                                    display: 'inline-block'
                                                                                }}>
                                                                                    <button draggable="false"
                                                                                            aria-label="Map Data"
                                                                                            title="Map Data"
                                                                                            type="button" style={{
                                                                                        background: 'none',
                                                                                        border: '0px',
                                                                                        margin: '0px',
                                                                                        padding: '0px',
                                                                                        textTransform: 'none',
                                                                                        appearance: 'none',
                                                                                        position: 'relative',
                                                                                        cursor: 'pointer',
                                                                                        userSelect: 'none',
                                                                                        color: 'rgb(0, 0, 0)',
                                                                                        fontFamily: 'inherit',
                                                                                        lineHeight: 'inherit',
                                                                                        display: 'none'
                                                                                    }}>
                                                                                        Map Data
                                                                                    </button>
                                                                                    <span>Map data ©2023 Google</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="gmnoscreen">
                                                                            <div style={{
                                                                                fontFamily: 'Roboto, Arial, sans-serif',
                                                                                fontSize: '11px',
                                                                                color: 'rgb(0, 0, 0)',
                                                                                direction: 'ltr',
                                                                                textAlign: 'right',
                                                                                backgroundColor: 'rgb(245, 245, 245)'
                                                                            }}>
                                                                                Map data ©2023 Google
                                                                            </div>
                                                                        </div>
                                                                        <button draggable="false"
                                                                                aria-label="Map Scale: 5 km per 43 pixels"
                                                                                title="Map Scale: 5 km per 43 pixels"
                                                                                type="button"
                                                                                className="gm-style-cc"
                                                                                aria-describedby="2131002D-8151-47A7-A9D2-B1D6F2F50604"
                                                                                style={{
                                                                                    background: 'none',
                                                                                    display: 'none',
                                                                                    border: '0px',
                                                                                    margin: '0px',
                                                                                    padding: '0px',
                                                                                    textTransform: 'none',
                                                                                    appearance: 'none',
                                                                                    position: 'relative',
                                                                                    cursor: 'pointer',
                                                                                    userSelect: 'none',
                                                                                    height: '14px',
                                                                                    lineHeight: '14px'
                                                                                }}>
                                                                            <div style={{
                                                                                opacity: '0.7',
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                position: 'absolute'
                                                                            }}>
                                                                                <div style={{width: '1px'}}/>
                                                                                <div style={{
                                                                                    backgroundColor: 'rgb(245, 245, 245)',
                                                                                    width: 'auto',
                                                                                    height: '100%',
                                                                                    marginLeft: '1px'
                                                                                }}/>
                                                                            </div>
                                                                            <div style={{
                                                                                position: 'relative',
                                                                                paddingRight: '6px',
                                                                                paddingLeft: '6px',
                                                                                boxSizing: 'border-box',
                                                                                fontFamily: 'Roboto, Arial, sans-serif',
                                                                                fontSize: '10px',
                                                                                color: 'rgb(0, 0, 0)',
                                                                                whiteSpace: 'nowrap',
                                                                                direction: 'ltr',
                                                                                textAlign: 'right',
                                                                                verticalAlign: 'middle',
                                                                                display: 'inline-block'
                                                                            }}>
                                                                                <span>5 km&nbsp;</span>
                                                                                <div style={{
                                                                                    position: 'relative',
                                                                                    display: 'inline-block',
                                                                                    height: '8px',
                                                                                    bottom: '-1px',
                                                                                    width: '47px'
                                                                                }}>
                                                                                    <div style={{
                                                                                        width: '100%',
                                                                                        height: '4px',
                                                                                        position: 'absolute',
                                                                                        left: '0px',
                                                                                        top: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '4px',
                                                                                        height: '8px',
                                                                                        left: '0px',
                                                                                        top: '0px',
                                                                                        backgroundColor: 'rgb(255, 255, 255)'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '4px',
                                                                                        height: '8px',
                                                                                        position: 'absolute',
                                                                                        backgroundColor: 'rgb(255, 255, 255)',
                                                                                        right: '0px',
                                                                                        bottom: '0px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        backgroundColor: 'rgb(102, 102, 102)',
                                                                                        height: '2px',
                                                                                        left: '1px',
                                                                                        bottom: '1px',
                                                                                        right: '1px'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        position: 'absolute',
                                                                                        width: '2px',
                                                                                        height: '6px',
                                                                                        left: '1px',
                                                                                        top: '1px',
                                                                                        backgroundColor: 'rgb(102, 102, 102)'
                                                                                    }}/>
                                                                                    <div style={{
                                                                                        width: '2px',
                                                                                        height: '6px',
                                                                                        position: 'absolute',
                                                                                        backgroundColor: 'rgb(102, 102, 102)',
                                                                                        bottom: '1px',
                                                                                        right: '1px'
                                                                                    }}/>
                                                                                </div>
                                                                            </div>
                                                                            <span
                                                                                id="2131002D-8151-47A7-A9D2-B1D6F2F50604"
                                                                                style={{display: 'none'}}>Click to toggle between metric and imperial units</span>
                                                                        </button>
                                                                        <div className="gmnoprint gm-style-cc"
                                                                             draggable="false" style={{
                                                                            zIndex: 1000001,
                                                                            userSelect: 'none',
                                                                            position: 'relative',
                                                                            height: '14px',
                                                                            lineHeight: '14px'
                                                                        }}>
                                                                            <div style={{
                                                                                opacity: '0.7',
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                position: 'absolute'
                                                                            }}>
                                                                                <div style={{width: '1px'}}/>
                                                                                <div style={{
                                                                                    backgroundColor: 'rgb(245, 245, 245)',
                                                                                    width: 'auto',
                                                                                    height: '100%',
                                                                                    marginLeft: '1px'
                                                                                }}/>
                                                                            </div>
                                                                            <div style={{
                                                                                position: 'relative',
                                                                                paddingRight: '6px',
                                                                                paddingLeft: '6px',
                                                                                boxSizing: 'border-box',
                                                                                fontFamily: 'Roboto, Arial, sans-serif',
                                                                                fontSize: '10px',
                                                                                color: 'rgb(0, 0, 0)',
                                                                                whiteSpace: 'nowrap',
                                                                                direction: 'ltr',
                                                                                textAlign: 'right',
                                                                                verticalAlign: 'middle',
                                                                                display: 'inline-block'
                                                                            }}>
                                                                                <a href="https://www.google.com/intl/en-US_US/help/terms_maps.html"
                                                                                   target="_blank" rel="noopener"
                                                                                   style={{
                                                                                       textDecoration: 'none',
                                                                                       cursor: 'pointer',
                                                                                       color: 'rgb(0, 0, 0)'
                                                                                   }}>Terms of Use</a>
                                                                            </div>
                                                                        </div>
                                                                        <div draggable="false"
                                                                             className="gm-style-cc" style={{
                                                                            userSelect: 'none',
                                                                            position: 'relative',
                                                                            height: '14px',
                                                                            lineHeight: '14px'
                                                                        }}>
                                                                            <div style={{
                                                                                opacity: '0.7',
                                                                                width: '100%',
                                                                                height: '100%',
                                                                                position: 'absolute'
                                                                            }}>
                                                                                <div style={{width: '1px'}}/>
                                                                                <div style={{
                                                                                    backgroundColor: 'rgb(245, 245, 245)',
                                                                                    width: 'auto',
                                                                                    height: '100%',
                                                                                    marginLeft: '1px'
                                                                                }}/>
                                                                            </div>
                                                                            <div style={{
                                                                                position: 'relative',
                                                                                paddingRight: '6px',
                                                                                paddingLeft: '6px',
                                                                                boxSizing: 'border-box',
                                                                                fontFamily: 'Roboto, Arial, sans-serif',
                                                                                fontSize: '10px',
                                                                                color: 'rgb(0, 0, 0)',
                                                                                whiteSpace: 'nowrap',
                                                                                direction: 'ltr',
                                                                                textAlign: 'right',
                                                                                verticalAlign: 'middle',
                                                                                display: 'inline-block'
                                                                            }}>
                                                                                <a target="_blank" rel="noopener"
                                                                                   title="Report errors in the road map or imagery to Google"
                                                                                   dir="ltr"
                                                                                   href="https://www.google.com/maps/@40.690968,-73.929045,10z/data=!10m1!1e1!12b1?source=apiv3&rapsrc=apiv3"
                                                                                   style={{
                                                                                       fontFamily: 'Roboto, Arial, sans-serif',
                                                                                       fontSize: '10px',
                                                                                       color: 'rgb(0, 0, 0)',
                                                                                       textDecoration: 'none',
                                                                                       position: 'relative'
                                                                                   }}>Report a map error</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="
                                icon-box
                                vc_custom_1637732632863
                                icon_box_55362
                                stm-layout-box-car_dealer
                              " style={{color: '#ffffff'}}>
                                                        <div className="boat-line"/>
                                                        <div className="
                                  icon
                                  boat-third-color
                                  icon_element_92128
                                  vc_custom_1637732632862
                                " style={{fontSize: '46px', color: '#ffffff'}}>
                                                            <i className="stm-icon-pin-o"/>
                                                        </div>
                                                        <div className="icon-text">
                                                            <h3 className="title heading-font"
                                                                style={{color: '#ffffff'}}>Address</h3>
                                                            <div className="content heading-font"
                                                                 style={{fontSize: '14px'}}>
                                                                <p>
                                                                    <span style={{color: '#ffffff'}}>1010 Avenue of the Moon</span><br/>
                                                                    <span style={{color: '#ffffff'}}>New York, NY 10018 US.</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"/>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{__html: "\n                              \t.icon_element_92128 i::before {\n                              \tcolor: #ffffff!important;\n                              }\n\n                              \t\t.icon_box_55362 {\n                              \t\tbackground-color: #102127;\n                              \t}\n\n                              \t.icon_box_55362 .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 0.9);\n                              \t}\n\n                              \t.icon_box_55362:hover .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 1);\n                              \t}\n\n                              \t.icon-box .icon-text .content a {\n                              \tcolor: #ffffff;\n                              }\n\n                              \t.icon_box_55362:hover .icon-text .content span,\n                              .icon_box_55362:hover .icon-text .content p {\n                              \tcolor: #ffffff !important;\n                              }\n                            "}}/>
                                                    <div className="
                                icon-box
                                vc_custom_1637732455015
                                icon_box_94713
                                stm-layout-box-car_dealer
                              " style={{color: '#ffffff'}}>
                                                        <div className="boat-line"/>
                                                        <div className="
                                  icon
                                  boat-third-color
                                  icon_element_92890
                                  vc_custom_1637732455014
                                " style={{fontSize: '35px', color: '#ffffff'}}>
                                                            <i className="stm-icon-telephone"/>
                                                        </div>
                                                        <div className="icon-text">
                                                            <h3 className="title heading-font"
                                                                style={{color: '#ffffff'}}>Phone</h3>
                                                            <div className="content heading-font"
                                                                 style={{fontSize: '14px'}}>
                                                                <p><span
                                                                    style={{color: '#ffffff'}}>+1 628 123 4000</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"/>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{__html: "\n                              \t.icon_element_92890 i::before {\n                              \tcolor: #ffffff!important;\n                              }\n\n                              \t\t.icon_box_94713 {\n                              \t\tbackground-color: #102127;\n                              \t}\n\n                              \t.icon_box_94713 .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 0.9);\n                              \t}\n\n                              \t.icon_box_94713:hover .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 1);\n                              \t}\n\n                              \t.icon-box .icon-text .content a {\n                              \tcolor: #ffffff;\n                              }\n\n                              \t.icon_box_94713:hover .icon-text .content span,\n                              .icon_box_94713:hover .icon-text .content p {\n                              \tcolor: #ffffff !important;\n                              }\n                            "}}/>
                                                    <div className="
                                icon-box
                                vc_custom_1637732640587
                                icon_box_21339
                                stm-layout-box-car_dealer
                              " style={{color: '#ffffff'}}>
                                                        <div className="boat-line"/>
                                                        <div className="
                                  icon
                                  boat-third-color
                                  icon_element_59997
                                  vc_custom_1637732640584
                                " style={{fontSize: '25px'}}>
                                                            <i className="stm-icon-light-envelope"/>
                                                        </div>
                                                        <div className="icon-text">
                                                            <h3 className="title heading-font"
                                                                style={{color: '#ffffff'}}>Email</h3>
                                                            <div className="content heading-font"
                                                                 style={{fontSize: '14px'}}>
                                                                <p><span
                                                                    style={{color: '#ffffff'}}>brandon@loggo.com</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="clearfix"/>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{__html: "\n\n                              \t\t.icon_box_21339 {\n                              \t\tbackground-color: #102127;\n                              \t}\n\n                              \t.icon_box_21339 .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 0.9);\n                              \t}\n\n                              \t.icon_box_21339:hover .icon-box-bottom-triangle {\n                              \t\tborder-right-color: rgba(16,33,39, 1);\n                              \t}\n\n                              \t.icon-box .icon-text .content a {\n                              \tcolor: #ffffff;\n                              }\n                            "}}/>
                                                    <div className="stm_ev_social_icons vc_custom_1637124047867">
                                                        <div className="icons_wrap">
                                                            <a href="https://facebook.com/" target="_blank"
                                                               className="external" rel="nofollow">
                                                                <i className="fab fa-facebook social_icons_77263"/>
                                                            </a>
                                                            <a href="https://twitter.com/" target="_blank"
                                                               className="external" rel="nofollow">
                                                                <i className="fab fa-twitter social_icons_77263"/>
                                                            </a>
                                                            <a href="https://vk.com/" target="_blank"
                                                               className="external" rel="nofollow">
                                                                <i className="fab fa-vk social_icons_77263"/>
                                                            </a>
                                                            <a href="https://instagram.com/" target="_blank"
                                                               className="external" rel="nofollow">
                                                                <i className="fab fa-instagram social_icons_77263"/>
                                                            </a>
                                                            <a href="https://behance.com/" target="_blank"
                                                               className="external" rel="nofollow">
                                                                <i className="fab fa-behance social_icons_77263"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <style
                                                        dangerouslySetInnerHTML={{__html: "\n                              .stm_ev_social_icons .icons_wrap .social_icons_77263::before {\n                                color: #ffffff !important;\n                              }\n                              .stm_ev_social_icons .icons_wrap .social_icons_77263 {\n                                font-size: 16px !important;\n                              }\n\n                              .stm_ev_social_icons .icons_wrap {\n                                text-align: center !important;\n                              }\n\n                              .stm_ev_social_icons .icons_wrap > a,\n                              .stm_ev_social_icons .icons_wrap > a:hover,\n                              .stm_ev_social_icons .icons_wrap > a:active,\n                              .stm_ev_social_icons .icons_wrap > a:visited {\n                                color: unset !important;\n                                text-decoration: none !important;\n                              }\n\n                              .stm_ev_social_icons .icons_wrap > a {\n                                margin-right: 31px;\n                              }\n\n                              .stm_ev_social_icons .icons_wrap > a:last-child {\n                                margin-right: 0 !important;\n                              }\n                            "}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vc_row-full-width"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clearfix"/>
        </div>
    )
}

export default HtmlRJX;