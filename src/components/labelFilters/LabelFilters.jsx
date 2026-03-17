import { useContext, useEffect } from "react";
import * as S from "./LabelFilters.styles";
import BoardContext from "../../context/boardContext";

const LabelFilters = ({ activeLabels, setActiveLabels, isOpen, setIsOpen }) => {
  const { labelsList } = useContext(BoardContext);

  const toggleFilters = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <S.LabelFilters $isOpen={isOpen}>
      <S.BtnsWrapper>
        {activeLabels.length > 0 && (
          <S.Button onClick={() => setActiveLabels([])}>
            <img src="/icons/broom.png" alt="Clear" />
            <span>({activeLabels.length})</span>
          </S.Button>
        )}
        <S.Button onClick={toggleFilters}>
          <img src="/icons/filter.png" alt="Filters" />
        </S.Button>
      </S.BtnsWrapper>

      {labelsList.map((label) => (
        <S.LabelChip
          key={label.id}
          color={label.color}
          active={activeLabels.includes(label.name)}
          onClick={() => {
            setActiveLabels((prev) =>
              prev.includes(label.name)
                ? prev.filter((l) => l !== label.name)
                : [...prev, label.name],
            );
          }}
        >
          <S.LabelWrapper>
            <img
              src={label.icon}
              alt={label.name}
              style={{ width: "3rem", height: "3rem" }}
            />
            <S.NameSpan>{label.name}</S.NameSpan>{" "}
          </S.LabelWrapper>
        </S.LabelChip>
      ))}
    </S.LabelFilters>
  );
};

export default LabelFilters;
