import axios from "axios";


export const getPeopleApi :any = async (payload: any) => {
    const {page, search} = payload
    const {data} = await axios.get(`https://swapi.dev/api/people?page=${page}&search=${search}`)
    return data
}

