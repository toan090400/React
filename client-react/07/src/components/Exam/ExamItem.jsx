
import './Exam.css'
import ExamDate from './ExamDate'

const ExamItem = (props) => {
    // console.log(props)
    const onDelete = (e) => {
        // console.log(e)
        props.Delete(e)
    }
    return ( 
        <div className='expense-item'>
            <ExamDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={()=>onDelete(props.id)}>Delete</button>
        </div>
    );
}
 
export default ExamItem;