import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "@fontsource/markazi-text";
import "@fontsource/karla";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
