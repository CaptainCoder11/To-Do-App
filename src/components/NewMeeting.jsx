import { FormControl, Input, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment";

function NewMeeting() {
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
      email: 
      yup.string()
      .nullable()
      .test("email", "Enter A Valid Email", function (value) {
       return value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
      }),
      time: 
      yup.string()
      .nullable()
      .required("Invalid Time")
  })
  .required();
  const { register, handleSubmit} = useForm(
    {resolver: yupResolver(schema)}
  );

  const onSubmit = (data) =>{ console.log(data)
  alert("Metting Registed!")
  navigate("/To-Do-App/#/")
  } 
  
    return (<form onSubmit={handleSubmit(onSubmit)} className="mt-11 ml-10 mr-10 flex gap-5 flex-col w-1/3"> 
      <label className=" font-Sofia-Pro-Regular text-primary">Enter Meeting Name</label>
      <input type="text" 
      placeholder="Meeting Name"
      {...(register('name'))}
      ></input>
      <label className=" font-Sofia-Pro-Regular text-primary">Email of participants</label>
      <input type="email" 
      placeholder="Enter User Email"
      {...(register('email'))}
      ></input>
      <label className=" font-Sofia-Pro-Regular text-primary">Select A Date</label>
      <input type="date" 
      placeholder="Enter A Date"
      {...(register('date'))}
      ></input>
      <label className=" font-Sofia-Pro-Regular text-primary">Select Time</label>
      <input type="time" 
      placeholder="Enter Time"
      {...(register('time'))}
      ></input>
      <button type="submit" className=" bg-primary text-white font-Sofia-Pro-Regular p-4 rounded-xl">Register</button>
    </form>);
}

export default NewMeeting;