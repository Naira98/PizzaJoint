import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

export type pizzaType = {
  base: string;
  toppings: string[];
};

function App() {
  const [pizza, setPizza] = useState<pizzaType>({ base: "", toppings: [] });

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping: string) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza} />
          </Route>
          <Route path="/order">
            <Order pizza={pizza} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
