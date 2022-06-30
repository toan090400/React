import ExamItem from './ExamItem';
import Cart from '../UI/Cart'
import ExamFilter from './ExamFilter';
import './Exam.css'

import { useState } from 'react';

const Exam = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Cart>
            <div>
                <ExamFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {filteredExpenses.length === 0 ? 
                    <p>No Item</p>
                    :
                    filteredExpenses.map((item) => (
                        <ExamItem key={item.id}
                            title={item.title}
                            amount={item.amount}
                            date={item.date}
                        />
                    ))
                }
            </div>
        </Cart>
    );
}
 
export default Exam;