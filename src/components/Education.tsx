import '../styles/windows/Window.css'
import '../styles/windows/EducationWindow.css'
import { forwardRef } from 'react';
import Sonic from './Sonic';


function Education(_props : {}, ref : React.Ref<HTMLDivElement>) {
    return(
        <>
        <div className = "Education Window" id = "educationWindow" ref = {ref}>
            <div className = "EducationTitle">Education :</div>

            <Sonic></Sonic>

            <div className = "EducationElement University">
                University: Houari Boumedienne University
            </div>
            <div className = "EducationElement Field">
                Field: Computer Science
            </div>
            <div className = "EducationElement Specialty">
                Specialty: Computer Systems and Software Engineering
            </div>
        </div>
        </>
    );
}

export default forwardRef(Education)