import Profile from "./Components/Profile";
import Stack from "./Components/Stack";
import EducationAndCertificates from "./Components/Education";
import Experiences from "./Components/Experience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function Home() {
  return (
    <section className="main-container">
      <Profile />    
      <Stack />    
      <EducationAndCertificates />
      <Experiences />
      <Projects />
      <Footer />
    </section>
  )
}

export default Home;
