import '../styles/windows/Window.css'
import '../styles/windows/ContactWindow.css'
import { forwardRef, useEffect, useRef, useState } from 'react'
// note to self: Make this work like a text system
// smth like Thanks for visiting
// Check this github
// Check this linkedin
// Check this email
// but make it dramatic

function Contact(_props: {}, ref: React.Ref<HTMLDivElement>) {
    const [showContact, setShowContact] = useState(false);
    const [inView, setinView] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    function clicked() {
        setShowContact(true);
    }

    useEffect(() => {
        function checkInView() {
            // ohh  heeeel naaaaah ohhhh heeeel naaaaah
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setinView(
                    rect.top < (window.innerHeight - 150) &&
                    rect.bottom > 0
                );
            }
        }
        window.addEventListener('scroll', checkInView);
        checkInView();
        return () => {
            window.removeEventListener('scroll', checkInView);
        };
    }, []);

    return (
        <div className="Contact Window" id="contactWindow" ref={(node) => {
            // this mumbo jumbo made me miss getelementbyid and addeventlistener man
            if (ref) {
                if (typeof ref === 'function') ref(node);
                else (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
            }
            sectionRef.current = node;
        }} onClick={clicked}>
            {!showContact && (
                <>
                    <div className={inView ? "WriteLine1" : ""}>Thy presence here is noted, Should thee find solace in this place, </div>
                    <div className={inView ? "WriteLine2" : ""}>then may thy journey be fruitful.</div>
                    <div className={inView ? "WriteLine3" : ""}>But if shadows of discontent cloud thy path, cast thy critique into the elden realm,</div>
                    <div className={inView ? "WriteLine4" : ""}>and it shall be heard.</div>
                </>
            )}
            {showContact && (
                <>
                    Reach out to the keeper of this realm.
                    <div className="Description">
                        Github: <a href="https://github.com/djeffalKhaled">https://github.com/djeffalKhaled</a><br />
                        LinkedIn: <a href="https://www.linkedin.com/in/djeffalkhaled/">https://www.linkedin.com/in/djeffalkhaled/</a><br />
                        Email: <a href="mailto:djeffalkhalefaiz@gmail.com">djeffalkhaledfaiz@gmail.com</a><br />
                    </div>
                </>
            )}
        </div>
    );
}

export default forwardRef(Contact);