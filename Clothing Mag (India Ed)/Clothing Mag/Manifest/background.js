function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "6a7f50cc-1f39-40c7-9474-988763b95600",
                googleProjectNumber: "151771448378"});