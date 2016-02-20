var field1 = [];
var field2 = ["08db2257-243d-4d47-8a38-51bc55a301b8", "43436036-0b73-4ced-a4df-c73af1909d11", "bf8370f9-15dc-4095-a921-549baab1c1d4", "4f094b79-8742-40bb-adf9-13d669cdbff6", "35f89fff-7f3a-4139-94cd-5feea77de4a3", "4641d460-0000-1000-4033-e1e1e11124e0", "4641dc70-0000-1000-4033-e1e1e11124e0", "4641f7d8-0000-1000-4037-e1e1e11124e0", "464200f2-0000-1000-4038-e1e1e11124e0", "519d237b-0000-1000-4085-e1e1e118eb80", "52404d0c-0000-1000-4008-e1e1e118f888", "5dd751cf-dd11-4425-8c8d-21afd2bae755", "e61b83f4-3a12-431e-8010-596f2466dc27", "fa14f029-831c-456b-a76e-2d3c26207c19", "12a50a62-13c0-4f98-921c-bc17d76dddd3", "44f8141e-f0cd-4769-82e5-0cdece510bf2"];
var field2names = ["100 Acre", "Solstice","Solstice", "---", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "Merriweather Farms", "DataSync","DataSync"];
var a={};
a.boundary = [];
var k=0;    
function call(){    
    
    var oauth = OAuth({
    consumer: {
        public: 'johndeere-54ET8agkbEm5s5WT83Kfyx57',
        secret: 'af433adb114ea5539aca09cc0c09f53cb52a2237'
    },
});
    
    var request_data = {
    url: 'https://apicert.soa-proxy.deere.com/platform/organizations/'+'273415'+'/fields/'+field2[i]+'/boundaries',
    method: 'GET'
    
};
    
    var token = {
    public: 'd661d87f-1cb2-42d7-84c2-05564410af9a',
    secret: '4IxQ/2YeJZH3kr5c/vJnJIz9BMfapCZ5xd4ApycHllrCH7Of+Cp1R4iivOj+ZV3XG66aSNo57YQhJPznGR9KuUwvAoHqdoVO8HuiRatJHxw='
};
    
    $.ajax({
    url: request_data.url,
    type: request_data.method,
    data: oauth.authorize(request_data, token)
}).done(function(data) {
        data = xml2json(data, " ");
        data = JSON.parse(data);
        console.log(data);
        if(data.collection.total == 1){
    a.boundary.id=k++;
   a.boundary.multipolygons = data.collection.boundary.multipolygon.rings.points;
    a.boundary.crop = data.collection.boundary.multipolygon.name;
    a.boundary.area = math.round(data.collection.boundary.area.valueAsDouble,2);
    a.boundary.org = "HackIL 2016";
    a.boundary.client = field2names[i];
        console.log(a);}
});
}

for(i=0;i<16;i++){
call();
}

console.log(a);