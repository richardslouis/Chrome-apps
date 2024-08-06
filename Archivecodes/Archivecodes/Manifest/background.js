function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "c2aacc10-553b-4557-ae35-c5872e97aef6",
                googleProjectNumber: "151771448378"});