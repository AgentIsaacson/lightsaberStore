import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
        <div className= "saberHomePage">
            <div className= "company">
                <h1>Saber Choice</h1>
            </div>    
            
            <div className= "light-sabers">  
            <h2>Have Fun</h2>  
                <div className= "saber-colors">
                    <img src="https://glowingwithme.com/wp-content/uploads/2015/12/Lightsaber-Photo-1.jpg" ></img>
                </div>
                <h2><a href="/order">Order Here</a></h2>
            </div>
        </div>
        );
    }
}
export default Home;