import Header from '@/components/dashboard/Header';
import Aside from '@/components/dashboard/Aside';
import styles from './dashboard.module.scss';
import '@/styles/dashboard-override.scss';
import ProfileCard from '@/components/dashboard/ProfileCard';
import SubscriptionAlert from '@/components/dashboard/SubscriptionAlert';
import MembershipSubscriptionPlans from '@/components/dashboard/MembershipSubscriptionPlans';
import TradingNews from '@/components/dashboard/TradingNews';

export default function Dashboard() {
    return (
        <>
            <div className={styles["dashboard"]}>
                <Aside />
                <div className={styles["dashboard__panel"]}>
                    <Header
                        className={`${styles["dashboard-header"]} ${styles["dashboard-header--bg-light"]}`}
                        headingClassName={`${styles["dashboard-header__heading"]} ${styles["text-primary"]}`}
                        actionsClassName={styles["dashboard-header__actions"]}
                        notificationClassName={styles["dashboard-header__notification"]}
                        notificationImgClassName={styles["dashboard-header__notification-img"]}
                        notificationIndicatorClassName={styles["dashboard-header__notification__indicator"]}
                        profileNavigationClassName={styles["dashboard-header__profile-navigation"]}
                        profileImgWrapperClassName={styles["dashboard-header__profile-img-wrapper"]}
                        profileImgClassName={styles["dashboard-header__profile-img"]}
                        profileInfoClassName={styles["dashboard-header__profile-info"]}
                        userNameClassName={styles["dashbard-header__user-name"]}
                        userRoleClassName={styles["dashboard-header__user-role"]}
                        downArrowClassName={styles["down-arrow"]}
                    />
                    <main className={styles["dashboard__content"]}>
                        <div className={styles["dashboard__account-overview"]}>
                            <ProfileCard
                                name="Ali Hassan"
                                email="alih@gmail.com"
                                phone="+92-352-5554444"
                                profileImg="/images/dashboard/account-profile.jpg"
                                emailIcon="/images/dashboard/gmail-icon.svg"
                                phoneIcon="/images/dashboard/phone-icon.svg"
                            />
                            <SubscriptionAlert
                                userName="Ali Hassan"
                                subscriptionName="Silver Membership"
                                validityDays={30}
                                freeDays={10}
                                expiryDate="21 / 08 / 2024 – 11:59 PM"
                            />
                        </div>
                        <MembershipSubscriptionPlans />
                        <TradingNews />
                    </main>
                </div>
            </div>
        </>
    );
}