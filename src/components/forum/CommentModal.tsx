'use client';

import React, { useState, ChangeEvent } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './CommentModal.module.scss';
import { useTranslations } from 'next-intl';
import { FaTimes } from 'react-icons/fa';

interface CommentModalProps {
    show: boolean;
    onHide: () => void;
    postTitle?: string;
}

const CommentModal = ({ show, onHide, postTitle }: CommentModalProps) => {
    const [comment, setComment] = useState('');
    const t = useTranslations('forum');

    const handleSubmitComment = () => {
        console.log('Comment submitted:', { comment, postTitle });
        setComment('');
        onHide();
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            backdrop={true}
            dialogClassName={styles.modalDialog}
        >
            <div className={styles.modalContent}>
                <button
                    className={styles.closeButton}
                    onClick={onHide}
                >
                    <FaTimes />
                </button>

                <h2 className={styles.modalHeader}>
                    {t('commentModal.title')}
                </h2>

                <Form>
                    <Form.Group className={styles.formGroup}>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            value={comment}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
                            placeholder={t('commentModal.placeholder')}
                            className={styles.formTextarea}
                        />
                    </Form.Group>

                    <Button
                        className={styles.saveButton}
                        onClick={handleSubmitComment}
                    >
                        {t('commentModal.save')}
                    </Button>
                </Form>
            </div>
        </Modal>
    );
};

export default CommentModal; 