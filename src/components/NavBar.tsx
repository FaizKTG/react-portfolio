import '../styles/NavBar.css'

function NavBar() {
    var sections =  ['aboutWindow', 'projectWindow', 'educationWindow', 'contactWindow'];
    var buttons = ['aboutbutton', 'projectbutton', 'educationbutton', 'contactbutton'];
    // yes this is a cheat kont nawi nargod sam7oni 
    buttons.forEach(button => {
        var mainbutton = document.getElementById(button)
        if (mainbutton) {
            mainbutton.addEventListener('click', () => {
                sections.forEach(section => {
                    if (section.substring(0, 5) === button.substring(0, 5)) {
                        var mainSection = document.getElementById(section);
                        if (mainSection) {
                            mainSection.scrollIntoView({
                                behavior: 'smooth'
                            })
                            mainSection.style.scrollMarginTop = "70px";
                        }
                        
                    }
                });
            });
        }
    });
    return (
        <>
         <div className = "Navigation">
            <div id = "aboutbutton" className = "Button">
                <img src = ""></img>
                About
            </div>
            
            <div id = "educationbutton" className = "Button">
                <img src = ""></img>
                Education
            </div>
            <div id = "projectbutton" className = "Button">
                <img src = ""></img>
                Projects
            </div>
            <div id = "contactbutton" className = "Button">
                <img src = ""></img>
                Contact
            </div>
        </div>
        </>
    );
}

export default NavBar