import { useEffect, useState } from "react"
import { data } from "./data/data"
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import EditForm from "./components/EditForm";


// const localData =() =>{
//   let list = localStorage.getItem("data")
//   if(list){
//     return JSON.parse(List)
//   }
//   else{
//     return []
//   }
// }
function App() {
 const [users,setUsers] = useState(data)
 const [searchTerm,setSearchTerm] = useState("")
 

 // delete
const deleteData =(id) =>{
  setUsers(users.filter((item) => {
    return item.id !== id
  }
))

}

// complete
const completeData = (id) => {
 setUsers(users.map((item) => {
  return item.id === id ? {...item,isCompleted:true}:item
 }
)) 
}

//Update
const updateData =  (modifiedFirstName,modifiedLasttName,modifiedEmail,modifiedGender,modifiedPhone,id) =>{
  setUsers(users.map((item)=>{
    return item.id === id ? {...item,first_name :modifiedFirstName,last_name :modifiedLasttName,email : modifiedEmail,gender : modifiedGender,phone : modifiedPhone,isEditing:!item.isEditing}:item
  }
  ))
}

// edit
const editData = (id) =>{
  setUsers(users.map((item)=>{
    return item.id === id ? {...item,isEditing:!item.isEditing}:item
  }))
}


 //local stoage

 useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(users))
 })

  return (

    <div className="min-h-screen bg-emerald-200 p-8">
      <div className="flex w-96 h-10 ml-10">
        <input type="text" className="w-77 outline-none" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search"/>
        <button className="mx-2 px-3 bg-blue-500 rounded-md">Search</button>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Contact List</h2>
        <div className="overflow-x-auto">
        <table  className="min-w-full text-xs">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="" />
                  </colgroup>
                  <thead className="dark:bg-gray-300">
                    <tr className="text-left">
                      <th className="p-3 w-1/12 ">Id</th>
                      <th className="p-3 w-2/12">First Name</th>
                      <th className="p-3 w-2/12">Last Name</th>
                      <th className="p-3 w-2/12">Email</th>
                      <th className="p-3 text-center w-2/12">Gender</th>
                      <th className="p-3 w-3/12">Phone</th>
                      
                      
                    </tr>
                  </thead>
                </table>
            
            {
              users.filter((item)=>{
                return searchTerm.toLowerCase() === " " ? item: item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              })
              .map((item)=>{
                return(

                  item.isEditing ?(
                      <EditForm key={item.id} item={item} updateData={updateData} />  
                    
                  ) :(
                  <table key={item.id} className="min-w-full text-xs">
                  <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col className="" />
                  </colgroup>
                  
                  <tbody key={item.id}>
                  <tr  className={`border-b border-opacity-20 dark:border-gray-300 ${item.isCompleted ? "bg-green-600" : "bg-emerald-200"}`}>
                      <td className="p-3 w-1/12">
                        <p>{item.id}</p>
                      </td>
                      <td className="p-3 w-2/12">
                        <p>{item.first_name}</p>
                      </td>
                      <td className="p-3 w-2/12">
                        <p>{item.last_name}</p>
                      </td>
                      <td className="p-3 w-3/12">
                        <p>{item.email}</p>
                        
                      </td>
                      <td className="p-3 text-right w-2/12">
                        <p>{item.gender}</p>
                      </td>
                      <td className="p-3 text-right w-3/13">
                        <p>{item.phone}</p>
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold text-red-600 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <span onClick={()=>{deleteData(item.id)}}><DeleteForeverTwoToneIcon/></span>
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold text-blue-600 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <span onClick={()=>{editData(item.id)}}><EditTwoToneIcon/></span>
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <span className="px-3 py-1 font-semibold text-green-600 rounded-md dark:bg-violet-600 dark:text-gray-50">
                          <span onClick={()=>{completeData(item.id)}}><CheckCircleTwoToneIcon/></span>
                        </span>
                      </td>

                  </tr>
                  </tbody>
                  </table>
                  )
                 
                  
            
                )
              })
            }
             
           
          
        </div>
      </div>
    </div>
  )
}

export default App
