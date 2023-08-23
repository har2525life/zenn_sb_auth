import { useForm } from "react-hook-form";
import useAuth from "../../api/useAuth";

function Authentication() {
  const { register, handleSubmit, reset } = useForm<Auth>();
  const { submitLogin, submitSignup, isPage, changeAuth } = useAuth(reset);

  const submitAuth = isPage ? submitSignup : submitLogin;

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h1 className="font-bold text-2xl text-center">
        {isPage ? "Signup" : "Login"}
      </h1>
      <form
        onSubmit={handleSubmit(submitAuth)}
        className="space-y-4 md:space-y-6"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="name@company.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none block w-full p-2.5"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isPage ? "SIGNUP" : "LOGIN"}
        </button>
        <p className="text-sm font-light text-gray-500">
          Don’t have an account yet?
          <a
            onClick={changeAuth}
            className="font-medium text-blue-600 hover:underline hover:cursor-pointer"
          >
            {isPage ? "Login" : "Sign up"}
          </a>
        </p>
      </form>
    </div>
  );
}

export default Authentication;
