App.SpotsModalMixin = Ember.Mixin.create({
  didInsertElement: function() {
    this.$().modal('show');

    window.GoogleMaps = new google.maps.Map(document.getElementById("map_canvas"),  {
      center: new google.maps.LatLng(Ember.Constants.berlin_lat, Ember.Constants.berlin_lon),
      zoom: 14,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    google.maps.event.addListener(window.GoogleMaps, 'click', function(event) {
      if (typeof window.GoogleMapsMarker != "undefined") {
        window.GoogleMapsMarker.setMap(null);
      }
      window.GoogleMapsMarker = new google.maps.Marker({
        position: event.latLng,
        map: window.GoogleMaps
      });
      App.CurrentUser.set('latitude', event.latLng.hb);
      App.CurrentUser.set('longitude', event.latLng.ib);
    });
  },

  willDestroyElement: function() {
    this.$().modal('hide');
  },
  nextStep: function() {
    var currentModal = $(".modal:visible").toggle();
    currentModal.next().toggle();
  },
  prevStep: function() {
    var currentModal = $(".modal:visible").toggle();
    currentModal.prev().toggle();
  }
});
