import React from 'react';
class UserClass extends React.Component{
    constructor (props){
        super(props);
        
        this.state={
            count:1,
            count2:2,
        };
    }

    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;
        return(
            
            <div className="user-card">
            <h1>count :{count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count2:this.state.count2+1,
                });



            }}>Click me to increase the count</button>
            <button onClick={()=>{
                this.setState({
                    count2:this.state.count2=0,
                })
            }}>click me to reset the count</button>
            {/* <h1>count2 :{count2}</h1> */}
            <h2>Name : {name} </h2>
            <h3>LOCATION : {location} </h3>
        </div>
        )
    }

}
export default UserClass;