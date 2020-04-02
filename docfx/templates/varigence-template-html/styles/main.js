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
    var hasChildLinks = false;
    var toc_groups = $('#toc').find('.level2').children('li').children('a');

    // Don't show nav select if we can't populate it.
    if(!toc_groups || toc_groups.length === 0) {
        $("#small-nav-container").hide();
        return;
    }

    toc_groups.each(function () {
        if ($(this).siblings('ul').length > 0) {
            //  has child links, is a optgroup
            $newGroupElem = $(document.createElement('optgroup')).attr('value', this.innerText)
            .attr('label', this.innerText)
            .appendTo(SelectList);

            var toc_opts = $(this).parent().children('.level3').children('li').children('a');
            toc_opts.each(function () {
                $newElem = $(document.createElement('option')).attr('value', this.pathname)
                    .attr('label', this.innerText)            
                    .appendTo($newGroupElem);

                    hasChildLinks = true;
            });
            
        }
    });

    // TODO: Support Single Level links
    // // Look for Level 2 links
    // toc_groups = $('#toc').find('.level1').children('li').children('a');

    // toc_groups.each(function () {
    //     if ($(this).siblings('ul').length > 0) {
    //         // traverse up to find parent 'ul', then sibling link which will be the optGroup
    //         const parentLink = $(this).parents('ul').siblings('a');

    //         $newGroupElem = $(document.createElement('optgroup')).attr('value', parentLink.innerText)
    //             .attr('label', parentLink.innerText)
    //             .appendTo(SelectList);

    //             var toc_opts = $(parentLink).parent().children('.level2').children('li').children('a');
    //             toc_opts.each(function () {
    //                 $newElem = $(document.createElement('option')).attr('value', this.pathname)
    //                     .attr('label', this.innerText)            
    //                     .appendTo($newGroupElem);
    //             });

    //         }
    //     });

     // Don't show nav select if we can't populate it.
     if(!hasChildLinks) {
        $("#small-nav-container").hide();
        return;
    }
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