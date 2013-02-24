App.MapsController = Ember.ArrayController.extend({
  content: [],
  i: 0,
  googleMaps: false,

  didLoadAllContent: function () {
    if (this.content.everyProperty('isLoaded') && this.content.get('length') > 0) {
      if (!this.googleMaps) {
        this.googleMaps = new google.maps.Map(document.getElementById("map_canvas"),  {
          center: new google.maps.LatLng(52.1244, 13.0454),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
      }
      if (this.content.get('length') == (this.i+1)) {
        new google.maps.Marker({
          position: new google.maps.LatLng(this.content.objectAt(this.i).get('latitude'), this.content.objectAt(this.i).get('longitude')),
          map: this.googleMaps,
          title: this.content.objectAt(this.i).get('title')
        });
        this.i++;
      }
    }
  }.observes("content.@each.isLoaded")
});