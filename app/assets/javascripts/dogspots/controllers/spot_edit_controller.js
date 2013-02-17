App.SpotEditController = Ember.ObjectController.extend({
  save: function() {
    if (this.content.get("isInvalid")) {
      // do something
      return;
    } else {
      this.store.commit();
      this.transitionToRoute('spotsShow', this.content)
    }
  },
  cancel: function() {
    if (this.content.isDirty) {
      this.content.rollback();
    }
    this.transitionToRoute('spotsShow', this.content)
  },
  destroy: function() {
    // setup an observer to handle success/error cases (this.content.one("didDelete"))
    this.content.deleteRecord();
    this.store.commit();
    this.transitionToRoute('spots');
  }
});