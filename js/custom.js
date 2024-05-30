$(window).load(function() {
    jQuery('#all').click();
});

$(document).ready(function() {
    $('.carousel').carousel();
    $('#header_wrapper').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
    });

    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle);
    }

    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }

    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {},
        end: function() {
            toggleHeaderBg();
        },
        scrollChange: function($currentListItem) {
            toggleHeaderBg();
        }
    });

    function toggleHeaderBg() {
        if (!$('#main-nav ul li:first-child').hasClass('active')) {
            $('.header').addClass('addBg');
        } else {
            $('.header').removeClass('addBg');
        }
    }

    var container = $('#portfolio_wrapper');

    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;

        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }

    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });

    $(window).bind('resize', function() {
        setProjects();
    });

    $(".fancybox").fancybox();

    // Get the modal and body elements
    var modal = document.getElementById('video-modal');
    var body = document.body;
    var scrollPosition;

    // Open the video modal when a portfolio item is clicked
    $('.portfolio-video').on('click', function(e) {
        e.preventDefault();

        var videoUrl = $(this).data('video');
        $('#video-player source').attr('src', videoUrl);
        $('#video-player')[0].load();
        modal.style.display = 'block';
        scrollPosition = window.pageYOffset; // Store the current scroll position
        body.classList.add('modal-open');
        body.style.top = `-${scrollPosition}px`; // Shift the body element up to prevent scrolling
    });

    // Close the video modal when the close button is clicked
    $('.close').on('click', closeVideoModal);

    // Close the video modal when clicking outside the modal content
    $(window).on('click', function(e) {
        if (e.target == modal) {
            closeVideoModal();
        }
    });

    function closeVideoModal() {
        $('#video-player')[0].pause();
        modal.style.display = 'none';
        body.classList.remove('modal-open');
        body.style.removeProperty('top'); // Reset the body element's top position
        window.scrollTo(0, scrollPosition); // Restore the previous scroll position
    }
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();
document.getElementById('').onclick = function() {
    var section = document.createElement('section');
    section.className = 'wow fadeInDown';
    section.className = 'wow shake';
    section.className = 'wow zoomIn';
    section.className = 'wow lightSpeedIn';
    this.parentNode.insertBefore(section, this);
};