import React, {Component} from 'react';


class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
    petList:[],
    petName:'',
    petBreed:"",
    petAge:0, 
        }
    }
    
    handleNameInput = (event) => {
    this.setState({petName: event.target.value})
    console.log("changed", this.state.petName)
    }
    handleBreedInput= (event) =>{
        this.setState({petBreed: event.target.value})
    }
    handleAgeInput = (event)=> {
        this.setState({petAge: event.target.value})
    }
    
    handleClick = () => {
        let petObj ={petname:this.state.petName, petBreed: 
            this.state.petBreed, petAge:this.state.petAge}
    this.setState({petList: [...this.state.petList, petObj],
    petname:"", petBreed:"", petAge:0});
    };
    
        render(){
    let petArr = this.state.petList.map((animal,index)=> {
        return(
    <div>
         <div>Name:{animal.petname}</div>
       <div> Email: {animal.petBreed}</div>
       <div>Number in party: {animal.petAge}</div>
        </div>
        )
    })
            return(
           <div>
    <h4></h4>
    {petArr}
    <input value={this.state.petName}onChange={this.handleNameInput} placeholder = "Name"></input>
    <input value={this.state.petBreed}onChange={this.handleBreedInput}placeholder="email"></input>
    <input value = {this.state.petAge}onChange={this.handleAgeInput}placeholder= "Number in party"></input>
    <button onClick={this.handleClick}>Add Info</button>
         </div>
            )
        }
    }
export default Contact;