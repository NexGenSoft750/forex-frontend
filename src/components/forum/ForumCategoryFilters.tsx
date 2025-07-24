import styles from './ForumCategoryFilters.module.scss';
import { useRouter } from 'next/navigation';

type ForumCategoryFiltersProps = {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    navigateToForum?: boolean;
}

const categories = [
    'Trading Discussions',
    'Trading Strategies',
    'Broker Reviews',
    'Trading Journals',
    'Market Analysis',
    'Technical Analysis',
    'Fundamental Analysis',
    'Risk Management',
    'Trading Psychology',
    'Market News'
];

export default function ForumCategoryFilters({
    activeCategory,
    onCategoryChange,
    navigateToForum = false
}: ForumCategoryFiltersProps) {
    const router = useRouter();

    const handleCategoryClick = (category: string) => {
        if (navigateToForum) {
            // Navigate to forum page with category as URL parameter
            router.push(`/forum?category=${encodeURIComponent(category)}`);
        } else {
            // Normal category change behavior
            onCategoryChange(category);
        }
    };

    return (
        <div className={styles['forum-category-filters']}>
            {/* {navigateToForum && (
                <div className={styles['forum-category-filters__hint']}>
                    <span>Click any category to browse all posts in that category</span>
                </div>
            )} */}
            <div className={styles['forum-category-filters__row']}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles['forum-category-filters__button']} ${activeCategory === category ? styles['forum-category-filters__button--active'] : ''
                            }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        <span>{category}</span>
                    </button>
                ))}
            </div>

        </div>
    );
} 