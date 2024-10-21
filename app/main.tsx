import Container, { ContainerProps } from "./container";
import AboutMe from "./modules/AboutMe";
import Resume from "./modules/Resume";
import Projects from "./modules/Projects";
import Contact from "./modules/Contact";

const Main = ({ children, landingPage }: ContainerProps) => {
  return (
    <Container landingPage={landingPage}>
      {children || (
        <>
          <AboutMe />
          <Resume />
          <Projects />
          <Contact />
        </>
      )}
    </Container>
  );
};

export default Main;
