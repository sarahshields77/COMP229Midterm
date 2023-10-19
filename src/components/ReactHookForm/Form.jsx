import { useForm } from "react-hook-form";
import "./Form.css";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*const onSubmit = (data) => {
    console.log(data);   
  };*/

  const onSubmit = (data) => {
    alert(`first name: ${data.firstname}, 
            last name: ${data.lastname}, 
            email: ${data.email}, 
            phone: ${data.phone},
            qualification: ${data.Qualification}`);

  }

  return (
    <><h1 className="heading">Employee Registration Form</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="hook">

      <div className="hook__row">
      <label className="hook__text">First name</label>
      <input
        type="firstname"
        className="hook__input"
        {...register("firstname", { required: true })} />
      {errors.firstname && <p className="hook__error">First name is required</p>}
      <label className="hook_text">(Minimum 5 Char)</label>
      </div>

      <div className="hook__row">
      <label className="hook__text">Last name</label>
      <input
        type="lastname"
        className="hook__input"
        {...register("lastname", { required: true })} />
      {errors.lastname && <p className="hook__error">Last name is required</p>}
      </div>

      <div className="hook__row">
      <label className="hook__text">Email ID</label>
      <input
        type="email"
        className="hook__input"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && (
        <p className="hook__error">Email is required and must be valid</p>
      )}
      </div>

      <div className="hook__row">
      <label className="hook__text">Mobile Number</label>
      <input
        type="phone"
        className="hook__input"
        {...register("phone", { required: true })} />
      {errors.password && <p className="hook__error">Mobile number is required</p>}
      </div>

      <div className="hook__row">
        <label className="hook__text">Qualification</label>
          <div className="hook__radio">
            <label>
              <div><input type="radio" value="High School(10th)" {...register("Qualification")} />
                High School(10th)</div>
            </label>
            <label><div><input type="radio" value="Higher School(12th)" {...register("Qualification")} />
                Higher School(12th)</div>
            </label>
            <label><div><input type="radio" value="Graduation(Bachelors)" {...register("Qualification")} />
                Graduation(Bachelors)</div>
            </label>  
            <label><div><input type="radio" value="Post Graduation(Masters)" {...register("Qualification")} />
                Post Graduation(Masters)</div>
            </label> 
            <label><div><input type="radio" value="Other" {...register("Qualification")} />
                Other</div>
            </label>
          </div>      
      </div> 

      <div className="hook__row__buttons"> 
          <button className="hook__button" type="submit">Submit</button>
          <button className="hook__button" type="reset">Reset</button>
      </div>
      
    </form></>
  );
}

export default LoginForm;
