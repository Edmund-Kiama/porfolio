import Profile from "./Components/Profile";
import Stack from "./Components/Stack";
import EducationAndCertificates from "./Components/Education";
import Experiences from "./Components/Experience";
import Projects from "./Components/Projects";

function Home() {
  return (
    <section className="main-container">
      <Profile />    
      <Stack />    
      <EducationAndCertificates />
      <Experiences />
      <Projects />
      {/* <div className="pages-to-add">
        <h2>Home</h2>
        <div className="about">
          <h2>About</h2>
          <p>Description</p>
          <p>Extra-curricular</p>
        </div>
        <h2>Other Experiences</h2>
        <h2>Error page</h2>
      </div> */}
    </section>
  )
}

export default Home;
