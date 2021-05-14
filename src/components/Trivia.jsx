import { useEffect, useState } from "react";
import useSond from "use-sound";
import play from "../assets/play.mp3"
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

export default function Trivia({
    data, 
    setTimeOut, 
    questionNumber, 
    setQuestionNumber}) {
        const [question, setQuestion] = useState(null);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [className, setClassName] = useState("answer");
        const [letsPlay] = useSond(play);
        const [correctAnswer] = useSond(correct);
        const [wrongAnswer] = useSond(wrong);

        useEffect(() => {
            letsPlay();
        }, [letsPlay]);

        useEffect(() => {
            setQuestion(data[questionNumber - 1]);
        }, [data, questionNumber]);

        const delay = (duration, callback) => {
            setTimeOut(() => {
                callback();
            }, duration);
        };

        const handleClick = (a) => {
            setSelectedAnswer(a);
            setClassName("answer active");
            delay(3000, () =>
                setClassName(a.correct ? "answer correct" : "answer wrong")
            );
            delay(5000, () => {
                    if(a.correct){
                        correctAnswer();
                        delay(1000, () => {
                            setQuestionNumber((prev) => prev + 1);
                            setSelectedAnswer(null);
                        });
                    } else {
                        wrongAnswer();
                        delay(1000, () => {
                            setTimeOut(true);
                        });
                    }
                });
        };

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick (a)}>
                        {a.text}
                    </div>
                ))}
            </div>
        </div>
    )
}
