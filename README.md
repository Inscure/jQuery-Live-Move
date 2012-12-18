jQuery-Live-Move
================

Draggable function of jQuery which working with live loaded elements.

USAGE
================

<!DOCTYPE html
<html>
  <head>
    <script src=jquery.js></script>
    <script src=jquery-ui.js></script>
    <script src=jquery.draggable.js></script>
    <script>
      $(function() {
            $('#static').liveDraggable({'selector': '.live'});
            $('button[name="generate"]').click(function() {
              $(this).after('<div class=live style="width:50px; height:50px; background-color: blue; display:block"></div>');
            });
      });
    </script>
    <title>jQuery-Live-Move</title>
  </head>
  <body>
    <div id=static>
      <button name=generate></button>
    </div>
  </body>
</html>

