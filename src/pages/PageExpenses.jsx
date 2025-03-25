import FormulaireExpense from "../components/formulaireExpense";
export default function pageExpense(){
    const Handleaddexpense=(expense)=>{
        console.log('new expense',expense);
      };
      return(
        <div>
            <h2> Expense</h2>
            <FormulaireExpense onSubmit={Handleaddexpense}/>
        </div>
      );
}