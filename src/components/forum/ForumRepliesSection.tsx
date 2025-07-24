import styles from './ForumRepliesSection.module.scss';
import Image from 'next/image';

type ForumReply = {
    id: string;
    userName: string;
    timestamp: string;
    replyContent: string;
    relatedLink: string;
    avatarSrc: string;
}

type ForumRepliesSectionProps = {
    lastReplied: ForumReply[];
    hottestReplied: ForumReply[];
}

export default function ForumRepliesSection({ lastReplied, hottestReplied }: ForumRepliesSectionProps) {
    return (
        <section className={styles['forum-replies-section']}>
            <div className={styles['forum-replies-section__container']}>
                {/* Last Replied Section */}
                <div className={styles['forum-replies-section__column']}>
                    <div className={styles['forum-replies-section__title']}>
                        <span>Last Replied</span>
                    </div>
                    <div className={styles['forum-replies-section__list']}>
                        {lastReplied.map((reply) => (
                            <div key={reply.id} className={styles['forum-reply-card']}>
                                <div className={styles['forum-reply-card__avatar-wrapper']}>
                                    <Image
                                        src={reply.avatarSrc}
                                        alt={`${reply.userName} avatar`}
                                        width={80}
                                        height={80}
                                        className={styles['forum-reply-card__avatar']}
                                    />
                                </div>
                                <div className={styles['forum-reply-card__content']}>
                                    <div className={styles['forum-reply-card__header']}>
                                        <div className={styles['forum-reply-card__username-container']}>
                                            <h4 className={styles['forum-reply-card__username']}>
                                                {reply.userName}
                                            </h4>
                                            <span className={styles['forum-reply-card__username-replied']}>Replied</span>
                                        </div>
                                        <div className={styles['forum-reply-card__timestamp']}>
                                            {reply.timestamp.replace('Replied ', '')}
                                        </div>
                                    </div>
                                    <p className={styles['forum-reply-card__reply-content']}>
                                        {reply.replyContent}...
                                        <a href="#" className={styles['forum-reply-card__read-more']}> Read more</a>
                                    </p>
                                    <div className={styles['forum-reply-card__related-link']}>
                                        <a href="#">{reply.relatedLink}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hottest Replied Section */}
                <div className={styles['forum-replies-section__column']}>
                    <div className={styles['forum-replies-section__title']}>
                        <span>Hottest Replied</span>
                    </div>
                    <div className={styles['forum-replies-section__list']}>
                        {hottestReplied.map((reply) => (
                            <div key={reply.id} className={styles['forum-reply-card']}>
                                <div className={styles['forum-reply-card__avatar-wrapper']}>
                                    <Image
                                        src={reply.avatarSrc}
                                        alt={`${reply.userName} avatar`}
                                        width={80}
                                        height={80}
                                        className={styles['forum-reply-card__avatar']}
                                    />
                                </div>
                                <div className={styles['forum-reply-card__content']}>
                                    <div className={styles['forum-reply-card__header']}>
                                        <div className={styles['forum-reply-card__username-container']}>
                                            <h4 className={styles['forum-reply-card__username']}>
                                                {reply.userName}
                                            </h4>
                                            <span className={styles['forum-reply-card__username-replied']}>Replied</span>
                                        </div>
                                        <div className={styles['forum-reply-card__timestamp']}>
                                            {reply.timestamp.replace('Replied ', '')}
                                        </div>
                                    </div>
                                    <p className={styles['forum-reply-card__reply-content']}>
                                        {reply.replyContent}...
                                        <a href="#" className={styles['forum-reply-card__read-more']}> Read more</a>
                                    </p>
                                    <div className={styles['forum-reply-card__related-link']}>
                                        <a href="#">{reply.relatedLink}</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 