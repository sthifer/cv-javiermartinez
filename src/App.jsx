import './App.scss';
import Intro from './components/intro/Intro';
import Header from './components/header/Header';
import Sobremi from './components/sobre-mi/Sobremi';
import Estudios from './components/estudios/Estudios';
import Experiencia from './components/experiencia/Experiencia';

function App() {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <Sobremi></Sobremi>
    <Experiencia></Experiencia>
    <Estudios></Estudios>
    </>
  );
}

export default App;
