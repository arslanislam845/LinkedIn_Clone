import React from 'react'
import Siderbar from "../components/Siderbar";
import Siderbar_right from "../components/Sidebar_right";
import Feed from "../components/Feed";

const Home = () => {
    return (
        <div  className="app_body">
        <Siderbar />
        <Feed />
        <Siderbar_right/>
        </div>
    )
}

export default Home
