App.Router.map(function() {
  this.resource('spots', function() {
    this.route("new", { path: "/spots/new" });
    this.resource('spot', { path: "/:spot_id" }, function() {
      this.route("edit");
      this.route("comment");
    });
  });

  this.route("about");
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('spots');
  }
});

App.SpotsIndexRoute = Ember.Route.extend({
  model: function() {
    return App.Spot.find();
  }
});

App.SpotsFormable = Ember.Mixin.create({
  renderTemplate: function() {
    this.render('spots/form')
  },
  events: {
    cancel: function(spot) {
      spot.transaction.rollback();
      return this.transitionTo('spots');
    },
    submit: function(spot) {
      spot.get('store').commit();
      if (spot.didCreate) {
        return this.transitionTo('spot', spot);
      }
    }
  }
});
App.SpotsNewRoute = Ember.Route.extend(App.SpotsFormable, {
  model: function() {
    return App.Spot.createRecord({
      user: App.currentUser
    });
  }
});
App.SpotEditRoute = Ember.Route.extend(App.SpotsFormable, {
  model: function() {
    return this.modelFor('spot');
  }
});
App.SpotCommentRoute = Ember.Route.extend({
  model: function() {
    debugger
    return App.Comment.createRecord({
      user: App.currentUser,
      spot: this.modelFor('spot')
    });
  },
  renderTemplate: function() {
    this.render('spots/comment')
  },
  events: {
    cancel: function(comment) {
      debugger
      comment.transaction.rollback();
      return this.transitionTo('spot', this.modelFor('spot'));
    },
    submit: function(comment) {
      comment.get('store').commit();
      if (comment.didCreate) {
        return this.transitionTo('spot', this.modelFor('spot'));
      }
    }
  }
});
