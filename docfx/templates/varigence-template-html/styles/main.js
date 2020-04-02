$(function () {
    var clipboard = new ClipboardJS('.btn');    
      clipboard.on('success', function(e) {
          console.log(e);
      });
      clipboard.on('error', function(e) {
          console.log(e);
    });

});

$(window).load(function() {
    var toc_groups = $('#toc').find('.level2').children('li').children('a');
    if(!toc_groups || toc_groups.length === 0) {
        setTimeout(function(){ populateNavSelect(); }, 500);
    } else {
        populateNavSelect();
    }
});

function populateNavSelect(){
    var $newGroupElem;
    var $newElem;
    var SelectList = $("#small-nav-dropdown");

    var toc_groups = $('#toc').find('.level2').children('li').children('a');

    // Don't show nav select if we can't populate it.
    if(!toc_groups || toc_groups.length === 0) {
        $("#small-nav-dropdown").hide();
        return;
    }

    toc_groups.each(function () {
        $newGroupElem = $(document.createElement('optgroup')).attr('value', this.innerText)
            .attr('label', this.innerText)
            .appendTo(SelectList);

            var toc_opts = $(this).parent().children('.level3').children('li').children('a');
            toc_opts.each(function () {
                $newElem = $(document.createElement('option')).attr('value', this.pathname)
                    .attr('label', this.innerText)            
                    .appendTo($newGroupElem);
            });
    });

    selectNavValue();
}

function navigateToSelectedUrl(selectedOption) {
    var path = selectedOption.value;  
    if (document.location.pathname !== path) {
        document.location.href = path;
    }
}

function selectNavValue() {    
    var path = document.location.pathname; 
    if (path.endsWith('/')) {
        path = path + 'index.html';
    }    
    if (!path.endsWith('.html')) {
        path = path + '.html';
    }
    $("#small-nav-dropdown").val(path);
}