import styles from './PackagesCard.module.scss';
import { PackagesCardProps } from '../../types/PackagesCardProps';

export default function PackagesCard(packagesCard: PackagesCardProps) {
    return (
        <>
            <div className={`${styles["packages-card"]} ${styles[packagesCard.planType]}`}>
                <header className={styles["packages-card__header"]}>
                    <h1 className={styles["packages-card__name"]}>{packagesCard.displayName} Membership</h1>
                    <span className={styles["packages-card__badge"]}>{packagesCard.badgeLabel}</span>
                </header>
                <div className={styles["packages-card__body"]}>
                    <span className={styles["packages-card__tax-price"]}>Tax Included: USD {packagesCard.taxInclusivePrice}</span>
                    <div className={styles["packages-card__prices"]}>
                        <span className={styles["packages-card__discounted-price"]}>
                            USD 25
                            <span className={styles["packages-card__price-period"]}>/{packagesCard.billingCycle}</span>
                            <span className={styles["packages-card__original-price"]}>USD {packagesCard.originalPrice}</span>
                        </span>
                    </div>
                    <span className={styles["packages-card__duration"]}>Duration: {packagesCard.activeDays} Days + {packagesCard.activeDays} Days (Free)</span>
                    <textarea
                        placeholder='Text Here'
                        name=""
                        id=""
                        className={styles["packages-card__text-box"]}
                    >
                    </textarea>
                </div>
                <footer className={styles["packages-card__footer"]}>
                    <button className={styles["packages-card__subscribe-btn"]}>SUBSCRIBE</button>
                </footer>
            </div>
        </>
    );
}