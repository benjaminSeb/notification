import { NotifTypeEnum } from '@/app/utils/NotifTypeEnum'
import reactLogo from '@/assets/react.svg'
import AppTitle from '@/design-system/components/AppTitle'
import ChooseNotifType from '@/design-system/components/ChooseNotifType'
import { useState } from 'react'
import './App.css'
import MyForm from './Form'

function App() {
  const [count, setCount] = useState(0)
  const [notifType, setNotifType] = useState<NotifTypeEnum>(NotifTypeEnum.SMS);

  return (
    <div className="App">
      <AppTitle />
      <ChooseNotifType notifType={notifType} setNotifType={setNotifType} />
      <MyForm notifType={notifType} />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </div>
  )
}

export default App
