
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
                    if(value.word.search(expression) != -1 ){

                      jQuery('#search-btn').click(function(){
                        jQuery('.display-me').addClass('active');
                      });

                      $('#result').append('<li class="list">' + value.word + " " + '<span class="display-me">' + value.nepaliWord + "  - :  " + value.definition + '</span>' + '</li>');
                    }
                  });
            });


            jQuery('#clear-btn').click(function(){
                jQuery('.list').remove();
                jQuery('input:text').val('');
            });


      }//end of main if statement
    };
    xmlhttp.send();
