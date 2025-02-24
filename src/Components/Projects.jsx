import { useState } from "react"
import WS4Project from "./WS4"

export default function Projects () {
  const[shown, setShown] = useState(false)

    return (
    <div className="projects">
        <h2>Projects</h2>

      { shown ?  <WS4Project setShown={setShown}/>
        :
        <div className="container">

              <div className="ws4">
              <div className="img-container">
                <img 
                  src="https://i.pinimg.com/736x/0a/19/25/0a19253de15876e29be268854eb9650f.jpg" 
                  alt="4ws-render"  
                  className="render"
                />
              </div>
              <div className="stack-used">
                    <img height="25px" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/150px-SolidWorks_Logo.svg.png?20130509090050" alt="logo"/>
                    <img height="20px" src="https://ultimaker.com/wp-content/themes/ultimaker/media/UltiMaker_Logo.svg" alt="logo"/>
                    <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/640px-Blender_logo_no_text.svg.png" alt="logo"/>
              </div>
              <div className="details">
                <h4>4-Wheel Steering Steering System</h4>
                <p>Grade A | Oct 2023 – March 2024</p>
              </div>          
              <button onClick={() => setShown(show => !show)} className="more">Show More</button>
            </div>

            <div className="tiktok">
              <div className="img-container">
                <img src="https://i.pinimg.com/1200x/fe/89/95/fe8995aa577cd3a38bf9f01f474b307f.jpg" alt="project-snapshot"/>
              </div>
              
              <div className="stack-used">
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" alt="logo" />
              </div>
              <div className="details">
                <h4>Mini Tik-Tok clone Single Page Application</h4>
                <div className="pa">
                  <p>Sep 2024</p>
                  <a href="https://github.com/Edmund-Kiama/tiktok-mini-clone" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a className="more" id="tiktok-hide" href="https://tiktok-mini-clone.vercel.app/" target="_blank">Trial</a>
              <p className="built-for-desktop">Please use Desktop for Trial</p>
            </div>

            <div className="tv-show">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/9b/3d/3b/9b3d3b44e2b701264d0520f89c46175f.jpg" alt="project-shot"/>
              </div>
              <div className="stack-used">
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>API</p>
              </div>
              <div className="details">
                <h4>Rick and Morty Show Application</h4>
                <div className="pa">
                    <p>Dec 2024</p>
                    <a href="https://github.com/Edmund-Kiama/rick-and-morty-using-API" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a href="https://rick-and-morty-using-api.vercel.app/" id="ricknmorty-hide" target="_blank" className="more">Trial</a>
              <p className="built-for-desktop">Please use Desktop for Trial</p>
            </div>

            <div className="jobFinder">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/b0/27/29/b02729210392140c0fd28eab51055d86.jpg" alt="project-shot"/>
              </div>
              <div className="stack-used">
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
                  <p>API</p>
              </div>
              <div className="details">
                <h4>Job Finder App</h4>
                <div className="pa">
                  <p>Feb 2025</p>
                  <a href="https://github.com/Michael3-j/JobFinder" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a href="https://job-finder-ia23.vercel.app/" target="_blank" id="job-finder-hide" className="more">Trial</a>
              <p className="built-for-desktop">Please use Desktop for Trial</p>
            </div>

            <div className="satSim">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/0e/3a/49/0e3a49bc27e07e8667d7c0f32eb486a7.jpg" alt="project-shot"/>
              </div>
              <div className="stack-used">
                  <img height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png?20210503135843" alt="logo" />
                  <p>Pygame</p>
              </div>
              <div className="details">
                <h4>Satellite Simulation</h4>
                <div className="pa">
                  <p>Feb 2025</p>
                  <a href="https://github.com/Edmund-Kiama/Satellite_Sim" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <p>Built for Terminal</p>
            </div>

            <div className="portfolio">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/86/67/69/8667690528d2a3e3f19f8f6cec96830e.jpg" alt="portfolio-shot"/>
              </div>
              <div className="stack-used">
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
                  <img height="25px" src="https://cdn-icons-png.flaticon.com/128/15466/15466088.png" alt="logo" />
              </div>
              <div className="details">
                <h4>My Portfolio</h4>
                <div className="pa">
                  <p>Feb 2025</p>
                  <a href="https://github.com/Edmund-Kiama/porfolio" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a href="#profile" className="more">Trial</a>
            </div>

        </div>
      }
      </div>
    )
}