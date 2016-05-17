// chrome.browserAction.onClicked.addListener(function(){
// 	openPopup();	
// })
openPopup();
function openPopup(){
	var overlay = document.createElement('div');
	overlay.innerHTML = fbLikerGetOverlayMarkup();

	document.body.appendChild(overlay);
	var submit = document.getElementById('fbLikerSubmit');
	submit.onclick = fblikerPopupSubmit;
	//fblikerPopupSubmit();
}
function fblikerPopupSubmit(){
	alert('liked!');
	var filters = {"data-testid":'ufi_comment_like_link'};
	var likeBtnClass = 'LikeLink';
	var arr = document.getElementsByTagName("a");
	for (i = 0; i < arr.length; i++) {
		var randNum = Math.floor(Math.random()*10);

		if(arr[i].className.indexOf(likeBtnClass) > -1){
	    arr = Array.prototype.slice.call(arr,this)
	    arr = arr.filter(filterByAttr);
			// if(randNum >=7){arr[i].click();}
		 }
	}

	function filterByAttr(item) {
	 for(var k in filters) {
	 	return item.getAttribute(k) == filters[k];
		}
	}
}

$.ajax({ 
    url : chrome.extension.getURL('Assets/EntropyLogos.png'), 
    processData : false,
}).always(function(b64data){
    //$("#fbLikerLogoPlaceHolder").attr("src", "data:image/png;base64,"+b64data);
    $("#fbLikerLogoPlaceHolder").attr("src", chrome.extension.getURL('Assets/EntropyLogos.png')).fadeIn();
});
$('#fbLikerModal').modal({})
function fbLikerGetOverlayMarkup(){
	return '<div class="modal fade" id="fbLikerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
		  <div class="modal-dialog" role="document">\
		    <div class="modal-content">\
		      <div class="modal-header">\
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
		          <span aria-hidden="true">&times;</span>\
		        </button>\
		        <h4 class="modal-title" id="myModalLabel">FaceBook Entropy Generator</h4>\
		      </div>\
		      <div class="modal-body">\
		      <img id= "fbLikerLogoPlaceHolder" /> <span>\
		      Throw a little chaos into your carefully curated persona built on social media. \n\
		      Get Close to your enemies or alienate your friends. Shed your polished facebook persona by randomly liking a third of all the posts in your news feed\
		      </span>\
		      </div>\
		      <div class="modal-footer">\
		        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
		        <button id = "fbLikerSubmit" type="button" class="btn btn-primary">Like!</button>\
		      </div>\
		    </div>\
		  </div>\
		</div>';
}
