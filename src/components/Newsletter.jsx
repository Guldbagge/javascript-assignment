import { useFormik } from 'formik';
import * as Yup from 'yup';
import backgroundWavyLines from '../assets/image/background-wavy-lines.svg'

const Newsletter = () => {
  const form = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Email must be provided.")
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Provide a valid email address."),
    }),
  });

  return (
    <section className="newsletter">
      <img className= "background-wavy-lines" src={backgroundWavyLines} alt=""/>
      <div className="container">
        <h2>Get News Updates By Signup </h2>
        <form>
          <label className={form.touched.email && form.errors.email ? 'error' : ''}>{form.touched.email ? form.errors.email : ''}</label>
          <input
            className="form-input"
            type="email"
            id="email"
            title="Email*"
            placeholder="username@domain.com"
            name='email'
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <button className="btn-yellow" type="submit">Subscribe <i className="fa-solid fa-arrow-up-right"></i></button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;