import { useState } from "react";

const initialState = {
    email: "",
    password: ""
};

const Auth = () => {
    const [formValue, setFormValue] = useState(initialState);

    const {email, password} = formValue;

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
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Пароль"
                />
                <button type="button">
                    Войти
                </button>
            </section>
        </div>
    );
};

export default Auth;