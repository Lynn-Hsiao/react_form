import styles from './App.module.css';
import InputForm from './components/InputForm.js';


export default function App() {
  return (
    <div className = {styles.app}>
      <header className = {styles.appHeader}>
        My First React Form
      </header>
      <InputForm />
    </div>
  );
}
