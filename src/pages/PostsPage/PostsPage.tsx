import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectAuth } from "../../features/authSlice";
import { useEffect, useState } from "react";
import { postApi } from "../../services/postApi";
import PostItem from "../../components/PostItem";

const initialState = {
  name: "",
  text: "",
};

const PostsPage = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, text } = formValue;
  const { data: posts, error, isLoading } = postApi.useGetAllPostsQuery(5);
  const [createPost, { }] = postApi.useCreatePostMutation();

  const { email } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCreate = async () => {
    await createPost({
      name: name,
      text: text,
      owner: String(email),
      created: Date.now(),
    })
  }

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (email == null) {
      navigate('/auth')
    }
  }, [email])

  return (
    <div>
      <div>Привет {email} </div>

      <button type="button" onClick={() => handleLogout()}>
        Выйти
      </button>

      <div>
        <h3>Создать пост</h3>
        <section>
          <input
            type="text"
            name="name"
            value={name}
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
            Создать
          </button>
        </section>
      </div>

      <div>
        {isLoading && <h1>Идет загрузка</h1>}
        {error && <h1>Произошла ошибка</h1>}
        {posts?.map(post => <PostItem key={post.id} post={post} />)}
      </div>
      {/* <h2>Добавить пост</h2>
      <section>
        <input
          type="text"
          name="title"
          value={name}
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
      </section> */}
    </div>
  );
};

export default PostsPage;