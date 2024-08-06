function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "78799e23-0e36-49bd-915f-28e5bdb061de",
                googleProjectNumber: "151771448378"});