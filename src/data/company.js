// ChemSeva Chemicals - Company Data
// Source of truth for all company information. Update details here.

export const companyInfo = {
  name: 'ChemSeva Chemicals Pvt. Ltd.',
  tagline: 'Bonding With Innovations',
  description: 'ChemSeva Chemicals Pvt. Ltd. is engaged in the manufacturing, trading, supplying, wholesaling, distribution, and retailing of speciality chemicals and industrial chemical solutions. Our product portfolio includes silicone defoamers, non-silicone defoamers, industrial lubricating oils, silicone emulsions, and other industrial chemical products.',
  phone: '+91-XXXXX-XXXXX',
  email: 'info@chemsevachemicals.com',
  address: '[Address to be updated]',
  city: '[City]',
  state: '[State], India',
  whatsapp: '+91XXXXXXXXXX',
  website: 'www.chemsevachemicals.com',
  workingHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  logo: '/logo.jpg',
  banker: 'HDFC Bank'
};

export const companyFactsheet = {
  basicInfo: [
    { label: 'Nature of Business', value: 'Manufacturer & Trader' },
    { label: 'Additional Business Activities', value: 'Factory / Manufacturing, Sales Office, Wholesale & Retail Distribution' },
    { label: 'Legal Status of Firm', value: 'Private Limited Company' },
    { label: 'Total Number of Employees', value: 'Up to 10 People' },
    { label: 'Annual Turnover', value: '₹1 Crore – ₹5 Crore' },
    { label: 'Major Markets', value: 'Pan-India & Global Supply Channels' }
  ],
  statutory: [
    { label: 'Banker', value: 'HDFC Bank' },
    { label: 'Quality Verification', value: '100% Pre-Dispatch Checked' },
    { label: 'Payment Terms', value: 'Bank Transfer / Letter of Credit / Online' }
  ],
  teamRoles: [
    {
      role: 'Engineers',
      description: 'Support technical operations, product evaluation, and continuous chemical process improvement.'
    },
    {
      role: 'Quality Control Analysts',
      description: 'Help maintain stringent product quality standards, batch purity, and application consistency.'
    },
    {
      role: 'Technicians',
      description: 'Assist with specialized blending activities, packaging integrity, and equipment operations.'
    },
    {
      role: 'Skilled & Operations Workforce',
      description: 'Manage safe material handling, warehouse logistics, and daily scheduled dispatches.'
    },
    {
      role: 'Sales & Marketing Executives',
      description: 'Dedicated customer relationships, technical consultation, sample requests, and market outreach.'
    }
  ]
};

export const clientRatings = {
  averageRating: 4.3,
  totalReviews: 49,
  metrics: [
    { label: 'Response Rate', value: '87%', description: 'Prompt query response' },
    { label: 'Quality Satisfaction', value: '75%', description: 'Consistent batch purity' },
    { label: 'On-Time Delivery', value: '83%', description: 'Scheduled logistics' }
  ],
  starDistribution: [
    { stars: 5, percentage: 59 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 15 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 14 }
  ],
  testimonials: [
    {
      id: 1,
      author: 'PATHAN Mohammad Rehan',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      product: 'Gandhar Lubricating Oil',
      comment: 'Very dependable industrial oil supply. High quality and consistent lubrication for our factory machinery.'
    },
    {
      id: 2,
      author: 'Azaz',
      location: 'Bhavnagar, Gujarat',
      rating: 5,
      product: 'Silicon Defoamer',
      comment: 'Immediate foam knockdown in our chemical tanks. Responsive service and timely drum delivery.'
    },
    {
      id: 3,
      author: 'Jaspal',
      location: 'Kolkata, West Bengal',
      rating: 5,
      product: 'Silicon Defoamer Emulsion',
      comment: 'Excellent anti-foaming performance in processing operations. Transparent dealings and fair rates.'
    }
  ]
};

