<script>
      $(function() {
        $('#mythingy').contextPopup({
          title: 'My Popup Menu',
          items: [
            {label:'Some Item',     href:'http://portal.mackenzie.br/', icon:'icons/shopping-basket.png',             action:function() { alert('clicked 1') } },
            {label:'Another Thing', icon:'icons/receipt-text.png',                action:function() { alert('clicked 2') } },
            {label:'Blah Blah',     icon:'icons/book-open-list.png',              action:function() { alert('clicked 3') } },
            null, // divider
            {label:'Sheep',         icon:'icons/application-monitor.png',         action:function() { alert('clicked 4') } },
            {label:'Cheese',        icon:'icons/bin-metal.png',                   action:function() { alert('clicked 5') } },
            {label:'Bacon',         icon:'icons/magnifier-zoom-actual-equal.png', action:function() { alert('clicked 6') } },
            null, // divider
            {label:'Onwards',       icon:'icons/application-table.png',           action:function() { alert('clicked 7') } },
            {label:'Flutters',      icon:'icons/cassette.png',                    action:function() { alert('clicked 8') } }
          ]
        });
      });
</script>