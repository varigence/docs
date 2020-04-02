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
    var $newGroupElem;
    var $newElem;
    var SelectList = $("#small-nav-dropdown");

    var toc_groups = $('#toc').find('.level2').children('li').children('a');
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
});

function navigateSelect(selectedOption) {
    var path = selectedOption.value;  
    if (document.location.pathname !== path) {
        document.location.href = path;
    }
}

function selectNavValue() {    
    $("#small-nav-dropdown").val(document.location.pathname);
}