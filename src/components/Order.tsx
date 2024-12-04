import { pizzaType } from "../App";

const Order = ({ pizza }: { pizza: pizzaType }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </div>
  );
};

export default Order;
