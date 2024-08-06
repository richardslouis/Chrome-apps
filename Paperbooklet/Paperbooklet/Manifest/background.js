function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "ccde544e-75e3-47b9-aebd-c2fb7189b84a",
                googleProjectNumber: "151771448378"});