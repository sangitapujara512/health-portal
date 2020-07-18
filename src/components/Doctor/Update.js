import React from 'react'

const Update = (props) => {
    const obj=[{
        "FirstName": "Sang",
		"LastName": "Puj",
        "Mobile": 1111111111,
        "email": "john.doe@gmail.com",
        "Medicine": ["Crocin", "Cough Syrup"],
		"Diagnosys":["fever","throat pain"],
		"Address" : "Street 1",
		"City": "Mumbai",
		"State":"Mah",
		"Country":"India",
		"Pincode": 400080,
		},
        
        
    ]
  return (
    <div>
      <form>
          <button onClick={()=>{props.submit(obj)}}>Submit</button>
      </form>
    </div>
  )
}

export default Update
