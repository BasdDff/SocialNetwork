import React, {FC} from 'react';
import styles from './Select.module.scss'

interface SelectProps {
    value: string
    onChange: (event: string) => void
    defaultValue: string
    //options: [{ value: string, name: string }]
    options: Array<{ value: string, name: string }>
}

const Select: FC<SelectProps> = ({value, onChange, defaultValue, options}) => {
    return (
        <div className={`${styles.select_wrapper} padding`}>
            <select value={value} onChange={event => onChange(event.target.value)} name="" id=""
                    className={`${styles.select} border padding`}>
                <option disabled value="">
                    {defaultValue}
                </option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;