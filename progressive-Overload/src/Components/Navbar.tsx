import React, { useState } from 'react'
import '../Styles/Navbar-styles.css'
const TenWks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Navbar() {
    const [currentWeek, setCurrentWeek] = useState(1);

  return (
    <div className='navbar'>
        <div>Progressive Overload</div>
        <div>
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
    </div>
  )
}
