import React, {useContext} from 'react';
import MyFormContext from "./my-form-context";

const CheckBox = ({id, label}) => {
    const {toggleSelectedItem, isItemSelected} = useContext(MyFormContext);

    return <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input
            checked={isItemSelected(id)}
            id={id}
            type="checkbox"
            value={id}
            onChange={() => toggleSelectedItem(id)}
        />
    </div>
};

export default CheckBox;