App.SpotsNewController = Ember.ObjectController.extend({
  create: function() {
    if (this.content.get("isInvalid")) {
      // do something
      return;
    } else {
      this.store.commit();
      this.content.addObserver('id', this, 'afterSpotCreate');
    }
  },
  cancle: function() {
    this.content.deleteRecord();
    this.transitionToRoute('spots');
  },
  afterSpotCreate: function () {
    debugger
    this.content.removeObserver('id', this, 'afterSpotCreate');
    this.content.get('comments').createRecord({
      spot: this.content,
      user: App.currentUser,
      text: this.content.get("comment_text")
    });

    if (this.content.get('comments').objectAt(0).get("isInvalid")) {
      // do something
    } else {
      this.store.commit();
    }
    this.transitionToRoute('spotsShow', this.content);
  }
});