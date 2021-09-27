import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transation {
  id: number,
  title:string,
  type:string,
  category:string,
  amount:number,
  createdAt:string,
}

export function TransationsTable() {
  const [transactions,setTransactions] =useState<Transation[]>([]);

  useEffect(()=>{
    api.get('/transactions')
    .then(response=>setTransactions(response.data.transactions))
  },[])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    new Intl.NumberFormat('pt-MZ',{
                      style:'currency' ,
                      currency:'MZN'
                    }).format(transaction.amount)
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                {
                    new Intl.DateTimeFormat('pt-Mz').format(transaction.amount)
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}