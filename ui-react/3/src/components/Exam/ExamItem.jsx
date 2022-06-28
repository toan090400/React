import './Exam.css'
import ExamDate from './ExamDate'
const ExamItem = (props) => {
    // console.log(props)
    return ( 
        <div className='expense-item'>
            <ExamDate date={props.date} />
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}
 
export default ExamItem;