function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "6a0719d3-7333-4bd9-8972-9c1df5eae3e0",
                googleProjectNumber: "151771448378"});