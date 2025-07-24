import styles from './ForumLayout.module.scss';
import ForumCategoryFilters from './ForumCategoryFilters';
import ForumPostCard from './ForumPostCard';
import ForumPagination from './ForumPagination';
import { useState, useEffect } from 'react';

type ForumPost = {
    id: string;
    title: string;
    date: string;
    summary: string;
    repliesCount: number;
    category: string;
    slug?: string;
}

type ForumLayoutProps = {
    posts: ForumPost[];
    initialCategory?: string | null;
}

export default function ForumLayout({ posts, initialCategory }: ForumLayoutProps) {
    const [activeCategory, setActiveCategory] = useState('Trading Discussions');
    const [currentPage, setCurrentPage] = useState(1);

    // Set initial category from URL parameter
    useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
            setCurrentPage(1); // Reset to page 1 when setting initial category
        }
    }, [initialCategory]);

    // Reset pagination to page 1 when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory]);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1); // Reset to page 1 when changing category
    };

    const filteredPosts = posts.filter(post => post.category === activeCategory);
    const postsPerPage = 4;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, endIndex);

    return (
        <div className={styles['forum-layout']}>
            <ForumCategoryFilters
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
            />

            <div className={styles['forum-layout__section-title']}>
                <span>{activeCategory}</span>
            </div>

            <div className={styles['forum-layout__posts']}>
                {currentPosts.map((post) => (
                    <ForumPostCard
                        key={post.id}
                        {...post}
                    />
                ))}

                <ForumPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
} 