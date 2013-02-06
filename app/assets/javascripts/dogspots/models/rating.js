App.Rating = DS.Model.extend({
  clean: DS.attr('number'),
  ground: DS.attr('number'),
  play: DS.attr('number'),
  water: DS.attr('number'),
  spot: DS.belongsTo('App.Spot'),
  comment: DS.belongsTo('App.Comment')
});