var App = Ember.Application.create();
App.Adapter = DS.RESTAdapter.extend();
App.Adapter.map('App.Spot', { comments: {'embedded': 'load'} });
App.Store = DS.Store.extend({
  revision: 11,
  adapter: App.Adapter.create()
});
