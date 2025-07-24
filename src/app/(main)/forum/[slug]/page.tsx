"use client";

import { use } from 'react';
import PageWithHeroLayout from "@/components/layouts/PageWithHeroLayout";
import SingleForumPostLayout from "@/components/forum/SingleForumPostLayout";

export default function ForumPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);

    return (
        <>
            <PageWithHeroLayout alignItems="flex-start" stickyAside={true}>
                <SingleForumPostLayout slug={resolvedParams.slug} />
            </PageWithHeroLayout>
        </>
    );
} 