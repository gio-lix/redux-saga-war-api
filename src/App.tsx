import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getStarWarRequest} from "./redux/action-creators";
import {RootState} from "./redux/store";
import PeopleTable from "./components/PeopleTable";

function App() {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getStarWarRequest({page: 1, search: ''}))
    }, [])
    return (
        <div className='container mx-auto'>
            <h1>Hello There</h1>
            <PeopleTable/>
        </div>
    );
}

export default App;
