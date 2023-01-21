import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmTransferUserForm from '../components/organisms/ConfirmTransferUserForm';

const ConfirmTransferUser = () => {
    const [products, setproducts] = useState<any[] | undefined>([]);

    const navigate = useNavigate();

    return (
        <>
            <ConfirmTransferUserForm
                onSubmit={MessageEvent.toString}
                products={products ? products : []} />
        </>
    )
}

export default ConfirmTransferUser