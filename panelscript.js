$(function () {
    var o = $('.overlayp'),
        r = $('.revealp'),
        p = $('.pushp'),
        ob = $('.overlay'),
        rb = $('.reveal'),
        pb = $('.push'),
        m = $('.main'),
        panel = $('.panel');
    panel.css('min-height', m.outerHeight());

    ob.click(function () {
        o.toggleClass('active');
    });
    rb.click(function () {
        m.toggleClass('ractive').removeClass('pactive');
    });
    pb.click(function () {
        m.toggleClass('pactive');
        p.toggleClass('active');
    });
});
