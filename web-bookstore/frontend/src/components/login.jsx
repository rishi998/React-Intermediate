import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      if (res.data) {
        console.log(res.data);
        toast.success("Logged In Successfully");
      }
      localStorage.setItem("users", JSON.stringify(res.data));
    } catch (error) {
      if (error.response) {
        console.log(error);
        toast.error(error.response.message);
      }
    }
  };
  return (
    <div className="text-xl">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">LOGIN</h3>
            <div className="mt-4 space-y-3">
              <span className="font-semibold">Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter you email"
                className="w-80 px-3 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <br />
            <div className="mt-4 space-y-3">
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
                  This field is required!
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300 hover:px-4 hover:py-2 ">
                Login
              </button>
              <p>
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
