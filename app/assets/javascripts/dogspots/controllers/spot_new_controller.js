App.SpotNewController = Ember.ObjectController.extend({
  create: function() {
    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  cancle: function() {
    this.content.deleteRecord();
    this.transitionToRoute('spots');
  },
  afterCreate: function () {
    this.content.removeObserver('id', this, 'afterCreate');
    this.transitionToRoute('spot', this.content)
  }
});