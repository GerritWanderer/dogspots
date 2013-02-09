App.Router.map(function() {
  this.resource('spots');
  this.resource('spot', { path: '/spots/:spot_id' });
  this.resource('spotEdit', { path: '/spots/:spot_id/edit' });
  this.route("spotNew", { path: "/spots/new" });
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('spots');
  }
});

App.SpotRoute = Ember.Route.extend({
  setupController: function(controller) {
    this.controllerFor('commentNew').set('model', App.Comment.createRecord({
      user: App.currentUser
    }));
    this.controllerFor('ratingNew').set('model', App.Rating.createRecord({
      user: App.currentUser
    }));
  }
});
App.SpotsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.find());
  }
});
App.SpotNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.createRecord({
      user: App.currentUser
    }));
  }
});