import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, RadiosBox, TransactionTypeContainer } from './styles';



interface NewTransactionModalProps {
  isOpen:boolean;
  onRequestClose:()=>void;
}
export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
  const [type,setType]=useState('deposit');
  const [title,setTitle]=useState('')
  const [category,setCategory]=useState('')
  const [amount,setAmount]=useState(0)

  const {createTransaction} = useTransactions();

  async function handleCreateNewTransaction(event:FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    onRequestClose()
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay" 
      className="react-modal-content" 
    >
      <button 
        type="button" 
        className="react-modal-close" 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transacao</h2>
        <input 
          type="text" 
          placeholder="titulo"
          value={title}
          onChange={event=>setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="valor"
          value={amount}
          onChange={event=>setAmount(Number(event.target.value))}
        />

        <input 
          type="text" 
          placeholder="categoria"
          value={category}
          onChange={event=>setCategory(event.target.value)}
        />

        <TransactionTypeContainer>
          <RadiosBox
            type="button"
            isActive={type==='deposit'}
            activeColor="green"
            onClick={()=>{setType('deposit')}}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadiosBox>

          <RadiosBox
            type="button"
            isActive={type==='withdraw'}
            activeColor="red"
            onClick={()=>{setType('withdraw')}}
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadiosBox>


        </TransactionTypeContainer>

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
)
}