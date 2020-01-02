import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextProvider } from "./Context";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Header from "./components/Header";
import Info from "./components/Info";
import About from "./pages/About";
import AddFriend from "./pages/AddFriend";
import DeleteUser from "./pages/DeleteUser";
import EditUser from "./pages/EditUser";
import Login from "./pages/Login";
import LogOut from "./pages/LogOut";
import Signup from "./pages/Signup";

afterEach(cleanup);

describe("Rendering tests", () => {
  it("App renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Header renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <Header />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("About renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <About />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Info renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Info />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("AddFriend renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <AddFriend />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("DeleteUser renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <DeleteUser />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("EditUser renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <EditUser />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Login renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Login />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("LogOut renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Router>
          <LogOut />
        </Router>
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });

  it("Signup renders without crashing", () => {
    const div = render(
      <ContextProvider>
        <Signup />
      </ContextProvider>
    );
    expect(div).toMatchSnapshot();
  });
});
