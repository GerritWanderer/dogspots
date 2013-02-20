var App = Ember.Application.create();

DS.RESTAdapter.registerTransform('object', {
  deserialize: function(serialized) {
    return Ember.isNone(serialized) ? {} : serialized;
  },
  serialize: function(deserialized) {
    return Ember.isNone(deserialized) ? {} : deserialized;
  }
});
DS.RESTAdapter.map('App.Spot', {
  ratings: { embedded: 'always' }
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
