import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
