import '../styles/windows/Window.css'
import '../styles/windows/AboutWindow.css'
import c from '../assets/skills/c-original.svg';
import csharp from '../assets/skills/csharp-original.svg';
import java from '../assets/skills/java-original.svg';
import lua from '../assets/skills/lua-original.svg';
import python from '../assets/skills/python-original.svg';
import react from '../assets/skills/react-original.svg';
import spring from '../assets/skills/spring-original.svg';
import unity from '../assets/skills/unity-original.svg';
import blender from '../assets/skills/blender-original.svg';
import { forwardRef } from 'react';




function About(_props : {},ref : React.Ref<HTMLDivElement>) {

    return(
        <>
        <div className = "About Window" id = "aboutWindow" ref = {ref}>
            <div className = "Title">About :</div>
            <div className = "Bio">
                CS Student and game designer. I've always enjoyed works of art and aspire to
                use my creativity to develop projects for fun. I use Unity engine and have
                worked on 6 game-prototypes all either 3D or 2D, with one main game in-development. 
                I enjoy video-games especially the indie ones, They are an inspiration and I've always tried
                to replicate many through drawing pixel-art. On the software side of things I've made
                a good chunk of projects that are listed below.
            </div>

            <div className = "Title">Skills :</div>
            <div className = "skillSection">
                <div className = "skillSet">-Programming Languages-</div>
                <div className = "skillSet">Java</div>
                <div className = "skillSet">Javascript</div>
                <div className = "skillSet">Python</div>
                <div className = "skillSet">C#</div>
                <div className = "skillSet">C/C++</div>
                <div className = "skillSet">Lua</div>
                <div className = "skillSet">HTML/CSS</div>
                <div className = "skillSet">-Databases-</div>
                <div className = "skillSet">MySQL</div>
                <div className = "skillSet">PL/SQL</div>
                <div className = "skillSet">Oracle SQL</div>
                
                
            </div>
            <div className = "skillSection">
                <div className = "skillSet">-Technologies-</div>
                <div className = "skillSet">Unity 2D and 3D</div>
                <div className = "skillSet">Roblox Studio</div>
                <div className = "skillSet">ASP.Net</div>
                <div className = "skillSet">GIT</div>
                <div className = "skillSet">-Libraries-</div>
                <div className = "skillSet">Python tkinter</div>
                <div className = "skillSet">Raylib</div>
                <div className = "skillSet">JavaFX</div>
                <div className = "skillSet">JavaSWING</div>
            </div>

            <div className = "SkillImages">
                <img src = {c}></img>
                <img src = {csharp}></img>
                <img src = {java}></img>
                <img src = {lua}></img>
                <img src = {python}></img>
                <img src = {react}></img>
                <img src = {spring}></img>
                <img src = {unity}></img>
                <img src = {blender}></img>
            </div>
        </div>
        
        </>
    );
}

export default forwardRef(About);