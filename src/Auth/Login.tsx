import { Button } from "../UI/Button/Button";
import "./auth.css";
import { useForm } from "react-hook-form";

type LoginProps = {
  openRegisterModal: () => void;
  closeLoginModal: () => void;
};

export function Login({ openRegisterModal, closeLoginModal }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const handleOpenRegister = () => {
    closeLoginModal();
    openRegisterModal();
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
      <div className="form-btn__group">
        <Button text="Войти" style="black-btn" />
        <button className="form-btn" onClick={handleOpenRegister}>
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
}
