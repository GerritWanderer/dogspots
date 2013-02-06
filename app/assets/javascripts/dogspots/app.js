var App = Ember.Application.create();

DS.RESTAdapter.registerTransform('object', {
  deserialize: function(serialized) {
    return Ember.isNone(serialized) ? {} : serialized;
  },
  serialize: function(deserialized) {
    return Ember.isNone(deserialized) ? {} : deserialized;
  }
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
