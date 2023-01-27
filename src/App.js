// I created an index.js file and exported my components files inside
// my props ( product ) stores the data to be accesed by app.js
// also mapping them to print out the arrays according to the products id's


import './App.css';
import { Header, Card, Footer } from './components'
import products from './data/Product'

function App() {
  const items = products.map((product) => {
    return <Card data={product} key={product.id} />
  })
  return (
    <div className="App">

      <Header />
      <div className='cards'>{items}</div>
      <Footer />
    </div>
  );
}

export default App;
