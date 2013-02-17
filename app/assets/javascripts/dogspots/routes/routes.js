App.Router.map(function() {
  this.resource('spots');
  this.resource('spotsShow', { path: '/spots/:spot_id' });
  this.resource('spotsEdit', { path: '/spots/:spot_id/edit' });
  this.route("spotsNew", { path: "/spots/new" });

  this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('spots');
  }
});

App.SpotsShowRoute = Ember.Route.extend({
  setupController: function(controller) {
    this.controllerFor('commentNew').set('model', App.Comment.createRecord({
      user: App.currentUser
    }));
//    this.controllerFor('ratingNew').set('model', App.Rating.createRecord({
//      user: App.currentUser
//    }));
  }
});
App.SpotsRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.find());
  }
});
App.SpotsNewRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('content', App.Spot.createRecord({
      user: App.currentUser
    }));
  }
});
