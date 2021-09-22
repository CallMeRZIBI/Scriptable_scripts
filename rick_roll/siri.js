let url = "https://www.youtube.com/watch?v=iik25wqIuFo";

if(config.runsWithSiri){
    Speech.speak("HAHA. You're gonna be Rick Rolled");
}
Safari.openInApp(url);
// It is good practice to call Script.complete() at the end of a script, expecially when the script is used with Siri or in the Sortcuts app. This lets Scriptable report the results faster. Please see the documentation for details.
Script.complete();