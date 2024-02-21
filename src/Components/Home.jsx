import React, { useState,useEffect } from 'react';
import jarvis from "../assets/jarvis.png";
import MicIcon from '@mui/icons-material/Mic';
import speech, { useSpeechRecognition } from 'react-speech-recognition';
import "../Style/Home.css";
import backchodi from "../assets/backchodi.m4a"
const Home = () => {
    var audio = new Audio(backchodi);
    const {
        transcript,
        listening,
        finalTranscript,
      } = useSpeechRecognition();
    
    const [isFirstActivation, setIsFirstActivation] = useState(true);
    const speak = (sentence) => {
        console.log(sentence);
        const textSpeech = new SpeechSynthesisUtterance(sentence);
        textSpeech.pitch = 1;
        textSpeech.rate = 1;
        window.speechSynthesis.speak(textSpeech);
    };

    const speakThis = (message) => {
        let finalText = "Sorry, I don't understand";
        if (message.includes('hey') || message.includes('hello')) {
            finalText = "Hello, how can I assist you?";
        }
        else if(message.includes("open google")){
            window.open("https://google.com", "_blank");
            finalText="Opening Google..."
        }
        else if(message.includes("madharchod") || message.includes("madrachod") || message.includes("bahan chod")  ){
            finalText=" "
            audio.play();
        }
        else if(message.includes("open youtube")){
            window.open("https://youtube.com", "_blank");
            finalText="Opening Youtube..."
        }
        else if(message.includes("open facebook")){
            window.open("https://facebook.com", "_blank");
            finalText="Opening Facebook..."
        }
        else if(message.includes("open instagram")){
            window.open("https://instagram.com", "_blank");
            finalText="Opening Instagram..."
        }
        else if(message.includes("open spotify")){
            window.open("https://open.spotify.com/playlist/6qCrkxuyChf8dvcDUtYKHz", "_blank");
            finalText="Opening Spotify..."
        }
        else if(message.includes("who created you")){
            finalText="Master Arpit created me.."
        }
        else if(message.includes("how are you")){
            finalText="I don't have feelings like humans do, but I'm here and ready to assist you! How can I help you today?"
        }
        else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
            window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
            finalText = "This is what i found on internet regarding " + message;
        }
    
        else if(message.includes('wikipedia')) {
            window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
            finalText = "This is what i found on wikipedia regarding " + message;
        }
    
    
        else if(message.includes('show me')) {
            window.open(`https://www.google.com/search?sca_esv=634e2b4d7db2b0af&sxsrf=ACQVn09KBoKUCD17n1ML9e37HPxS8Oy7Gw:1708362406659&q=${message.replace(" ", "+")}&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjQzZXz8beEAxWM9zgGHUoGCy4Q0pQJegQIDRAB&biw=1707&bih=821&dpr=1.13`, "_blank");
            finalText = "This is what i found ";
        }
    
        else if(message.includes('time')) {
            const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
            finalText = time;
        }
    
        else if(message.includes('date')) {
            const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
            finalText = date;
        }
        else if(message.includes('vs code')) {
            window.open('vscode:///')
            finalText = "Opening VSCode";
        }
    
        else if(message.includes('calculator')) {
            window.open('Calculator:///')
            finalText = "Opening Calculator";
        }
        else if(message.includes('play')) {
            window.open(`https://www.youtube.com/results?search_query=${message.replace(" ","+")}`, "_blank");
            finalText = "playing on youtube";
        }
    
        else {
            window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`, "_blank");
            finalText = "I found some information for " + message + " on google";
        }
        speak(finalText);
    };

    const activateMic = () => {
        if (isFirstActivation) {
            speak("Hello, I'm Jarvis, Arpit's creation, here to assist");
            setIsFirstActivation(false);
        } else {
            speech.startListening();
        }
    };
    useEffect(() => {
      if(!listening && transcript)
      {
            speakThis(finalTranscript.toLowerCase());
      }
    }, [transcript,listening])
    
    return (
        <>
            <h3>Hello, I am Jarvis</h3>
            <div className="imageJ">
            <img src={jarvis} alt="jarvis" />
            </div>
            <div className="Activate-me">
                <MicIcon className='Icons' onClick={activateMic} />
            </div>
            <p className='trans'>{transcript}</p>
        </>
    );
};

export default Home;
