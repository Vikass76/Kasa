import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Housing from '../pages/Housing';
import '../styles/main.scss';

export default function Router() {
  return (
    <BrowserRouter>
  <>
    <Header />
    <main className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </>
</BrowserRouter>

  );
}




