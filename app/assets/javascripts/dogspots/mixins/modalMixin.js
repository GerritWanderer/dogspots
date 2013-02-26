App.ModalMixin = Ember.Mixin.create({
  didInsertElement: function() {
    this.$().modal('show');
  },
  willDestroyElement: function() {
    this.$().modal('hide');
  }
});