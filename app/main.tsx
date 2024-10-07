import { AppProvider } from "./contexts/AppContext";
import Container from "./container";
import AboutMe from "./modules/AboutMe";
import Resume from "./modules/Resume";
import Projects from "./modules/Projects";

const Main = () => {
  return (
    <AppProvider>
      <Container>
        <AboutMe />
        <Resume />
        <Projects />
      </Container>
    </AppProvider>
  );
};

export default Main;
