App.SpotEditController = Ember.ObjectController.extend({
  update: function() {
    this.store.commit();
    this.transitionToRoute('spot', this.content)
  },
  cancle: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    this.transitionToRoute('spot', this.content)
  },
  destroy: function() {
    this.content.deleteRecord();
    this.store.commit();
    this.transitionToRoute('spots');
  },
});