        var map = L.map('map').setView([41.6,-91.8167], 8);
        
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
     clickable: 'true',
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
  tractordata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: tractorIcon}).addTo(tr).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var gd = L.layerGroup([]);
  graindrilldata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: grainIcon}).addTo(gd).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var culd = L.layerGroup([]); 
  cultivatordata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: cultivatorIcon}).addTo(culd).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var spd = L.layerGroup([]); 
  sprayerdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: sprayerIcon}).addTo(spd).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var sord = L.layerGroup([]); 
  sorterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: sorterIcon}).addTo(sord).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
     
  var pld = L.layerGroup([]);
     planterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: planterIcon}).addTo(pld).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var hd = L.layerGroup([]);
     harrowdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: harrowIcon}).addTo(hd).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var potpld = L.layerGroup([]);
     potplanterdata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: potatoIcon}).addTo(potpld).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});
  var comd = L.layerGroup([]); 
      combinedata.forEach(function(d){L.marker([d.latitude, -d.longitude], {icon: combineIcon}).addTo(comd).on('click',function(){
    $(".popup-outer").addClass("show");
    $(".popup-grey").addClass("show");
    changePopupDetails(d.availableFrom,d.availableTo,d.name);
  });});

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

 function changePopupDetails(fromDate, toDate, machineData){
  $("#fromDate").html(fromDate);
  $("#toDate").html(toDate);
  $(".card-image").attr('src',"machines/"+machineData+".jpg");
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data){
      console.log(data);
      $("#uimg").attr('src',data.results[0].user.picture.medium);
      $(".user-name").html(data.results[0].user.name.first.capitalize()+" "+data.results[0].user.name.last.capitalize());
      $("#phno").html(data.results[0].user.cell);
      $(".price").html("$"+getRandomInt(5000,7000));
      // console.log();
    }
  });
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 } 