import { Card, CardContent, Fade, Modal, Typography } from '@mui/material'
import { Box, height } from '@mui/system'
import React, { ReactInstance, useRef, useState } from 'react'
import SearchAccount from '../../../components/organisms/SearchAccount'
import { ColorPalette } from '../../../style/ColorPalette'
import { SizeButton } from '../../../components/atoms/SizeButton'
import { ButtonStyle } from '../../../style/ButtonStyle'
import { ChevronLeft, Print } from '@mui/icons-material'
import ButtonIcon from '../../../components/atoms/ButtonIcon'
import AccountStatementBody from '../../../components/organisms/AccountStatementBody'
import { AccountStament } from '../../../services/account/model/AccountStatement'
import { AccountStatementService } from '../../../services/account/accountStatementService'
import Backdrop from '@mui/material/Backdrop';
import ReactToPrint from 'react-to-print'

const AccountStatementPage = () => {

    const [activeSearchBox, setactiveSearchBox] = useState<boolean>(true);
    const [activeAccountState, setactiveAccountState] = useState<boolean>(false);
    const [activeErrorModal, setactiveErrorModal] = useState<boolean>(false)
    const [accountStatement, setaccountStatement] = useState<AccountStament | undefined>();

    const printRef = useRef();

    const handleBackEvent = () => {
        setactiveSearchBox(true);
        setactiveAccountState(false);
        setaccountStatement(undefined);
    }

    const handleSubmit = (data: string) => {
        searchAccountStatement(data);
    }

    const searchAccountStatement = async (accountNumber: string) => {
        const accountStatement: AccountStament | undefined = await AccountStatementService.getStatement(accountNumber);
        if (accountStatement) {
            setaccountStatement(accountStatement);
            setactiveSearchBox(false);
            setactiveAccountState(true);
        } else {
            setactiveErrorModal(true)
        }
    }

    return (
        <>
            <Box>
                <div style={{
                    position: 'absolute',
                    width: '98%',
                }}>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        height: '80vh',
                        top: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: activeSearchBox ? '100' : '0'
                    }}>
                        <Fade in={activeSearchBox}>
                            <Card sx={{ minWidth: '450px', maxWidth: '750px' }}>
                                <CardContent>
                                    <SearchAccount
                                        color={ColorPalette.SECONDARY}
                                        title='Estado de Cuenta'
                                        onSubmit={handleSubmit} />
                                </CardContent>
                            </Card>
                        </Fade>
                    </div>
                    <div style={{
                        position: 'absolute',
                        width: '100%',
                        top: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: activeAccountState ? '100' : '0'
                    }}>
                        <Fade in={activeAccountState}>
                            <div>
                                <ButtonIcon
                                    color={ColorPalette.PRIMARY}
                                    icon={<ChevronLeft />}
                                    onClick={handleBackEvent} />

                                <ReactToPrint
                                    trigger={() => <ButtonIcon
                                        float
                                        bottom
                                        right
                                        color={ColorPalette.PRIMARY}
                                        icon={<Print />} />}
                                    content={() => printRef.current as unknown as ReactInstance | null} />
                                <AccountStatementBody
                                    accountStatement={accountStatement}
                                    ref={printRef} />
                            </div>
                        </Fade>
                    </div>
                </div>
            </Box>
        </>
    )
}

export default AccountStatementPage