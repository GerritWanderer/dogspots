App.AccountRoute = Ember.Route.extend({
  model: function() {
    if (App.CurrentUser.get('isGuest')) {
      return App.User.createRecord();
    } else {
      return App.CurrentUser;
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
        App.CurrentUser = user;
        return this.transitionTo('spots');
      }
    }
  }
});