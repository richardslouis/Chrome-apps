function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "0340539b-56e3-46a3-85cc-7b71b06d9996",
                googleProjectNumber: "151771448378"});