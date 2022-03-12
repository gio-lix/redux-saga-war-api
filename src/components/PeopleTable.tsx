import React, {FC} from "react"
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import PeoplePagination from "./PeoplePagination";


const PeopleTable = () => {
    const {people, loading, page} = useSelector((state: RootState) => state.peopleState)

  return (
     <>
         {loading ? (
             <div className='w-full h-screen flex justify-center items-center '>
                 <p className='text-2xl'>Loading...</p>
             </div>
         ) : (
                 <table  width='100%'>
                     <thead>
                     <tr>
                         <th> name </th>
                         <th> birth year </th>
                         <th> eye color </th>
                         <th> gender </th>
                         <th> hair color </th>
                         <th> height </th>
                     </tr>
                     </thead>
                     <tbody>
                     { people?.results?.map((person: any) => (
                         <tr key={person.name}>
                             <td>{person.name}</td>
                             <td>{person.birth_year}</td>
                             <td>{person.eye_color}</td>
                             <td>{person.gender}</td>
                             <td>{person.hair_color}</td>
                             <td>{person.height}</td>
                         </tr>
                     ))}
                     </tbody>
                 </table>

         )}
         <PeoplePagination
             page={page}
             total={people.count}
             onChange={(newPage) => console.log('newPage', newPage)}
         />
     </>
  )
}
export default PeopleTable