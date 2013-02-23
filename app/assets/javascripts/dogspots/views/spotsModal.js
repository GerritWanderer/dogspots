App.SpotsModal = Ember.Mixin.create({
  didInsertElement: function() {
    this.$().modal('show');
  },
  willDestroyElement: function() {
    this.$().modal('hide');
  },
  step: function(d) {
    var currentModal = $(".modal:visible").toggle();
    currentModal.next().toggle();
  }
});

App.AccountView = Ember.View.extend(App.SpotsModal);
App.SpotsFormView = Ember.View.extend(App.SpotsModal);
App.SpotsCommentView = Ember.View.extend(App.SpotsModal);