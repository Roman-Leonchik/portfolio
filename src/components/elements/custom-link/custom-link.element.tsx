import Link, { LinkProps } from "next/link";
import { StyledAnchor } from "./custom-link.styled";

interface IProps extends LinkProps {
    className?: string;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

export const CustomLink: React.FC<IProps> = ({
    children,
    href,
    target,
    className,
    ...rest
}) => {
    return (
        <Link href={href} passHref {...rest}>
            <StyledAnchor target={target} className={className} data-testid="custom-link">
                {children}
            </StyledAnchor>
        </Link>
    );
};
