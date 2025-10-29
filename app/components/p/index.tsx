import { useBudouX } from '~/hooks/budoux';
import type {
    DetailedHTMLProps, HTMLAttributes, ReactNode
} from 'react';

export type PProps = Omit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, 'children'> & {
    children: NonNullable<ReactNode> | undefined
};

export function P({
    children, ...props
}: PProps) {
    const { parse } = useBudouX();
    return (
        <p {...props}>
            {children && parse(children.toString())}
        </p>
    );
}
