import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import NavigationBar from './NavigationBar';
import '../styles/App.css';

const App = () => (
  <>
    <div className="app-div">
      <NavigationBar />
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;
