import { useContext, } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const AddTask = () => {
    const  axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
 

  const handleCreateTask = (data) => {
    
    const newElement = { email: user.email}
    const additionalElement = { status: "to-do"}
    const combinedObject = { ...data, ...newElement,  ...additionalElement};

    axiosPublic.post('/tasks', combinedObject)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire('Task added successfully')
      }
    })
    reset();
  };
  
  return (
    <div className="flex-col">
        <div className="text-center font-bold text-[#388087] text-3xl">Add a Task</div>
      <form className="font-bold" onSubmit={handleSubmit(handleCreateTask)}>
        <p><label>Title</label>
        <input className="input w-full input-bordered" {...register("title", { required: "Title is required" })} /></p>
       <p> <label>Description</label>
        <textarea className="input w-full input-bordered" {...register("description")} /></p>
        <p><label>Deadline</label>
        <input className="input w-full input-bordered" type="date" {...register("deadline")} /></p>
        <p><label>Priority</label>
        <select className="input w-full input-bordered"  {...register("priority")}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select></p>
        <p><button className="btn bg-[#388087] font-bold text-white m-4" type="submit">Create Task</button></p>
      </form>
    </div>
  );
};

export default AddTask;
