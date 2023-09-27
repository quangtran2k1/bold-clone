import { Fragment, useEffect, useState } from 'react';
import Header from './components/Layouts/Header';
import Home from './pages/Home';
import PreLoader from './components/Layouts/PreLoader';

function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="App">
            {loading ? (
                <PreLoader />
            ) : (
                <Fragment>
                    <Header />
                    <Home />
                </Fragment>
            )}
        </div>
    );
}

export default App;
