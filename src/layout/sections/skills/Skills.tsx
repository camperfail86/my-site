import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import { S } from './Skills_Styles';
import {Fade} from "react-awesome-reveal";
import redux from './../../../components/icon/redux.svg'

const skillsData = [
    {
        iconId: 'code',
        title: 'html5',
        description: 'Семантичная / Адаптивная верстка'
    },
    {
        iconId: 'css',
        title: 'CSS',
        description: 'Добавление стилей с помощью CSS, Scss, StyledComponents'
    },
    {
        iconId: 'react',
        title: 'react',
        description: 'Хорошее знание библиотеки React. Создание и использование хуков. Знание react-router-dom 6'
    },
    {
        iconId: 'typescript',
        title: 'typescript',
        description: 'Хорошее знание TypeScript / JavaScript. Понимание ООП, Prototype, event loop, this, Promise'
    },
    {
        iconId: 'figma',
        title: 'figma',
        description: 'Верстка любой сложности из Figma'
    }

];

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Fade
                        cascade={true}
                        damping={0.2}>
                        {skillsData.map((skill, ind) => {
                            return (
                                <Skill iconId={skill.iconId}
                                       title={skill.title}
                                       description={skill.description}
                                       key={ind}
                                />
                            )
                        })}
                        <S.Skill>
                            <FlexWrapper direction={'column'} align={'center'}>
                                <S.IconWrapper>
                                    <img src={redux}/>
                                </S.IconWrapper>
                                <S.SkillTitle>Redux</S.SkillTitle>
                                <S.SkillText>State-менеджмент Redux (Toolkit, query)</S.SkillText>
                            </FlexWrapper>
                        </S.Skill>
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};