import PropTypes from 'prop-types'
import { useState } from 'react'

const EditForm = ({item,updateData}) => {
  const [fname,setFname] =useState(item.first_name)
  const [lname,setLname] =useState(item.last_name)
  const [email,setEmail] =useState(item.email)
  const [gender,setGender] = useState(item.gender)
  const [phone,setPhone] =useState(item.phone)
  const handleSubmit = (e) =>{
    e.preventDefault()
    updateData(fname,lname,email,gender,phone,item.id)
    setFname("")
    setLname("")
    setEmail("")
    setGender("")
    setPhone("")
  }
  return (
    <form onSubmit={handleSubmit} className='text-sm flex border-b border-opacity-20'>
          <div className="p-3 w-2/12">
            {item.id}
          </div>
          <div className="p-3 w-2/12">
            <input className="p-2 outline-none" value={fname} placeholder="Enter First name" type="text" onChange={(e)=>{setFname(e.target.value)}}/>
          </div>
          <div className="p-3 w-2/12">
            <input className="p-2 outline-none" value={lname} placeholder="Enter Last name" type="text" onChange={(e)=>{setLname(e.target.value)}}/>
          </div>
          <div className="p-3 w-2/12">
            <input className="p-2 outline-none" value={email} placeholder="Enter Email" type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                          
          </div>
          <div className="p-3 text-right w-2/12">
            <input className="p-2 outline-none text-right" value={gender} placeholder="Gender" type="text" onChange={(e)=>{setGender(e.target.value)}}/>
          </div>
          <div className="p-3 text-right w-2/12">
            <input className="p-2 outline-none" value={phone} placeholder="Enter the phone Number" type="phone number" onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
          <div className="p-3 text-right w-3/12">
              <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
              <button type='submit' className='bg-blue-600 rounded-lg p-2 text-lg' >Submit</button>
              </span>
          </div>
    </form>

  )
}
EditForm.propTypes = {
  item:PropTypes.item,
  updateData:PropTypes.func,
}

export default EditForm