App.Spot = DS.Model.extend({
  title: DS.attr('string'),
  comments: DS.hasMany('App.Comment')
});