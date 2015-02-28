var arr = document.getElementsByTagName("a");
for (i = 0; i < arr.length; i++) {
	var randNum = Math.floor(Math.random()*10);
	if(arr[i].className == 'UFILikeLink'){if(randNum >=7){arr[i].click();}}
}