import { FormControl, Input, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

function NewTask() {
  const navigate = useNavigate();

  const schema = yup.object()
  .shape({
      date: 
      yup.string()
      .nullable()
      .test("date", "Enter A Valid Date", function (value) {
        console.log(moment().diff(moment(value, "YYYY-MM-DD"), "days"))
        return moment().diff(moment(value, "YYYY-MM-DD"), "days") <= 0;
      })
      .required("Please Enter A Date"),
      name: 
      yup.string()
      .nullable()
      .test("name", "Enter A Valid Name", function (value) {
       return value.length <=20
      })
      .required("Please Enter A Name"),
      time: 
      yup.string()
      .nullable()
      .required("Invalid Time")
  })
  .required();
  const { register, handleSubmit} = useForm(
    {resolver: yupResolver(schema)}
  );

  const onSubmit = (data) =>{ 
  alert("Task Added!")
  navigate("",{
    state: {
      data
    }
  })
  } 
  
    return (<form onSubmit={handleSubmit(onSubmit)} className="mt-11 ml-10 mr-10 flex gap-5 flex-col w-1/3"> 
      <label className=" font-Sofia-Pro-Regular text-primary">Enter Task Name</label>
      <input type="text" 
      placeholder="Task Name"
      {...(register('name'))}
      ></input>
      <label className=" font-Sofia-Pro-Regular text-primary">Select Start Date</label>
      <input type="date" 
      placeholder="Select A Date"
      {...(register('date'))}
      ></input>
      <label className=" font-Sofia-Pro-Regular text-primary">Select Start Time</label>
      <input type="time" 
      placeholder="Start Time"
      {...(register('time'))}
      ></input>
      <button type="submit" className=" bg-primary text-white font-Sofia-Pro-Regular p-4 rounded-xl">Add Task</button>
    </form>);
}

export default NewTask;