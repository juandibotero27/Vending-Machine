import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Chips = () => {

    const [count, setCount] = useState(0)

    const Eat = () => {
        setCount(() => count + 1)
    }


    return (
        <div>
            <h3>BAGS EATEN: {count}</h3>
            <button onClick={Eat}>NOM NOM NOM</button>
            <h3> <Link to='/'>GO BACK</Link> </h3>
        </div>
    )
}

export default Chips;

