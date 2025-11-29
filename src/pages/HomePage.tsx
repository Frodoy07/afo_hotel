import { Hero, Button } from "../components/UIElements";

const HomePage = () => {
  return (
    <>
      <Hero
        button={<Button children={<a href="#">Explore</a>} />}
        backgroundUrl="frontt.jpg"
        heading="WELCOME TO AFO HOTEL AND SUITE"
        para="Good people. Good thinking. Good feeling"
      />
    </>
  );
};

export default HomePage;
