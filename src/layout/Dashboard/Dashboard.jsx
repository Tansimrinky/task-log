import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className=" min-h-screen bg-base-300">
        <ul className="menu p-4">
          <li><p className="font-bold"><img className="h-[30px] w-[30px] rounded-full" src={user.photoURL} alt="" /> {user.displayName}</p></li>
          <li className="font-bold"><NavLink to='/task-dashboard/add-task'>Add Task</NavLink></li>
          <li className="font-bold"><NavLink to="/task-manage">task manage</NavLink></li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li className="font-bold">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
