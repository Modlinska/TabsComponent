import React from 'react';
import './App.css';
import Tabs from './components/TabsComponent/Tabs';
import TestComponent from './components/TabsComponent/TestComponent';
import Tab from './components/TabsComponent/TabContent';



const App: React.FC = () => {
  
  return (
    <>
    <Tabs>
      <Tab title = "Tab number 1" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </Tab>
      <Tab title ='Tab number 2'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
         voluptatem sequi nesciunt.
      </Tab>
      <Tab title='Tab number 3'>
        <TestComponent name="Tola" />
      </Tab>
  </Tabs>
  <h3> Only one tab </h3>
  <Tabs>
  { false && 
    <Tab title="conditional 1">
      conditional tab pane 1
    </Tab>}
    <Tab title = "Tab 2" >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
    </Tab>
  </Tabs>
  </>
  );
}

export default App;
