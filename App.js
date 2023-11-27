import './App.css';
import PageComponent from './uno-components/pagecomponent';
function App() {
  return (
    
          <div>
              <div>
                  <PageComponent pagevalue={100} username={ "sandeep"} > page title1</PageComponent>
              </div>
              <PageComponent pagevalue={101} username={  "rajesh"} > page title2</PageComponent>
              <PageComponent pagevalue={102} username={ "harish"} > page title3</PageComponent>
              <PageComponent pagevalue={103} username={ "diva"} > page title4</PageComponent>
          </div>
      );
  }


export default App;
