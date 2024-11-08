import styles from './app.module.scss';
import { Footer } from './components/footer.tsx';
import { Header } from './components/header.tsx';
import { Home } from './pages/home.tsx';
import { NotFound } from './pages/not-found.tsx';
import { Rational, RationalIndex } from './pages/rational.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className={styles['app-container']}>
            <Header />
            <main className={styles['contents-container']}>
                <Routes>
                    <Route
                        element={<Home />}
                        path="/"
                    />
                    <Route path="/rational">
                        <Route
                            element={<RationalIndex />}
                            path="/rational" />
                        <Route
                            element={<Rational />}
                            path="/rational/:vol"
                        />
                    </Route>
                    <Route
                        element={<NotFound />}
                        path="*"
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
