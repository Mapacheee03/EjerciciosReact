import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DatosPersonales from './components/Tema 1/Ejercicio1.1/Ejercicio1.1';
import CalculadoraPersonal from './components/Tema 1/Ejercicio1.2/Ejercicio1.2';
import DashboardDinamico from './components/Tema 1/Ejercicio1.3/Ejercicio1.3';
import TarjetaDePresentación from './components/Tema 2/Ejercicio2.1/Ejercicio2.1';
import PortafolioModular from './components/Tema 2/Ejercicio2.2/Ejercicio2.2';
import SistemadeComponentesAnidados from './components/Tema 2/Ejercicio2.3/Ejercicio2.3';
import GeneradordeHTML from './components/Tema 3/Ejercicio3.1/Ejercicio3.1';
import ProcesadorDeDatosComplejos from './components/Tema 3/Ejercicio3.2/Ejercicio3.2';
import RenderizadorCondicional from './components/Tema 3/Ejercicio3.3/Ejercicio3.3';
import GaleriaDeFotos from './components/Tema 4/Ejercicio4.1/Ejercicio4.1';
import MenuDeRestaurante from './components/Tema 4/Ejercicio4.2/Ejercicio4.2';
import PlataformaDeCursosOnline from './components/Tema 4/Ejercicio4.3/Ejercicio4.3';
import TarjetasDeEmpleados from './components/Tema 5/Ejercicio5.1/Ejercicio5.1';
import TiendaDeProductos from './components/Tema 5/Ejercicio5.2/Ejercicio5.2';
import SistemaDeGestiónEscolar from './components/Tema 5/Ejercicio5.3/Ejercicio5.3';

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
        <Route path="/render" element={<RenderizadorCondicional />} />
        <Route path="/galeria" element={<GaleriaDeFotos />} />
        <Route path="/menu" element={<MenuDeRestaurante />} />
        <Route path="/cursos" element={<PlataformaDeCursosOnline />} />
        <Route path="/empleados" element={<TarjetasDeEmpleados />} />
        <Route path="/tienda" element={<TiendaDeProductos />} />
        <Route path="/gestion" element={<SistemaDeGestiónEscolar />} />

      </Routes>
  );
}

export default App;
