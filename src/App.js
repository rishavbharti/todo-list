import React from 'react';
import ItemList from './ItemList'
import './App.css';

class App extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={items:[], currentItem:{text:'', key:''}}
    }

    addItem = e =>
    {       
        e.preventDefault()
        const newItem=this.state.currentItem
        if(newItem.text!=='')
        {
            const newList=[...this.state.items, newItem]
            this.setState({items:newList, currentItem:{text:'', key:''}})
        }
        console.log(this.state.currentItem)
    }
    
    deleteItem=(key)=>
    {
        const filteredList=this.state.items.filter(item=>item.key!==key)
        this.setState({items:filteredList})
    }

    editItem=(text, key)=>
    {
        const list=this.state.items
        list.map(item=>{
          if(item.key===key)
          {
            item.text=text
          }
        })
        return this.setState({items:list})
    }

    render(){
      return(
        <div className='App'>
            <div>
                <form onSubmit={this.addItem} id='to-do-form'>
                    <label>
                        <input 
                            type='text'
                            placeholder='Add a task'
                            value={this.state.currentItem.text}
                            onChange={e=>this.setState({currentItem:{text:e.target.value, key:Date.now()}})}
                        />
                    </label>
                    <button type='submit'>Add</button>
                </form>
                <ItemList items={this.state.items} deleteItem={this.deleteItem} editItem={this.editItem}/>
            </div>
        </div>
      )
    }
}

export default App;