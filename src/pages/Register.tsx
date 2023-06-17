import { useState } from "react";

const initialState = {
    email: "",
    fullname: "",
    username: "",
    password: "",
    confirmPassword: ""
};

const Register = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { email, fullname, username, password, confirmPassword } = formValue;

    const handleChange = (e: any) => {
        setFormValue({...formValue, [e.target.name]: e.target.value})
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <section>
                <input 
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                />
                <input 
                type="text"
                name="fullname"
                value={fullname}
                onChange={handleChange}
                placeholder="ФИО"
                />
                <input 
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                placeholder="Имя пользователя"
                />
                <input 
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Пароль"
                />
                <input 
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                placeholder="Повторите пароль"
                />
                <button type="button">
                    Зарегистрироваться
                </button>
            </section>
        </div>
    );
};

export default Register;