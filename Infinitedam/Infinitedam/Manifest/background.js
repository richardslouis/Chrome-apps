function launchedListener() {
	window.open("ExamplePage.html");
}

chrome.app.runtime.onLaunched.addListener(launchedListener);

OneSignal.init({appId: "2e6a65be-7fcd-448c-b025-cbfbb0398364",
                googleProjectNumber: "151771448378"});