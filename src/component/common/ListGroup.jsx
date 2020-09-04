import React from 'react';

const ListGroup = props => {

        const {Listitems, onItemSelect, selectedItem, valueProperty} = props;
        return (
            <ul className="list-group">
                    {Listitems.map(item => <li
                        onClick={() => onItemSelect(item)}
                        key={item[valueProperty]}
                        className={item === selectedItem? "list-group-item active" : "list-group-item"}
                    >
                            {item.name}
                    </li>)}


            </ul>
        );

}

export default ListGroup;