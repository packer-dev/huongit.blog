import { AppProvider } from "./contexts/AppContext";
import Container from "./container";
import AboutMe from "./modules/AboutMe";
import Resume from "./modules/Resume";
import Projects from "./modules/Projects";
import { ReactNode } from "react";

const Main = ({ children }: { children?: ReactNode }) => {
  return (
    <AppProvider>
      <Container>
        {children || (
          <>
            <AboutMe />
            <Resume />
            <Projects />
          </>
        )}
      </Container>
    </AppProvider>
  );
};

export default Main;
