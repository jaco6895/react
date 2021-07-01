import './scss/App.scss';
import ColorBox from "./compornents/ColorBox";
import {ColorProvider} from './contexts/color';
import SelectColors from "./compornents/SelectColors";

function App() {
  return (
      <ColorProvider>
          <div>
              <SelectColors/>
              <ColorBox/>
          </div>
      </ColorProvider>
       );
}

export default App;
