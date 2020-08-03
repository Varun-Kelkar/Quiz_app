import React from 'react';
import {render} from 'react-dom';
import './index.css';
import MyComponent from './mycomponent'
import { Route, Router, browserHistory } from 'react-router';
import SecondPage from './secondpage';
import ThirdPage from './thirdpage';


class App extends React.Component {
  render(){
    return(
      <div>
       
         <Router history={browserHistory}>
         <Route exact path="/firstpage" component={MyComponent} />
            <Route exact path="/secondpage" component={SecondPage} />
            <Route exact path="/thirdpage" component={ThirdPage} />
            
        </Router>
      </div>
    )
  }
}
render(<App />,document.getElementById('root'));