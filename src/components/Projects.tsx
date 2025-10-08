import '../styles/windows/Window.css'
import '../styles/windows/ProjectWindow.css'
import { forwardRef } from 'react';
import gg from '../assets/GG.png'
import laptopRender from '../assets/LaptopRender.png'
import laptopMaterial from '../assets/LaptopMaterial.png'
import laptopWireframe from '../assets/LaptopWireframe.png'
import donutAlpha from '../assets/DonutALPHA.png'


function Project(_props : {}, ref : React.Ref<HTMLDivElement>) {
    return(
        <>
            <div className = "Project Window" id = "projectWindow" ref = {ref}>
                <div className = "ProjectTitle">Projects :</div>

                <div className = "Title">Graph.JS</div>
                <div className = "Description">
                    Interactive web application graphically representing the elements of Graph Theory
                    as well as showing the results of its algorithms. It's programmed from scratch in JS.
                    View the details on my github or try it out below!
                </div>
                
                <iframe className = "Frame" src="https://djeffalkhaled.github.io/Graphs.JS/" width="80%" height="650px"></iframe>
                <hr></hr>

                <div className = "Title">LogIT</div>
                <div className = "Description">
                    Have you been in a situation where you looked at your saved money, and wondered exactly why it dropped? 
                    Has anyone lended from you some money and it happened so many times it confused you and you forgot 
                    how much money they took from you? Have you ever wasted so much money it landed you homeless? 
                    Well try LogIT today! Log your personal finance everyday and you can register the reason you gained/lost money
                    as well as loging any person who lended money from you! LogIT will cure your crippling money spending habbit.
                </div>

                <iframe className = "Frame" src="https://djeffalkhaled.github.io/LogIt/" width="80%" height="650px"></iframe>

                <hr></hr>
                <div className = "Title">Blender Renders:</div>
                <div className = "Description">
                    This is rendered in Cycles, it's basically my desk in real life minus a few items.
                    There is my laptop, my lamp and of course my mug filled of coffee.
                </div>
                
                <img className = "RenderImage" src = {laptopRender}></img>
                <div className = "RenderDisplay">
                    <img className = "RenderImage-small" src = {laptopWireframe}></img>
                    <img className = "RenderImage-small" src = {laptopMaterial}></img>
                </div>
                <div className = "Description">
                    This is one of the first renders I made as a way to introduce myself in blender, 
                    I simply started like all with the legend Blender Guru himself followin his steps to 
                    design this donut. Can't start right if you don't make donuts in blender.
                </div>
                
                <div className = "RenderDisplay">
                    <img className = "RenderImage-small-center" src = {donutAlpha}></img>
                </div>
                <hr></hr>

                <div className="Description">
                    Check more of my projects here: <br></br>
                    Github: <a href="https://github.com/djeffalKhaled">https://github.com/djeffalKhaled</a><br />
                </div>
                
            </div>
        </>
    );
}

export default forwardRef(Project)