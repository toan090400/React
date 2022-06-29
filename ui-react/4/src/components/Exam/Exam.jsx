import ExamItem from './ExamItem';
import Cart from '../UI/Cart'
import ExamFilter from './ExamFilter';
import './Exam.css'

import { useState } from 'react';

const Exam = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <Cart>
            <div>
                <ExamFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExamItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExamItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExamItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExamItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </div>
        </Cart>
        

    );
}
 
export default Exam;