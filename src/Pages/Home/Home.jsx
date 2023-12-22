import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import bannerImg from "../../assets/images.jpeg"
import UserInfo from "../../Components/UserInfo/UserInfo";

const Home = () => {
    const axiosPublic = useAxiosPublic()
    const [ users, setUsers ] = useState([])
    useEffect( () => {
        axiosPublic.get('/users')
        .then((data) => {
            console.log(data);
            setUsers(data.data)
        })
    }, [axiosPublic])
    return (
        <div>
            <img className="w-full mb-5" src={bannerImg} alt="" />
            <p className="font-bold text-[#388087] text-center">What Type of people are using this website</p>
            {
                users.map(user => <UserInfo key={user._id} user={user}></UserInfo>)
            }
        </div>
    );
};

export default Home;