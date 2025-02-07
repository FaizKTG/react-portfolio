import { useEffect, useRef, useState } from 'react';
import '../styles/Sonic.css'
import sonicBall from '../assets/sonic/sonicBall.gif'
import sonicWin from '../assets/sonic/SonicWin.gif'
import sonicRun from '../assets/sonic/SonicRun.gif'
import explosion from '../assets/sonic/explosion.gif'

function Sonic() {
    const sonic = useRef<HTMLDivElement>(null);
    const clickme = useRef<HTMLDivElement>(null);
    const logo = useRef<HTMLDivElement>(null);
    var [hasCollided, setHasCollided] = useState(false);
    let pos = 0;
    
    function sonicAntiSabotage() {
        console.log(sonic);
        if (sonic.current && clickme.current && logo.current) {
            sonic.current.style.backgroundImage = `url(${sonicRun})`;
            moveRight();
            clickme.current.style.backgroundImage = 'none';
        }
    }

    function moveRight() {
        if (sonic.current && clickme.current && logo.current) {
            sonic.current.style.left = pos + '%';
            if (pos < 45) requestAnimationFrame(moveRight);
            pos = pos + 0.65;
            // Animations
            if (pos >= 45) {
                sonic.current.style.backgroundImage = `url(${sonicWin})`;
                sonic.current.removeEventListener("click", sonicAntiSabotage);
            }
            else if (pos > 30) sonic.current.style.backgroundImage = `url(${sonicBall})`;   
            
            if (!hasCollided && onCollisionEnter(sonic.current, logo.current)) {
                setHasCollided(true);
                console.log("Sonic collided!");
                logo.current.style.backgroundImage = `url(${explosion})`;
                stopAfterInterval(logo.current, 780);
            }
        }
    }

    // in case of collision delete the event listener (took to long to write this tiny code man)
    useEffect(() => {
        if (sonic.current && hasCollided === false) {
            sonic.current.addEventListener("click", sonicAntiSabotage);
        }
        return () => {
            if (sonic.current && hasCollided === true) {
                sonic.current.removeEventListener("click", sonicAntiSabotage);
            }
        };
    }, []);

    function stopAfterInterval(gif : HTMLDivElement, interval : number) {
        setTimeout(() => {
            gif.style.backgroundImage = 'none'; 
        }, interval);
    }

    function onCollisionEnter(elem1 : HTMLDivElement, elem2 : HTMLDivElement) {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }

    return (
        <>
            <div className = "SonicImpatient" id = "sonic" ref = {sonic}></div>
            <div className = "ClickMe" id = "sonicText" ref = {clickme}></div>
            <div className = "USTHBLOGO" id = "usthb" ref = {logo}></div>
        </>
    )
}

export default Sonic