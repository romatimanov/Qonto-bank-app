import { useForm } from "react-hook-form";
import { Button } from "../UI/Button/Button";
import "./auth.css";

type RegisterProps = {
  openLoginModal: () => void;
  closeRegisterModal: () => void;
};

export function Register({
  closeRegisterModal,
  openLoginModal,
}: RegisterProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  const handleOpenRegister = () => {
    closeRegisterModal();
    openLoginModal();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <input
          {...register("firstName", { required: true })}
          placeholder="Имя"
          className={errors.firstName ? "form-input error" : "form-input"}
        />
        {errors.firstName && <span className="error-text">Введите имя</span>}
      </div>

      <div className="form-group">
        <input
          {...register("lastName", { required: true })}
          placeholder="Фамилия"
          className={errors.lastName ? "form-input error" : "form-input"}
        />
        {errors.lastName && <span className="error-text">Введите фамилию</span>}
      </div>

      <div className="form-group">
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className={errors.email ? "form-input error" : "form-input"}
        />
        {errors.email && <span className="error-text">Некорректный email</span>}
      </div>

      <div className="form-group">
        <input
          {...register("password", { required: true, minLength: 6 })}
          type="password"
          placeholder="Пароль"
          className={errors.password ? "form-input error" : "form-input"}
        />
        {errors.password && (
          <span className="error-text">
            Пароль должен содержать минимум 6 символов
          </span>
        )}
      </div>

      <div className="form-btn__group">
        <Button text="Зарегистрироваться" style="black-btn" />
        <button onClick={handleOpenRegister} className="form-btn">
          Войти
        </button>
      </div>
    </form>
  );
}
