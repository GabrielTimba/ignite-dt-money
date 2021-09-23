import { useEffect } from "react";
import { Container } from "./styles";

export function TransationsTable() {

  useEffect(()=>{
    fetch('http://localhost:3000/api/transactions')
    .then(response=>response.json())
    .then(data=>console.log(data))
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">35,000.00Mt</td>
            <td>Desenvolvimento</td>
            <td>12/04/2021</td>
          </tr>

          <tr >
            <td>Aluguer</td>
            <td className="withdraw">-10,000.00Mt</td>
            <td>Casa</td>
            <td>19/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}