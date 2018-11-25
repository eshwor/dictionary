
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://raw.githubusercontent.com/eshwor/dictionary/develop/database.json",true);
    xmlhttp.onload = function(){
      if (this.readyState == 4 && this.status == 200) {
      var result = JSON.parse(this.responseText);
          jQuery.ajaxSetup({ cache: false });

            jQuery('#search').keydown(function(){
                jQuery('#result').html('');
                var searchField = jQuery('#search').val();
                var expression = new RegExp(searchField, "i");

                  jQuery.each(result, function(key, value){
                    if(value.name.search(expression) != -1 ){
                      $('#result').append('<li class="list">' + value.name +'</li>');
                    }
                  });
            });

            jQuery('#search-btn').click(function(){
              alert("This function is not activated yet !");
            });
            jQuery('#clear-btn').click(function(){
                jQuery('.list').remove();
            });


      }//end of main if statement
    };
    xmlhttp.send();
