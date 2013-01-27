App.Comment = DS.Model.extend({
  text: DS.attr('string'),
  spot: DS.belongsTo('App.Spot')
});