import TodayTask from "./TodayTask";
import MeetingList from "./Meeting-List";

function TaskList() {
    return (<div className="w-[100%] flex flex-row">
        <TodayTask></TodayTask>
        <MeetingList></MeetingList>
    </div>);
}

export default TaskList;