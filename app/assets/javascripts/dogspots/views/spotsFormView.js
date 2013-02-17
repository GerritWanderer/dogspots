App.SpotsFormView = Ember.View.extend({
  tagName: 'form',
  classNames: 'modal fade in form-custom-field-modal'.w(),

  didInsertElement: function() {
    this.$().modal('show');
  },
  willDestroyElement: function() {
    this.$().modal('hide');
  }
});