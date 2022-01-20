import "./App.css";
import CompanyBody from "./components/body/CompanyBody";
import SideBar from "./components/sidebar/SideBar";
import TabBar from "./components/tabbar/TabBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <TabBar />
      <CompanyBody className="my-8" />
    </div>
  );
}

export default App;
