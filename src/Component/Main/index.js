import React from 'react';
import Loader from '../../Component/Loader';
import './main.css';


const Main = (props) => {
    return(
        <div>
            <div className="boxSize">
            
                <div>
                    <Loader/>
                    <div className="textStyle">
                        <div> Edit Profile </div> 
                        <div> Manage Photo </div>
                        <div> Edit Preference</div> 
                        <div> Privacy Option </div>
                    </div>
                    {/* <div className="textStyle">Edit Profile</div>
                    <br/>
                    <div className = "textStyle">Manage Photo </div>
                    <br />
                    <div className = "textStyle" >Edit Preference </div>
                    < br />
                    <div className = "textStyle" >Privacy Option </div> */}
                </div>
                
            </div>
        </div>
    );
}

export default Main;