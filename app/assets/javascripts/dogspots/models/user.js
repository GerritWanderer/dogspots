App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  spots: DS.hasMany('App.Spot'),
  comments: DS.hasMany('App.Comment'),
  ratings: DS.hasMany('App.Rating')
});