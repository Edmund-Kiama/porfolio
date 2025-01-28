function Home() {
  return (
    <section className="main-container">        

      <div className="txt">
        <img width="120px" className="profile" src="https://avatars.githubusercontent.com/u/181697398?v=4"/>
        <h1 className="name">EDMUND KIAMA</h1>
        <p>Mechanical | Software Engineer</p>
        <p className="location">Nairobi, Kenya</p>
        <p><small>Turning ideas to engineered reality</small></p>
        <div className="contacts">
          <a>
          <img 
              src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/mail_email_envelope_send_message-512.png"
               alt="email"
              width="20px"
              />
          </a>
          <a>
          <img 
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
              alt="LinkedIn"
              width="20px"
            />
          </a>
          <a>
            <img 
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              alt="GitHub"
              width="20px"
            />
          </a>
        </div>
      
      </div>

      <div className="dev-stack">
        <h2>My Stack</h2>
        <ul className="ul-1">
          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
            <p>HTML</p>
          </li> 

          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
            <p>CSS</p>
          </li>

          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
            <p>JavaScript</p>
          </li>

          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" alt="logo" />
            <p>Vue js</p>
          </li>  
          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
            <p>React js</p>
          </li>    
          </ul>
          <ul className="ul-2">
          <li>
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/600px-Python_logo_01.svg.png?20210503135843" alt="logo" />
            <p>Python</p>
          </li>

          <li>
            <img height="25px" src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png" alt="logo" />
            <p>mySQL</p>
          </li>

          <li>
            <img height="25px" src="https://cdn-icons-png.flaticon.com/128/15466/15466163.png" alt="logo" />
            <p>Git</p>
          </li>
        </ul>
      </div>

      <div className="ed-cert">
      <div className="education">
        <h2>Education</h2>
        <div className="Moringa">
          <div className="heading">
            <img height="25px" src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png" alt="logo" />
            <div className="sub">
            <h3>Moringa school</h3>
            <p className="dates">Nov 2024 - Present</p>
          </div>
          </div>
          <p><em>Software Engineering</em></p>
        </div>

        <div className="TUK">
          <div className="heading">
            <img height="40px" src="https://tukenya.ac.ke/images/logo.png" alt="logo" />
            <div className="sub">
              <h3>Technical University of Kenya</h3>
              <p className="dates">July 2019 - Nov 2024</p>
            </div>            
          </div>          
          <p><em>Bachelor of Engineering | Mechanical Engineering</em></p>
          <p className="grade"><em>Second Class Upper Division</em></p>
        </div>
      </div>

      <div className="certificates">
        <h2>Certificates</h2>

        <div className="harvard">
          <div className="heading">
            <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/600px-Harvard_University_logo.svg.png" alt="logo"/>
            <div>
              <h3>Harvard University</h3>
              <p className="dates">Issued <strong>Oct 2024</strong></p>
            </div>
          </div>          
          <p><em>Programming Using Python</em></p>
        </div>

        <div className="simplilearn">
          <div className="heading">
            <img height="25px" src="https://www.simplilearn.com/ice9/new_logo.svgz" alt="logo"/>
            <div>
              <h3>Simplilearn</h3>
              <p className="dates">Issued <strong>Sep 2024</strong></p>
            </div>
          </div>          
          <p><em>Introduction of Internet of Things(IoT)</em></p>
        </div>

        <div className="math-works">
          <div className="heading">
            <img height="25px" src="https://www.mathworks.com/etc.clientlibs/mathworks/clientlibs/customer-ui/templates/common/resources/images/mathworks-logo.20250114135845877.svg" alt="logo"/>
            <div>
              <h3>MathWorks</h3>
              <p className="dates">Issued <strong>Sep 2024</strong></p>
            </div>
          </div>          
          <p><em>MATLAB Certified</em></p>
        </div>
      </div>
      </div>

      <div className="experience">
        <h2>Experience</h2>
        <div className="freelance">
          <div className="details">
            <h3>Freelance | Remote</h3>
            <p>Oct 2024 - Present</p>          
            <h4><em>Front-end Developer</em></h4>
            <p>Nairobi County, Kenya</p>
          </div>

          <ul className="description">
            <li>Identify and resolve bugs</li>
            <li>Design and update existing website elements to ensure a visually appealing and user-friendly interface</li>
            <li>Optimize website content for improved search engine visibility by implementing relevant SEO meta tags</li>
            <li>Integrate multiple HTML pages by establishing interlinks for seamless navigation</li>
          </ul>
        </div>

      </div>

      <div className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>Mini Tik-Tok clone Single Page Application</h4>
              <p>Sep 2024</p>
            </div>
            <ul className="stack-used">
              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <p>HTML</p>
              </li> 

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <p>CSS</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>JavaScript</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558" alt="logo" />
                <p>Vue js</p>
              </li>
            </ul>
            <button>Show More</button>
          </li>

          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>Shopping List Application</h4>
              <p>Nov 2024</p>
            </div>
            <ul className="stack-used">
              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <p>HTML</p>
              </li> 

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <p>CSS</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>JavaScript</p>
              </li>
            </ul>
            <button>Show More</button>
          </li>

          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>Character Management Application </h4>
              <p>Nov 2024</p>
            </div>
            <ul className="stack-used">
              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <p>HTML</p>
              </li> 

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <p>CSS</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>JavaScript</p>
              </li>

                <li>
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/160px-JSON_vector_logo.svg.png?20220501073649" alt="logo"/>
                  <p>Json</p>
                </li>
            </ul>
            <button>Show More</button>
          </li>

          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>Tv Show Application</h4>
              <p>Dec 2024</p>
            </div>
            <ul className="stack-used">
            <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <p>HTML</p>
              </li> 

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <p>CSS</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>JavaScript</p>
              </li>
                <li>
                  <img  height="25px" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Api_logo.jpg?20111205072542" alt="logo"/>
                  <p>API</p>
                </li>
            </ul>
            <button>Show More</button>
          </li>

          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>E-Commerce Cart for both Developers and Users</h4>
              <p>Jan 2025</p>
            </div>
            <ul className="stack-used">
              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png" alt="logo" />
                <p>HTML</p>
              </li> 

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/640px-CSS.3.svg.png" alt="logo" />
                <p>CSS</p>
              </li>

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433" alt="logo" />
                <p>JavaScript</p>
              </li>       

              <li>
                <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207" alt="logo" />
                <p>React js</p>
              </li>
            </ul>
            <button>Show More</button>
          </li>

          <li>
            <img src="" alt="project-shot"/>
            <div>
              <h4>4-Wheel Steering Steering System Project</h4>
              <p>Oct 2023 – March 2024</p>
            </div>
            <p>Grade A</p>
            <ul className="stack-used">
                <li>
                  <img height="20px" src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/SolidWorks_Logo.svg/150px-SolidWorks_Logo.svg.png?20130509090050" alt="logo"/>
                  <p>SolidWorksL</p>
                </li>
                <li>
                  <img height="20px" src="https://ultimaker.com/wp-content/themes/ultimaker/media/UltiMaker_Logo.svg" alt="logo"/>
                  <p>Ultimaker Cura</p>
                </li>
                <li>
                  <img height="25px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/640px-Blender_logo_no_text.svg.png" alt="logo"/>
                  <p>Blender</p>
                </li>
            </ul>
            <button>Show More</button>
          </li>
          
        </ul>
      </div>

      <div className="pages-to-add">
        <h2>Home</h2>
        <div className="about">
          <h2>About</h2>
          <p>Description</p>
          <p>Extra-curricular</p>
        </div>
        <h2>Other Experiences</h2>
        <h2>Error page</h2>
      </div>
    </section>
  )
}

export default Home;
