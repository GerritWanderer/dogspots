App.SpotsModal = Ember.Mixin.create({
  tagName: 'form',
  classNames: 'modal fade in form-custom-field-modal'.w(),

  didInsertElement: function() {
    this.$().modal('show');
  },
  willDestroyElement: function() {
    this.$().modal('hide');
  }
});

App.AccountView = Ember.View.extend(App.SpotsModal);
App.SpotsFormView = Ember.View.extend(App.SpotsModal);
App.SpotsCommentView = Ember.View.extend(App.SpotsModal);