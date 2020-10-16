import React, { AllHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames'
import * as styles from "./wrapper.module.scss"

type WrapperProps = AllHTMLAttributes<HTMLElement> & {
    color?: 'white' | 'gray'
    width?: 'full' | 'wrap' | 'content' | 'thin'
    padX?: boolean
    as?: ReactNode
}

const Wrapper: React.FC<WrapperProps> = (props: WrapperProps) => {
    const { 
        children, 
        className = '', 
        color = 'white', 
        padX = true, 
        width = 'wrap', 
        as = "section", 
        ...rest 
    } = props;
    const Component: any = as;
    const chunkClasses = classnames({
        [styles.chunk]: true,
        [styles[color]]: true,
        [className]: className
    });
    const wrapperClasses = classnames({
        [styles.wrapper]: true,
        [styles.padX]: padX,
        [styles[width]]: true,
        [className]: className
    })

    return (
        <Component {...rest} className={chunkClasses}>
            <div className={wrapperClasses}>
                {children}
            </div>
        </Component>
    );
};

export default Wrapper