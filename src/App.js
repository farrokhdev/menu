import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';


const allCategories =["all",...new Set(items.map((item)=>{
  return(item.category)
}))];
console.log(allCategories);

function App() {
  const[menuItems,setMenuitems] = useState(items);

  const[categories,setCategories]=useState(allCategories);

  const filterItems = (category)=>{
    if(category==="all"){
      setMenuitems(items);
      return;
    }
   const newItems = items.filter((item)=>item.category===category);
   setMenuitems(newItems);
   }

  return (
    <Router>
    <main>
      <div className="container">
      <div className="title">
      <h2>Our menu</h2>
      </div>
      <Switch>
        <Route path="/">
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu menuItems={menuItems}/>
        </Route>
      </Switch>
      </div>
    </main>
    </Router>
  );
}

export default App;
