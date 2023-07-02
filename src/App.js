import { useEffect } from 'react';
//components
import BodyContent from './Components/BodyContent/BodyContent';
import CoinDetail from './Components/CoinDetail/CoinDetail';

//react router dom
import { Route,Routes,Navigate } from 'react-router-dom';


function App() {

  useEffect(()=>{
    document.body.style.backgroundColor = "#14161a"
  },[])
  
  return (

    <div>
      <Routes>
        <Route path='/' element={<BodyContent/>}/>
        <Route path='/coin/:id' element={<CoinDetail/>}/>
        <Route path='/*' element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
