App.MapsController = Ember.ArrayController.extend({
  i: 0,
  berlin_lat: 52.501476,
  berlin_lon: 13.402526,

  didLoadAllContent: function () {
    if (this.content.everyProperty('isLoaded') && this.content.get('length') > 0) {
      if (typeof window.GoogleMaps == "undefined") {
        window.GoogleMaps = new google.maps.Map(document.getElementById("map_canvas"),  {
          center: new google.maps.LatLng(this.berlin_lat, this.berlin_lon),
          zoom: 10,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        window.GoogleMapsMarkers = [];
        window.GoogleMapsInfoWindow = new google.maps.InfoWindow({
          content: "loading ..."
        });
      }
      if (this.content.get('length') == (this.i+1)) {
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(this.content.objectAt(this.i).get('latitude'), this.content.objectAt(this.i).get('longitude')),
          map: window.GoogleMaps,
          title: this.content.objectAt(this.i).get('title'),
          infoWindowIndex: this.i
        });
        window.GoogleMapsMarkers.push(marker);

        google.maps.event.addListener(marker, 'click', function(event) {
          window.GoogleMaps.panTo(event.latLng);
          window.GoogleMapsInfoWindow.setContent(this.title);
          window.GoogleMapsInfoWindow.open(window.GoogleMaps, this);
        });

        this.i++;
      }
    }
  }.observes("content.@each.isLoaded")
});