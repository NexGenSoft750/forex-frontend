import styles from './ForumPagination.module.scss';

type ForumPaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function ForumPagination({
    currentPage,
    totalPages,
    onPageChange
}: ForumPaginationProps) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className={styles['forum-pagination']}>
            <span className={styles['forum-pagination__label']}>Press</span>
            <div className={styles['forum-pagination__info']}>
                Page {currentPage} of {totalPages}
            </div>
            <div className={styles['forum-pagination__buttons']}>
                <button
                    className={`${styles['forum-pagination__button']} ${styles['forum-pagination__button--nav']}`}
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        key={page}
                        className={`${styles['forum-pagination__button']} ${currentPage === page ? styles['forum-pagination__button--active'] : ''
                            }`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    className={`${styles['forum-pagination__button']} ${styles['forum-pagination__button--nav']}`}
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
} 