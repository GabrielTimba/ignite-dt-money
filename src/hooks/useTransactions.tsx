import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface Transation {
  id: number,
  title:string,
  type:string,
  category:string,
  amount:number,
  createdAt:string,
}

type TransationInput= Omit<Transation,'id'|'createdAt'>

interface TransactionsProviderProps{
  children:ReactNode
}

interface TransactionsContextData{
  transactions:Transation[],
  createTransaction:(transaction: TransationInput)=>Promise<void>,
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}:TransactionsProviderProps){
  const [transactions,setTransactions] =useState<Transation[]>([]);

  useEffect(()=>{
    api.get('/transactions')
    .then(response=>setTransactions(response.data.transactions))
  },[]);


  async function createTransaction(transactionInput:TransationInput){
    const response=await api.post('/transactions',transactionInput)

    const { transaction }=response.data;
    setTransactions([...transactions,transaction])
  }

  return (
    <TransactionsContext.Provider value={{transactions,createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  );

}

export function useTransactions(){
  const context = useContext(TransactionsContext);

  return context;
}