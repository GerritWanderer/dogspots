App.SpotNewController = Ember.ObjectController.extend({
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
    this.content.removeObserver('id', this, 'afterSpotCreate');
    this.comment = App.Comment.createRecord({
      spot: this.content,
      text: this.content.get("text")}
    );

    if (this.comment.get("isInvalid")) {
      // do something
      this.transitionToRoute('spot', this.content);
    } else {
      this.store.commit();
      this.comment.addObserver('id', this, 'afterCommentCreate');
    }
  },
  afterCommentCreate: function () {
    this.comment.removeObserver('id', this, 'afterCommentCreate');
    this.transitionToRoute('spot', this.content);
  },
});