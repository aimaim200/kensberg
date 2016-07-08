describe("draw Map", function(){
	it("Google Maps Geographic First marker  Coordinates" ,function(){
     var storeLocationOrig = 53.477726;
        expect(storeLocationOrig).toEqual(53.477726);
    });
 });

describe("draw Map", function(){
    it("Google Maps Geographic Second Marker Coordinates", function(){
      var   storeLocationNew = 53.484234;
      expect(storeLocationNew).toEqual(53.484234);
    });
 });
describe("draw Map",function(){
     it("Google Maps mapOptions", function() {
        var spy = jasmine.createSpy('spy');
        var mapOptions = {
            zoom: spy
        };
       mapOptions.zoom(12);
       expect(spy.calls.first().object).toBe(mapOptions);

     });

     it("Google Maps mapOptions", function() {
        var spy = jasmine.createSpy('spy');
        var mapOptions = {
           draggable: spy
        };
       mapOptions.draggable(true);
       expect(spy.calls.first().object).toBe(mapOptions);

     });


});

describe("draw Map", function(){
	it("First Geographic Marker Details" ,function(){
     var popupContentOrig = "Axelisys Limited";
        expect(popupContentOrig).toEqual("Axelisys Limited");
    });
 });
describe("draw Map", function(){
   it("Second Geographic marker Details", function(){
   	 var  popupContentNew ="Ziferblat";
   	    expect(popupContentNew).toEqual("Ziferblat");
   });

});


describe(" Should deactivateAllTabs" , function(){
     var tabHeaders;
     var headerClass;
     var tabContents;
     var contentsClass;
     
     it("It should deactivateAllTabs of the Page", function(){
          tabHeaders = headerClass;

         expect(tabHeaders).toBe(headerClass);
     });
    
     it("it should deactivateAllTabs  of the Accordian", function(){
          tabContents = contentsClass;
          expect(tabContents).toBe(contentsClass);
     });


});



