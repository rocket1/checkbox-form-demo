import React, {createContext, useState} from 'react';
import {without} from 'lodash';

const MyFormContext = createContext({});

const MyFormProvider = ({children}) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleSelectedItem = itemId => setSelectedItems((currentSelectedItems = []) => {
        let newSelectedItems;
        if (currentSelectedItems.includes(itemId)) {
            newSelectedItems = without(currentSelectedItems, itemId);
        } else {
            newSelectedItems = [...currentSelectedItems, itemId];
        }
        setSelectedItems(newSelectedItems);
    });

    const isItemSelected = itemId => selectedItems.includes(itemId);

    const clearSelectedItems = () => setSelectedItems([]);

    const providerProps = {
        toggleSelectedItem,
        clearSelectedItems,
        isItemSelected,
        selectedItems
    }

    return <MyFormContext.Provider value={providerProps}>{children}</MyFormContext.Provider>
};

export {MyFormProvider};
export default MyFormContext;