import styles from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <div className={styles.contact_form_head}>
       <p>GET IN TOUCH</p>
            <p>You can reach us anytime</p>
            <form className={styles.contact_form}>
              <div className={styles.contact_form1}>
              <input placeholder="First Name"/>
              <input placeholder="Last Name"/>
              </div>
              <div className={styles.contact_form2}>
              <input placeholder="Email"/>
              <input placeholder="Phone"/>
              <textarea placeholder="Message"></textarea>
              </div>
              <div>
              <button className={styles.contact_form_button}>Submit</button>
              </div>
              
            </form>
    </div>
  )
}

export default ContactForm