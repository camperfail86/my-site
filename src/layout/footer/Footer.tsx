import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'

const footerData = [
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'instagram'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'telegram'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'vkontakte',
        href: 'https://vk.com/lybitelpelmeney'
    },
    {
        width: '21px',
        height: '21px',
        viewBox: '0 0 21px 21px',
        iconId: 'linkedin'
    }
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.Name>Kirill</S.Name>
                <S.SocialList>

                    {footerData.map((item, ind) => {
                        return (
                            <S.SocialItem>
                                <S.SocialLink href={item.href}>
                                    <Icon width={item.width}
                                          height={item.height}
                                          viewBox={item.viewBox}
                                          iconId={item.iconId}
                                          key={ind}
                                    />
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2023 Kirill Kochkin, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};