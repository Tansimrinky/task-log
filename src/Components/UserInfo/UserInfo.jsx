

const UserInfo = ({user}) => {
    const {profession, name, photo} = user || {}
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border">
            <div className="text-center font-bold">
                 <div className="flex justify-center"><img className="h-[50px] w-[50px] rounded-full flex justify-center" src={photo} alt="" /></div>
                 <p>{name}</p>
                 <p>Profession: {profession}</p>
            </div>
        </div>
    );
};

export default UserInfo;