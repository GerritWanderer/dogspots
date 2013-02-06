App.CommentNewController = Ember.ObjectController.extend({
  create: function() {
    this.content.set("spot", this.controllerFor("spot").get("content"));
    if (this.content.get("isInvalid")) {
      this.content.set("spot", undefined);
    } else {
      this.store.commit();
      this.content.addObserver('id', this, 'afterCreate');
    }
  },
  cancle: function() {
    this.content.deleteRecord();
    this.transitionToRoute('spots');
  },
  afterCreate: function () {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('spot', this.content.get("spot"));
  }
});