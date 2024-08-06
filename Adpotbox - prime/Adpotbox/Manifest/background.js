function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "56b7c8ee-099c-4bc3-b039-a1c0a5966e40",
                googleProjectNumber: "151771448378"});