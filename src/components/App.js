import React,{useState , Component} from 'react';
import { Segment, Button, Form, Header, Grid, GridColumn, Message, Icon,Label } from 'semantic-ui-react';
import './App.css'
import {base} from '../base'
import { Link } from 'react-router-dom';
class App extends Component {
    
    state={
        num:{},
        firstname:"",
        lastname:"",
        number:"",
        date:"",
        time:"",
        address:""
    }
    componentWillMount()
    {
      this.numRef= base.syncState('Contact',{
          context:this,
          state:'num'
      });
    }
   componentWillUnmount()
   {
      base.removeBinding(this.numRef);
   }
    handleChange=event =>
    {
        
        this.setState({ [event.target.name ] : [event.target.value] })
        
    }
    
    handleSubmit= event =>
    {
       event.preventDefault();
       const id=Date.now();
       const num={...this.state.num};

      num[id]=
      {
        id:id,
        name:this.state.firstname + " "  + this.state.lastname,
        phoneNo:this.state.number + " ",
        date:this.state.date + " ",
        time:this.state.time + " ",
        address:this.state.address + " "
     };
     this.setState({num});
     this.setState({firstname:''});
     this.setState({lastname:''});
     this.setState({number:''});
     this.setState({date:''});
     this.setState({time:''});
     this.setState({address:''});
    }
    
render() {
    const{firstname,lastname,date,time,number,address}=this.state;
    return(
        <div>
            
            <Grid textAlign="center" verticalAlign="middle" className="app" > 
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header color="grey" as="h1">
                    <Icon name="cog" />
                    Apna Garage
                </Header>
                <Segment inverted color='black' raised>
                    <Label as='a' color='blue' ribbon="right">
          Door Step Form
        </Label>
                    <Form onSubmit={this.handleSubmit} >
                    <Form.Input name="firstname"  onChange={this.handleChange} placeholder="First Name" value={firstname} type="name" />
                    <Form.Input name="lastname"  onChange={this.handleChange} placeholder="Last Name" value={lastname} type="name" />
                    <Form.Input name="number"  onChange={this.handleChange} placeholder="Phone No. " value={number} type="number" />
                    <Form.Input name="date"  onChange={this.handleChange} placeholder="Date" value={address} type="date" />
                    <Form.Input name="time"  onChange={this.handleChange} placeholder="Time" value={address} type="time" />

                        <Form.TextArea  name="address"  onChange={this.handleChange} placeholder="Address" value={address} type="text" />

                        <Button  color="grey">Submit</Button>
                    </Form>
                    </Segment>
                    
                
                </Grid.Column>
            </Grid>
         </div>
        );
}
   


}
export default App;