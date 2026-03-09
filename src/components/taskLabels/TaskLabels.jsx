import * as S from './TaskLabels.styles';

const TaskLabels = ({
    labels,
    labelsList,
    id
}) => {
    return (
        <>
            {labels && labels.map((labelName, index) => {
                const labelObj = labelsList.find((l) => l.name === labelName);

                return (
                <S.LabelChip
                    key={`${id}-${labelName}-${index}`}
                    title={labelName}
                    color={labelObj?.color}
                >
                    {labelName}
                </S.LabelChip>
                );
            })}
        </>     
    );
};

export default TaskLabels;