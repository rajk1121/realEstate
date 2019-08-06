var row = $('.row');
var $window = $(window);
$(document).on('scroll', function () {
    console.log('hello');
    function isScrolledIntoView(elem, $window) {
        var docViewTop = $window.scrollTop();
        // console.log(docViewTop);
        var docViewBottom = docViewTop + $window.height();

        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();

        return ((elemTop >= docViewTop) && (elemBottom <= docViewBottom));
    }
    if (isScrolledIntoView(row, $window)) {
        row.addClass('animated fadeIn')
    }
})