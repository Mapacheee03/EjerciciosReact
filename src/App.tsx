import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DatosPersonales from './components/Ejercicio1.1/Ejercicio1.1';
import CalculadoraPersonal from './components/Ejercicio1.2/Ejercicio1.2';
import DashboardDinamico from './components/Ejercicio1.3/Ejercicio1.3';
import TarjetaDePresentación from './components/Ejercicio2.1/Ejercicio2.1';
import PortafolioModular from './components/Ejercicio2.2/Ejercicio2.2';
import SistemadeComponentesAnidados from './components/Ejercicio2.3/Ejercicio2.3';
import GeneradordeHTML from './components/Ejercicio3.1/Ejercicio3.1';
import ProcesadorDeDatosComplejos from './components/Ejercicio3.2/Ejercicio3.2';
import GaleriaDeFotos from './components/Ejercicio4.1/Ejercicio4.1';
import MenuDeRestaurante from './components/Ejercicio4.2/Ejercicio4.2';

import './App.css';


function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/datos" element={<DatosPersonales />} />
        <Route path="/calculadora" element={<CalculadoraPersonal />} />
        <Route path="/dashboard" element={<DashboardDinamico />} />
        <Route path="/tarjeta" element={<TarjetaDePresentación />} />
        <Route path="/portafolio" element={<PortafolioModular />} />
        <Route path="/sistema" element={<SistemadeComponentesAnidados />} />
        <Route path="/generador" element={<GeneradordeHTML />} />
        <Route path="/procesador" element={<ProcesadorDeDatosComplejos />} />
        <Route path="/galeria" element={<GaleriaDeFotos />} />
        <Route path="/menu" element={<MenuDeRestaurante />} />

      </Routes>
  );
}

export default App;
