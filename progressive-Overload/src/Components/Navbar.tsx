import React from 'react'
import '../Styles/Navbar-styles.css'
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { MyContext } from '../Context/ContextProvider';


//10 week array 
const TenWks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Navbar() {
    //grabbing useStates from ContextProvider
    const { edit, setEdit, currentWeek, setCurrentWeek } = React.useContext(MyContext);

    //allows us to edit
    const handleEdit = () => {
        //takes the previous value and sets it to the opposite 
        setEdit((prevEdit: Boolean) => !prevEdit)
    }

  return (
    <div className='navbar'>
        <div>Progressive Overload</div>
        <div className='right-side-nav'>
        <div className='currentWeek'>
            <label>Week:</label>
            <select 
            value={currentWeek}
            onChange={(e) => setCurrentWeek(Number(e.target.value))}
            >
                {TenWks.map(week => (
                    <option key={week} value={week}>Week {week}</option>
                ))}
            </select>
        </div>
        <div className='edit'>
            <button onClick={handleEdit}>{edit ? <EditIcon /> : <SaveIcon /> }</button>
        </div>
        </div>
    </div>
  )
}
