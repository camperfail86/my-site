import {theme} from "./Theme";

type fontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    minSize?: number
    maxSize?: number
}
export const font = ({family, weight, color, lineHeight, minSize, maxSize}: fontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font };
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${maxSize} - ${minSize}) + ${minSize}px);    
`;