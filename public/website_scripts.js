/**
 * Created by Brad on 4/14/2016.
 * Very basic one-time scripts to deal with dom manipulation.
 */
 
 

function switch_pages (page_in, page_out){
	

		if (!$(page_in).is(":visible")){
			$(page_out).slideUp(600);
			$(page_in).slideDown();
		}else{
			console.log('aready visible doing nothing')
			$(page_in).slideUp(100);
		}

	

	
}

function set_background_image(image_link, dom_element) {

}



$(document).ready(function(){
    console.log('document is ready');
});