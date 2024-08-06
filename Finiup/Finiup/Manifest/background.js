function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "f92154ec-def7-47d5-811d-c0a5dd78fd7d",
                googleProjectNumber: "151771448378"});