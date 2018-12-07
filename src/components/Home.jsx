import React from "react";
import List from "./List";
import HeroLi from "./HeroLi";

import arrayOfObjects from "../utils/heroes";

class Home extends React.Component {
  
  render() {
    const getJSX = element => <HeroLi key={element.id} elem={element} />;
    return <List arrayOfObjects={arrayOfObjects} elemChoice="div" getJSX={getJSX} />;
  }
}
export default Home;
