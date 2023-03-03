import { FC } from "react";
import ImagesView from "./components/ImagesView";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <ImagesView />
      <Footer />
    </Wrapper>
  );
};

export default App;
