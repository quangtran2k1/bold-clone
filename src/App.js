import Header from './components/Layouts/Header';
import Home from './pages/Home';
import PreLoader from './components/Layouts/PreLoader';

function App() {
    return (
        <div className="App">
            <PreLoader />
            <Header />
            <Home />
        </div>
    );
}

export default App;
