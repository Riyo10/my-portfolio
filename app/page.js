import Footer from "./components/Footer";
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Project from "./components/pages/Project";
export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <Project/>
      <Contact/>
      <Footer/>
     </>
  );
}
