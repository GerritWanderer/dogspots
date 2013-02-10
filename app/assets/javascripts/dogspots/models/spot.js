App.Spot = DS.Model.extend({
  title: DS.attr('string'),
  average_ratings: DS.attr('object'),
  image_url: DS.attr('string'),
  comments: DS.hasMany('App.Comment'),
  ratings: DS.hasMany('App.Rating'),
  user: DS.belongsTo('App.User'),

  // Validations
  titleInvalid: function() {
    return !this.get("title") || this.get("title.length") < 3;
  }.property("title"),
  isInvalid: function() {
    return this.get("titleInvalid");
  }.property("titleInvalid")
});