function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "b1ccc020-51ff-486f-9566-f83dfcf953c2",
                googleProjectNumber: "151771448378"});