import React, { useState } from 'react';
import "./main.css"
import ReactModal from 'react-modal';
import Popup from "reactjs-popup";
import 'react-quill/dist/quill.snow.css';

const Post: React.FC = () => {
    return (
        <div className='postshow' style={{ color: 'white', backgroundColor: "black", border: "1px solid white", borderRadius: "5px" }}>
            <h5 style={{ textAlign: "center", }}>Create post</h5>
            <div style={{ display: "flex", marginBottom: "5px" }}>
                <button className='daidien'></button>
                <p style={{ alignItems: "flex-start", margin: "0", marginLeft: "10px" }}>Name</p>
            </div>

            <textarea style={{ backgroundColor: "black", color: "white", marginLeft: "10px", marginRight: "10px", height: "100px" }} placeholder='What is heppening...?' rows={10} cols={50}></textarea>

            <div style={{ marginLeft: "10px ", justifyContent: "space-between", marginBottom: "10px" }}>
                <button>📁</button>
                <button>🖼️</button>
                <button>🙂</button>
                <button>🕠</button>
            </div>
            <button style={{ marginLeft: "10px", marginRight: "10px", height: "30px", width: "95%", borderRadius: "10px" }}>Post</button>
            <div style={{ height: "10px" }}></div>
        </div >
    )
}

const Frame1: React.FC = () => {
    return (
        <div className="frame left">
            <div className='leftbutton'>

                <button className='leftbtn homehead'> 🏠 Home</button>
                <button className='leftbtn'> 😀 Explore</button>
                <button className='leftbtn'> 😭 Notifications  </button>
                <button className='leftbtn'> 😭 Message  </button>
                <button className='leftbtn'> 🥶 Communities  </button>
                <button className='leftbtn'>🙍 Profile</button>
                <Popup trigger={<button className='leftbtn post'> Post</button>} modal
                    nested
                    contentStyle={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '300px',
                        width: "600px",
                    }}>
                    <div>
                        <Post />
                    </div>
                </Popup>
            </div>

        </div >

    );
};

const Frame2: React.FC = () => {
    return (
        <div className="frame mid">
            <h5>Home</h5>
            <div className='two_btn'>
                <button className='btn'>For you</button>
                <button className='btn'>Following</button>
            </div>
        </div>
    );
};

const Frame3: React.FC = () => {
    return (
        <div className="frame right">
            <h1>Frame 3</h1>
        </div>
    );
};

const Main: React.FC = () => {


    return (


        <div className="page-container">

            <Frame1 />
            <Frame2 />
            <Frame3 />

        </div>
    );
};

export default Main;