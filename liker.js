chrome.runtime.onMessage.addListener(
   function(request,sender,sendResponse){
      alert('message recieved');
      sendResponse('messaged!');
   }
);
// chrome.browserAction.onClicked.addListener(function(){
       
       //openPopup();
function openPopup(){
	var popup = document.createElement('div');
	popup.id = 'entropy-popup';
	popup.style.position = 'fixed';
	popup.style.left = '50%';
	popup.style.top = '50%';
	popup.style.textAlign = 'center';
	popup.style.transform = 'translate(-50%, -50%)';
	popup.style.zIndex = 11;
	popup.innerHTML = fbLikerGetPopupMarkup();
	let overlay = document.createElement('div');
	overlay.id = 'fbLikerOverlay';
	overlay.onclick = facebookLikerClosePopup;
	document.body.appendChild(overlay)
	document.body.appendChild(popup);
	var submit = document.getElementById('fbLikerSubmit');
	submit.onclick = fblikerPopupSubmit;
	[...popup.querySelectorAll('.facebookLikerClosePopup')].map((e) => {
		e.onclick = facebookLikerClosePopup;
	})
	//fblikerPopupSubmit();
 }
function facebookLikerClosePopup(){
	let overlay = document.getElementById('fbLikerOverlay');
	let popup = document.getElementById('entropy-popup')
	overlay.parentElement.removeChild(overlay)
	popup.parentElement.removeChild(popup)
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
openPopup()
fetch(chrome.extension.getURL('Assets/EntropyLogos.png')).then(function(res){
	document.getElementById("fbLikerLogoPlaceHolder").src = chrome.extension.getURL('Assets/EntropyLogos.png')
})
// $.ajax({ 
//     url : 
//     processData : false,
// }).always(function(b64data){
//     //$("#fbLikerLogoPlaceHolder").attr("src", "data:image/png;base64,"+b64data);
    
// });
document.getElementById('fbLikerModal');
function fbLikerGetPopupMarkup(){
	return `
	<div class="" style="posision:absolute;left:50%;top:50%transform: translate(-50%, -50%);" id="fbLikerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header"  style="text-align:left;background-color:#6e84b5">
		        <button type="button" onclick="facebookLikerClosePopup" class="close facebookLikerClosePopup" style="cursor:pointer" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		        <h4 class="modal-title" style="color:white" id="myModalLabel">Facebook Entropy Generator</h4>
		      </div>
		      <div class="modal-body">
			  <img width="150" id= "fbLikerLogoPlaceHolder" /> <p>
			  Press the button!<br/>
			  Get close to your enemies or alienate your friends.
			  Shed your polished facebook persona by randomly
			   liking a third of all posts on your wall.
			  </p>
			  <p>
			  <b>ARE YOU BRAVE ENOUGH TO
			  PRESS THE BUTTON?</b>
			  </p>
		      </div>
			  <div class="modal-footer">
			  <button id = "fbLikerSubmit" type="button" class="btn btn-primary">Allow</button>
		        <button type="button" class="btn btn-secondary facebookLikerClosePopup" data-dismiss="modal" >Close</button>
				
				<div style="clear:both"></div>
		      </div>
		    </div>
		  </div>
		</div>`;
}
