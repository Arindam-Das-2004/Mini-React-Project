import { MdDisplaySettings, MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  // Form submit handler
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted", event);
  };

  // Call button click handler
  const onViaCallSubmit = () => {
    console.log("Via Call Button Clicked");
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={() => console.log("Support Chat Clicked")}
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button
            onClick={onViaCallSubmit}
            text="VIA CALL"
            icon={<FaPhoneAlt fontSize="24px" />}
          />
        </div>

        <Button
          isOutline={true}
          text="VIA Mail"
          icon={<HiMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text" rows="7" />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button type="submit" text="SUBMIT BUTTON" />
          </div>
        </form>
      </div>

      <div className={styles.contact_image}>
        <img src="/Images/service.avif" alt="Hero Photo" />
      </div>
    </section>
  );
};

export default ContactForm;
