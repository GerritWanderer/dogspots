App.User = DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  isGuest: DS.attr('boolean'),
  spots: DS.hasMany('App.Spot'),
  comments: DS.hasMany('App.Comment'),
  ratings: DS.hasMany('App.Rating')
});