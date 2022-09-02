import React, { useState } from 'react'

function Button( {filter, button} ) {

    const [active, setActive] = useState(null);
    


  return (
    <div className="button">
        {
            button.map((cat, i) => {
                return <button key={i} type="button" onClick={() => {filter(cat); setActive(active => active === i ? null : i)}} className={`btn ${active === i ? 'active' : ''}`}>{cat}</button>
            })
        }
    </div>
  )
}

export default Button