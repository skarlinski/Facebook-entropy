chrome.runtime.onMessage.addListener(
   function(request,sender,sendResponse){
      alert('message recieved');
      sendResponse('messaged!');
   }
);
// chrome.browserAction.onClicked.addListener(function(){
       
       //openPopup();
function openPopup(){
	if( document.getElementById('fbLikerOverlay')) {
		return false;
	}
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
	
	var loadMoreEl = document.getElementById('fbLikerLoadMore');
	loadMoreEl.onclick = loadMore;
	
	loadMore();
	[...popup.querySelectorAll('.facebookLikerClosePopup')].map((e) => {
		e.onclick = facebookLikerClosePopup;
	})
	//fblikerPopupSubmit();
 }
 function loadMore() {
	const loading = document.getElementById('fbLikerLoading');
	loading.innerHTML = 'Loading...'
	window.scrollTo({
		left: 0,
		top: document.body.scrollHeight - 100,
		behavior: "smooth"
	  }
	);
	setTimeout(()=>{
		var count = Math.floor(getLikeButtons().length / 3);
		loading.innerHTML = `This is going to randomly like ${count} posts and comments on your feed. `
	},2000)
	
 }
 function getLikeButtons(){
	return document.querySelectorAll('[aria-label="Like"]')
 }
function facebookLikerClosePopup(){
	let overlay = document.getElementById('fbLikerOverlay');
	let popup = document.getElementById('entropy-popup')
	overlay.parentElement.removeChild(overlay)
	popup.parentElement.removeChild(popup)
}
function fblikerPopupSubmit(){
	var filters = {"data-testid":'ufi_comment_like_link'};
	let count = 0;
	var arr = [...getLikeButtons()];
	for (i = 0; i < arr.length; i++) {
		var randNum = Math.floor(Math.random()*10);
    	if(randNum >=7){
			arr[i].click();
			count++
		}
	}
	alert(`You liked ${count} items!`)
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
			  <b id="fbLikerLoading">
			  Loading..
			  </b>
			  </p>
			  <p>
			  <b>ARE YOU BRAVE ENOUGH TO
			  PRESS THE BUTTON?</b>
			  </p>
		      </div>
			  <div class="modal-footer">
			  <button id = "fbLikerLoadMore" type="button" style="float:left" class="btn btn-primary">Load More</button>
			  <button id = "fbLikerSubmit" type="button" class="btn btn-primary">Like!</button>
		      <button type="button" class="btn btn-secondary facebookLikerClosePopup" data-dismiss="modal" >Close</button>
				
				<div style="clear:both"></div>
		      </div>
		    </div>
		  </div>
		</div>`;
}
