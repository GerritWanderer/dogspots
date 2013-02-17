App.RatingNewController = Ember.ObjectController.extend({
  ground: [1,2,3,4,5],
  clean: [1,2,3,4,5],
  play: [1,2,3,4,5],
  water: [1,2,3,4,5],

  create: function() {
    this.content.set("spot", this.controllerFor("spotsShow").get("content"));
    if (this.content.get("isInvalid")) {
      this.content.set("spot", undefined);
    } else {
      this.store.commit();
      this.content.addObserver('id', this, 'afterCreate');
    }
  },
  afterCreate: function () {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('spotsShow', this.content.get("spot"));
  }
});