import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import TransferUserForm from '../components/organisms/TransferUserForm';
import ConfirmTransferUser from './ConfirmTransferUser';
import Error404 from './Error404';

const TransferUser = () => {
    const [products, setproducts] = useState<any[] | undefined>([]);

    const navigate = useNavigate();

    const handleSubmit = (data: any) => {
        try {
                <Routes>
                    <Route path="" element={<ConfirmTransferUser />}>
                    </Route>
                </Routes>
        } catch (error) {
            console.log("Something went wrong");
        }

    }
    return (
        <>
            <TransferUserForm
                onSubmit={handleSubmit}/>
        </>
    )
}

export default TransferUser