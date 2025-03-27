import { useState } from "react";
import FormulaireExpense from "../components/formulaireExpense";
import { useEffect } from "react";
export default function PageExpenses(){
    // on cree un etat expense pour stocker tte les expenses
    const[expenses ,setExpenses]=useState([]);//on commence avec une liste vide
    
    useEffect(() => {
        if (!localStorage.getItem("expenses"))
            localStorage.setItem("expenses", [])
        else
            setExpenses(JSON.parse(localStorage.getItem("expenses")))
    }, []);
    
      
    const Handleaddexpense=(expense)=>{
        setExpenses(JSON.parse(localStorage.getItem("expenses")))
    };
      return(
        <div>
            
           
            <FormulaireExpense onSubmit={Handleaddexpense}/>
            {/*on affiche la liste des depebses ajoutés*/}

            <ul className='list-expense'>
                <h2>List of my expenses</h2>
                {expenses && expenses.length && expenses.map((item,index)=>(
                   
                    <li key={index}>
                       
                       name: {item.name} / cost: {item.cost} $  / category :{item.category}
</li>

                ))} 
                {/*la pour resumer pour chaque depense on afdiche un element de liste et ensuite on affiche le name le cost et category et date*/}
                
            </ul>
           

        </div>
      );
}