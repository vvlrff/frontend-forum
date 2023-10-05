import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout, selectAuth } from "../../features/authSlice";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { postApi, useCreatePostMutation } from "../../services/postApi";
import PostItem from "../../components/PostItem";
import { IPost } from "../../models/IPost";

const PostsPage = () => {
  const {data: posts} = postApi.useGetAllPostsQuery(5);

  const { email } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  // const [formValue, setFormValue] = useState(initialState);

  // const { name, text } = formValue;


  // const [createPost,
  //   {
  //     data: createData,
  //     isSuccess: isCreateSuccess,
  //     isError: isCreateError,
  //     error: createError
  //   }
  // ] = useCreatePostMutation();

  // const handleCreate = async () => {
  //   if (name && text) {
  //     await createPost({ name, text });
  //   } else {
  //     toast.error("Заполните все поля ввода")
  //   }
  // };

  // const handleChange = (e: any) => {
  //   setFormValue({ ...formValue, [e.target.name]: e.target.value });
  // };

  // useEffect(() => {
  //   if (isCreateSuccess) {
  //     toast.success("Пользователь успешно авторизирован");
  //     dispatch(addPost({ title: createData.title, text: createData.text }));
  //   }
  // }, [isCreateSuccess]);

  // useEffect(() => {
  //   if (isCreateError) {
  //     toast.error((createError as any).data.message);
  //   }
  // }, [isCreateError]);

  useEffect(() => {
    if (email == null) {
      navigate('/auth')
    }
  }, [email])

  return (
    <div>
      hellp {email}

      <button type="button" onClick={() => handleLogout()}>
        Logout
      </button>

      <div>
        {posts && posts?.map((post) = > 
          <PostItem post={post} />
          )
        }
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