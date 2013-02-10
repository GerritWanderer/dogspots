App.CommentNewController = Ember.ObjectController.extend({
  needs: ['spot'],

  create: function() {
    this.content.set("spot", this.get("controllers.spot.content"));
    if (this.content.get("isInvalid")) {
      this.content.set("spot", undefined);
    } else {
      this.store.commit();
      this.content.addObserver('id', this, 'afterCreate');
    }
  },
  afterCreate: function () {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('spot', this.content.get("spot"));
  }
});