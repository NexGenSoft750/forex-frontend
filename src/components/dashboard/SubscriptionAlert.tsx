import styles from './SubscriptionAlert.module.scss';

type SubscriptionAlertProps = {
    userName: string;
    subscriptionName: string;
    validityDays: number;
    freeDays: number;
    expiryDate: string;
};

export default function SubscriptionAlert({
    userName,
    subscriptionName,
    validityDays,
    freeDays,
    expiryDate,
}: SubscriptionAlertProps) {
    return (
        <>
            <div className={styles["subscription-alert"]}>
                <div className={styles["subscription-alert__container"]}>
                    <h1 className={styles["subscription-alert__user-name"]}>
                        {userName} !
                    </h1>
                    <p className={styles["subscription-alert__message"]}>You have successfully Subscribed ({subscriptionName})</p>
                    <hr className={styles["subscription-alert__separator"]} />
                    <p className={styles["subscription-alert__info-message"]}>
                        <span className={styles["subscription-alert__label"]}>Valid for:</span> {validityDays} Days + {freeDays} Days (Free)
                    </p>
                    <p className={styles["subscription-alert__info-message"]}>
                        <span className={styles["subscription-alert__label"]}>Expiry Date:</span> {expiryDate}
                    </p>
                </div>
            </div>
        </>
    );
}