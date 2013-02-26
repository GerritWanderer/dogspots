App.MapsView = Ember.View.extend({
  didInsertElement: function() {
    window.GoogleMaps = new google.maps.Map(document.getElementById("map_canvas"),  {
      center: new google.maps.LatLng(Ember.Constants.berlin_lat, Ember.Constants.berlin_lon),
      zoom: 10,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    window.GoogleMapsInfoWindow = new google.maps.InfoWindow({
      content: "loading ..."
    });

    this.createGoogleMapsMarkers();
  },

  createGoogleMapsMarkers: function() {
    window.GoogleMapsMarkers = [];
    for(i = 0; i < this.controller.get('content').get('length'); i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(this.controller.get('content').objectAt(i).get('latitude'), this.controller.get('content').objectAt(i).get('longitude')),
        map: window.GoogleMaps,
        title: this.controller.get('content').objectAt(i).get('title'),
        content: "<a href='/#/spots/"+this.controller.get('content').objectAt(i).get('id')+"'>"+this.controller.get('content').objectAt(i).get('title')+"</a> ",
        infoWindowIndex: i
      });
      window.GoogleMapsMarkers.push(marker);

      google.maps.event.addListener(marker, 'click', function(event) {
        window.GoogleMaps.panTo(event.latLng);
        window.GoogleMapsInfoWindow.setContent(marker.content);
        window.GoogleMapsInfoWindow.open(window.GoogleMaps, this);
      });
    }
  }
});