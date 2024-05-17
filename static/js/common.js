$(function(){
    // common header 언어선택
    $('#language .toggle-button').click(function(){
        $('#language ul').toggle();
    });

    $('#pc-header #language li').click(function(){
        let selectedText = $(this).text();

        $('#language span').text(selectedText);
        $('#language ul').hide();
    });

    $('.faq_folding_button').on('click', function() {
        let $section = $(this).closest('.faq_section');
        let $bottom = $section.find('.faq_section_bottom');

        $bottom.slideUp();
        $(this).hide();
        $section.find('.faq_unfold_button').css('display', 'flex');
    });

    $('.faq_unfold_button').on('click', function() {
        let $section = $(this).closest('.faq_section');
        let $bottom = $section.find('.faq_section_bottom');

        $bottom.slideDown();
        $(this).hide();
        $section.find('.faq_folding_button').css('display', 'flex');
    });

    $("#pc_sign-in_toggle_feild .toggle-header").click(function() {
        $(this).find(".up_arrow, .down_arrow").toggleClass("hidden");
        $("#pc_sign-in_company_list").slideToggle(function() {
            if ($(this).is(":visible")) {
                $(this).css("overflow", "auto");
            } else {
                $(this).css("overflow", "hidden");
            }
        });
    });

    $("#pc_sign-in_company_list li").click(function() {
        let selectedText = $(this).find("span").text();

        $("#pc_sign-in_toggle_feild .toggle-header span").text(selectedText);

        $("#pc_sign-in_company_list").slideUp(function() {
            $("#pc_sign-in_toggle_feild .toggle-header .up_arrow").addClass("hidden");
            $("#pc_sign-in_toggle_feild .toggle-header .down_arrow").removeClass("hidden");
        });
    });

    mainNoticeSlideMarquee();
});

function mainNoticeSlideMarquee() {
    if ($("#nt_ct li").length > 1) { 
        $("#nt_ct li").each(function () {
            const anchorElement = $(this).find("a");
            const divElement = $(this).find("div");

            if (anchorElement.outerWidth() > divElement.outerWidth()) {
                divElement.addClass("marquee");
            }
        });

        let interval = setInterval(nextSlide, 5000);

        $(".up_arrow").click(function () {
            clearInterval(interval);
            nextSlide();
            interval = setInterval(nextSlide, 5000);
        });

        $(".down_arrow").click(function () {
            clearInterval(interval);
            prevSlide();
            interval = setInterval(nextSlide, 5000);
        });

        function nextSlide() {
            $("#nt_ct").animate({
                top: "-100%"
            }, function () {
                $("#nt_ct > li").eq(0).appendTo("#nt_ct");
                $("#nt_ct").css({
                    top: 0
                });
            });
        }

        function prevSlide() {
            $("#nt_ct > li:last").prependTo("#nt_ct");
            $("#nt_ct").css({
                top: "-100%"
            });
            $("#nt_ct").animate({
                top: 0
            });
        }
    }
}

function pageButtonActive(element) {
    $(element).siblings('li').removeClass('page_number_active');
    $(element).addClass('page_number_active');
}

function prevPageButton() {
    const activeElement = document.querySelector('.page_number_active');
    const prevElement = activeElement.previousElementSibling;
    
    if (prevElement) {
        activeElement.classList.remove('page_number_active');
        prevElement.classList.add('page_number_active');
    }
}

function nextPageButton() {
    const activeElement = document.querySelector('.page_number_active');
    const nextElement = activeElement.nextElementSibling;
    
    if (nextElement) {
        activeElement.classList.remove('page_number_active');
        nextElement.classList.add('page_number_active');
    }
}

function faqTabActive(element) {
    $(element).siblings('button').removeClass('select_button_design');
    $(element).addClass('select_button_design');
}

function clickIconPasswordView() {
    const passwordField = document.getElementById('pc_signIn_password');
    const openEye = document.getElementById('password-view-icon');
    const closeEye = document.getElementById('password-hide-icon');

    if (passwordField.type === 'password') {
        passwordField.type = "text";
        openEye.style.display = 'none';
        closeEye.style.display = 'block';
    } else {
        passwordField.type = "password";
        openEye.style.display = 'block';
        closeEye.style.display = 'none';
    }
}