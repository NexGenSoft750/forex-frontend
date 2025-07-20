"use client";

import styles from './Aside.module.scss';
import DashboardNav from './DashboardNav';

export default function Aside() {
    return (
        <>
            <aside className={`${styles["sidebar"]} ${styles["sidebar-bg-dark"]}`}>
                <div className={styles["sidebar__logo-wrapper"]}>
                    {/* <Image
                            src="/images/dashboard/profile.svg"
                            alt="Notification Icon"
                            className={styles["sidebar__logo-img"]}
                            fill
                        /> */}
                    Logo
                </div>
                <DashboardNav />
            </aside>
        </>
    );
}