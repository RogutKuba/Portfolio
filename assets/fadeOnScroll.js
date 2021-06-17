$(document).ready(function() 
{
    $(window).scroll( function()
    {
        $('.about').each( function(i)
        {

            var bottom_of_object = $(this).position().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object )
            {
                $(this).children().css( "opacity", 1 );
                $(this).children().css( "transform", "translateY(0em)" );   
            }
        }); 
    });
});