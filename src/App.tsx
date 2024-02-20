import { Container } from "@chakra-ui/react";
import { Navbar, Hero, ExerciseDemo, MobileApp, Footer } from "./components";
import OtherExercise from "./components/OtherExercise/OtherExercise";
import exercises from "./data/exercises";
import { COMPANY, HELP, socialIcons } from "./data/footerData";
import AboutExercise from "./components/AboutExercise/AboutExercise";
import { QnA, QnAList } from "./data/aboutExercise";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Container maxWidth="1440px" as="div" padding="0" centerContent>
        <Hero />
        <ExerciseDemo />
        <AboutExercise data={QnA} listData={QnAList} />
      </Container>
      <MobileApp />
      <OtherExercise data={exercises} />
      <Footer data={{ COMPANY, HELP }} socialIcon={socialIcons} />
    </>
  );
};

export default App;
