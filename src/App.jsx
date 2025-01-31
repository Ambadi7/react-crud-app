import { useEffect, useState } from "react"
import { data } from "./data/data"
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import { List } from "@mui/material";


const localData =() =>{
  let list = localStorage.getItem("data")
  if(list){
    return JSON.parse(List)
  }
  else{
    return []
  }
}
function App() {
 const [users,setUsers] = useState(data)
 const [searchTerm,setSearchTerm] = useState("")
 

 //local stoage

 useEffect(()=>{
  localStorage.setItem("data",JSON.stringify(users))
 })

  return (
    <>
      <div className="p-2 ml-10">
        <input type="text" value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder="Search"/>
        <button className="mx-2 px-3 bg-blue-500 rounded-md">Search</button>
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
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
                <th className="p-3">Id</th>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3 text-right">Gender</th>
                <th className="p-3">Phone</th>
                {/* <th className="p-3"><DeleteForeverTwoToneIcon/></th>
                <th className="p-3"><EditTwoToneIcon/></th>
                <th className="p-3"><CheckCircleTwoToneIcon/></th> */}
                
              </tr>
            </thead>
            <tbody>
            {
              users.filter((item)=>{
                return searchTerm.toLowerCase() === " " ? item: item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
              })
              .map((item)=>{
                return(

            <tr key={item.id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                  <p>{item.id}</p>
                </td>
                <td className="p-3">
                  <p>{item.first_name}</p>
                </td>
                <td className="p-3">
                  <p>{item.last_name}</p>
                </td>
                <td className="p-3">
                  <p>{item.email}</p>
                  
                </td>
                <td className="p-3 text-right">
                  <p>{item.gender}</p>
                </td>
                <td className="p-3 text-right">
                  <p>{item.phone}</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span><DeleteForeverTwoToneIcon/></span>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span><EditTwoToneIcon/></span>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                    <span><CheckCircleTwoToneIcon/></span>
                  </span>
                </td>

            </tr>
                )
              })
            }
             
            </tbody>
          </table>
        </div>
      </div>
      
      <h1 className="text-7xl">helloworld</h1>
    </>
  )
}

export default App
