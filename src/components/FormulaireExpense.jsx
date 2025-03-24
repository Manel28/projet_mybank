import { useState } from "react";
// je cree un composant FormulaireExpense
export default function FormulaireExpense({onSubmit}){
    //ici je declare mes inputs
    const [name, setName]= useState('');
    const [category, setCategory]= useState('');
    const [cost, setCost]= useState('');
    const [date, setDate]= useState('');
    const submitExpense =(e)=>{ // cette fonction est appele quand on clique sur le boutton Add
        e.preventDefault();// et cette fonction va empecher le rechargement de mla page
      // je cree l objet expense  
        const expense= {
            id: Date.now(),
            name,
            cost ,
            category,
            date,


        };
        
        onSubmit(expense);// la on execute la fonction oneSubmit qui est fourni par App.jsx en lui passant l objet expense
        // et on reinisialise tt les champs en les vidants apres l ajout
        setName('');
        setCategory('');
        setCost('');
        setDate('');
    };
    //la partie html
    return(
        <form onSubmit={submitExpense}>
            <input  
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
                required
         />
           
         
         <input  
         type="number"
         placeholder="Cost"
         value={cost}
         onChange={(e)=> setCost(e.target.value)}
             required
/>
             
         <input  
         type="date"
         placeholder="date"
         
         onChange={(e)=> setDate(e.target.value)}
             required
        />
             
         <input  
         type="text"
         placeholder="Category"
         value={category}
         onChange={(e)=> setCategory(e.target.value)}
             required
  />
  <button type="submit">Add</button>   

  </form>
  );
          


}