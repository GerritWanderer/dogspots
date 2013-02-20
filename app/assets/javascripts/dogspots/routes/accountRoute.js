App.AccountRoute = Ember.Route.extend({
  model: function() {
    if (App.currentUser.get('isGuest')) {
      return App.User.createRecord();
    } else {
      return App.currentUser;
    }
  },
  events: {
    cancel: function(user) {
      user.transaction.rollback();
      return this.transitionTo('spots');
    },
    submit: function(user) {
      user.get('store').commit();
      if (user.didCreate) {
        App.currentUser = user;
        return this.transitionTo('spots');
      }
    }
  }
});