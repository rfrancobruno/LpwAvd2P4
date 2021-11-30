import { Container } from './styles'
import { Content } from '../Header/styles'

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Para avaliar o atendimento do nosso time comercial, por favor, identifique-se abaixo: </th>
                    </tr>
                </thead>

                <thead>
                    <tr>
                        <th>Nome:</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr>
                       <input className="nome"></input>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <th>E-mail:</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <input className="nome"></input>
                    </tr>
                </tbody>
               
                <thead>
                    <tr>
                        <th>   </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <Content>
                        <button type="button">
                        Próximo
                        </button>
                    </Content>
                    </tr>
                </tbody>

                <thead>
                    <tr>
                        <p className="copy">
                           Copyright &copy; 2021 <u>Suporte de pesquisa</u>  <u>Outras informações de contato</u> <u>Politica de privacidade</u>
                        </p>
                    </tr>
                </thead>


            </table>
        </Container>
    )
}