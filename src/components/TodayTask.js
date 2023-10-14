import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect, useState } from 'react';
import { Card } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function TodayTask() {
    let [tasks,settasks] = useState([]);
    const [cookies, setCookie] = useCookies(['tasks']);
    const [value, setValue] = React.useState(0);
    const { state } = useLocation();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                let arr = cookies.tasks ? cookies.tasks : []
                console.log(arr);
                if(arr.length>0)
                {
                    data.concat(arr)
                }
                if(state)
                {
                    let obj = {
                    title: state.data.name,
                    completed: false
                    }
                    arr.push(obj)
                    setCookie('tasks',arr) 
                    data.push(obj)
                }

                settasks(data)
                console.log(tasks.length)
            })
            .catch((err) => {
                console.log(err.message);
            });
        }, []);
   
    return (
    <div className=" mt-7 ml-7 flex flex-col w-[70%]">
        <Card variant="outlined" className=' p-10 shadow-xl shadow-prinary'>
        <h1 className="font-Sofia-Pro-Medium font-black text-3xl ml-4">Today Task</h1>
    <Tabs
        className='mt-4'
        variant="scrollable"
        scrollButtons={false}
        value={value}
        onChange={handleChange}
        sx={{ borderColor: '#623CE6' }}
        TabIndicatorProps={{style: {background:'#623CE6'}}}
        >
    <Tab sx={{alignItems: 'start', textTransform :"none"}} label= {<div className="flex flex-row"> 
        <h1 className="w-7 h-5 mr-2 flex-wrap bg-primary rounded-xl text-primary bg-opacity-10 font-Sofia-Pro-Regular text-xs pt-1">{tasks ? tasks.length : 0}</h1>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">All</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row"> 
            <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Important</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row"> 
        <h1 className="w-7 h-5 flex-wrap mr-2 bg-primary rounded-xl text-primary bg-opacity-10 font-Sofia-Pro-Regular text-xs pt-1">05</h1>
        <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Notes</h2>
        </div>}/>
    <Tab sx={{alignItems: 'start',textTransform :"none"}} label= {<div className="flex flex-row"> 
            <h2 className=" font-Sofia-Pro-Light text-sm font-black mt-0.5">Links</h2>
        </div>}/>
    </Tabs>
    </Card>
    {tasks ? <div className='mt-7 overflow-y-auto sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[35rem] 2xl:h-[40rem]'>
       {tasks.map((item, index) => (
    <div className=' flex flex-row m-7 w-full'>
        <h1 className=' font-Sofia-Pro-Light font-black text-xl capitalize'>{item.title}</h1>
        {
            item.completed ?  <h1 className='flex ml-auto max-h-[3rem] flex-wrap h-7 mr-10 font-Sofia-Pro-Light text-sm  pl-2 pr-2 pt-1  bg-primarylight text-primary rounded-full'>Completed</h1> : <h1 className='flex flex-wrap max-h-[2rem] min-w-[5rem] ml-auto mr-10 font-Sofia-Pro-Light text-sm text-center pt-1 pl-1 pr-1 bg-secondarylight text-secondary rounded-full'>In Progress</h1>
        }
    </div>
    ))}
    </div> : <h1 className='font-Sofia-Pro-Medium mt-16 text-5xl ml-auto mr-auto'>No Tasks Found!</h1>}
    </div>);
}

export default TodayTask;