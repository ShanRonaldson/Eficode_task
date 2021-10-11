import React from "react";
import { Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Content } from "./components/Content";

import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// library.add(fab);

function App() {
  return (
    <div>
      <Nav />
      <Route exact path="/">
        <RecordList />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>

      <Header />
      <Nav />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
