import { useRef } from "react"

export default function Start({setUsername}) {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    return (
        <div className="start">
            <h1>¿ QUE TANTO SABES DE FÚTBOL ? 
                <br />
                <br />
                <h6>Aca vas a medir tu conocimiento en esta Trivia con preguntas de la epoca y actualidad sobre el Fútbol Europeo e Internacional</h6>
            </h1>
            <input 
              placeholder="Enter your name" 
              className="startInput" 
              ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>Start</button>
        </div>
        
    )
}
