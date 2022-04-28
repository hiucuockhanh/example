import Count from "./components/Count";
import { Outlet, Link } from "react-router-dom";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
      <Count />
    </div>
  );
}

export default App;
