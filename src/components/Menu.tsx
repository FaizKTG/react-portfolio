import About from './About'
import Education from './Education';
import Project from './Projects';
import Contact from './Contact';
import Background from './Background'
import { useEffect, useRef } from 'react';

function Menu() {
    const aboutRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const projectRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    var windows =  [aboutRef, educationRef, projectRef, contactRef];
    useEffect(() => {
        windows.forEach(window => {
            console.log("Ref: ", window.current);
        })
    }, [])

    function inView(section : HTMLDivElement | null) {
        if (section == null) return false;
        let rect = section.getBoundingClientRect();
        if (rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150) && rect.bottom > 0)
            return true;
        return false
    }

    useEffect(() => {
        const handleScroll = () => {
            windows.forEach(window => {
                if (window.current != null) {
                    if (inView(window.current)) {
                        window.current.classList.add("WindowVisible");
                    } else window.current.classList.remove("WindowVisible");
                } 
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return(
        <>
        <div className = "Windows">
            <Background></Background>
            <About ref={aboutRef}></About >
            <Education ref={educationRef}></Education>
            <Project ref={projectRef}></Project>
            <Contact ref={contactRef}></Contact>
        </div>
        </>
    );
}

export default Menu