$(window).on("load resize", function () {
    $("main").css("min-height", $(window).height());
    $(".rationale").width($("main").width() - 20);
    $(".rationale").height($(".rationale").width() * 1.35);
    if ($(".rationale").height() > $(window).height() - 50) {
        $(".rationale").height($(window).height() - 50);
        $(".rationale").width($(".rationale").height() / 1.35);
    }
});