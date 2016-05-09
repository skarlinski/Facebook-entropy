chrome.browserAction.onClicked.addListener(function(){
	var filters = {"data-testid":'ufi_comment_like_link'};
	var likeBtnClass = 'LikeLink';
	alert('hi');
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
	
})