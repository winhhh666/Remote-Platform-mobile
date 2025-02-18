
import "./index.css"
import { Tabs } from "antd-mobile"
import { useTabs } from "./useTabs"
import HomeList from "./HomeList";
import { useEffect, useState } from "react";
const Home = () => {
    const {channels} = useTabs();
    const [activeKey, setActiveKey] = useState("");
    useEffect(() => {
         setActiveKey("" + (channels[0] ? channels[0].id: ""));
    }, [channels])
    
    return <div className="tabContainer" >
            <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)} >
                {channels.map(item => <Tabs.Tab title={item.name} key={item.id}> 
                    <div className="listContainer"><HomeList channelId={''+item.id}/> </div>
                    </Tabs.Tab>)}
            </Tabs>
         </div>
         
  }
  
  export default Home