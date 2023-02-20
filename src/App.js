import "./App.css";
import { Body } from "./components/Body/Body";
import Header from "./components/Header/Header";
import { TemplateFooter } from "./components/TemplateFooter/TemplateFooter";
import {
  datacontext,
  menus,
} from "./components/myDataContext/myDataContext";

function App() {
  return (
    <>
      <datacontext.Provider value={{ menus }}>
        <Header />
        <Body />
        <TemplateFooter />
      </datacontext.Provider>
    </>
  );
}

export default App;
