App.SpotsFormable = Ember.Mixin.create({
  renderTemplate: function() {
    this.render('spots/form')
  },
  events: {
    cancel: function(spot) {
      spot.transaction.rollback();
      return this.transitionTo('spots');
    },
    submit: function(spot) {
      spot.get('ratings').createRecord(this.controller.rating);
      debugger
      spot.set('latitude', this.controller.latitude);
      spot.set('longitude', this.controller.longitude);
      spot.get('store').commit();
      if (spot.didCreate) {
        return this.transitionTo('spot', spot);
      }
    }
  }
});