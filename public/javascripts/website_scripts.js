/**
 * Created by Brad on 4/14/2016.
 * Very basic one-time scripts to deal with dom manipulation.
 */

function switch_pages (page_in, page_out){
    $(page_out).hide('animate');
    $(page_in).show('animate');
}

function set_background_image(image_link, dom_element) {

}

function resize_background(){
    $("#background").css("width","100%").css("height","100%");
}


$(document).ready(function(){
    console.log('document is ready');
    resize_background();
});