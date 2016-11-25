'use strict';

var filterNumberMin = 15;
var rows = $('#bookmarks').children();

var processPage = function(filterNumber) {

  var filterNumber = filterNumber || filterNumberMin;

  console.log('processing page with filter: '+filterNumber);

  for (var i = 0; i < rows.length; ++i) {
    $(rows[i]).hide();
    //console.log(rows[i]);
    var bookmark = $(rows[i]).find('.url_link');
    if (bookmark.length === 0) {
      if ($(rows[i]).find('.next_prev').length !== 1) {
          $(rows[i]).hide();
      }
    }
    for (var f = 0; f < bookmark.length; ++f) {
      var likedByOthers = bookmark[f].innerText;
      var numb = likedByOthers.match(/\d/g);
      numb = parseInt(numb.join(""));

      if (numb >= filterNumber) {
        $(rows[i]).show();
      }
    }
  }
}

//add container for controls
var pruneControls = $('#nextprev').append('<div id="prune-controls"></div>');

var addSlider = function() {
  pruneControls.append('<input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="' + filterNumberMin + '" tabindex="0" />');
  pruneControls.append('<p id="filterNum">' + filterNumberMin + '</p>');
}


addSlider();
processPage();

$( ".mdl-slider" ).change(function() {
  var filterNumber = $(this).val();
  console.log('changed!' +filterNumber) ;
  processPage(filterNumber);
  $('#filterNum').html(filterNumber);
});

console.log('[pinboard-prune] filtered links with ' + filterNumberMin + ' or more votes.');
