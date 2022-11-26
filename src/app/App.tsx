import { NotifTypeEnum } from '@/app/utils/NotifTypeEnum'
import AppTitle from '@/design-system/components/AppTitle'
import ChooseNotifType from '@/design-system/components/ChooseNotifType'
import styled from '@emotion/styled'
import { useState } from 'react'
import MyForm from './Form'

const AppDiv = styled('div')({
  maxWidth: 1280,
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center'
})

function App() {
  const [notifType, setNotifType] = useState<NotifTypeEnum>(NotifTypeEnum.SMS);

  return (
    <AppDiv className="App">
      <AppTitle />
      <ChooseNotifType notifType={notifType} setNotifType={setNotifType} />
      <MyForm notifType={notifType} />
    </AppDiv>
  )
}

export default App
