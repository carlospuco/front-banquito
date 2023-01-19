import React, { useState } from 'react'
import AccountFormBank from '../components/organisms/AccountFormBank'
import SelectAccountTypeForm from '../components/organisms/SelectAccountTypeForm'
import ProgressButtonMolecule from '../components/molecules/ProgressButtonMolecule'
import { ColorPalette } from '../style/ColorPalette'
import { Box, FormControlLabel, Slide, Switch } from '@mui/material'


const AccountCreateBank = () => {
  const [indexForm, setindexForm] = useState<number>(0)

  const [selectedAccount, setselectedAccount] = useState<string>("");

  const handleTypeAccountButton = (data: string, value?: number) => {
    value && setindexForm(value);
    setselectedAccount(data);
  }

  const handleSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <ProgressButtonMolecule
        color={ColorPalette.PRIMARY}
        itemsCount={2}
        current={indexForm}
        onUpdate={(value) => setindexForm(value)} />
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Slide
            in={indexForm == 0}
            direction={indexForm == 0 ? "left" : "right"}
            mountOnEnter
            unmountOnExit>
            <div>
              <SelectAccountTypeForm
                onSelect={handleTypeAccountButton} />
            </div>
          </Slide>
        </div>
        <div style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Slide
            in={indexForm == 1}
            direction={indexForm == 1 ? "left" : "right"}
            mountOnEnter
            unmountOnExit>
            <div>
              <AccountFormBank
                accountType={selectedAccount}
                onSubmit={handleSubmit} />
            </div>
          </Slide>
        </div>
      </div>

    </>
  )
}

export default AccountCreateBank