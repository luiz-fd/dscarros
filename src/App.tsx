import Cardcar from "./components/cardcar";
import Cardcomment from "./components/cardcomment";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header></Header>

      <section>
        <Cardcar></Cardcar>
      </section>
      <section>
        <Cardcomment></Cardcomment>
      </section>

      <Footer></Footer>
    </>
  );
}

export default App;
