import React, {useContext, useEffect, useRef, useState} from 'react';
import CheckBox from "./checkbox";
import MyFormContext from "./my-form-context";

const _categoryConfig = {
    category_1: {
        label: 'Fruit',
        items: {
            fruit_1: {label: 'Banana', description: 'Bananas are mushy.'},
            fruit_2: {label: 'Apple'},
            fruit_3: {label: 'Pear'},
        }
    },
    category_2: {
        label: 'Meat',
        items: {
            meat_1: {label: 'Chicken'},
            meat_2: {label: 'Beef'},
            meat_3: {label: 'Pork'},
            meat_4: {label: 'Lamb'},
            meat_5: {label: 'Venison'},
        }
    },
    category_3: {
        label: 'Bread',
        items: {
            bread_1: {label: 'White'},
            bread_2: {label: 'Wheat'}
        }
    }
}

const MyForm = () => {
    const { selectedItems, clearSelectedItems } = useContext(MyFormContext);
    const [selectedCategory, setSelectedCategory] = useState('');
    const categoryConfig = useRef([]);

    useEffect(() => {
        // Pretend you got this from 'fetch'.
        categoryConfig.current = _categoryConfig;
        setSelectedCategory('category_1');
    }, []);

    const selectedCategoryItems = categoryConfig.current[selectedCategory]?.items ?? [];

    const _setSelectedCategory = e => {
        setSelectedCategory(e.target.value);
        clearSelectedItems();
    }

    const getItemById = itemId => {
        const categories = Object.keys(categoryConfig.current);
        for (let i = 0, len = categories.length; i < len; ++i) {
            const foundEntry = categoryConfig.current[categories[i]]?.items[itemId];
            if (foundEntry) {
                return foundEntry;
            }
        }
        return undefined;
    }

    const submit = () => {
        alert(`Submitting: ${selectedItems.map(itemId => getItemById(itemId)?.label).join(', ')}`);
    };

    return <div>
        <select value={selectedCategory} onChange={_setSelectedCategory}>
            {Object.keys(categoryConfig.current).map(categoryId => {
                const label = categoryConfig.current[categoryId].label;
                return <option value={categoryId} key={categoryId}>{label}</option>
            })}
        </select>
        {Object.keys(selectedCategoryItems).map(checkboxItemId => {
            const checkboxLabel = selectedCategoryItems[checkboxItemId].label;
            return <CheckBox key={checkboxItemId} id={checkboxItemId} label={checkboxLabel}/>
        })}
        <button type="button" onClick={submit} disabled={!selectedItems.length}>Submit!</button>
    </div>
}

export default MyForm;