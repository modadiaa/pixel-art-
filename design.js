$(document).ready(function () { 
    $('#Table').submit(function makeGrid(grid) { 
      var rows = $('#input-height').val();  
      var cols = $('#input-width').val(); 
      for (var i = 1; i <= rows; i++) { 
        $('table').append("<tr></tr>"); 
        for (var j = 1; j <= cols; j++) {
          $('tr:last').append("<td></td>"); 
          $('td').attr("class", 'cells') 
        }
      }
      grid.preventDefault(); 
  
      $('.cells').click(function (event) { 
        var paint = $('#colorPicker').val();
        $(event.target).css('background-color', paint);
      });
    }); 
  });
  