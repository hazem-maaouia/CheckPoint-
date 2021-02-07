import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap';
import imgg from './imageprof.jpg';
class App extends Component {
  constructor(props) {
    super(props);
    
      this.state = { 
        Person :[{ 
        fullName:"Hazem Maaouia",
        bio:"Je suis Hazem MAAOUIA, développeur web Je suis sérieux, dynamique et je m’adapte facilement dans le groupe de travail.", 
        imgSrc:imgg, 
        profession:"web developer"
      }],
      show:false,
      timer:0,
      intervall:null,
      minutes:0,
      hours:0,
      seconds:0
      };
      }
      showcond = () => {
        this.setState({
        show: !this.state.show
      })
      };
      componentDidMount() {
        setInterval(() =>{ 
          this.setState({
           seconds:this.state.seconds+1,
           })
           if(this.state.seconds===60){
             this.setState({
               minutes:this.state.minutes+1,
               seconds:this.state.seconds=0
             })
             if(this.state.minutes  ===60){
               this.setState({
                 hours:this.state.hours+1,
                 minutes:this.state.minutes=0,
                 seconds:this.state.seconds=0
               })
             }
           };
         },1000)
     }
 
  render(){ 
    console.log("render()");
    return ( <div>
    { this.state.Person.map((el,index) => 
    
        <Card key={index} style={{ width: '500px',margin:'auto' }}>

   {(this.state.show) ? 
    <Card.Body>
    <Card.Img variant="top" src={el.imgSrc} />
    <h1>{el.fullName}</h1>
    <h3>
     {el.profession}
    </h3>
    <Card.Text>
     {el.bio}
    </Card.Text>
    <h1>
      <span >{this.state.hours}</span>: 
      <span >{this.state.minutes}</span>: 
      <span >{this.state.seconds}</span> 
       </h1>

  </Card.Body> 
  : <h1>...</h1> }
  <Button variant="primary" onClick={this.showcond}>{this.state.show ? 'hide profil': 'show profil'}</Button> 
 
</Card> 
)
    
    } </div>
            );
  }
}
 
export default App;


