import React from "react";
import { 
    StyledSkillsBlock,
    StyledSkillsName,
    StyledSkillsProgress,
    StyledSkillsProgressText,
} from "./skills-line.styled";

interface IProps {
    name: string;
    progress: number;
}

export const SkillsLine: React.FC<IProps> = ({ name, progress }) => {
    return (
        <StyledSkillsBlock>
            <StyledSkillsName>
                <div>{name}</div>
                <StyledSkillsProgressText progress={progress}>{progress}%</StyledSkillsProgressText>
            </StyledSkillsName>
            <StyledSkillsProgress progress={progress}/>
        </StyledSkillsBlock>
    )
}