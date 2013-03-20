Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container) {
    var store = container.lookup('store:main');
    var attributes = $('meta[name="current-user"]').attr('content');

    if (attributes) {
      var object = store.load(App.User, JSON.parse(attributes));
      App.CurrentUser = App.User.find(object.id);
    }
  }
});