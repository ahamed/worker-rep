
import React, { Component } from 'react';
import web3 from './web3';
import storehash from './storehash';

class Agreement extends Component {

	constructor (props) {
super(props);
	      this.state = {
			taskTitle:"",
			taskHash:"",
			taskReward:0,
			isTaskPoster:false
			

		}

	    
	  }


/*applyTask = async (event)=>{
	event.preventDefault();
	const accounts = await web3.eth.getAccounts();
	     
	console.log('Sending from Metamask account: ' + accounts[0]);


	storehash.methods.registerForTask(this.props.taskId).send({from: accounts[0]})
	.then(function(result){
    console.log(result);
	});

}*/

/*old
makeAgreement = async (event) => {
	event.preventDefault();
	const accounts = await web3.eth.getAccounts();
	     
	console.log('Sending from Metamask account: ' + accounts[0]);


	storehash.methods.//addfunction.send({from: accounts[0]})
	.then(function(result){
    console.log(result);
	});
}
*/

loadTasklet = async (props1,this1) => {
	console.log("loading tasklet");

	const accounts = await web3.eth.getAccounts();
	     
	console.log('Sending from Metamask account: ' + accounts[0]);



	storehash.methods.isTaskPoster(accounts[0]).call({from: accounts[0] })
.then(function(result){
    console.log(result);
    	this1.setState({isTaskPoster: result});
    });//function(result)


}

render(){


if(this.state.isTaskPoster)
{



	return(
    //JSX for agreement Task Poster
<div className="box">
<div className="card">
  <div className="card-content">
    <p className="title">
      {this.state.taskTitle}
    </p>
    <p className="subtitle">
      {this.state.taskReward} ether
    </p>
  </div>
  <footer className="card-footer">
    <p className="card-footer-item">
      <span>
        View on <a href={"https://ipfs.io/ipfs/"+this.state.taskHash}>View Task Details</a>
      </span>
    </p>
  
  
     <p className="card-footer-item">
      <span>
        Create  <a href="#" onClick={this.makeAgreement}>Agreement</a> 
      </span>
    </p>
  
  </footer>
</div>
</div>
		);

	}

else{

		return(
      //JSX here
      <div>
      agreement worker
      </div>
		);
}


}

componentDidMount(){
	console.log("componentDidmount");
	//this.loadTasklet(this.props,this);
}


}

 export default Agreement;