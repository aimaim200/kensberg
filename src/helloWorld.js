
	var map;

function drawMap() {
    var storeLocationOrig = new google.maps.LatLng(53.477726, -2.232750),
        storeLocationNew = new google.maps.LatLng(53.484234, -2.235996);

    var mapOptions = {
      'center' : new google.maps.LatLng(53.477726, -2.232750),
      'zoom' : 12,
      'mapTypeId' : google.maps.MapTypeId.ROADMAP,
      'draggable' : true
    };
    
    map = new google.maps.Map(document.getElementById("my-map"), mapOptions);
    
    var markerOrig = new google.maps.Marker({
            position: storeLocationOrig,
            map: map,
            title: 'Find us here (Capital Records Tower for real)'
        }),
        markerNew = new google.maps.Marker({
            position: storeLocationNew,
            map: map,
            title: "Here's is our new store (aka Dodger Stadium)"
        });
    
    var popupContentOrig = 'Axelisys Limited<br />';
    popupContentOrig += '3 Piccadilly<br />';
    popupContentOrig += 'Manchester, UK';
    
    var popupContentNew = 'ZiFerblat<br />';
    popupContentNew += 'Edge Street<br />';
    popupContentNew += 'Manchester, UK';
    
    var infowindowOrig = new google.maps.InfoWindow({
            content: popupContentOrig,
            maxWidth: 270
        }),
        infowindowNew = new google.maps.InfoWindow({
            content: popupContentNew,
            maxWidth: 270
        });
    
    google.maps.event.addListener(markerOrig, 'click', function() {
        infowindowOrig.open(map, markerOrig);
    });
    
    google.maps.event.addListener(markerNew, 'click', function() {
        infowindowNew.open(map, markerNew);
    });


    function deactivateAllTabs() {
        var tabHeaders;
        var tabContents;
        
        for(var i = 0; 1 < tabHeaders.length; i++) {
             tabHeaders[i].className = headerClass;
             tabContents[i].className = contentClass; 
       }
    };

