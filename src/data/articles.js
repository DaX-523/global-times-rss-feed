import climateVideo from '../assets/video/climate video.mp4';
import techGiantsImage from '../assets/tech-giants-unveil-ai-safety-framework-major-techn.jpg';
import spaceTourismImage from '../assets/space-tourism-milestone-achieved-first-civilian-sp.jpg';
import globalEconomicSummitImage from '../assets/global-markets-rally-on-economic-data-stock-market.jpg';
import CryptoCurrencyImage from '../assets/cryptocurrency-regulation-framework-proposed.jpg';
import electricVehicleMarketImage from '../assets/electric-vehicle-market-expansion-major-automakers.jpg';
import BreaktroughImage from '../assets/breakthrough-in-quantum-computing.jpg';
import GeneTherapyImage from '../assets/gene-therapy-success-in-cancer-treatment.jpg';
import OceanCleanupImage from '../assets/ocean-cleanup-technology-breakthrough (1).jpg';

export const articles = {
  'climate-summit': {
    id: 'climate-summit',
    title: "GLOBAL CLIMATE SUMMIT ANNOUNCES HISTORIC AGREEMENT",
    description: "In a groundbreaking development that has captured the world's attention, world leaders have reached a historic agreement on climate action, setting ambitious targets for carbon reduction and establishing a $100 billion climate fund for developing nations.",
    category: "Global Affairs",
    timestamp: "2 hours ago",
    author: "Sarah Chen",
    content: `
      <p class="text-xl leading-relaxed mb-6">In a historic moment that will be remembered for generations to come, world leaders have reached a groundbreaking agreement on climate action. The landmark deal, announced today at the Global Climate Summit, sets unprecedented targets for carbon reduction and establishes a $100 billion climate fund for developing nations.</p>
      
      <p class="text-xl leading-relaxed mb-6">The agreement, which has been years in the making, represents a turning point in the global fight against climate change. Key provisions include:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>50% reduction in global emissions by 2030</li>
        <li>Establishment of a $100 billion climate fund</li>
        <li>Mandatory reporting of emissions by all nations</li>
        <li>Support for developing nations' transition to clean energy</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This is a moment of hope for our planet. We have shown that when the world comes together, we can achieve the impossible."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The agreement has been met with widespread acclaim from environmental groups and climate scientists, who have long called for such decisive action. However, some critics argue that the targets, while ambitious, may not be enough to prevent the worst effects of climate change.</p>
      
      <p class="text-xl leading-relaxed mb-6">As the world watches this historic moment unfold, the focus now turns to implementation. Nations will need to work quickly to translate these commitments into concrete action, with the first round of emission reduction plans due within six months.</p>
    `,
    media: {
      type: 'video',
      url: climateVideo
    },
    relatedArticles: [
      {
        id: 'climate-economy',
        title: "Climate Change Impact on Global Economy",
        category: "Business",
        timestamp: "3 hours ago"
      },
      {
        id: 'climate-crisis',
        title: "Scientists Warn of Accelerating Climate Crisis",
        category: "Science",
        timestamp: "4 hours ago"
      },
      {
        id: 'climate-support',
        title: "Public Support for Climate Action at All-Time High",
        category: "Politics",
        timestamp: "5 hours ago"
      }
    ]
  },
  'tech-giants-ai': {
    id: 'tech-giants-ai',
    title: "Tech Giants Unveil AI Safety Framework",
    description: "Major technology companies announce collaborative initiative to establish ethical guidelines for artificial intelligence development",
    category: "Technology",
    timestamp: "1 hour ago",
    author: "Michael Rodriguez",
    content: `
      <p class="text-xl leading-relaxed mb-6">In a landmark collaboration, leading technology companies have unveiled a comprehensive framework for the safe and ethical development of artificial intelligence. This initiative represents the industry's most significant step yet toward self-regulation in AI development.</p>
      
      <p class="text-xl leading-relaxed mb-6">The framework, developed over the past year, addresses several critical areas:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Transparency in AI decision-making processes</li>
        <li>Bias detection and mitigation protocols</li>
        <li>Data privacy and security standards</li>
        <li>Accountability mechanisms for AI systems</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This framework sets a new standard for responsible AI development. It's not just about guidelines; it's about building trust in technology."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The participating companies have committed to implementing these guidelines across their AI development processes, with independent auditors to verify compliance. This move comes as public concern about AI's impact on society continues to grow.</p>
      
      <p class="text-xl leading-relaxed mb-6">Industry experts have praised the initiative but emphasize that this is just the beginning. The framework will need to evolve as AI technology advances and new challenges emerge.</p>
    `,
    media: {
      type: 'image',
      url: techGiantsImage
    },
    relatedArticles: [
      {
        id: 'ai-regulation',
        title: "Global AI Regulation Framework Proposed",
        category: "Technology",
        timestamp: "2 hours ago"
      },
      {
        id: 'ai-ethics',
        title: "Ethics in AI: A New Paradigm",
        category: "Science",
        timestamp: "3 hours ago"
      },
      {
        id: 'ai-future',
        title: "The Future of AI in Society",
        category: "Technology",
        timestamp: "4 hours ago"
      }
    ]
  },
  'space-tourism': {
    id: 'space-tourism',
    title: "Space Tourism Milestone Achieved",
    description: "First civilian space hotel announces successful test launch, marking new era in commercial space travel",
    category: "Science",
    timestamp: "3 hours ago",
    author: "Dr. Emily Thompson",
    content: `
      <p class="text-xl leading-relaxed mb-6">The dream of civilian space travel has taken a giant leap forward as the world's first space hotel successfully completed its test launch. This historic achievement marks the beginning of a new era in commercial space exploration.</p>
      
      <p class="text-xl leading-relaxed mb-6">The orbital facility, developed by a private space company, features:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Luxury accommodations for up to 400 guests</li>
        <li>Zero-gravity entertainment zones</li>
        <li>Earth observation decks</li>
        <li>Space research laboratories</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This is not just a hotel in space; it's a gateway to the stars for ordinary people."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The successful launch has already sparked unprecedented interest in space tourism, with thousands of reservations being made within hours of the announcement. The company plans to begin accepting guests by the end of next year.</p>
      
      <p class="text-xl leading-relaxed mb-6">While the price point remains high, industry experts predict that costs will decrease as space travel technology advances and more companies enter the market.</p>
    `,
    media: {
      type: 'image',
      url: spaceTourismImage
    },
    relatedArticles: [
      {
        id: 'space-commercial',
        title: "Commercial Space Travel: The Next Frontier",
        category: "Science",
        timestamp: "2 hours ago"
      },
      {
        id: 'space-technology',
        title: "Breakthrough in Space Propulsion Technology",
        category: "Technology",
        timestamp: "3 hours ago"
      },
      {
        id: 'space-economy',
        title: "The Growing Space Economy",
        category: "Business",
        timestamp: "4 hours ago"
      }
    ]
  },
  'global-markets': {
    id: 'global-markets',
    title: "Global Markets Rally on Economic Data",
    description: "Stock markets worldwide surge as latest economic indicators show stronger-than-expected growth",
    category: "Business",
    timestamp: "4 hours ago",
    author: "James Wilson",
    content: `
      <p class="text-xl leading-relaxed mb-6">Global financial markets experienced a significant rally today as new economic data exceeded expectations, signaling stronger-than-anticipated growth across major economies.</p>
      
      <p class="text-xl leading-relaxed mb-6">Key market movements include:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>S&P 500 up 2.3%</li>
        <li>NASDAQ up 3.1%</li>
        <li>FTSE up 1.8%</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "The market's response to today's data suggests growing confidence in the global economic recovery."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">Analysts attribute the surge to positive economic indicators, including improved manufacturing data, strong consumer spending, and better-than-expected employment figures.</p>
      
      <p class="text-xl leading-relaxed mb-6">While some experts warn of potential market volatility ahead, the overall sentiment remains optimistic as investors respond to the strengthening economic fundamentals.</p>
    `,
    media: {
      type: 'image',
      url: globalEconomicSummitImage
    },
    relatedArticles: [
      {
        id: 'crypto-regulation',
        title: "Cryptocurrency Regulation Framework Proposed",
        category: "Business",
        timestamp: "5 hours ago"
      },
      {
        id: 'ev-market',
        title: "Electric Vehicle Market Expansion",
        category: "Business",
        timestamp: "6 hours ago"
      }
    ]
  },
  'crypto-regulation': {
    id: 'crypto-regulation',
    title: "Cryptocurrency Regulation Framework Proposed",
    description: "International financial regulators unveil comprehensive framework for digital asset oversight",
    category: "Business",
    timestamp: "5 hours ago",
    author: "Lisa Chang",
    content: `
      <p class="text-xl leading-relaxed mb-6">International financial regulators have unveiled a comprehensive framework for overseeing digital assets, marking a significant step toward mainstream cryptocurrency adoption.</p>
      
      <p class="text-xl leading-relaxed mb-6">The framework addresses several key areas:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Standardized reporting requirements</li>
        <li>Anti-money laundering protocols</li>
        <li>Investor protection measures</li>
        <li>Cross-border transaction guidelines</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This framework provides the clarity and stability needed for the cryptocurrency market to mature."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The announcement has been met with cautious optimism from both traditional financial institutions and cryptocurrency companies, who see this as a crucial step toward broader market acceptance.</p>
      
      <p class="text-xl leading-relaxed mb-6">Industry experts predict that this regulatory clarity will lead to increased institutional investment and further market development.</p>
    `,
    media: {
      type: 'image',
      url: CryptoCurrencyImage
    },
    relatedArticles: [
      {
        id: 'global-markets',
        title: "Global Markets Rally on Economic Data",
        category: "Business",
        timestamp: "4 hours ago"
      },
      {
        id: 'ev-market',
        title: "Electric Vehicle Market Expansion",
        category: "Business",
        timestamp: "6 hours ago"
      }
    ]
  },
  'ev-market': {
    id: 'ev-market',
    title: "Electric Vehicle Market Expansion",
    description: "Major automakers announce joint venture for next-generation battery technology",
    category: "Business",
    timestamp: "6 hours ago",
    author: "David Kumar",
    content: `
      <p class="text-xl leading-relaxed mb-6">In a groundbreaking development for the automotive industry, major automakers have announced a joint venture focused on developing next-generation battery technology for electric vehicles.</p>
      
      <p class="text-xl leading-relaxed mb-6">The partnership aims to address several key challenges:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Extended battery range</li>
        <li>Faster charging capabilities</li>
        <li>Reduced production costs</li>
        <li>Improved battery longevity</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This collaboration represents a turning point in the electric vehicle industry."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The joint venture brings together leading manufacturers with complementary expertise in battery technology and electric vehicle development. Industry analysts predict this partnership will accelerate the transition to electric vehicles.</p>
      
      <p class="text-xl leading-relaxed mb-6">The companies involved have committed significant resources to the project, with the first commercial applications expected within the next three years.</p>
    `,
    media: {
      type: 'image',
      url: electricVehicleMarketImage
    },
    relatedArticles: [
      {
        id: 'global-markets',
        title: "Global Markets Rally on Economic Data",
        category: "Business",
        timestamp: "4 hours ago"
      },
      {
        id: 'crypto-regulation',
        title: "Cryptocurrency Regulation Framework Proposed",
        category: "Business",
        timestamp: "5 hours ago"
      }
    ]
  },
  'quantum-computing': {
    id: 'quantum-computing',
    title: "Breakthrough in Quantum Computing",
    description: "Scientists achieve quantum supremacy milestone, opening new possibilities in computing",
    category: "Research",
    timestamp: "7 hours ago",
    author: "Prof. Robert Chen",
    content: `
      <p class="text-xl leading-relaxed mb-6">Scientists have achieved a major breakthrough in quantum computing, reaching a new milestone in quantum supremacy that promises to revolutionize the field of computing.</p>
      
      <p class="text-xl leading-relaxed mb-6">The breakthrough involves:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Improved qubit stability</li>
        <li>Enhanced error correction</li>
        <li>Increased processing power</li>
        <li>Better scalability</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This achievement brings us closer to practical quantum computing applications."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The research team's findings have been published in a leading scientific journal, with experts describing the results as a significant step forward in quantum computing technology.</p>
      
      <p class="text-xl leading-relaxed mb-6">This development could have far-reaching implications for fields such as cryptography, drug discovery, and climate modeling.</p>
    `,
    media: {
      type: 'image',
      url: BreaktroughImage
    },
    relatedArticles: [
      {
        id: 'gene-therapy',
        title: "Gene Therapy Success in Cancer Treatment",
        category: "Science",
        timestamp: "8 hours ago"
      },
      {
        id: 'ocean-cleanup',
        title: "Ocean Cleanup Technology Breakthrough",
        category: "Science",
        timestamp: "9 hours ago"
      }
    ]
  },
  'gene-therapy': {
    id: 'gene-therapy',
    title: "Gene Therapy Success in Cancer Treatment",
    description: "Revolutionary gene-editing technique shows promising results in clinical trials",
    category: "Medicine",
    timestamp: "8 hours ago",
    author: "Dr. Maria Garcia",
    content: `
      <p class="text-xl leading-relaxed mb-6">A revolutionary gene-editing technique has shown remarkable success in clinical trials for cancer treatment, offering new hope for patients with previously untreatable forms of the disease.</p>
      
      <p class="text-xl leading-relaxed mb-6">The treatment approach includes:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Precise targeting of cancer cells</li>
        <li>Minimal side effects</li>
        <li>Long-lasting results</li>
        <li>Broad applicability</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This breakthrough represents a paradigm shift in cancer treatment."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The clinical trials have shown unprecedented success rates, with patients experiencing significant improvements in their condition. The research team is now preparing for larger-scale trials.</p>
      
      <p class="text-xl leading-relaxed mb-6">Medical experts worldwide are optimistic about the potential of this new treatment approach to transform cancer care.</p>
    `,
    media: {
      type: 'image',
      url: GeneTherapyImage
    },
    relatedArticles: [
      {
        id: 'quantum-computing',
        title: "Breakthrough in Quantum Computing",
        category: "Science",
        timestamp: "7 hours ago"
      },
      {
        id: 'ocean-cleanup',
        title: "Ocean Cleanup Technology Breakthrough",
        category: "Science",
        timestamp: "9 hours ago"
      }
    ]
  },
  'ocean-cleanup': {
    id: 'ocean-cleanup',
    title: "Ocean Cleanup Technology Breakthrough",
    description: "New AI-powered system successfully removes 99% of ocean plastic waste",
    category: "Environment",
    timestamp: "9 hours ago",
    author: "Dr. Sarah Johnson",
    content: `
      <p class="text-xl leading-relaxed mb-6">A groundbreaking AI-powered system has demonstrated unprecedented success in removing plastic waste from the ocean, achieving a 99% removal rate in recent trials.</p>
      
      <p class="text-xl leading-relaxed mb-6">The system features:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-xl">
        <li>Advanced AI detection</li>
        <li>Automated collection</li>
        <li>Eco-friendly processing</li>
        <li>Scalable deployment</li>
      </ul>
      
      <blockquote class="border-l-4 border-black pl-6 my-8 italic text-2xl">
        "This technology could be a game-changer in our fight against ocean pollution."
      </blockquote>
      
      <p class="text-xl leading-relaxed mb-6">The system has been tested in various ocean conditions and has consistently outperformed existing cleanup methods. Environmental organizations are already planning to deploy this technology in key areas.</p>
      
      <p class="text-xl leading-relaxed mb-6">Researchers believe this breakthrough could significantly accelerate global efforts to clean up ocean plastic waste and protect marine ecosystems.</p>
    `,
    media: {
      type: 'image',
      url: OceanCleanupImage
    },
    relatedArticles: [
      {
        id: 'quantum-computing',
        title: "Breakthrough in Quantum Computing",
        category: "Science",
        timestamp: "7 hours ago"
      },
      {
        id: 'gene-therapy',
        title: "Gene Therapy Success in Cancer Treatment",
        category: "Science",
        timestamp: "8 hours ago"
      }
    ]
  }
}; 