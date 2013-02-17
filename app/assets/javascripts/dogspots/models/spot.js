App.Spot = DS.Model.extend({
  title: DS.attr('string'),
  average_ratings: DS.attr('object'),
  image_url: DS.attr('string'),
  comments: DS.hasMany('App.Comment'),
  ratings: DS.hasMany('App.Rating'),
  user: DS.belongsTo('App.User'),

  // Computed Properties
  image_url_style: function() {
    return "background:url('" + this.get("image_url") + "') center center no-repeat";
  }.property("image_url"),
  stars_style: function() {
    if (this.get("average_ratings") === undefined) {
      return "stars0";
    } else {
      return "stars" + this.get("average_ratings").spot;
    }
  }.property("average_ratings"),

  // Validations
  titleInvalid: function() {
    return !this.get("title") || this.get("title.length") < 3;
  }.property("title"),
  isInvalid: function() {
    return this.get("titleInvalid");
  }.property("titleInvalid")
});