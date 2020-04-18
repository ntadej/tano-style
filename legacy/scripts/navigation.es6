const Navigation = {
  init: function () {
    const body = $('body');
    const nav = body.find('section.hero.is-primary, nav.navbar-primary');

    const toggle = nav.find('.navbar-burger');
    toggle.click(() => {
      toggle.toggleClass('is-active');
      nav.find('.navbar-menu').toggleClass('is-active');
    });

    body.find('.smooth-scroll').smoothScroll();
  }
};
