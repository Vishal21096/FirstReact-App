import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Contacts from './Components/Contacts';
import { Container,Button,Alert } from 'react-bootstrap';
import AddDetails from'./Components/AddDetails';

// function App() {
//   return (
//     <div class="card">
//     <div class="card-body">
//       <h5 class="card-title">Steve Jobs</h5>
//       <h6 class="card-subtitle mb-2 text-muted">steve@apple.com</h6>
//       <p class="card-text">Stay Hungry, Stay Foolish</p>
//     </div>
//   </div>
//   );
// }
// import React, {Component} from 'react';

class App extends Component {


  constructor(props){

    super(props);
    this.state = {
      isAddDetail:false,
      error: null,
      response:{}
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
onCreate() {
  this.setState({ isAddDetail:true});
}
onFormSubmit(data){
  const apiurl='http://dummy.restapiexample.com/api/v1/create';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type','application/json');

  const options = {
    method :'Post',
    body : JSON.stringify(data),
    myHeaders
  };
  fetch(apiurl,options)
  .then(res => res.json())
  .then(
     (result) => {
       this.setState({
         response: result,
         isAddDetail: false
       })
     },
     (error) =>{
       this.setState({error});
     }
  )
}
    render() {
      return (
        <div className="App">
          <Container>
            <Button>Get Deatyails</Button>
          {!this.state.isAddDetail &&<div>       
                <h1 style={{textAlign:'center'}}>Details of Employees</h1>
                <Button variant="primary" onClick={()=> this.onCreate()}>Add New Employee</Button>
                <Contacts/>
            </div>}

           {this.state.isAddDetail && <AddDetails onFormSubmit={this.onFormSubmit}/>}
           {this.state.response.status ==='success' && 
           <div>
            <br/>
            <Alert variant ="info">{this.state.response.message}</Alert>
           </div>}
           {this.state.error && <div>Error:{this.state.error.message} </div>}
          </Container>
        </div>
      );
    }
  }

export default App;