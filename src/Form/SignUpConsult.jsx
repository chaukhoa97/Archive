function SignUpForm() {
  const dispatch = useDispatch();
  //! Form main 1: Destructing needed stuff from `useForm()`
  const {
    handleSubmit,
    formState: { errors },
    watch,
    control,
    register,
    resetField,
  } = useForm();

  // Declare an `onSubmit` fn, which will be used when submitting the form as usual
  const onSubmit = (data) => {
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCKu_tYKQAM4t0Aint-mdHTheBzrbsX4_8",
        {
          email: data.email,
          password: data.password,
          returnSecureToken: true,
        }
      )
      .then((res) => {
        axios
          .post("users.json", {
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
      });
  };
  if (selectedNationality !== "Việt Nam") resetField("identity");
  return (
    //! Form main 2: `handleSubmit` at line 5 will validate your inputs before invoking `onSubmit` (line 13)
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Controller: Dùng để control các external UI components: MUI, Ant Design... */}
      <Controller
        //1 Form controller 1: UNIQUE `name` (ở đây là "email") để react-hook-form biết mà validate
        name="email"
        //1 Form controller 2: `rules` options obj are rules from https://react-hook-form.com/api/useform/register
        rules={{
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        }}
        defaultValue="Được nhập sẵn ở input, KHÔNG PHẢI PLACEHOLDER"
        // Don't touch `control={control}` line 57 & `{...field}` line 60
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            //1 Form controller 3: `onChange` ở đây là property quan trọng nhất của obj `field`, dùng để customize values dc nhập vào trước khi gửi tới hook. Ở đây là chuyển value về int thay vì str. https://react-hook-form.com/api/usecontroller/controller
            onChange={(e) => field.onChange(parseInt(e.target.value))}
          />
        )}
      />
      {errors.email && <span>Email nhập không đúng định dạng!</span>}
      <Controller
        name="password"
        control={control}
        rules={{ required: true, minLength: 6, maxLength: 20 }}
        render={({ field }) => <Input {...field} type="password" />}
      />
      {errors.password && (
        <span>Mật khẩu phải có độ dài từ 6 tới 20 ký tự</span>
      )}
      <Controller
        name="confirmPassword"
        control={control}
        rules={{
          required: true,
          //* watch('password') -> Value hiện tại của input có name là "password"
          validate: (value) => value === watch("password"),
        }}
        render={({ field }) => <Input {...field} type="password" />}
      />
      {errors.confirmPassword && (
        <span>Mật khẩu xác nhận không trùng với mật khẩu ở trên</span>
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
      {errors.gender && <p>Hãy chọn giới tính của bạn</p>}
      <div>
        <input
          type="checkbox"
          id="acceptTerms"
          //! Form main 3: UNIQUE `name` (ở đây là "acceptTerms") similar with `Form controller 1`, `options obj` are the same rules in the `Form controller 2`
          {...register("acceptTerms", { required: true })}
        />
        <label htmlFor="acceptTerms">
          Bấm đăng ký đồng nghĩa với việc tôi đồng ý với các
          <Link to="/home"> điều khoản </Link> của Onways
        </label>
      </div>
      //! Form main 4: errors.`inputUniqueName`
      {errors.acceptTerms && <span>Bro chưa accept kìa</span>}
      <button>Đăng ký tài khoản</button>
    </form>
  );
}
