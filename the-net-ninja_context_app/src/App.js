import NavBar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar></NavBar>
          <BookContextProvider>
            <BookList></BookList>
            <BookForm></BookForm>
          </BookContextProvider>
          <ThemeToggle></ThemeToggle>
        </ThemeContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
