App.SpotNewController = Ember.ObjectController.extend({
  create: function() {
    this.store.commit();
    this.content.addObserver('id', this, 'afterSpotCreate');
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
    this.store.commit();
    this.comment.addObserver('id', this, 'afterCommentCreate');
  },
  afterCommentCreate: function () {
    this.comment.removeObserver('id', this, 'afterCommentCreate');
    this.transitionToRoute('spot', this.content)
  },
});