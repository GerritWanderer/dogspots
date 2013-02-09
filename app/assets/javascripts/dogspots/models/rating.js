App.Rating = DS.Model.extend({
  clean: DS.attr('number'),
  ground: DS.attr('number'),
  play: DS.attr('number'),
  water: DS.attr('number'),
  spot: DS.belongsTo('App.Spot'),
  comment: DS.belongsTo('App.Comment'),
  user: DS.belongsTo('App.User'),

  ratingsInvalid: function() {
    return isNaN(this.get("clean")) || isNaN(this.get("ground")) || isNaN(this.get("play")) || isNaN(this.get("water"));
  }.property("clean", "ground", "play", "water"),
  isInvalid: function() {
    return this.get("ratingsInvalid");
  }.property("ratingsInvalid")
});