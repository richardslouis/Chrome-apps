function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "9e41b9f4-a914-4afd-9832-e32e2c858e44",
                googleProjectNumber: "151771448378"});