export const whyChooseUs = [
  {
    id: 1,
    title: 'Trusted Sourcing Partners',
    description: 'We work with established manufacturers and suppliers to source products suited to customer requirements. This helps us maintain consistency in quality and supply, which directly benefits our customers\' production processes.',
    icon: 'Handshake'
  },
  {
    id: 2,
    title: 'Practical Industry Understanding',
    description: 'Our team keeps customer applications and market needs in mind when supporting product selection. We bring hands-on experience and practical understanding of how industrial chemicals perform in live operating conditions.',
    icon: 'Factory'
  },
  {
    id: 3,
    title: 'Product Quality Focus',
    description: 'We offer a range of defoamers and specialty chemicals for different industrial uses, with attention to suitability and consistency. Every lot is verified before dispatch to maintain the standards our customers expect.',
    icon: 'ShieldCheck'
  },
  {
    id: 4,
    title: 'Customer-Focused Service',
    description: 'We listen to individual requirements and aim to recommend appropriate products and solutions. We believe in building lasting relationships through responsiveness, clear communication, and genuine concern for operational success.',
    icon: 'Users'
  },
  {
    id: 5,
    title: 'Value for Money',
    description: 'We strive to offer competitive, market-aligned pricing while maintaining our focus on product quality through efficient sourcing and lean operations.',
    icon: 'IndianRupee'
  },
  {
    id: 6,
    title: 'Distribution Support',
    description: 'Our supply and distribution arrangements are designed to serve customers across different locations and industries, ensuring smooth, uninterrupted factory supply.',
    icon: 'Truck'
  },
  {
    id: 7,
    title: 'Dependable Delivery',
    description: 'We coordinate orders and dispatches carefully to support customers\' day-to-day operations. Prompt and dependable delivery is central to our operational promise.',
    icon: 'Clock'
  },
  {
    id: 8,
    title: 'Transparent and Ethical Dealings',
    description: 'We value honest communication, clear transactions, and professional conduct in every business relationship. All commercial terms are straightforward and fair.',
    icon: 'Scale'
  },
  {
    id: 9,
    title: 'Continuous Improvement',
    description: 'We seek to strengthen our product range and service processes in response to changing market and customer needs, evolving continuously with industrial innovations.',
    icon: 'TrendingUp'
  }
];

export const vision = "Our vision is to grow into a respected and reliable partner in the chemical trading industry in Indian markets. We aspire to achieve this by supplying quality products, providing responsive and dependable service, and fostering enduring relationships built on trust, integrity, and mutual success.";

export const globalVision = "To become a trusted and dependable chemical trading partner in India and across the globe by delivering high-quality products, reliable services, and building strong, long-lasting business relationships.";

export const industries = [
  {
    id: 1,
    name: 'Textile Industry',
    description: 'Defoamers, softeners, and process chemicals for dyeing, finishing, and fabric treatment operations.',
    icon: 'Shirt',
    image: '/images/industries/textile.jpg'
  },
  {
    id: 2,
    name: 'Wastewater Treatment',
    description: 'Effective foam control solutions for effluent and sewage treatment plants to ensure smooth operations.',
    icon: 'Droplets',
    image: '/images/industries/wastewater.jpg'
  },
  {
    id: 3,
    name: 'Paper Industry',
    description: 'Defoaming agents and process chemicals for pulp processing, paper manufacturing, and coating applications.',
    icon: 'FileText',
    image: '/images/industries/paper.jpg'
  },
  {
    id: 4,
    name: 'Sugar Industry',
    description: 'Antifoaming agents for juice clarification, evaporation, and molasses fermentation in sugar processing.',
    icon: 'Wheat',
    image: '/images/industries/sugar.jpg'
  },
  {
    id: 5,
    name: 'Paint & Coatings',
    description: 'Specialized defoamers and additives for water-based and solvent-based paints and coating formulations.',
    icon: 'Paintbrush',
    image: '/images/industries/paint.jpg'
  },
  {
    id: 6,
    name: 'Chemical Processing',
    description: 'High-performance defoamers and process chemicals for chemical manufacturing and processing plants.',
    icon: 'FlaskConical',
    image: '/images/industries/chemical.jpg'
  },
  {
    id: 7,
    name: 'Industrial Manufacturing',
    description: 'Cutting oils, lubricants, and specialty chemicals for metalworking and general manufacturing applications.',
    icon: 'Cog',
    image: '/images/industries/manufacturing.jpg'
  }
];

export const businessStrengths = [
  {
    id: 1,
    title: 'Wide Product Range',
    value: '8+',
    description: 'Product categories covering defoamers, emulsions, oils, and specialty chemicals.'
  },
  {
    id: 2,
    title: 'Quality Assured',
    value: '100%',
    description: 'Every lot checked and verified before dispatch for consistent quality.'
  },
  {
    id: 3,
    title: 'Pan India Service',
    value: 'All India',
    description: 'Distribution support across Indian markets with reliable delivery.'
  },
  {
    id: 4,
    title: 'Technical Guidance',
    value: 'Expert',
    description: 'Practical industry understanding to recommend the right products.'
  },
  {
    id: 5,
    title: 'Competitive Pricing',
    value: 'Best Value',
    description: 'Efficient sourcing and lean operations for the best pricing.'
  },
  {
    id: 6,
    title: 'Custom Solutions',
    value: 'Tailored',
    description: 'Product recommendations based on your specific application needs.'
  }
];
