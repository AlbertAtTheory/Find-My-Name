$(function() {
  var winnersNames = new Array();
  
  $.getJSON('winners.json', function(data) {
    for(i=0;i<data.length;i++){
      winnersNames[i] = { label: data[i].title, coords: { x1 : data[i].x1, y1 : data[i].y1, x2 : data[i].x2, y2 : data[i].y2 } };
    };
    $("#name").autocomplete({
  		source: winnersNames
  	});
	});
  
	$("#name").bind("autocompleteselect", function(event, ui) {
	  $('#searchimage').imgAreaSelect({ x1: ui.item.coords.x1, y1: ui.item.coords.y1, x2: ui.item.coords.x2, y2: ui.item.coords.y2 });
	});
});