import Image from 'next/image';
import styles from './ProfileCard.module.scss';

type ProfileCardProps = {
    name: string;
    email: string;
    phone: string;
    profileImg: string;
    emailIcon: string;
    phoneIcon: string;
};

export default function ProfileCard({
    name,
    email,
    phone,
    profileImg,
    emailIcon,
    phoneIcon
}: ProfileCardProps) {
    return (
        <div className={styles["profile-card"]}>
            <header className={styles["profile-card__header"]}>
                <div className={styles["profile-card__img-container"]}>
                    <div className={styles["profile-card__img-wrapper"]}>
                        <Image
                            src={profileImg}
                            alt={`Profile picture of ${name}`}
                            className={styles["profile-card__img"]}
                            fill
                            priority
                        />
                    </div>

                    <div className={styles["profile-card__action-wrapper"]}>
                        <Image
                            src="/images/dashboard/edit-action.svg"
                            alt="Edit Icon"
                            className={styles["profile-card__edit-icon"]}
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </header>
            <div className={styles["profile-card__body"]}>
                <h1 className={styles["profile-card__heading"]}>{name}</h1>
            </div>
            <footer className={styles["profile-card__footer"]}>
                <div className={styles["profile-card__gmail"]} aria-label="Email Address">
                    <Image
                        src={emailIcon}
                        alt="Gmail icon"
                        className={styles["profile-card__gmail-icon"]}
                        width={16}
                        height={16}
                    />
                    <a href={`mailto:${email}`} className={styles["profile-card__gmail-text"]}>
                        {email}
                    </a>
                </div>

                <div className={styles["profile-card__phone"]} aria-label="Phone Number">
                    <Image
                        src={phoneIcon}
                        alt="Phone icon"
                        className={styles["profile-card__phone-icon"]}
                        width={16}
                        height={16}
                    />
                    <a href={`tel:${phone}`} className={styles["profile-card__phone-text"]}>
                        {phone}
                    </a>
                </div>
            </footer>
        </div>
    );
}
