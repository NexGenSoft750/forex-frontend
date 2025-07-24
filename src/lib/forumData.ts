export type ForumPost = {
    id: string;
    slug: string;
    title: string;
    date: string;
    summary: string;
    repliesCount: number;
    category: string;
    imageSrc?: string;
}

export type ForumReply = {
    id: string;
    userName: string;
    timestamp: string;
    replyContent: string;
    avatarSrc: string;
    hasImage?: boolean;
    imageSrc?: string;
}

export const forumPosts: ForumPost[] = [
    // Trading Discussions
    {
        id: '1',
        slug: 'scalper-trading-technique',
        title: 'Scalper Trading Technique',
        date: 'Jul 10, 7:45 pm (3 hr ago)',
        summary: 'EURUSD encountered strong resistance today at 1:17:49 and subsequently dropped to 1:17:00. Following the release of US info jobless claims, which came in below forecast, the pair fell further, breaking below support to 1.1650. The jobless claims data came in at 210K vs the expected 225K, which strengthened the USD and pushed EURUSD lower. This move confirms our bearish bias on the pair. Key support levels to watch are 1.1650 and 1.1620. If these levels break, we could see further downside to 1.1580. The technical indicators are showing oversold conditions, so we might see a bounce from current levels, but the overall trend remains bearish.',
        repliesCount: 2289,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '2',
        slug: 'best-entry-points-eurusd',
        title: 'Best Entry Points for EURUSD',
        date: 'Jul 10, 6:30 pm (4 hr ago)',
        summary: 'Looking at the current EURUSD setup, I\'ve identified several key entry points based on support and resistance levels. The pair is currently testing the 1.0850 level which has acted as strong support multiple times in the past week. My analysis shows three potential entry points: 1) Long at 1.0850 with stop loss at 1.0820, 2) Long at 1.0870 if we get a breakout above resistance, 3) Short at 1.0890 if the resistance holds. The RSI is showing bullish divergence on the 4H chart, which suggests a potential reversal. Volume analysis confirms increasing buying pressure at support levels.',
        repliesCount: 1567,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '3',
        slug: 'gbpusd-breakout-analysis',
        title: 'GBPUSD Breakout Analysis',
        date: 'Jul 10, 5:15 pm (5 hr ago)',
        summary: 'GBPUSD has finally broken out of its consolidation range. The breakout occurred with strong volume, suggesting this is a genuine move rather than a false breakout... Read more',
        repliesCount: 892,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '4',
        slug: 'usdjpy-trend-analysis',
        title: 'USDJPY Trend Analysis',
        date: 'Jul 10, 4:00 pm (6 hr ago)',
        summary: 'USDJPY continues its upward momentum, breaking through key resistance levels. The pair is now approaching the 160.00 psychological level. Here\'s my analysis... Read more',
        repliesCount: 445,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '5',
        slug: 'audusd-support-test',
        title: 'AUDUSD Support Test',
        date: 'Jul 10, 3:30 pm (7 hr ago)',
        summary: 'AUDUSD is currently testing a major support level at 0.6650. The pair has bounced from this level multiple times in the past. Here\'s my analysis... Read more',
        repliesCount: 334,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '6',
        slug: 'nzdusd-breakout-setup',
        title: 'NZDUSD Breakout Setup',
        date: 'Jul 10, 3:00 pm (8 hr ago)',
        summary: 'NZDUSD is forming a potential breakout pattern. The pair has been consolidating in a tight range and is approaching resistance. Here\'s what to watch... Read more',
        repliesCount: 278,
        category: 'Trading Discussions',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Trading Strategies
    {
        id: '7',
        slug: 'advanced-technical-analysis',
        title: 'Advanced Technical Analysis',
        date: 'Jul 10, 6:30 pm (4 hr ago)',
        summary: 'GBPUSD showing interesting patterns on the 4H timeframe. The pair has formed a double top pattern and is currently testing the neckline support. Volume analysis suggests... Read more',
        repliesCount: 1567,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '8',
        slug: 'fibonacci-retracement-strategy',
        title: 'Fibonacci Retracement Strategy',
        date: 'Jul 10, 5:45 pm (5 hr ago)',
        summary: 'Using Fibonacci retracement levels for entry and exit points has significantly improved my trading results. Here\'s my step-by-step approach to identifying key levels... Read more',
        repliesCount: 1234,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '9',
        slug: 'risk-management-techniques',
        title: 'Risk Management Techniques',
        date: 'Jul 10, 4:30 pm (6 hr ago)',
        summary: 'Proper risk management is crucial for long-term success. I\'ve developed a comprehensive risk management system that includes position sizing, stop losses, and profit targets... Read more',
        repliesCount: 987,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '10',
        slug: 'swing-trading-vs-day-trading',
        title: 'Swing Trading vs Day Trading',
        date: 'Jul 10, 3:15 pm (7 hr ago)',
        summary: 'Comparison of swing trading and day trading approaches. Both have their merits, but choosing the right one depends on your personality, time availability, and risk tolerance... Read more',
        repliesCount: 756,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '11',
        slug: 'price-action-trading-strategy',
        title: 'Price Action Trading Strategy',
        date: 'Jul 10, 2:45 pm (8 hr ago)',
        summary: 'Price action trading focuses on reading market structure and price movements. Here\'s my comprehensive guide to mastering price action patterns... Read more',
        repliesCount: 1123,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '12',
        slug: 'breakout-trading-techniques',
        title: 'Breakout Trading Techniques',
        date: 'Jul 10, 2:15 pm (9 hr ago)',
        summary: 'Breakout trading can be highly profitable when done correctly. Here\'s my strategy for identifying and trading breakouts with proper risk management... Read more',
        repliesCount: 945,
        category: 'Trading Strategies',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Broker Reviews
    {
        id: '13',
        slug: 'broker-comparison-2024',
        title: 'Broker Comparison 2024',
        date: 'Jul 10, 5:15 pm (5 hr ago)',
        summary: 'Comprehensive review of top forex brokers including spreads, execution speed, and customer service. Here\'s my experience with the major players in the market... Read more',
        repliesCount: 892,
        category: 'Broker Reviews',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '14',
        slug: 'best-ecn-brokers-scalping',
        title: 'Best ECN Brokers for Scalping',
        date: 'Jul 10, 4:45 pm (6 hr ago)',
        summary: 'For scalpers, choosing the right ECN broker is crucial. Low spreads, fast execution, and no dealing desk intervention are essential. Here are my top recommendations... Read more',
        repliesCount: 654,
        category: 'Broker Reviews',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '15',
        slug: 'avoiding-scam-brokers',
        title: 'Avoiding Scam Brokers',
        date: 'Jul 10, 3:30 pm (7 hr ago)',
        summary: 'Unfortunately, there are many scam brokers in the forex market. Here\'s how to identify red flags and protect yourself from fraudulent brokers... Read more',
        repliesCount: 543,
        category: 'Broker Reviews',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '16',
        slug: 'mt4-vs-mt5-comparison',
        title: 'MT4 vs MT5 - Which Platform?',
        date: 'Jul 10, 2:15 pm (8 hr ago)',
        summary: 'Detailed comparison of MetaTrader 4 and MetaTrader 5 platforms. Each has its advantages, and the choice depends on your trading style and requirements... Read more',
        repliesCount: 432,
        category: 'Broker Reviews',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Trading Journals
    {
        id: '17',
        slug: 'my-trading-journal-week-28',
        title: 'My Trading Journal - Week 28',
        date: 'Jul 10, 4:00 pm (6 hr ago)',
        summary: 'This week was challenging with the NFP release causing unexpected volatility. I managed to close 8 trades with 6 winners and 2 losers. Here\'s my detailed analysis... Read more',
        repliesCount: 445,
        category: 'Trading Journals',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '18',
        slug: 'monthly-performance-review',
        title: 'Monthly Performance Review',
        date: 'Jul 10, 3:00 pm (7 hr ago)',
        summary: 'June was my best month so far with a 15% return on capital. Here\'s a breakdown of my trades, lessons learned, and areas for improvement... Read more',
        repliesCount: 321,
        category: 'Trading Journals',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '19',
        slug: 'learning-from-losses',
        title: 'Learning from Losses',
        date: 'Jul 10, 2:00 pm (8 hr ago)',
        summary: 'Every loss is a learning opportunity. In this journal entry, I analyze my recent losing trades and identify what went wrong and how to improve... Read more',
        repliesCount: 234,
        category: 'Trading Journals',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '20',
        slug: 'psychology-in-trading',
        title: 'Psychology in Trading',
        date: 'Jul 10, 1:00 pm (9 hr ago)',
        summary: 'Trading psychology is often overlooked but crucial for success. Here\'s how I manage emotions, maintain discipline, and stay focused during volatile markets... Read more',
        repliesCount: 189,
        category: 'Trading Journals',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Market Analysis
    {
        id: '21',
        slug: 'gold-analysis-technical-setup',
        title: 'Gold Analysis - Technical Setup',
        date: 'Jul 10, 3:30 pm (7 hr ago)',
        summary: 'Gold is showing a bullish flag pattern on the daily chart. The metal has been consolidating between $2,300 and $2,350. Key resistance levels to watch... Read more',
        repliesCount: 1234,
        category: 'Market Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '22',
        slug: 'oil-price-forecast',
        title: 'Oil Price Forecast',
        date: 'Jul 10, 2:45 pm (8 hr ago)',
        summary: 'Crude oil prices are influenced by multiple factors including supply, demand, and geopolitical events. Here\'s my analysis of current market conditions... Read more',
        repliesCount: 876,
        category: 'Market Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '23',
        slug: 'crypto-market-update',
        title: 'Crypto Market Update',
        date: 'Jul 10, 2:00 pm (8 hr ago)',
        summary: 'Bitcoin and other cryptocurrencies are showing interesting patterns. The market sentiment has shifted, and here\'s what I expect in the coming weeks... Read more',
        repliesCount: 654,
        category: 'Market Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '24',
        slug: 'stock-market-correlation',
        title: 'Stock Market Correlation',
        date: 'Jul 10, 1:15 pm (9 hr ago)',
        summary: 'Understanding the correlation between forex and stock markets can provide valuable insights. Here\'s my analysis of current correlations and their implications... Read more',
        repliesCount: 543,
        category: 'Market Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Technical Analysis
    {
        id: '25',
        slug: 'rsi-divergence-patterns',
        title: 'RSI Divergence Patterns',
        date: 'Jul 10, 12:45 pm (10 hr ago)',
        summary: 'RSI divergence is one of the most reliable technical indicators. Here\'s how to identify and trade divergence patterns effectively... Read more',
        repliesCount: 876,
        category: 'Technical Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '26',
        slug: 'moving-average-crossovers',
        title: 'Moving Average Crossovers',
        date: 'Jul 10, 11:30 am (11 hr ago)',
        summary: 'Golden cross and death cross patterns can signal major trend changes. Here\'s my analysis of current MA crossovers in major pairs... Read more',
        repliesCount: 654,
        category: 'Technical Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '27',
        slug: 'support-resistance-levels',
        title: 'Support and Resistance Levels',
        date: 'Jul 10, 10:15 am (12 hr ago)',
        summary: 'Identifying key support and resistance levels is crucial for successful trading. Here\'s my method for finding and validating these levels... Read more',
        repliesCount: 432,
        category: 'Technical Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '28',
        slug: 'bollinger-bands-strategy',
        title: 'Bollinger Bands Strategy',
        date: 'Jul 10, 9:45 am (13 hr ago)',
        summary: 'Bollinger Bands are excellent for identifying overbought and oversold conditions. Here\'s my strategy for trading with Bollinger Bands... Read more',
        repliesCount: 567,
        category: 'Technical Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Fundamental Analysis
    {
        id: '29',
        slug: 'interest-rate-impact-forex',
        title: 'Interest Rate Impact on Forex',
        date: 'Jul 10, 9:00 am (13 hr ago)',
        summary: 'Central bank interest rate decisions have a significant impact on currency pairs. Here\'s how to analyze and trade these fundamental events... Read more',
        repliesCount: 765,
        category: 'Fundamental Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '30',
        slug: 'economic-calendar-trading',
        title: 'Economic Calendar Trading',
        date: 'Jul 10, 8:30 am (14 hr ago)',
        summary: 'Trading around major economic events requires careful planning. Here\'s my strategy for trading news releases and economic data... Read more',
        repliesCount: 543,
        category: 'Fundamental Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '31',
        slug: 'gdp-currency-strength',
        title: 'GDP and Currency Strength',
        date: 'Jul 10, 7:15 am (15 hr ago)',
        summary: 'GDP data is a key fundamental indicator. Here\'s how to interpret GDP releases and their impact on currency movements... Read more',
        repliesCount: 321,
        category: 'Fundamental Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '32',
        slug: 'inflation-data-analysis',
        title: 'Inflation Data Analysis',
        date: 'Jul 10, 6:45 am (16 hr ago)',
        summary: 'Inflation data is crucial for understanding central bank policy. Here\'s my analysis of current inflation trends and their market impact... Read more',
        repliesCount: 456,
        category: 'Fundamental Analysis',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Risk Management
    {
        id: '33',
        slug: 'position-sizing-strategies',
        title: 'Position Sizing Strategies',
        date: 'Jul 10, 6:00 am (16 hr ago)',
        summary: 'Proper position sizing is essential for long-term success. Here\'s my risk-based position sizing formula and how to implement it... Read more',
        repliesCount: 987,
        category: 'Risk Management',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '34',
        slug: 'stop-loss-placement',
        title: 'Stop Loss Placement Techniques',
        date: 'Jul 10, 5:30 am (17 hr ago)',
        summary: 'Where you place your stop loss can make or break a trade. Here are my proven techniques for optimal stop loss placement... Read more',
        repliesCount: 654,
        category: 'Risk Management',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '35',
        slug: 'risk-reward-ratios',
        title: 'Risk-Reward Ratios',
        date: 'Jul 10, 4:15 am (18 hr ago)',
        summary: 'Maintaining proper risk-reward ratios is crucial. Here\'s how to calculate and maintain optimal ratios for consistent profits... Read more',
        repliesCount: 432,
        category: 'Risk Management',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '36',
        slug: 'portfolio-risk-management',
        title: 'Portfolio Risk Management',
        date: 'Jul 10, 3:45 am (19 hr ago)',
        summary: 'Managing risk across your entire portfolio is essential. Here\'s my approach to portfolio risk management and diversification... Read more',
        repliesCount: 567,
        category: 'Risk Management',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Trading Psychology
    {
        id: '37',
        slug: 'emotional-control-trading',
        title: 'Emotional Control in Trading',
        date: 'Jul 10, 3:00 am (19 hr ago)',
        summary: 'Controlling emotions is the key to successful trading. Here are my techniques for maintaining emotional discipline during volatile markets... Read more',
        repliesCount: 789,
        category: 'Trading Psychology',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '38',
        slug: 'building-trading-confidence',
        title: 'Building Trading Confidence',
        date: 'Jul 10, 2:30 am (20 hr ago)',
        summary: 'Confidence is crucial for trading success. Here\'s how to build and maintain confidence through proper preparation and mindset... Read more',
        repliesCount: 567,
        category: 'Trading Psychology',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '39',
        slug: 'overcoming-trading-fears',
        title: 'Overcoming Trading Fears',
        date: 'Jul 10, 1:15 am (21 hr ago)',
        summary: 'Fear can paralyze traders and prevent them from taking profitable opportunities. Here\'s how to identify and overcome trading fears... Read more',
        repliesCount: 345,
        category: 'Trading Psychology',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '40',
        slug: 'trading-discipline-development',
        title: 'Trading Discipline Development',
        date: 'Jul 10, 12:45 am (22 hr ago)',
        summary: 'Developing trading discipline is essential for success. Here\'s my approach to building and maintaining trading discipline... Read more',
        repliesCount: 456,
        category: 'Trading Psychology',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },

    // Market News
    {
        id: '41',
        slug: 'fed-rate-decision-breaking',
        title: 'Breaking: Fed Rate Decision',
        date: 'Jul 10, 12:00 am (22 hr ago)',
        summary: 'Federal Reserve maintains current interest rates as expected. Market reaction and implications for major currency pairs... Read more',
        repliesCount: 1234,
        category: 'Market News',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '42',
        slug: 'ecb-policy-update',
        title: 'ECB Policy Update',
        date: 'Jul 9, 11:30 pm (23 hr ago)',
        summary: 'European Central Bank announces new monetary policy measures. Impact on EUR pairs and market sentiment analysis... Read more',
        repliesCount: 876,
        category: 'Market News',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '43',
        slug: 'geopolitical-tensions-impact',
        title: 'Geopolitical Tensions Impact',
        date: 'Jul 9, 10:15 pm (24 hr ago)',
        summary: 'Recent geopolitical developments are affecting market volatility. Safe-haven currencies and risk sentiment analysis... Read more',
        repliesCount: 654,
        category: 'Market News',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    },
    {
        id: '44',
        slug: 'boe-policy-update',
        title: 'BoE Policy Update',
        date: 'Jul 9, 9:15 pm (26 hr ago)',
        summary: 'Bank of England announces monetary policy changes. Impact on GBP pairs and market sentiment... Read more',
        repliesCount: 567,
        category: 'Market News',
        imageSrc: '/images/dashboard/forum/single-forum-post-card-img.svg'
    }
];

export const forumReplies: Record<string, ForumReply[]> = {
    'scalper-trading-technique': [
        {
            id: '1',
            userName: 'John Aleander',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: true,
            imageSrc: '/images/insights/currency-fundamental.png'
        },
        {
            id: '2',
            userName: 'Sarah Johnson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great analysis! I\'ve been using scalping techniques for EURUSD and your entry points align perfectly with my strategy. The quick entries and exits work well with the current volatility.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '3',
            userName: 'Mike Chen',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I agree with your approach. The resistance level at 1.17:49 was indeed a key turning point. Have you considered the impact of the upcoming NFP release on these levels?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '4',
            userName: 'David Wilson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Excellent breakdown of the scalping technique. The jobless claims data was the catalyst we needed. What\'s your stop loss strategy for these quick trades?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '5',
            userName: 'Emma Davis',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'This scalping technique has been working wonders for me! I\'ve been using similar entry points and the quick profit taking approach really helps manage risk. What timeframes do you prefer for scalping?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '6',
            userName: 'Robert Smith',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The resistance at 1.17:49 was indeed a perfect entry point. I entered a short position there and managed to capture 15 pips. Your analysis is spot on!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '7',
            userName: 'Lisa Tanaka',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'ve been following your scalping posts for weeks now. The consistency in your analysis is impressive. How do you handle the psychological aspect of quick trades?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '8',
            userName: 'Alex Thompson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The jobless claims data was the perfect catalyst. I was already positioned for this move and it worked out perfectly. Your fundamental analysis combined with technical levels is excellent.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '9',
            userName: 'Maria Garcia',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'m new to scalping and this post has been incredibly helpful. The step-by-step breakdown makes it easy to understand. Do you recommend any specific indicators for scalping?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '10',
            userName: 'James Wilson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The support levels you mentioned at 1.1650 and 1.1620 are crucial. I\'ve been watching these levels and they\'ve held multiple times. Great technical analysis!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '11',
            userName: 'Sophie Brown',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your bearish bias is well-founded. The technical indicators showing oversold conditions might give us a bounce, but the overall trend is definitely down. What\'s your target for the next move?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '12',
            userName: 'Kevin Lee',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'ve been using this scalping technique on other pairs too. It works well with GBPUSD and USDJPY as well. The key is finding the right entry points and managing risk properly.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '13',
            userName: 'Anna Rodriguez',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The quick entries and exits strategy is perfect for my trading style. I don\'t have time to hold positions for long periods, so scalping works great for me. Thanks for sharing!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '14',
            userName: 'Tom Anderson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your analysis of the EURUSD drop is spot on. I was watching the same levels and the breakdown below 1.1650 was the confirmation I needed. Great work!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '15',
            userName: 'Rachel Green',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The volatility in EURUSD right now is perfect for scalping. Your technique of using support and resistance levels for entries is very effective. How do you determine your position sizes?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '16',
            userName: 'Chris Martin',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'ve been following your posts for months and your scalping technique has helped me improve my trading significantly. The risk management aspect is crucial and you explain it well.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '17',
            userName: 'Jennifer White',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The resistance level at 1.17:49 was a perfect entry point for shorts. I managed to capture 20 pips on that move. Your analysis is always reliable!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '18',
            userName: 'Michael Johnson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your fundamental analysis combined with technical levels is what makes your posts so valuable. The jobless claims data was indeed the catalyst we needed. Keep up the great work!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '19',
            userName: 'Amanda Clark',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'m a beginner trader and your scalping posts have been incredibly educational. The way you break down the analysis makes it easy to understand. Thank you for sharing your knowledge!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '20',
            userName: 'Daniel Taylor',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The support levels you mentioned are exactly what I\'ve been watching. The bounce from 1.1620 could be significant. What\'s your take on the next resistance level?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '21',
            userName: 'Nicole Adams',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your scalping technique has helped me become more consistent in my trading. The quick profit taking approach really helps with psychological discipline. Great post!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '22',
            userName: 'Ryan Cooper',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The EURUSD analysis is spot on. I\'ve been using similar entry points and the results have been excellent. Your technical analysis is always reliable.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '23',
            userName: 'Laura Mitchell',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I love how you combine fundamental and technical analysis. The jobless claims data was the perfect catalyst for the move. Your posts are always well-researched.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '24',
            userName: 'Steven Wright',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The resistance at 1.17:49 was indeed a key level. I entered a short position there and it worked out perfectly. Your analysis is always on point!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '25',
            userName: 'Jessica Hall',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your scalping technique has revolutionized my trading approach. The quick entries and exits strategy is perfect for managing risk. Thank you for sharing your expertise!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '26',
            userName: 'Brian Lewis',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The support levels at 1.1650 and 1.1620 are crucial for the next move. I\'m watching these levels closely. Your technical analysis is always reliable.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '27',
            userName: 'Megan Turner',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'ve been following your scalping posts for weeks and they\'ve helped me improve my trading significantly. The risk management aspect is crucial and you explain it well.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '28',
            userName: 'Andrew Phillips',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The bearish bias is well-founded given the technical indicators. The oversold conditions might give us a bounce, but the trend is definitely down. Great analysis!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '29',
            userName: 'Samantha Carter',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your EURUSD analysis is always spot on. The quick entries and exits strategy works perfectly with the current volatility. Keep up the excellent work!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '30',
            userName: 'Gregory Moore',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The jobless claims data was indeed the catalyst we needed. I was already positioned for this move and it worked out perfectly. Your fundamental analysis is excellent.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '31',
            userName: 'Victoria Scott',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'m new to scalping and your posts have been incredibly helpful. The step-by-step breakdown makes it easy to understand. Do you recommend any specific timeframes?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '32',
            userName: 'Patrick Young',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The resistance level at 1.17:49 was a perfect entry point. I managed to capture 18 pips on that move. Your technical analysis is always reliable!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '33',
            userName: 'Diana King',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your scalping technique has helped me become more consistent in my trading. The quick profit taking approach really helps with psychological discipline.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '34',
            userName: 'Jonathan Baker',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The support levels you mentioned are exactly what I\'ve been watching. The bounce from 1.1620 could be significant. What\'s your target for the next move?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '35',
            userName: 'Rebecca Nelson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I love how you combine fundamental and technical analysis. The jobless claims data was the perfect catalyst for the move. Your posts are always well-researched.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '36',
            userName: 'Timothy Hill',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The EURUSD drop below 1.1650 was the confirmation I needed. Your analysis of the breakdown is spot on. Great work on identifying the key levels!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '37',
            userName: 'Christine Allen',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your scalping posts have been incredibly educational. The way you break down the analysis makes it easy to understand. Thank you for sharing your knowledge!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '38',
            userName: 'Nathan Ward',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The volatility in EURUSD right now is perfect for scalping. Your technique of using support and resistance levels for entries is very effective.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '39',
            userName: 'Olivia Foster',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I\'ve been following your posts for months and your scalping technique has helped me improve my trading significantly. The risk management aspect is crucial.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '40',
            userName: 'Eric Rogers',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The bearish bias is well-founded given the technical indicators. The oversold conditions might give us a bounce, but the overall trend remains bearish. Excellent analysis!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'best-entry-points-eurusd': [
        {
            id: '1',
            userName: 'Sarah Johnson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great analysis! I\'ve been watching EURUSD for the past week and your entry points align perfectly with my technical analysis. The 1.0850 level has been acting as strong support.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        },
        {
            id: '2',
            userName: 'Mike Chen',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'I agree with your analysis. The RSI divergence on the 4H chart is particularly interesting. Have you considered the impact of the upcoming ECB meeting on these levels?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'gbpusd-breakout-analysis': [
        {
            id: '1',
            userName: 'David Wilson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Excellent breakout analysis! The volume confirmation is crucial. I\'ve been waiting for this breakout for weeks. What\'s your target for this move?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'usdjpy-trend-analysis': [
        {
            id: '1',
            userName: 'Lisa Tanaka',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The 160.00 level is indeed a major psychological barrier. I\'m watching for any intervention signals from the BoJ. Great technical analysis!',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'advanced-technical-analysis': [
        {
            id: '1',
            userName: 'Robert Smith',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The double top pattern is very clear on the 4H chart. Your volume analysis adds great confirmation. What\'s your stop loss strategy for this setup?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'fibonacci-retracement-strategy': [
        {
            id: '1',
            userName: 'Emma Davis',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Fibonacci levels have been my go-to tool for years. Your step-by-step approach is very clear. Do you use any specific Fibonacci ratios more than others?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'risk-management-techniques': [
        {
            id: '1',
            userName: 'Alex Thompson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Risk management is the foundation of successful trading. Your comprehensive system sounds very thorough. What percentage of your account do you risk per trade?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'swing-trading-vs-day-trading': [
        {
            id: '1',
            userName: 'Maria Garcia',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great comparison! I\'ve tried both approaches and found that swing trading suits my personality better. Less stress and more time for analysis.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'broker-comparison-2024': [
        {
            id: '1',
            userName: 'James Brown',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'This comparison is very helpful! I\'ve been looking to switch brokers and your review covers all the important factors. Which broker would you recommend for a beginner?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'best-ecn-brokers-scalping': [
        {
            id: '1',
            userName: 'Tom Anderson',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'As a scalper, execution speed is everything. Your recommendations are spot on. Have you tested the execution speeds personally?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'audusd-support-test': [
        {
            id: '1',
            userName: 'Aussie Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great analysis of the 0.6650 support level. I\'ve been watching this level for weeks and it has held multiple times. The bounce from this level could be significant.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'nzdusd-breakout-setup': [
        {
            id: '1',
            userName: 'Kiwi Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The consolidation pattern is very clear. I\'m waiting for the breakout confirmation with volume. What resistance level are you targeting?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'price-action-trading-strategy': [
        {
            id: '1',
            userName: 'Price Action Pro',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Excellent guide to price action patterns. Your examples are very clear and practical. Do you have any specific patterns you prefer for different market conditions?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'breakout-trading-techniques': [
        {
            id: '1',
            userName: 'Breakout Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Breakout trading is my favorite strategy. Your risk management approach is crucial. How do you handle false breakouts?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'avoiding-scam-brokers': [
        {
            id: '1',
            userName: 'Safe Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'This is such an important topic. I\'ve been scammed before and it\'s devastating. Your red flags list is very helpful for new traders.',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'mt4-vs-mt5-comparison': [
        {
            id: '1',
            userName: 'Platform Expert',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great comparison! I use both platforms for different purposes. MT4 for manual trading and MT5 for automated strategies. What\'s your preference?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'learning-from-losses': [
        {
            id: '1',
            userName: 'Learning Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Every loss teaches us something valuable. Your analysis of what went wrong is very honest and helpful. What was your biggest lesson from this trade?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'psychology-in-trading': [
        {
            id: '1',
            userName: 'Mindful Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Trading psychology is often overlooked but so important. Your techniques for managing emotions are very practical. Do you use any meditation practices?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'crypto-market-update': [
        {
            id: '1',
            userName: 'Crypto Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Bitcoin\'s pattern is indeed interesting. The market sentiment shift you mentioned is very real. What\'s your target for BTC in the coming weeks?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'stock-market-correlation': [
        {
            id: '1',
            userName: 'Multi-Asset Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Understanding correlations is crucial for portfolio management. Your analysis of forex-stock correlations is very insightful. How do you use this in your trading?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'moving-average-crossovers': [
        {
            id: '1',
            userName: 'MA Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Golden cross and death cross patterns are classic signals. Your analysis of current MA crossovers is very timely. Which timeframe do you prefer for these signals?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'support-resistance-levels': [
        {
            id: '1',
            userName: 'Level Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Your method for finding and validating support/resistance levels is very systematic. How do you confirm these levels before trading?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'bollinger-bands-strategy': [
        {
            id: '1',
            userName: 'BB Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Bollinger Bands are excellent for identifying overbought/oversold conditions. Your strategy is very practical. What settings do you use for the bands?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'gdp-currency-strength': [
        {
            id: '1',
            userName: 'Fundamental Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'GDP data is indeed a key fundamental indicator. Your interpretation guide is very helpful. How do you prepare for GDP releases?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'inflation-data-analysis': [
        {
            id: '1',
            userName: 'Inflation Watcher',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Inflation data drives central bank policy decisions. Your analysis of current trends is very relevant. What impact do you expect on currency pairs?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'stop-loss-placement': [
        {
            id: '1',
            userName: 'Risk Manager',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Stop loss placement is crucial for risk management. Your techniques are very practical. How do you adjust stops for different market conditions?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'risk-reward-ratios': [
        {
            id: '1',
            userName: 'Ratio Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Maintaining proper risk-reward ratios is essential for long-term success. Your calculation method is very clear. What\'s your minimum R:R ratio?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'portfolio-risk-management': [
        {
            id: '1',
            userName: 'Portfolio Manager',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Portfolio risk management is often overlooked. Your approach to diversification is very comprehensive. How do you allocate risk across different pairs?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'building-trading-confidence': [
        {
            id: '1',
            userName: 'Confidence Builder',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Building confidence is crucial for trading success. Your techniques for preparation and mindset are very helpful. How long did it take you to build confidence?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'overcoming-trading-fears': [
        {
            id: '1',
            userName: 'Fearless Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Fear can indeed paralyze traders. Your approach to identifying and overcoming fears is very practical. What was your biggest fear and how did you overcome it?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'ecb-policy-update': [
        {
            id: '1',
            userName: 'EUR Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The ECB policy changes are significant for EUR pairs. Your analysis of the impact is very timely. How are you positioning for these changes?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'geopolitical-tensions-impact': [
        {
            id: '1',
            userName: 'News Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Geopolitical events are major market movers. Your analysis of safe-haven flows is very relevant. Which currencies are you watching for safe-haven demand?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'boe-policy-update': [
        {
            id: '1',
            userName: 'GBP Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The BoE policy changes are crucial for GBP pairs. Your analysis of the market sentiment is very helpful. What\'s your outlook for GBPUSD?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'my-trading-journal-week-28': [
        {
            id: '1',
            userName: 'John Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great journal entry! I also had a challenging week with the NFP release. Your analysis of the 6 winners vs 2 losers is very insightful. What was your biggest lesson learned?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'monthly-performance-review': [
        {
            id: '1',
            userName: 'Sarah Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: '15% return is impressive! I\'d love to see more details about your winning trades. What was your biggest winning trade and what setup led to it?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'gold-analysis-technical-setup': [
        {
            id: '1',
            userName: 'Gold Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The bullish flag pattern is very clear. I\'m also watching the $2,350 resistance level. Do you think we\'ll see a breakout this week?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'oil-price-forecast': [
        {
            id: '1',
            userName: 'Oil Analyst',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Great analysis of the supply and demand factors. The geopolitical tensions are definitely adding volatility. What\'s your price target for the next quarter?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'rsi-divergence-patterns': [
        {
            id: '1',
            userName: 'Technical Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'RSI divergence is indeed one of my favorite signals. Your examples are very clear. Do you use any specific timeframe for divergence analysis?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'interest-rate-impact-forex': [
        {
            id: '1',
            userName: 'Fundamental Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Excellent breakdown of how interest rates affect currency pairs. The carry trade implications are particularly interesting. How do you prepare for rate decisions?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'position-sizing-strategies': [
        {
            id: '1',
            userName: 'Risk Manager',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Position sizing is crucial for survival. Your risk-based formula sounds very practical. What percentage of your account do you typically risk per trade?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'emotional-control-trading': [
        {
            id: '1',
            userName: 'Psychology Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'Emotional control is often the difference between success and failure. Your techniques for maintaining discipline are very helpful. Do you use any specific meditation practices?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ],
    'fed-rate-decision-breaking': [
        {
            id: '1',
            userName: 'News Trader',
            timestamp: 'Jan 14, 2025 pm',
            replyContent: 'The Fed\'s decision was expected but the market reaction was interesting. USD pairs are showing mixed signals. How are you positioning for the next few days?',
            avatarSrc: '/images/dashboard/account-profile.jpg',
            hasImage: false
        }
    ]
};

export function getForumPostBySlug(slug: string): ForumPost | undefined {
    return forumPosts.find(post => post.slug === slug);
}

export function getForumRepliesBySlug(slug: string): ForumReply[] {
    return forumReplies[slug] || [];
} 