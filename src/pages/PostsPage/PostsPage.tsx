import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectAuth } from "../../features/authSlice";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useCreatePostMutation } from "../../services/postApi";
import { addPost } from "../../features/postSlice";

const initialState = {
  title: "",
  text: ""
};

const PostsPage = () => {
  const { name } = useAppSelector(selectAuth);
  const [formValue, setFormValue] = useState(initialState);

  const { title, text } = formValue;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [createPost,
    {
      data: createData,
      isSuccess: isCreateSuccess,
      isError: isCreateError,
      error: createError
    }
  ] = useCreatePostMutation();

  const handleCreate = async () => {
    if (title && text) {
      await createPost({ title, text });
    } else {
      toast.error("Заполните все поля ввода")
    }
  };

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isCreateSuccess) {
      toast.success("Пользователь успешно авторизирован");
      dispatch(addPost({ title: createData.title, text: createData.text }));
    }
  }, [isCreateSuccess]);

  useEffect(() => {
    if (isCreateError) {
      toast.error((createError as any).data.message);
    }
  }, [isCreateError]);

  // useEffect(() => {
  //   if (name == null) {
  //     navigate('/auth')
  //   }
  // }, [name])

  return (
    <div>
      <h2>Добавить пост</h2>
      <section>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Заголовок"
        />
        <input
          type="text"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Содержание"
        />
        <button type="button" onClick={() => handleCreate()}>
          Добавить
        </button>
      </section>
    </div>
  );
};

export default PostsPage;