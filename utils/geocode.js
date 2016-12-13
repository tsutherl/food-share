// Geocoder takes an address from an input and returns location info
// lat-long object can be retrieved from results[0].geometry.location

var geocoder = new google.maps.Geocoder();

function codeAddress(address) {
  var latLng;
  geocoder.geocode( {'address': address}, function(results, status) {
    //if successful query, sets map center to results
    //for form input can just add user to db w/ location data
    if (status == 'OK') {
      latLng = results[0].geometry.location;
      // map.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //     map: map,
      //     position: results[0].geometry.location
      // });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
  return latLng;
}
