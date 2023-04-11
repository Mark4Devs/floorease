$(document).ready(function(){
    let exec = true;   
    $(".navbar .nav-link").on("click", function(){ 
        $('.offcanvas').offcanvas('hide');
    });
    //content animations
    $(window).on('activate.bs.scrollspy', function (){ 
        var linkTitle = $(".navbar .nav-link.active").text(); 
        switch(linkTitle){
            case "Home": 
                $(".text-content").addClass('animate'); 
            break;
            case "About":  
                $(".about-additional-content").addClass('animate');
                $(".about .block-content").addClass('animate'); 
                if(exec == true){ 
                    $('.number-count').each(function () {
                        var $this = $(this);
                        jQuery({ count: 0 }).animate({ count: $this.text()}, {
                        duration: 4000, 
                        step: function () {
                            $this.text(Math.ceil(this.count) + '+');
                        }
                        })
                    });
                    exec = false;
                } 
            break;
            case "Services": 
                $(".benefits").addClass('animate');  
                $(".services .block-content").addClass('animate');
            break;
            case "Catalogue":
                $(".catalogue").addClass('animate');   
            break; 
            case "Portfolio":
                $(".testimonials").addClass('animate');  
                $(".portfolio").addClass('animate');
            break; 
            case "Contacts":  
                $(".contacts .block-content").addClass('animate'); 
            break; 
        } 
    });
    //content animations
    $(".expand-image-btn").on("click", function () {
        $(".gallery-expand-container").addClass("active");
        $(".gallery-expand-container .expanded-image").attr("src", $(this).prev().attr('src'));
        $(".expanded-image-header h4").text($(this).prev().attr('alt'));
        $("body").css('overflow', 'hidden'); 
    }); 
    $(".fa-xmark").on("click", function () {
        $(".gallery-expand-container").removeClass("active"); 
        $("body").css('overflow-y', 'scroll');
        
    });
});