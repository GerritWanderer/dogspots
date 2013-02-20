App.SpotCommentRoute = Ember.Route.extend({
  model: function() {
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