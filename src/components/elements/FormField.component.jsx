import React from 'react'

const FormField = ({ element, onChange, elementConfig, className, ...otherProps }) => {
    let ele;
    
    switch(element){
        case 'input': 
            ele = <input {...elementConfig} onChange={onChange} {...otherProps} />
            break;
        case 'textarea': 
            ele = <textarea {...elementConfig} onChange={onChange} {...otherProps} />
            break;
        default :
            ele = <input {...otherProps} />
    }
    
    return (
        <div className={`border-2 border-gray-200 p-4 w-full ${className}`}>
            {ele}
        </div>
    )
}

export default FormField
