import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout, selectAuth } from "../features/authSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { name } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Пользователь успешно вышел");
    navigate('/');
  };

  return (
    <div>
      Дашборд
      <div>Привет {name}</div>
      <button onClick={() => handleLogout()} type="button">
        Выйти
      </button>
    </div>
  );
};

export default Dashboard;