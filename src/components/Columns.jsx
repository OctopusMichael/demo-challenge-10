import React from 'react'



const columns = ({data}) => {

  console.log()
  return (
    <>
      <div className='container-fluid section-container-main'>
        <div className='row g-0 '>
          {data.map(element => {
            return(
              <div key={element.id} className='col-12 col-md-4 '>
                  <div className={element.bg}>
                  <div className={element.avatar}/> 
                  <h3>{element.name}</h3>
                  <p> {element.text}</p>
                  <button className="btn btn-outline-light">Learn More </button>
               </div>
               </div>
 
            )
          })  
          }
        </div>
      </div>
    </>
  )
}

export default columns