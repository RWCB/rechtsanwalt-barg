// highlight current page
$('a').click(function() {
    var currentUrl = window.location.href;
    echo currentUrl;
    if(currentUrl.endsWith('/')) {
        $("a[href$='index.html']").addClass("active");
        $("a:not([href$='index.html'])").removeClass("active");
    } else {
        var currentPage = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);
        echo currentPage;
        $("a[href$='" + currentPage + "']").addClass("active");
        $("a:not([href$='" + currentPage + "'])").removeClass("active");
    }
}).triggerHandler('click');
