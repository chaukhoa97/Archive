function SignInForm() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm();
  const signInError = () => {
    message.error('Đăng nhập thất bại: Email hoặc mật khẩu không đúng');
  };
  const signInSuccess = () => {
    message.success('Đăng nhập thành công');
  };
  const onSubmit = (data) => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCKu_tYKQAM4t0Aint-mdHTheBzrbsX4_8',
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        signInSuccess();
        dispatch(
          authActions.signIn({
            localId: res.data.localId,
            email: res.data.email,
          })
        );
        dispatch(syncAdmin());
      })
      .catch((err) => {
        signInError();
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space size="middle" direction="vertical">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              size="large"
              prefix={
                <FontAwesomeIcon className="me-3 p-3" icon="fa-solid fa-user" />
              }
              placeholder="Email"
            />
          )}
        />
        {errors.email && (
          <span className="account__error">Hãy nhập email của bạn!</span>
        )}
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              size="large"
              prefix={
                <FontAwesomeIcon className="me-3" icon="fa-solid fa-lock" />
              }
              placeholder="Password"
            />
          )}
        />
        {errors.password && (
          <span className="account__error">Hãy nhập password của bạn</span>
        )}
        <Button
          size="large"
          htmlType="submit"
          type="primary"
          className="d-block mx-auto w-100 mt-2 rounded-pill"
        >
          Đăng nhập
        </Button>
      </Space>
    </form>
  );
}
