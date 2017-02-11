const Navigation = {
  init: function () {
    const body = $('body');
    const nav = body.find('section.hero.is-primary, nav.nav-primary');

    const toggle = nav.find('.nav-toggle');
    toggle.click(() => {
      toggle.toggleClass('is-active');
      nav.find('.nav-right').toggleClass('is-active');
    });

    body.find('.smooth-scroll').smoothScroll();
  }
};
