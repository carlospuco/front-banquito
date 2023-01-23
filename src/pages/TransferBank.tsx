import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmTransferUserForm from '../components/organisms/ConfirmTransferUserForm';
import TransferBankForm from '../components/organisms/TransferBankForm';
import TransferBankRecipeForm from '../components/organisms/TransferBankRecipeForm';
import TransferUserForm from '../components/organisms/TransferUserForm';
import { AccountService } from '../services/account/accountService';
import { ProductService } from '../services/product/productService';
import Error404 from './Error404';

const TransferBank = () => {

    const [products, setproducts] = useState<any[] | undefined>([]);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts("2");
        return () => { }
    })


    const getProducts = async (id: string) => {
        const productsAsync = await ProductService.getProducts(id);
        setproducts(productsAsync);
    }

    const handleSubmit = (data: any) => {
        const account = {
            ...data,
            codeProductType: "2"
        }
        try {
            saveAccount(account);
            navigate('/client', { replace: true });
        } catch (error) {
            console.log("Something went wrong");
        }

    }

    const saveAccount = async (data: any) => {
        await AccountService.createAccount(data);
    }
    return (
        <>
            <TransferBankRecipeForm
                onSubmit={handleSubmit}
                products={products ? products : []} />
        </>
    )
}

export default TransferBank