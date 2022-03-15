import { useDispatch, useSelector } from 'react-redux';
import Search from './components/search';
import LabelInfo from './components/labelInfo';
import Repos from './components/repos';

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <Search/>
      <LabelInfo/>
      <Repos/>
    </div>
  );
}

export default App;
