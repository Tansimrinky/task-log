import { Link } from "react-router-dom";
import { useContext } from "react";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
import registerImg from "../../assets/register2.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const  axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("Photo");
    const email = form.get("email");
    const password = form.get("password");
    const profession = form.get("profession");
    const user = { name, photo, email, password, profession};
    console.log(user);
    if (!/[A-Z]/.test(password)) {
      Swal.fire("Your Password should have at least one Uppercase character. ");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      Swal.fire("Your Password should have at least one special character.");
      return;
    }
    createUser( email, password )
      .then((result) => {
        axiosPublic.post('/users', user)
          .then(res => {
            if(res.data.insertedId){
              Swal.fire('Successfully registered your account..')
            }
          })
        Swal.fire("Successfully registered your account..");
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })

          .then(() => {
            //profile updated
          })
          .catch(() => {
            Swal.fire("An error occured. Profile is not updated.");
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-between">
      <div className="lg:flex  sm:hidden items-center">
        <img className="" src={registerImg} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="lg:h-screen bg-base bg-cover flex justify-center">
          <div className="hero h-fit">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-[#388087]">
                  Register Now
                </h1>
              </div>
              <div className="card flex-shrink-0  lg:w-[500px] shadow-2xl bg-blur">
                <form onSubmit={handleRegister} className="card-body ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#388087] text-bold text-5xl">
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#388087] text-bold text-5xl">
                        Profession
                      </span>
                    </label>
                    <input
                      type="text"
                      name="profession"
                      placeholder="Enter your profession"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#388087] text-bold text-5xl">
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      placeholder="Your Picture"
                      className="input input-bordered"
                      name="Photo"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#388087] text-bold text-5xl">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-[#388087] text-bold text-5xl">
                        Password
                      </span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-[#388087] text-white  text-3xl text-bold">
                      Register
                    </button>
                  </div>
                  <p className="text-green-900">
                    Already have an account? PLease{" "}
                    <Link className="underline text-red-700" to="/login">
                      Log in
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
