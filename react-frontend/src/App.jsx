import ProductCard from "./components/ProductCard";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome name="Mohit" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
        <ProductCard name="Momos" price={10.99} category="Appetizer" instock={true} image="momos.jpeg" />
        <ProductCard name="Pizza" price={15.99} category="Main Course" instock={false} image="pizza.jpg" />
        <ProductCard name="Ice Cream" price={5.99} category="Dessert" instock={true} image="icecream.jpeg" />
        <ProductCard name="Burger" price={8.99} category="Fast Food" instock={true} image="burger.jpg"/>
      </div>
      {/* <Header /> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"> 
      <Card name="John Doe" age={30} gender="Male" />
      <Card name="Jane Smith" age={28} gender="Female" />
      <Card name="Alex Johnson" age={35} gender="Male" />
      </div> */}
    </>
  );
}

export default App
