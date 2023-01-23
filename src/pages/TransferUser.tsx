import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmTransferUserForm from '../components/organisms/ConfirmTransferUserForm';
import TransferUserForm from '../components/organisms/TransferUserForm';
import Error404 from './Error404';

const TransferUser = () => {

    const [values, setvalues] = useState<any[] | undefined>([]);
    const navigate = useNavigate();

    const routeChange = () =>{ 
        const path = 'confirm'; 
        navigate(path);
      }
    return (
        <>
            <TransferUserForm
                onSubmit={routeChange} />
        </>
    )
}

export default TransferUser