import toast from 'react-hot-toast';
import * as S from './DeleteModal.styles';

const DeleteModal = ({ isOpen, onConfirm, onCancel }) => {
    const handleConfirm = () => {
        onConfirm();
        toast.success('Task deleted ✅');
        onCancel();
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) onCancel();
    };



    return (
        isOpen ? (
            <S.Overlay onClick={handleOverlayClick}>
            <S.Modal>
                <S.Icon>🗑️</S.Icon>
                <S.Title>Delete this task?</S.Title>
                <S.Actions>
                <S.DeleteButton onClick={handleConfirm}>
                    Delete
                </S.DeleteButton>
                <S.CancelButton onClick={onCancel}>
                    Cancel
                </S.CancelButton>
                </S.Actions>
            </S.Modal>
            </S.Overlay>
        ) : (null)
    )    
};

export default DeleteModal;
