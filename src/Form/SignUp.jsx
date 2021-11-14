function SignUpForm() {
  const dispatch = useDispatch();
  //! Form main 1: Khai báo những thứ cần dùng trong useForm() + hàm onSubmit khi submit form
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    register,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKu_tYKQAM4t0Aint-mdHTheBzrbsX4_8',
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        axios
          .post('users.json', {
            localId: res.data.localId,
            email: res.data.email,
            isAdmin: false,
          })
          .then(() => {
            dispatch(
              authActions.signIn({
                localId: res.data.localId,
                email: res.data.email,
              })
            );
            dispatch(syncAdmin());
          });
      })
      .catch((err) => {});
  };
  return (
    //! Form main 2: `handleSubmit` sẽ validate your inputs before invoking `onSubmit` (line 12)
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        //? Form controller 1: UNIQUE `name`; `rules` giống với `register` (Cả 2 đọc ở line `Form main 3`)
        name="email"
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        }}
        defaultValue="Được nhập sẵn ở input, KHÔNG PHẢI PLACEHOLDER"
        //? Form controller 2: Từ 53 -> 56: KO CẦN CARE
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            //? Form controller 3: `onChange` ở đây là property quan trọng nhất của obj `field`, dùng để customize values dc nhập vào trước khi gửi tới hook. Ở đây là chuyển value về int thay vì str. https://react-hook-form.com/api/usecontroller/controller
            onChange={(e) => field.onChange(parseInt(e.target.value))}
            // Props riêng của ant-design
            size="large"
            prefix={
              <FontAwesomeIcon className="me-3" icon="fa-solid fa-user" />
            }
            placeholder="Email"
          />
        )}
      />
      {errors.email && (
        <span className="account__error">Email không đúng định dạngggggg!</span>
      )}
      <Controller
        name="password"
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 20 }}
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
        <span className="account__error">
          Mật khẩu phải có độ dài từ 6 tới 20 ký tự
        </span>
      )}
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true,
          //* watch('password') -> Value hiện tại của input có name là "password"
          validate: (value) => value === watch('password'),
        }}
        render={({ field }) => (
          <Input
            {...field}
            type="password"
            size="large"
            prefix={
              <FontAwesomeIcon className="me-3" icon="fa-solid fa-lock" />
            }
            placeholder="Confirm password"
          />
        )}
      />
      {errors.confirmPassword && (
        <span className="account__error">
          Mật khẩu xác nhận không trùng với mật khẩu ở trên
        </span>
      )}
      <Controller
        name="gender"
        rules={{ required: true }}
        control={control}
        defaultValue={props.gender}
        render={({ field }) => (
          <Select {...field} style={{ width: 100 }}>
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="others">Khác</Option>
          </Select>
        )}
      />
      {errors.gender && (
        <p className="error mb-0 ms-3">Hãy chọn giới tính của bạn</p>
      )}
      <Controller
        name="price"
        rules={{ required: true }}
        control={control}
        defaultValue={props.price}
        render={({ field }) => (
          <InputNumber
            {...field}
            style={{ width: '100%' }}
            in={0}
            type="number"
            placeholder="Nhập giá"
            size="large"
          />
        )}
      />
      <div className="acceptTerms">
        <input
          type="checkbox"
          className="me-2"
          id="acceptTerms"
          //! Form main 3: Đăng ký input này với UNIQUE `name`(ở đây là 'acceptTerms') vào `useForm()` hook, với ~ validate từ https://react-hook-form.com/api/useform/register
          {...register('acceptTerms', { required: true })} // minLength, min, pattern,
        />
        <label htmlFor="acceptTerms">
          Bấm đăng ký đồng nghĩa với việc tôi đồng ý với các
          <Link to="/home"> điều khoản </Link> của Onways
        </label>
      </div>
      //! Form main 4: errors.`inputUniqueName`
      {errors.acceptTerms && (
        <span className="account__error">Bro chưa accept kìa</span>
      )}
      <Button
        size="large"
        //! Form main 5: Hoặc <button type="submit"> / <input type="submit">
        htmlType="submit"
        type="primary"
        className="d-block mx-auto w-100 mt-2 rounded-pill"
      >
        Đăng ký tài khoản
      </Button>
    </form>
  );
}
