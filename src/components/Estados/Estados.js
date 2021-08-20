import React from 'react';
import { useEffect } from 'react';
import { ApiService } from '../../service/ApiService';

export default function Estados(props) {


    async function getEstados() {
        const teste = await ApiService.get('estados')
        console.log(teste)
    }

    useEffect(() => {
        getEstados();
    }, [])



    return (
        <div>
            Estados
        </div>
    );
}