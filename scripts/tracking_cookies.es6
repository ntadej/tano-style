const TrackingCookies = {
  container: null,

  init: function () {
    TrackingCookies.container = $('#tracking_cookies');
    if (Cookies.get('cookies_enable')) {
      TrackingCookies.container.remove();
    } else {
      TrackingCookies.show();
    }
  },

  show: function () {
    TrackingCookies.container.slideDown(200);
  },

  hide: function (forever = false) {
    TrackingCookies.container.slideUp(200, () => {
      $(this).remove();
    });

    if (forever) {
      Cookies.set('cookies_enable', true, {
        expires: 180,
        path: '/',
        domain: 'tano.si'
      });
    }
  },

  delete: function () {
    Cookies.remove('cookies_enable', {
      path: '/',
      domain: 'tano.si'
    });
    window.location.reload();
  }
};
