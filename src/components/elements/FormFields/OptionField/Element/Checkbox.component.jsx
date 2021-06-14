import React from 'react'
import styled from 'styled-components'

const Checkbox = () => {
    return (
        <Element>
            <input type="checkbox" />
            <svg viewBox="0 0 28 28">
                <path d="M3.5 8.49964C3.5 5.73822 5.73822 3.5 8.49964 3.5C10.3275 3.5 12.3499 3.5 14 3.5C15.6501 3.5 17.6725 3.5 19.5004 3.5C22.2618 3.5 24.5 5.73822 24.5 8.49964C24.5 10.3275 24.5 12.3499 24.5 14C24.5 15.6501 24.5 17.6725 24.5 19.5004C24.5 22.2618 22.2618 24.5 19.5004 24.5C17.6725 24.5 15.6501 24.5 14 24.5C12.3499 24.5 10.3275 24.5 8.49964 24.5C5.73822 24.5 3.5 22.2618 3.5 19.5004C3.5 17.6725 3.5 15.6501 3.5 14C3.5 12.3499 3.5 10.3275 3.5 8.49964Z" />
            </svg>
            <svg className="tick" viewBox="0 0 12 10">
                <path d="M1.5 5.5L4.5 8.5L10.5 1.5" />
            </svg>
        </Element>
    )
}

export default Checkbox

const Element = styled.div`
position: relative;
input {
        display: block;
        -webkit-tap-highlight-color: transparent;
        -webkit-appearance: none;
        outline: none;
        border: none;
        cursor: pointer;
        padding: 0;
        margin: 0;
        width: var(--input-width, 22px);
        height: var(--input-height, 22px);
        input {
        &:hover {
            & + svg {
                --svg-stroke: var(--toggle-border-hover);
            }
        }
        &:checked {
            & + svg {
                --svg-fill: var(--toggle-active);
                --svg-stroke: var(--toggle-border-active);
            }
        }
    }
    }
    svg {
        fill: var(--svg-fill, black);
        stroke: var(--svg-stroke, black);
        stroke-width: var(--svg-stroke-width, 0);
        stroke-linecap: round;
        stroke-linejoin: round;
        display: block;
        width: var(--svg-width, 28px);
        height: var(--svg-height, 28px);
        position: absolute;
        top: var(--svg-top, -3px);
        left: var(--svg-left, -3px);
        pointer-events: none;
        transform: scale(var(--svg-scale, 1)) translateZ(0);
        transition: stroke .3s, fill .3s, stroke-dashoffset .15s ease var(--svg-delay, 0s), transform var(--svg-transform-duration, 0s);
    }
`