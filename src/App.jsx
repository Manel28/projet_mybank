import { useState } from 'react'

import Header from './components/Header.jsx' 
import Footer from './components/Footer.jsx';
import PageExpenses from './pages/PageExpenses.jsx';
function App(){
 

  return(
    <div>
      <Header/>
    
      <h1> MyBank</h1>
     <PageExpenses/>
      <Footer/>
    </div>
  );

}
export default App;
