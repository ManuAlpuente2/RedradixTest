import "./App.scss"
import Header from './Components/Header';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';

import Users from './Mockups/Users';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs users={Users} />
      <Footer />
    </div>
  );
}

export default App;
