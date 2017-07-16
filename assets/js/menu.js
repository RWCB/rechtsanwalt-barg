// highlight current page
(function() {
    var currentPage = $("body").data("current-page");
    if (currentPage) {
        $("a[href$='" + currentPage + "']").addClass("active");
    }
})();
