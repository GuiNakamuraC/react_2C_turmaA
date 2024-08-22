import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <Banner image="favoritos" />
      <Container>
        <h2>Music Videos</h2>
        <section className="cards">
          <Card id="ynOtYmpZxak"/>
          <Card id="olDWm2veCrM"/>
          <Card id="GsV1i0QHi-o"/>
          <Card id="2wA_b6YHjqQ"/>
          <Card id="eJCHKjt0MPw"/>
        </section>
      </Container>      
      <Footer/>
    </>
  );
}

export default App;
