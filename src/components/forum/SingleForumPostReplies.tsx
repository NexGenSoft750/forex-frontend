import styles from './SingleForumPostReplies.module.scss';
import Image from 'next/image';
import { useState } from 'react';

type ForumReply = {
    id: string;
    userName: string;
    timestamp: string;
    replyContent: string;
    avatarSrc: string;
    hasImage?: boolean;
    imageSrc?: string;
}

type SingleForumPostRepliesProps = {
    replies: ForumReply[];
}

export default function SingleForumPostReplies({ replies }: SingleForumPostRepliesProps) {
    const [showCommentInput, setShowCommentInput] = useState(false);

    const handleCommentClick = () => {
        setShowCommentInput(!showCommentInput);
    };

    return (
        <div className={styles['single-forum-post-replies']}>
            <div className={styles['single-forum-post-replies__replied-header']}>
                <span>Replied</span>
            </div>
            <div className={styles['single-forum-post-replies__replied-container']}>
                <div className={styles['single-forum-post-replies__replied-list']}>
                    {replies.length > 0 ? (
                        replies.map((reply) => (
                            <div key={reply.id} className={styles['single-forum-reply-card']}>
                                <div className={styles['single-forum-reply-card__avatar-wrapper']}>
                                    <Image
                                        src={reply.avatarSrc}
                                        alt={`${reply.userName} avatar`}
                                        width={90}
                                        height={90}
                                        className={styles['single-forum-reply-card__avatar']}
                                    />
                                </div>
                                <div className={styles['single-forum-reply-card__content']}>
                                    <div className={styles['single-forum-reply-card__header']}>
                                        <h4 className={styles['single-forum-reply-card__username']}>
                                            {reply.userName}
                                        </h4>
                                        <span className={styles['single-forum-reply-card__timestamp']}>
                                            {reply.timestamp}
                                        </span>
                                    </div>
                                    <p className={styles['single-forum-reply-card__reply-content']}>
                                        {reply.replyContent}
                                    </p>
                                    {reply.hasImage && reply.imageSrc && (
                                        <div className={styles['single-forum-reply-card__image-wrapper']}>
                                            <Image
                                                src={reply.imageSrc}
                                                alt="Reply content"
                                                width={400}
                                                height={200}
                                                className={styles['single-forum-reply-card__image']}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className={styles['single-forum-post-replies__no-replies']}>
                            <div className={styles['single-forum-post-replies__no-replies-content']}>
                                <h3>No replies yet</h3>
                                <p>Be the first to comment on this post!</p>
                                <button
                                    className={styles['single-forum-post-replies__first-comment-button']}
                                    onClick={handleCommentClick}
                                >
                                    Add Comment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
} 