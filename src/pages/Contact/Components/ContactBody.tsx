import styles from '../Components/styles/ContactBody.module.scss'
import half_bowl from "../../../assets/images/half_bow.svg"
import Faq from '../../../Reusable/Faq/Faq'

const ContactBody = () => {
  return (
    <>
     <div className={styles.contact_body}>
            <div className={styles.contact_body_div2}>
            <img
          src={half_bowl}
          alt="egg bowl"
          />
            </div>

            <div className={styles.contact_body_div2}>
              <Faq/>
            </div>

          </div>
    </>
  )
}

export default ContactBody