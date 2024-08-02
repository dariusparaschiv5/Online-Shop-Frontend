import { useForm } from 'react-hook-form';
import "./login.scss"

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    // Implement login logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: true })}
            placeholder="Enter your username"
          />
          {errors.username && <p className="error">Username is required</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">Password is required</p>}
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
