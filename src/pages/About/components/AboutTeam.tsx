import styles from "./styles/aboutteam.module.scss"
import { teamData } from "../utils/teamData";
import { TeamMember, SocialLink } from "../types/team";

export default function AboutTeam () {
    return (
        <>
        <div className={styles.teamArea}>
            <div className={styles.teamWordsArea}>
                <p className={styles.teamWords1}>Our Team</p>
                <p className={styles.teamWords2}>Meet our dedicated team members</p>
            </div>
            <div className={styles.teamSide}>
                {teamData.map((member: TeamMember, index: number) => (
                    <div key={index} className={styles.teamSide1}>
                        <div className={styles.teamSide01}>
                            <img src={member.image} className={styles.teamImage} alt={member.name} />
                        </div>
                        <div className={styles.teamSide02}>
                            <div className={styles.teamName1}>
                                <span className={styles.teamSideWord1}>{member.name}</span>
                                <span className={styles.teamSideWord2}>{member.title}</span>
                            </div>
                            <div className={styles.teamName2}>
                                {member.socials.map((social: SocialLink, idx: number) => (
                                    <a key={idx} href={social.link}>
                                        <img src={social.icon} className={styles.socials} alt="social-icon" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}