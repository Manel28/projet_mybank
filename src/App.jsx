import { useState } from 'react'

import Header from './components/Header.jsx' 
import Footer from './components/Footer.jsx';
import FormulaireExpense from './components/formulaireExpense.jsx';
function App(){
  const Handleaddexpense=(expense)=>{
    console.log('new expense',expense);
  }

  return(
    <div>
      <Header/>
    
      <h1> MyBank</h1>
      <FormulaireExpense oneSubmit={Handleaddexpense}/>
      <Footer/>
    </div>
  );

}
export default App;
