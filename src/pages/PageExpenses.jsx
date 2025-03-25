import { useState } from "react";
import FormulaireExpense from "../components/formulaireExpense";
export default function PageExpenses(){
    // on cree un etat expense pour stocker tte les expenses
    const[expenses ,setExpenses]=useState([]);//on commence avec une liste vide
    const Handleaddexpense=(expense)=>{
        console.log('new expense',expense);
        //ajout de la nouvelle depense
        setExpenses((prev)=>[...prev ,expense]);
      };
      return(
        <div>
            <h2> page Expense</h2>
           
            <FormulaireExpense onSubmit={Handleaddexpense}/>
            {/*on affiche la liste des depebses ajoutés*/}

            <ul className='list-expense'>
                <h2>List of my expenses</h2>
                {expenses.map((item,index)=>(
                   
                    <li key={index}>
                       
                       name: {item.name} / cost: {item.cost} $ / date: {item.date} / category :{item.category}
</li>

                ))} 
                {/*la pour resumer pour chaque depense on afdiche un element de liste et ensuite on affiche le name le cost et category et date*/}
                
            </ul>
           

        </div>
      );
}