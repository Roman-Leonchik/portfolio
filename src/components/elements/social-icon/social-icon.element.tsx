import { 
    StyledIconLink,
    StyledIcon
} from "./social-icon.styled";

interface IProps {
    className?: string;
    icon: string;
    href: string;
    h?: number;
    w?: number;
}

export const SocialIcon = ({ className, icon, href, h = 50, w = 50 }: IProps) => {
    return (
        <StyledIconLink target="_blank" href={href} className={className}>
            <StyledIcon height={h} width={w}>
                <use xlinkHref={`/svg/social-sprite.svg#${icon}`} />
            </StyledIcon>
        </StyledIconLink>
    );
};