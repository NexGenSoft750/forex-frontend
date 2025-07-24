import { useState } from 'react';
import ForumCategoryFilters from './ForumCategoryFilters';
import SingleForumPostCard from './SingleForumPostCard';
import SingleForumPostReplies from './SingleForumPostReplies';
import { getForumPostBySlug, getForumRepliesBySlug } from '@/lib/forumData';

type SingleForumPostLayoutProps = {
    slug: string;
}

export default function SingleForumPostLayout({ slug }: SingleForumPostLayoutProps) {
    const [, setActiveCategory] = useState('Trading Discussions');

    const post = getForumPostBySlug(slug);
    const replies = getForumRepliesBySlug(slug);

    if (!post) {
        return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <p>The requested forum post could not be found.</p>
            </div>
        );
    }

    return (
        <>
            <ForumCategoryFilters
                activeCategory={post.category}
                onCategoryChange={setActiveCategory}
                navigateToForum={true}
            />
            <SingleForumPostCard post={post} />
            <SingleForumPostReplies replies={replies} />
        </>
    );
}