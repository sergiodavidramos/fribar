var revapi5, tpj;
(function () {
  if (!/loaded|interactive|complete/.test(document.readyState))
    document.addEventListener("DOMContentLoaded", onLoad);
  else onLoad();

  function onLoad() {
    if (tpj === undefined) {
      tpj = jQuery;
      if ("on" == "on") tpj.noConflict();
    }
    if (tpj("#rev_slider_5_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_5_1");
    } else {
      revapi5 = tpj("#rev_slider_5_1")
        .show()
        .revolution({
          sliderType: "standard",
          jsFileLocation: "vendor/revslider/js/",
          sliderLayout: "fullscreen",
          dottedOverlay: "none",
          delay: 2500,
          navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            arrows: {
              style: "custom",
              enable: true,
              hide_onmobile: false,
              hide_onleave: true,
              hide_delay: 200,
              hide_delay_mobile: 1200,
              tmp: "",
              left: {
                h_align: "left",
                v_align: "center",
                h_offset: 10,
                v_offset: 0,
              },
              right: {
                h_align: "right",
                v_align: "center",
                h_offset: 10,
                v_offset: 0,
              },
            },
          },
          responsiveLevels: [1240, 1024, 778, 480],
          visibilityLevels: [1240, 1024, 778, 480],
          gridwidth: [1200, 992, 768, 576],
          gridheight: [960, 768, 960, 720],
          lazyType: "none",
          parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 400,
            speedbg: 0,
            speedls: 0,
            levels: [
              4,
              6,
              8,
              10,
              12,
              30,
              35,
              40,
              45,
              46,
              47,
              48,
              49,
              50,
              51,
              55,
            ],
            disable_onmobile: "on",
          },
          shadow: 0,
          spinner: "spinner2",
          stopLoop: "off",
          stopAfterLoops: -1,
          stopAtSlide: -1,
          shuffle: "off",
          autoHeight: "off",
          fullScreenAutoWidth: "on",
          fullScreenAlignForce: "off",
          fullScreenOffsetContainer: "",
          fullScreenOffset: "",
          disableProgressBar: "on",
          hideThumbsOnMobile: "on",
          hideSliderAtLimit: 0,
          hideCaptionAtLimit: 0,
          hideAllCaptionAtLilmit: 0,
          debugMode: false,
          fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false,
          },
        });
    } /* END OF revapi call */
  } /* END OF ON LOAD FUNCTION */
})(); /* END OF WRAPPING FUNCTION */
