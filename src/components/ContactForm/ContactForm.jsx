import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("Can't be empty"),
  email: Yup.string()
    .required("Can't be empty")
    .email("Please use a valid email address"),
  message: Yup.string().required("Can't be empty"),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully:", data);
  };

  return (
    <div className={styles.contactFormrow}>
      <h1 className={styles.h1}>Connect with us</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm} noValidate>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={`${styles.formInput} ${errors.name ? styles.inputError : ""}`}
            />
            {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className={`${styles.formInput} ${errors.email ? styles.inputError : ""}`}
            />
            {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
          </div>

          <div className={styles.formGroup}>
            <textarea
              placeholder="Message"
              rows="3"
              {...register("message")}
              className={`${styles.formInput} ${styles.formTextarea} ${errors.message ? styles.inputError : ""}`}
            />
            {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
          </div>

          <div className={styles.buttonWrapper}>
            <button type="submit" className={styles.submitBtn}>
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
