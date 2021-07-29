import React, { useState } from "react";
import Title from './Title'
import Count from './Count'
import Button from './Button'

function App() {
	const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)
    
    const incrementAgeCallback = React.useCallback(() => {    
        setAge(age+1);
    }, [age]);

    const incrementSalaryCallback = React.useCallback(() => {
        setSalary(salary+ 1000)
    }, [salary])

    return (
        <div>
            <Title title="Use CallBack"></Title>
            <Count text="age" count={age} />
            <Button handler={incrementAgeCallback}>Increment Age</Button>
            <Count text="salary" count={salary} />
            <Button handler={incrementSalaryCallback}>Increment Salary</Button>
        </div>      
    )
}

export default App;
