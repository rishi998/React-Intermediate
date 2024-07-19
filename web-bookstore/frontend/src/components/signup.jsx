import { Link } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );
      if (res.data) {
        console.log(res.data);
        alert("Signup Successful");
      }
      localStorage.setItem("users", JSON.stringify(res.data));
    } catch (error) {
      if (error.response) {
        console.log(error);
        alert("Error: " + error.response.data.message);
      }
    }
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4 space-y-3">
                <span className="font-semibold">Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter you name"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-3">
                <span className="font-semibold">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter you email"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <br />
              <div className=" space-y-3">
                <span className="font-semibold">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter you password"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300 hover:px-4 hover:py-2 ">
                  Signup
                </button>
                <p className="text-xl">
                  Already registered?{" "}
                  <button
                    className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer px-3 py-2 "
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
