'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from './SingleForumPostCard.module.scss';
import Link from 'next/link';
import CommentModal from './CommentModal';
import { ForumPost } from '@/lib/forumData';

type SingleForumPostCardProps = {
    post: ForumPost;
}

export default function SingleForumPostCard({ post }: SingleForumPostCardProps) {
    const [showCommentModal, setShowCommentModal] = useState(false);

    const handleCommentClick = () => {
        setShowCommentModal(true);
    };

    const handleCloseModal = () => {
        setShowCommentModal(false);
    };

    return (
        <>
            <div className={styles['single-forum-post-card']}>
                <div className={styles['single-forum-post-card__heading']}>
                    <span>{post.category}</span>
                </div>
                <div className={styles['single-forum-post-card__content-wrapper']}>
                    <div className={styles['single-forum-post-card__content']}>
                        <header className={styles['single-forum-post-card__header']}>
                            <Link href={`/forum/${post.slug}`}>
                                <h3 className={styles['single-forum-post-card__title']}>
                                    {post.title}
                                </h3>
                            </Link>
                            <div className={styles['single-forum-post-card__date']}>
                                {post.date}
                            </div>
                            <div className={styles['single-forum-post-card__replies']}>
                                {post.repliesCount} Replies
                            </div>
                        </header>
                        <div className={styles['single-forum-post-card__body']}>
                            {post.imageSrc && (
                                <div className={styles['single-forum-post-card__image-wrapper']}>
                                    <Image
                                        src={post.imageSrc}
                                        alt={post.title}
                                        fill
                                        className={styles['single-forum-post-card__image']}
                                    />
                                </div>
                            )}
                            <p className={styles['single-forum-post-card__summary']}>
                                {post.summary}
                            </p>
                        </div>
                    </div>
                    <footer className={styles['single-forum-post-card__footer']}>
                        <div className={styles['single-forum-post-card__actions']}>
                            <button
                                className={styles['single-forum-post-card__button']}
                                onClick={handleCommentClick}
                            >
                                Comment
                            </button>
                            <button
                                className={styles['single-forum-post-card__button']}
                                onClick={handleCommentClick}
                            >
                                <Image
                                    src="/images/dashboard/forum/comment-icon.svg"
                                    alt="comment icon"
                                    width={30}
                                    height={30}
                                />
                            </button>
                        </div>
                    </footer>
                </div>
            </div>

            <CommentModal
                show={showCommentModal}
                onHide={handleCloseModal}
                postTitle={post.title}
            />
        </>
    );
}