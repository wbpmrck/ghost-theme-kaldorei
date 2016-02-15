/**
 * Main JS file for OneGhost behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();

        $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
            e.preventDefault();
            $("body").toggleClass("nav-opened nav-closed");
        });

        $(window).scroll(function(){
            var scrollerToTop = $('.backTop');
            var scrollerTOC = $('.widget-toc');
            var tagCloud = $('.widget-tag-cloud');
			      document.documentElement.scrollTop+document.body.scrollTop>200?scrollerToTop.fadeIn():scrollerToTop.fadeOut();
            document.documentElement.scrollTop+document.body.scrollTop>250?scrollerTOC.addClass("widget-toc-fixed"):scrollerTOC.removeClass("widget-toc-fixed");
            document.documentElement.scrollTop+document.body.scrollTop>250?tagCloud.hide():tagCloud.show();
		    });

        // #backTop Button Event
        $("#backTop").on("click", function() {
            scrollToTop();
        });

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);

function scrollToTop(name, speed){
    if( !speed ) speed = 300
    if( !name ){
        $('html,body').animate({scrollTop: 0},speed)
    }else{
        if( $(name).length>0 ){
            $('html,body').animate({scrollTop: $(name).offset().top},speed)
        }
    }
}
