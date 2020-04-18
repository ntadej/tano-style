const Tabs = {
  init: function (prefix) {
    const body = $('body');
    const tabs = body.find('#' + prefix + '-tabs');

    if (!tabs.length) {
      return;
    }

    tabs.find('li a').click((event) => {
      event.preventDefault();
      event.stopPropagation();

      const body = $('body');
      const tabs = body.find('#' + prefix + '-tabs');
      const tabsLinks = tabs.find('li');
      tabsLinks.removeClass('is-active');

      const tabsContent = body.find('#' + prefix + '-tabs-content');

      let current = $(event.currentTarget).parent();
      current.addClass('is-active');
      let index = tabsLinks.index(current);
      let tabsList = tabsContent.find('.is-tab');
      tabsList.removeClass('is-active');
      $(tabsList.get(index)).addClass('is-active');
    });

    tabs.find('li.is-active a').click();
  }
};
