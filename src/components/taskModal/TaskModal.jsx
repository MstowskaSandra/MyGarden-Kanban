import * as S from './TaskModal.styles';

const TaskModal = ({ children, onClose }) => (
  <S.Overlay onClick={onClose}>
    <S.Modal onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
      {children}
    </S.Modal>
  </S.Overlay>
);

export default TaskModal;