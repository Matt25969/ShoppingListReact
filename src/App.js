import React from 'react';
import { Button } from 'reactstrap';

import './App.css';
import FilterableProductTable from './Components/FilterableProductTable'

function App() {
  return (
    <div className="App">
      <div>
        {/* <Button color="success" outline={true} disabled={true}>Success</Button> */}
<FilterableProductTable />
      </div>

    </div>
  );
}

export default App;
