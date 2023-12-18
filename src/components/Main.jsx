import iconStar from '../assets/images/icon-star.svg'
import NumbersButton from './NumbersButton'
import MainButton from './MainButton';
import TarjetaThanks from './TarjetaThanks';
import { useState } from 'react';

export default function Main() {
    const [estadoButton, setEstadoButton] = useState(false);
    const [numberButton, setGetNumberButton] = useState(0);

    function buttonRating(e) {
        let numberFromButton = Number(e.target.innerText);
        setGetNumberButton(numberFromButton)
    }

    function submitButton() {
        return numberButton > 0 ? setEstadoButton(true) : ''
    }

    return <>
        <div className="card-main-content">
            <div className="icon-star">
                <p>
                    <img src={iconStar}></img>
                </p>
            </div>
            <div className="title">
                <h1> How did we do?</h1>
            </div>
            <div className="text-content">
                <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            </div>
            <div className="numbers-button">
                <NumbersButton onClick={buttonRating} number={1} />
                <NumbersButton onClick={buttonRating} number={2} />
                <NumbersButton onClick={buttonRating} number={3} />
                <NumbersButton onClick={buttonRating} number={4} />
                <NumbersButton onClick={buttonRating} number={5} />
            </div>
            <div className="submit-btn">
                <MainButton onClick={submitButton} />
            </div>
        </div>
        {estadoButton && (
            <TarjetaThanks starSelected={numberButton} />
        )}
        <div className="atribution">
            <p>
                Challenge by <a href="https://www.frontendmentor.io/" target='_blank'> Frontend mentor</a> Code by <a href="https://www.frontendmentor.io/profile/bright-op" target="_blank">bright-op</a>
            </p>
        </div>
    </>
}