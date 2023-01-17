import logo from './aglet_logo.svg';
import './App.css';

function App() {

  const slides = [
    {url: 'https:localhost:3000', title, 'Beach'},
    {url: 'https:localhost:3000', title, 'Beach'},
    {url: 'https:localhost:3000', title, 'Beach'},
    {url: 'https:localhost:3000', title, 'Beach'},
    {url: 'https:localhost:3000', title, 'Beach'}
  ]
  return (
    <div>
      <h1>Hello</h1>
      <ImageSlider slides={slides}/>
    </div>
  );
}

export default App;
