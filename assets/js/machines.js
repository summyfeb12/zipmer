        var map = L.map('map').setView([41.6,-93.0167], 8);
        
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 18,
            dragging: 'true',
            id: 'mapbox.streets',
        }).addTo(map);
var data;  
console.log(a);         
 d3.json("machineData.json", function(error, json) {
  if (error) return console.warn(error);
   data = json;  
  console.log(data);
  //data
  var tractordata = data.machines.filter(function(d){return d.name=="Tractor";});
  var graindrilldata = data.machines.filter(function(d){return d.name=="Grain Drill";});
  var cultivatordata = data.machines.filter(function(d){return d.name=="Cultivator";});
  var sprayerdata = data.machines.filter(function(d){return d.name=="Sprayer";});
  var sorterdata = data.machines.filter(function(d){return d.name=="Sorter";});  
  var planterdata = data.machines.filter(function(d){return d.name=="Planter";}); 
  var harrowdata = data.machines.filter(function(d){return d.name=="Harrow";});
  var potplanterdata = data.machines.filter(function(d){return d.name=="Potato Planter";});
  var combinedata = data.machines.filter(function(d){return d.name=="Combine";});  
  
  var tractorIcon = L.icon({
     iconUrl: 'images/tractor.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var grainIcon = L.icon({
     iconUrl: 'images/graindrill.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var cultivatorIcon = L.icon({
     iconUrl: 'images/cultivator.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var sprayerIcon = L.icon({
     iconUrl: 'images/sprayer.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var sorterIcon = L.icon({
     iconUrl: 'images/sorter.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var planterIcon = L.icon({
     iconUrl: 'images/planter.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var harrowIcon = L.icon({
     iconUrl: 'images/harrow.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var potatoIcon = L.icon({
     iconUrl: 'images/potato.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });
  var combineIcon = L.icon({
     iconUrl: 'images/combine.png',

     iconSize:     [48, 48], // size of the icon
     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  //map elements
  var tr = L.layerGroup([]);
  tractordata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: tractorIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(tr);});
  var gd = L.layerGroup([]);
  graindrilldata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: grainIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(gd);}); 
  var culd = L.layerGroup([]); 
  cultivatordata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: cultivatorIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(culd);});
  var spd = L.layerGroup([]); 
  sprayerdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: sprayerIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(spd);});
  var sord = L.layerGroup([]); 
  sorterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: sorterIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(sord);});
     
  var pld = L.layerGroup([]);
     planterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: planterIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(pld);});
  var hd = L.layerGroup([]);
     harrowdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: harrowIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(hd);});
  var potpld = L.layerGroup([]);
     potplanterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: potatoIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(potpld);});
  var comd = L.layerGroup([]); 
      combinedata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: combineIcon}).bindPopup(d.name + d.owner +d.crops+d.description+d.availableFrom+d.availableTo).addTo(comd);});

  var overlayMaps = {
    "<div id='tractorID'>Tractor</div>": tr,
    "<div id='grainID'>Grain Drill</div>":gd,
    "<div id='cultivateID'>Cultivator</div>":culd,
    "<div id='sprayerID'>Sprayer</div>":spd,
    "<div id='sorterID'>Sorter</div>":sord,
    "<div id='planterID'>Planter</div>":pld,
    "<div id='harrowID'>Harrow</div>":hd,
    "<div id='potatoID'>Potato Planter</div>":potpld,
    "<div id='combineID'>Combine</div>":comd 
};     
  L.control.layers(null,overlayMaps).addTo(map);     
       
     
  console.log(tr);    

  $('input[name="machinetype"]').click(function(){

      if($('#tractor').is(':checked')){map.addLayer(tr);}
      if(!$('#tractor').is(':checked')){map.removeLayer(tr);}
      if($('#graindrill').is(':checked')){map.addLayer(gd);}
      if(!$('#graindrill').is(':checked')){map.removeLayer(gd);}

      if($('#cultivator').is(':checked')){map.addLayer(culd);}
      if(!$('#cultivator').is(':checked')){map.removeLayer(culd);}
      if($('#sprayer').is(':checked')){map.addLayer(spd);}
      if(!$('#sprayer').is(':checked')){map.removeLayer(spd);}

      if($('#harrow').is(':checked')){map.addLayer(hd);}
      if(!$('#harrow').is(':checked')){map.removeLayer(hd);}
      if($('#potato').is(':checked')){map.addLayer(potpld);}
      if(!$('#potato').is(':checked')){map.removeLayer(potpld);}

      if($('#sorter').is(':checked')){map.addLayer(sord);}
      if(!$('#sorter').is(':checked')){map.removeLayer(sord);}
      if($('#combine').is(':checked')){map.addLayer(comd);}
      if(!$('#combine').is(':checked')){map.removeLayer(comd);}

      if($('#planter').is(':checked')){map.addLayer(pld);}
      if(!$('#planter').is(':checked')){map.removeLayer(pld);}
  });
 });  