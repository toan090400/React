import './NewExam.css'
import ExamForm from './ExamForm'
const NewExam = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData)
    };
    return (  
        <div className="new-expense">
            <ExamForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}
 
export default NewExam;