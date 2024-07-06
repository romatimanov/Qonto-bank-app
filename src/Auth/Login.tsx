import { Button } from "../UI/Button/Button";
import "./auth.css";
import { useForm } from "react-hook-form";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={errors.email ? "form-input error" : "form-input"}
        />
      </div>

      <div className="form-group">
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="Пароль"
          className={errors.password ? "form-input error" : "form-input"}
        />
      </div>

      <Button text="Войти" style="black-btn" />
    </form>
  );
}
