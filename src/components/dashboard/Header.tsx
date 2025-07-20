import Image from 'next/image';

type HeaderProps = {
    className?: string;
    headingClassName?: string;
    actionsClassName?: string;
    notificationClassName?: string;
    notificationImgClassName?: string;
    notificationIndicatorClassName?: string;
    profileNavigationClassName?: string;
    profileImgWrapperClassName?: string;
    profileImgClassName?: string;
    profileInfoClassName?: string;
    userNameClassName?: string;
    userRoleClassName?: string;
    downArrowClassName?: string;
};

export default function Header({
    className = '',
    headingClassName = '',
    actionsClassName = '',
    notificationClassName = '',
    notificationImgClassName = '',
    notificationIndicatorClassName = '',
    profileNavigationClassName = '',
    profileImgWrapperClassName = '',
    profileImgClassName = '',
    profileInfoClassName = '',
    userNameClassName = '',
    userRoleClassName = '',
    downArrowClassName = ''
}: HeaderProps = {}) {
    return (
        <>
            <header className={`${className}`}>
                <h1 className={`${headingClassName}`}>
                    Score Board!
                </h1>
                <div className={`${actionsClassName}`}>
                    <div className={`${notificationClassName}`}>
                        <Image
                            src="/images/dashboard/notification.svg"
                            alt="Notification Icon"
                            className={`${notificationImgClassName}`}
                            width={100}
                            height={100}
                        />
                        <div className={`${notificationIndicatorClassName}`}></div>
                    </div>
                    <div className={`${profileNavigationClassName}`}>
                        <div className={`${profileImgWrapperClassName}`}>
                            <Image
                                src="/images/dashboard/profile.svg"
                                alt='Profile Img'
                                className={`${profileImgClassName}`}
                                fill
                            />
                        </div>
                        <div className={`${profileInfoClassName}`}>
                            <span className={`${userNameClassName}`}>Musfiq</span>
                            <span className={`${userRoleClassName}`}>Admin</span>
                        </div>

                        <svg
                            className={`${downArrowClassName}`}
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6 9L12 15L18 9"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                    </div>
                </div>
            </header>
        </>
    );
}