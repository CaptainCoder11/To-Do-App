import './App.css';
import TaskList from './components/TaskList';
import NewMeeting from './components/NewMeeting';
import { HashRouter, Routes, Route } from "react-router-dom";
import NewTask from './components/NewTask';
import Navlist from './components/shared/nav-list';


function App() {
  return (
    <div className="bg-white flex flex-row w-screen h-screen">
      <Navlist></Navlist>
      <HashRouter className="">
      <Routes>
      <Route path='/' element={<TaskList/>}></Route>
        <Route path="/today" element={<TaskList/>
      }></Route>
          <Route path="/newmeeting" element={<NewMeeting />} />
          <Route path="/newtask" element={<NewTask />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
