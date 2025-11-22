/**
 * import the css and various text analysis functions
 */
import './App.css';
import TextInput from './components/textInputForm';
import SentenceCount from './components/sentenceCount';
import WordOccurences from './components/wordOccurences';
import { TextProvider } from './context/TextContext';

function App() {
  return (
 /** 
  * wrap the whole page in the TextProvider context so that all the 
  * components have access to the global text value
  */
    <TextProvider>
      <div>
        <h1>Text analyzer</h1>
        <TextInput /> {/* display the form */}
        <SentenceCount /> {/* display the sentence count after analysis */}
        <WordOccurences /> {/* display the word occurence count after analysis */}
      </div>
    </TextProvider>
  );
}
export default App;