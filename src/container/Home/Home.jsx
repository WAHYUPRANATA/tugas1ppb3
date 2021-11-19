import React, {Component} from "react";
import YouTubeComp  from "../../component/YouTubeComp/YouTubeComp";
import Product from "../Product/Product";

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="RADWIMP- そっけない #1"
                    desc="41.316.718 x ditonton 13 Nov 2018"/>
                <YouTubeComp 
                    time="8.02" 
                    title="RADWIMP- そっけない #2"
                    desc="41.316.718 x ditonton 14 Nov 2018"/>
                <YouTubeComp 
                    time="6.04" 
                    title="RADWIMP- そっけない #3"
                    desc="41.316.718 x ditonton 15 Nov 2018"/>
                <YouTubeComp 
                    time="3.21" 
                    title="RADWIMP- そっけない #4"
                    desc="41.316.718 x ditonton 16 Nov 2018"/>
                <YouTubeComp/> */}
                <p>Counter</p>
                <hr/>
                <Product/>
            </div>
        )
    }
}

export default Home;