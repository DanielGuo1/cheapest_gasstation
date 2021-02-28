$( document ).ready(function() {
  let endpoint = "https://creativecommons.tankerkoenig.de/json/list.php"
  let apiKey = 'your_api_key'
  let lat = 48.783333
  let long = 9.183333
  var mymap = L.map('mapid').setView([lat, long], 15);

  $.ajax({
      url: "https://creativecommons.tankerkoenig.de/json/list.php",
      data: {
          lat: lat,
          lng: long,
          rad: 10,
          sort: "price",
          type: "e5",
          apikey: apiKey
      },
      success: function(response) {
          if (!response.ok) {
              console.error(response.message);
          } else {
            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=access_token', {
                maxZoom: 15,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'access.token'
            }).addTo(mymap);

            var cheapDiv = document.getElementById('cheapest');
            var expDiv = document.getElementById('expensive');

            var price = [];
            for (var i = 0; i < response.stations.length; ++i) {
            price.push(response.stations[i].price);

            L.marker([response.stations[i].lat, response.stations[i].lng]).addTo(mymap).bindPopup("<b>"+response.stations[i].name+"</b><br>Preis: "+response.stations[i].price+" EUR").openPopup();
            }

            var minPrice = Math.min.apply(Math, price)
            var maxPrice = Math.max.apply(Math,price)
            var minTankstelle = document.createTextNode(response.stations[price.indexOf(minPrice)].name)
            var maxTankstelle = document.createTextNode(response.stations[price.indexOf(maxPrice)].name)

            var p = document.createElement('p');
            cheapDiv.appendChild(p);
            p.appendChild(minTankstelle)
            var br = document.createElement('br');

            //cheap
            var paragraph = document.getElementById("boxUeberschrift_cheap");
            var text = document.createTextNode(": "+minPrice +" EUR");

            paragraph.appendChild(text);

            //exp
            var exp = document.getElementById("boxUeberschrift_exp");
            var txt = document.createTextNode(": "+maxPrice +" EUR");

            exp.appendChild(txt);

            var exp = document.createElement('p');
            expensive.appendChild(exp);
            exp.appendChild(maxTankstelle)


            //Kreis um Tankstelle

            var minTankstelle_lng = response.stations[price.indexOf(minPrice)].lng
            var minTankstelle_lat = response.stations[price.indexOf(minPrice)].lat

            var maxTankstelle_lng = response.stations[price.indexOf(maxPrice)].lng
            var maxTankstelle_lat = response.stations[price.indexOf(maxPrice)].lat

            var billig = L.circle([minTankstelle_lat, minTankstelle_lng], {
                color: 'green',
                fillColor: '#008000',
                fillOpacity: 0.5,
                radius: 250
            }).addTo(mymap);

            var teuer = L.circle([maxTankstelle_lat, maxTankstelle_lng], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 250
            }).addTo(mymap);


              console.log(response);
          }
      },
      error: function(p){
          that.showError('AJAX-Problem', 'status: ' + p.status + ' statusText: ' + p.statusText);
      }
  });


});
