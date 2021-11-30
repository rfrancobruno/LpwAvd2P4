import { useState } from 'react'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { GlobalStyle } from './styles/global'
import { NewTrasactionModal } from './components/NewTransactionModal'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <div className="App">
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      {/* <NewTrasactionModal
        isOpenProp={isNewTransactionModalOpen}
        onRequestCloseProp={handleCloseNewTransactionModal}
      /> */}
      <GlobalStyle />
    </div>
  );
}

