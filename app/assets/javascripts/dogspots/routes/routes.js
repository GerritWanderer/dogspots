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

App.SpotsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.find());
  }
});

App.SpotNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.createRecord());
  }
});