import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ConfirmTransferUserForm from '../components/organisms/ConfirmTransferUserForm';
import TransferBankForm from '../components/organisms/TransferBankForm';
import TransferBankRecipeForm from '../components/organisms/TransferBankRecipeForm';

const TransferBank = () => {
    const [page, setpage] = useState<number>(0);

    const [value, setvalue] = useState<{
        amount: number,
        originAccount: string,
        recipeAccount: string,
    }>();

    const routeChange = (num: number) => {
        setpage(num);
    }
    return (
        <>
            {page === 0 ? <TransferBankForm onSubmit={(data: any) => { routeChange(1); setvalue(data); }} products={[{ name: "DNI", codeProduct: "12" }]} /> : page === 1 ?
                <TransferBankRecipeForm onSubmit={(data: any) => {routeChange(2); setvalue(data);}} products={[{ name: "DNI", codeProduct: "12" }]} /> :
                <ConfirmTransferUserForm onSubmit={() => routeChange(3)} amount={value?.amount as number} originAccount={value?.originAccount as string} recipeAccount={value?.recipeAccount as string} />}
        </>
    )
}

export default TransferBank