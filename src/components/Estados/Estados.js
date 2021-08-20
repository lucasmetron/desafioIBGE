import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../service/ApiService';
import { addEstados } from '../../store/actions/estadosAction'



export default function Estados(props) {
    const dispatch = useDispatch();
    const redux = useSelector(state => state)
    const [allStates, setAllStates] = useState([]);


    useEffect(() => {
        getEstados();
    }, [])

    useEffect(() => {
        dispatch(addEstados(allStates))
        console.log(redux)
        console.log(allStates)
    }, [allStates, redux])


    async function getEstados() {
        setAllStates(await ApiService.get('estados'))
    }

    return (
        <div>
            Estados
        </div>
    );
}