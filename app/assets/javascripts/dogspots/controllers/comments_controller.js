App.CommentsController = Ember.ArrayController.extend({
  report: function(comment_id) {
    var transaction = this.store.transaction("report");
    transaction.createRecord(App.CommentReport, {comment_id: comment_id});
    transaction.commit();
  }
});