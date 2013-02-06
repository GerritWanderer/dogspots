App.Comment = DS.Model.extend({
  text: DS.attr('string'),
  spot: DS.belongsTo('App.Spot'),

  textInvalid: function() {
    return !this.get("text") || this.get("text.length") < 3;
  }.property("text"),
  isInvalid: function() {
    return this.get("textInvalid");
  }.property("textInvalid")
});