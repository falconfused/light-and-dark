import FormApp from './components/FormApp/FormApp';
import ThemeProvider from './ThemeContext/ThemeProvider';
import './App.css';



function App() {

  return (
    <ThemeProvider >
      <FormApp />
    </ThemeProvider>
  );
}

export default App;
