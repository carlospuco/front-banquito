import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TransferUserForm from '../components/organisms/TransferUserForm';

const TransferUser = () => {
    const [products, setproducts] = useState<any[] | undefined>([]);

    const navigate = useNavigate();

    return (
        <>
            <TransferUserForm
                onSubmit={MessageEvent.toString}
                products={products ? products : []} />
        </>
    )
}

export default TransferUser