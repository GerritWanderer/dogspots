Ember.Application.initializer({
  name: 'currentUser',
  initialize: function(container) {
    var store = container.lookup('store:main');
    var attributes = $('meta[name="current-user"]').attr('content');

    if (attributes) {
      var object = store.load(App.User, JSON.parse(attributes));
      var user = App.User.find(object.id);
      var controller = container.lookup('controller:currentUser').set('content', user);
      container.typeInjection('controller', 'currentUser', 'controller:currentUser');
    }
  }
})
