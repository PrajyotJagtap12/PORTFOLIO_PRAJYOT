import LOGOS from "@assets/Logos";
import SCREENSHOTS from "@assets/Shots";
import MOCKUPS from "@assets/Mockup";
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}

export interface IProject {
    isHidden: boolean;
    name: string;
    shortDescription: string;
    description: string;
    demoCredentials?: {
        email?: string;
        password?: string;
    };
    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;
    theme: string;
    status: "completed" | "development";
    liveUrl: string;
    sourceUrl: string;
    technologies: ITechStack[];
    features: {
        title: string;
        description: string;
    }[];
    logoSize: number;
    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

export const TECH_STACK = {
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),
    ...buildTechStack(SKILL_STACK.StateEventStack),
    ...buildTechStack(SKILL_STACK.BackendApisStack),
    ...buildTechStack(SKILL_STACK.DatabaseStack),
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};

const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Built to adapt cleanly across desktop and mobile screen sizes.",
    },
    SEO: {
        title: "SEO Optimization",
        description: "Structured for strong metadata, discoverability, and fast first impressions.",
    },
};

export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "Indian Stocks AI",
        shortDescription: "Market dashboard and portfolio tracking web app (stocks & portfolio manager).",
        description: "Indian Stocks AI is a portfolio and market-dashboard application. It provides a heatmap overview, top stories, watchlists, and broker integrations to sync portfolios. This demo highlights real-time market layouts, account connections, and a searchable instrument modal.",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.NextmartShots,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#0B0B0B",
        status: "completed",
        liveUrl: "https://indianstocksai.netlify.app/sign-in",
        sourceUrl: "https://github.com/PrajyotJagtap12",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.TypeScript,
            TECH_STACK.RESTAPI,
            TECH_STACK.Firebase,
            TECH_STACK.Nodejs,
            TECH_STACK.Expressjs,
        ],
        features: [
            {
                title: "Market Heatmap",
                description: "Interactive treemap showing sector and ticker performance at a glance.",
            },
            {
                title: "Broker Sync",
                description: "Connect Zerodha / Groww to sync holdings and P&L into the dashboard.",
            },
            {
                title: "Search & Watchlist",
                description: "Quick search modal and saved watchlists with instrument details and news.",
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: [
            {
                title: "Live Site",
                version: "1",
                url: "https://indianstocksai.netlify.app/sign-in",
            },
        ],
    },
    {
        isHidden: false,
        name: "The Tenth Floor",
        shortDescription: "Restaurant landing page with premium dining visuals and a polished showcase experience.",
        description: "The Tenth Floor is a restaurant website featuring a premium hero section, curated dining visuals, and a polished showcase layout. The portfolio card uses a screenshot from the live site to present the project more clearly.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.TenthFloorShots,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#EAF6FF",
        status: "completed",
        liveUrl: "https://the-tenth-floor.onrender.com",
        sourceUrl: "https://github.com/PrajyotJagtap12",
        technologies: [
            TECH_STACK.Reactjs,
            TECH_STACK.JavaScript,
            TECH_STACK.RESTAPI,
            TECH_STACK.PostgreSQL,
            TECH_STACK.Nodejs,
            TECH_STACK.Expressjs,
            TECH_STACK.Git,
        ],
        features: [
            {
                title: "Multi-client Architecture",
                description: "Passenger, captain, and admin experiences share one backend while staying independent.",
            },
            {
                title: "Booking State Flow",
                description: "The booking lifecycle is modeled as a clear state machine to reduce UI crashes.",
            },
            {
                title: "Shared API Contract",
                description: "Consistent backend responses keep the clients predictable and easy to integrate.",
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: [
            {
                title: "Live Demo",
                version: "1",
                url: "https://the-tenth-floor.onrender.com",
            },
        ],
    },
    {
        isHidden: false,
        name: "Real Estate AI",
        shortDescription: "AI-driven real-estate landing page with listing discovery and premium property showcase.",
        description: "Real Estate AI is a polished property discovery site with a premium hero layout, featured homes, and AI-assisted property discovery. It is presented here with a screenshot of the live experience for a stronger portfolio showcase.",
        logoImage: LOGOS.YoatubeLogo,
        previewImage: SCREENSHOTS.SableShots,
        deviceMockupImage: MOCKUPS.YoatubeMockup,
        theme: "#FFF9E8",
        status: "completed",
        liveUrl: "https://real-estate-sable-eight.vercel.app/",
        sourceUrl: "https://github.com/PrajyotJagtap12",
        technologies: [
            TECH_STACK.Nextjs,
            TECH_STACK.Reactjs,
            TECH_STACK.TypeScript,
            TECH_STACK.RESTAPI,
            TECH_STACK.PostgreSQL,
            TECH_STACK.Prisma,
            TECH_STACK.Docker,
        ],
        features: [
            {
                title: "Premium Hero Layout",
                description: "A bold landing page designed to highlight high-value listings and convert visitors fast.",
            },
            {
                title: "Property Discovery Flow",
                description: "Users can browse featured homes, compare options, and move toward a listing decision quickly.",
            },
            {
                title: "AI Property Hub",
                description: "An AI-oriented hub surfaces smarter recommendations and a modern real-estate search experience.",
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: [
            {
                title: "Live Demo",
                version: "1",
                url: "https://real-estate-sable-eight.vercel.app/",
            },
        ],
    },
];