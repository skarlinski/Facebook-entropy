# Facebook-entropy
Snippet for enhancing facebook entropy by randomly clicking `like` on one third of items in your news feed

Use the snippet below in the browser's developer tools console:

var arr = document.getElementsByTagName("a");
for (i = 0; i < arr.length; i++) {
	var randNum = Math.floor(Math.random()*10);
	if(arr[i].className == 'UFILikeLink'){if(randNum >=7){arr[i].click();}}
}
