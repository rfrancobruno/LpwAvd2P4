import Modal from "react-modal"
import { Container } from "./styles"


interface INewTransactionModalProps {
    isOpenProp: boolean;
    onRequestCloseProp: () => void;
}

export function NewTrasactionModal({ isOpenProp, onRequestCloseProp }: INewTransactionModalProps) {
    return (
        <Modal 
            isOpen={isOpenProp}
            onRequestClose={onRequestCloseProp}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Titulo"
                />
                <input
                    placeholder="Valor"
                />
                <input
                    placeholder="Categoria"
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}