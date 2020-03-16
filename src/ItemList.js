import React from 'react';
import './ItemList.css'

const ItemList = props =>
{
    const items=props.items
    
    const list=items.map(item=>{
        return(
            <div className='list' key={item.key}>
                <p>
                    <label><input type='text' id={item.key} value={item.text} onChange={(e)=>props.editItem(e.target.value, item.key)}/></label>
                    <i className="icon fa fa-trash" onClick={()=>props.deleteItem(item.key)}></i>
                </p>
            </div>                
        )
    })
    return <div>{list}</div>
}

export default ItemList;