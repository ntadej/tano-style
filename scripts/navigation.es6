const Navigation = {
  init: function () {
    const body = $('body');
    const nav = body.find('header.nav-primary, nav.nav-primary');

    const toggle = nav.find('.nav-toggle');
    toggle.click((event) => {
      toggle.toggleClass('is-active');
      nav.find('.nav-right').toggleClass('is-active');
    })

    body.find('.smooth-scroll').smoothScroll();
  }
}
