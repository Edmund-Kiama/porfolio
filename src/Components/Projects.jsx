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
                  src="https://media.licdn.com/dms/image/v2/D562DAQFRxYl3V37CSQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736341258826?e=1738915200&v=beta&t=C6HBULQ85ca7JVc9f-hXCcFC985QdhKpA2Bod7JV10w" 
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

            <div className="shopping">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/88/d3/c8/88d3c89d45b4647230d9e05f9a66742a.jpg" alt="project-shot"/>
              </div>
              
              <div className="stack-used">
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
              </div>
              <div className="details">
                <h4>Shopping List Application</h4>
                <div className="pa">
                  <p>Nov 2024</p>
                  <a href="https://github.com/Edmund-Kiama/shopping-list-app" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a className="more" id="shopping-hide" href="https://shopping-list-app-black.vercel.app/" target="_blank">Trial</a>
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
                <img  height="25px" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Api_logo.jpg?20111205072542" alt="logo"/>
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

            <div className="cart">
              <div className="img-container">
                <img src="https://i.pinimg.com/736x/e8/c5/ed/e8c5edf478c2c0a991c1be5dd2274505.jpg" alt="project-shot"/>
              </div>
              <div className="stack-used">
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
              </div>
              <div className="details">
                <h4>E-Commerce Cart for both Developers and Users</h4>
                <div className="pa">
                  <p>Jan 2025</p>
                  <a href="https://github.com/Edmund-Kiama/React-Week1" target="_blank">
                      <img 
                      src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                      alt="GitHub"
                      width="20px"
                      />
                  </a>
                </div>
              </div>
              <a href="https://e-commerce-cart-ruby.vercel.app/" target="_blank" id="cart-hide" className="more">Trial</a>
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
                  <p>REST APIs</p>
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

        </div>
      }
      </div>
    )
}