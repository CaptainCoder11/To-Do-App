import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react';
import { Popper } from '@mui/material';


function Navlist() {
    const [value, setValue] = React.useState(1);



    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    
    return (
    <div className='flex flex-col flex-wrap h-screen w-1/5 bg-gray'>
    <Tabs
        className='mt-16 w-[100%]'
        variant="scrollable"
        scrollButtons={false}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        >
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row w-full" > 
        <img className=" object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/pastel-glyph/64/inbox--v2.png" alt=""></img>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Inbox</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<a href="/today" className="flex flex-row w-full"> 
        <img className=" object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/material-two-tone/24/star--v2.png" alt=""></img>
        <a className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Today</a>
        </a>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row w-full"> 
    <img className=" object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt=""></img>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Upcoming</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row w-full"> 
    <img className="object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/plasticine/100/all.png" alt=""></img>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Anytime</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row w-full"> 
    <img className="object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/ios-glyphs/30/box.png" alt=""></img>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Someday</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row w-full"> 
    <img className="object-fill w-5 h-5 ml-3 mr-3" src="https://img.icons8.com/pastel-glyph/64/trash.png" alt=""></img>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Trash</h2>
        </div>}/>
    </Tabs>
    <Popper id={id} open={open} anchorEl={anchorEl} className='bg-primarylight w-[15rem] rounded-b-xl rounded-r-xl pl-4 pb-1'>
        <div className='flex flex-col'>
            <a href='/newmeeting' className=' font-Sofia-Pro-Light text-primary p-1 hover:text-secondary hover:cursor-pointer'>New Meeting</a>
            <div className=' bg-meetingtitle h-0.5'></div>
            <a href='/newtask' className=' font-Sofia-Pro-Light text-primary p-1 hover:text-secondary hover:cursor-pointer'>Add Task</a>
        </div>
    </Popper>
    
    <button onClick={handleClick} className=' w-16 h-16 bg-primary rounded-b-2xl rounded-r-2xl mt-auto mb-7 ml-7 font-Sofia-Pro-Ultra-Light text-5xl text-white pb-1 shadow-2xl shadow-primary'>+</button>
    </div>
    
    );
}

export default Navlist;