App.Router.map(function() {
  this.resource('spots', function() {
    this.route("new", { path: "/spots/new" });
    this.resource('spot', { path: "/:spot_id" }, function() {
      this.route("edit");
      this.route("comment");
    });
  });

  this.route("account");
  this.route("maps");
  this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('spots');
  }
});

App.SpotsIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Spot.all().get('length') == 0 ? App.Spot.find() : App.Spot.all();
  }
});
App.SpotsNewRoute = Ember.Route.extend(App.SpotsFormable, {
  model: function() {
    return App.Spot.createRecord({
      user: App.CurrentUser
    });
  }
});
App.SpotEditRoute = Ember.Route.extend(App.SpotsFormable, {
  model: function() {
    return this.modelFor('spot');
  }
});
App.MapsRoute = Ember.Route.extend({
  model: function() {
    return App.Spot.all().get('length') == 0 ? App.Spot.find({}) : App.Spot.all();
  }
});