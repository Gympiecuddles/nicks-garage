import React from "react";
import './Button.css';
import { HashLink } from 'react-router-hash-link';

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <HashLink to={'/#contact'} className='btn-mobile' scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center'})}>
            <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </HashLink>
    )
}