export default function Profile () {
    return (
        <div className="txt" id="profile">
            <div className="profile-pic">
                <img width="120px" className="profile" src="https://avatars.githubusercontent.com/u/181697398?v=4"/>
            </div>

            <h1 className="name">EDMUND KIAMA</h1>

            <p>Mechanical | Software Engineer</p>
            <p className="location">Nairobi, Kenya</p>
            <p><small>Turning ideas to engineered reality</small></p>

            <div className="contacts">
                
                <a href="EdmundKiama CV.pdf" download="EdmundKiama CV.pdf">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/909/909212.png"
                    alt="my-Cv"
                    width="20px"
                    />
                </a>

                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=edmundgachanja@gmail.com&su=Subject&body=Body%20text" target="_blank">
                    <img 
                    src="https://cdn4.iconfinder.com/data/icons/black-white-social-media/32/mail_email_envelope_send_message-512.png"
                    alt="email"
                    width="20px"
                    />
                </a>

                <a href="https://linkedin.com/in/edmund-kiama-2269a4325" target="_blank">
                    <img 
                    src="https://cdn3.iconfinder.com/data/icons/2018-social-media-black-and-white-logos/1000/2018_social_media_popular_app_logo_linkedin-512.png"
                    alt="LinkedIn"
                    width="20px"
                    />
                </a>

                <a href="https://github.com/Edmund-Kiama" target="_blank">
                    <img 
                    src="https://cdn-icons-png.flaticon.com/128/11378/11378785.png"
                    alt="GitHub"
                    width="20px"
                    />
                </a>

            </div>
      
      </div>
    )
}