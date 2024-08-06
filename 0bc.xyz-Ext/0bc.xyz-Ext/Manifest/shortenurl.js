var sharefb;

function getCurrentTabUrl() {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
			
    var tab = tabs[0];

	document.getElementById("loader").style.display = "block";
    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;
	 document.getElementById('Userurl').textContent = url;
	var searchUrl = 'https://0bc.xyz/ShortenApi.php';
  var x = new XMLHttpRequest();
  x.open('POST', searchUrl,true);
  x.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  // The Google image search API responds with JSON, so let Chrome parse it.
 // x.responseType = 'xml';
  x.onload = function() {
	  document.getElementById("loader").style.display = "none";
    // Parse and process the response from Google Image Search.
	var response = x.responseXML;
    //var response = x.response;
	//document.getElementById('ShortenUrl').textContent = response;
	var shorten =response.getElementsByTagName("shorturl")[0].firstChild.nodeValue;
	sharefb = shorten;
	document.getElementById('ShortenUrl').textContent = shorten;
	 var copyDiv = document.getElementById('ShortenUrl');
    copyDiv.contentEditable = true;
	copyDiv.unselectable = "on";
	copyDiv.focus();
	document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
	copyDiv.contentEditable = false;
	copyDiv.unselectable = "off";			
/*chrome.runtime.sendMessage({
    type:'copy',
    text:shorten
}); */

//javascript:var d=document,f='http://www.facebook.com/share',l=d.location,e=encodeURIComponent,p='.php?src=bm&v=4&i=1274665734&u='+e(shorten)+'&t='+e(d.title);1;try{if (!/^(.*\.)?facebook\.[^.]*$/.test(l.host))throw(0);share_internal_bookmarklet(p)}catch(z) {a=function() {if (!window.open(f+'r'+p,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436'))l.href=f+p};if (/Firefox/.test(navigator.userAgent))setTimeout(a,0);else{a()}}void(0)


  };
  x.onerror = function() {
    alert('Network error.');
	alert(x);
  };
  x.send("UrlEntered="+encodeURIComponent(url));
	
  });
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTabUrl();
});
chrome.commands.onCommand.addListener(function(command){
	alert(command);
	console.log('Command:',command);
});

$(document).ready(function(){
$('#fbshare').click(function(){

		javascript:var d=document,f='http://www.facebook.com/share',l=d.location,e=encodeURIComponent,p='.php?src=bm&v=4&i=1274665734&u='+e(sharefb)+'&t='+e(d.title);1;try{if (!/^(.*\.)?facebook\.[^.]*$/.test(l.host))throw(0);share_internal_bookmarklet(p)}catch(z) {a=function() {if (!window.open(f+'r'+p,'sharer','toolbar=0,status=0,resizable=1,width=626,height=436'))l.href=f+p};if (/Firefox/.test(navigator.userAgent))setTimeout(a,0);else{a()}}void(0)

			});
			
	$("#googleplusshare").click(function(){
		window.open("https://plus.google.com/share?url="+sharefb);
	});
		$("#twittershare").click(function(){
	window.open("https://twitter.com/intent/tweet?text="+sharefb);
		});
});


/*
function copyTextToClipboard(text){
    var copyFrom = $('<textarea/>');
    copyFrom.text(text);
    $('body').append(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    copyFrom.remove();
}
*/