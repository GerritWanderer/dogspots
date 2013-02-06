App.CommentsController = Ember.ArrayController.extend({
  report: function(comment) {
    // Create a commit in a seperate transaction
    // var transaction = this.store.transaction();
    // transaction.createRecord(App.CommentReport, {comment: comment});
    // transaction.commit();
  }
});