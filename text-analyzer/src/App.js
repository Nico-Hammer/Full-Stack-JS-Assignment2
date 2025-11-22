import './App.css';
import TextInput from './components/textInputForm';
import SentenceCount from './components/sentenceCount';
import WordOccurences from './components/wordOccurences';
import { TextProvider } from './context/TextContext';

function App() {
  return (
    <TextProvider>
      <div>
        <h1>Text analyzer</h1>
        <TextInput />
        <SentenceCount />
        <WordOccurences />
      </div>
    </TextProvider>
  );
}

export default App;