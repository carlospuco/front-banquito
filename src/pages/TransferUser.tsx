import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmTransferUserForm from '../components/organisms/ConfirmTransferUserForm';
import TransferUserForm from '../components/organisms/TransferUserForm';
import Error404 from './Error404';

const TransferUser = () => {

    const [page, setpage] = useState<number>(0);

    const routeChange = () => {
        setpage(1);
    }
    return (
        <>
            {page == 0 ? <TransferUserForm onSubmit={routeChange}/> : 
            <ConfirmTransferUserForm onSubmit={routeChange} amount={12.2} originAccount='123456789' recipeAccount='987654321'/>}
        </>
    )
}

export default TransferUser