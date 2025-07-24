import styles from './ForumPostCard.module.scss';
import Image from 'next/image';
import Link from 'next/link';

type ForumPostCardProps = {
    id: string;
    title: string;
    date: string;
    summary: string;
    repliesCount: number;
    category: string;
    slug?: string;
}

export default function ForumPostCard({
    title,
    date,
    summary,
    repliesCount,
    slug
}: ForumPostCardProps) {
    // Truncate summary to show only first 150 characters
    const truncatedSummary = summary.length > 150 ? summary.substring(0, 150) + '...' : summary;
    const shouldShowReadMore = summary.length > 150;

    return (
        <div className={styles['forum-post-card']}>
            <div className={styles['forum-post-card__image_wrapper']}>
                <Image
                    src="/images/dashboard/forum/forum-post-card-image.svg"
                    alt="Forum Post Card Image"
                    width={100}
                    height={100}
                    className={styles['forum-post-card__image']}
                />
            </div>
            <div className={styles['forum-post-card__content']}>
                <div className={styles['forum-post-card__content__header']}>
                    <Link href={`/forum/${slug || title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <h3 className={styles['forum-post-card__title']}>
                            {title}
                        </h3>
                    </Link>
                    <div className={styles['forum-post-card__date']}>
                        {date}
                    </div>
                </div>
                <p className={styles['forum-post-card__summary']}>
                    {truncatedSummary}
                    {shouldShowReadMore && (
                        <a href="#" className={styles['forum-post-card__read-more']}> Read more</a>
                    )}
                </p>
                <div className={styles['forum-post-card__replies']}>
                    {repliesCount.toLocaleString()} Replies
                </div>
            </div>
        </div>
    );
}