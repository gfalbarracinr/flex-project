$(function(){
	$('.snippet').each(function	(){
	    var $pTag = $(this).find('p');
	    if($pTag.text().length > 220){
			var shortText = $pTag.text();
	        shortText = shortText.substring(0, 200);
	        $pTag.addClass('fullArticle').hide();
	        shortText += '<span class="see-more read-more-link">See more</span>';
	        $pTag.append('<span class="see-more read-less-link"> See less</span>');
	        $(this).append('<p class="preview">'+shortText+'</p>');
	   }
	});
	$(document).on('click', '.read-more-link', function () {
    	$(this).parent().hide().prev().show();
	});

	$(document).on('click', '.read-less-link', function () {
    	$(this).parent().hide().next().show();
	});
});