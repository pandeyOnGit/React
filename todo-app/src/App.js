import logo from './logo.svg';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTo from './components/Button';
import CounterComponent from './components/CounterComponent';
import './Style.css';
import './App.css';

const App = ()=>{
   return (
     <div className='toDoContainer'>
        <CounterComponent/>
        <Header text = "My work"/>
        <TodoItems text = "Eat"/>
        <TodoItems text = "Sleep"/>
        <TodoItems text = "Code"/>
        <TodoItems text = "Walk"/>
        <TodoItems text = "Study"/>
        <AddTo/>
     </div>
   );
}
export default App;
