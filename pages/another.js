import {useState} from 'react';
const Another = () => {
    
    const [people,setPeople] = useState({
    
        id: '3',
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        gender: 'male',
})
    
 

    return (
        <h1 onClick={setPeople} >
            HELLO FROM ANOTHER
        </h1>
      );
}
 
export default Another;