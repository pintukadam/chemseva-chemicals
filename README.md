# ChemSeva Chemicals Pvt. Ltd. — Corporate Website

A premium, production-ready corporate website for **ChemSeva Chemicals Pvt. Ltd.**, an industrial chemical trading and distribution company specializing in defoamers, emulsions, and specialty chemicals across Indian markets.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM (v6)
- **Icons**: Lucide React
- **Architecture**: Decoupled static data layer (`src/data/`) with reusable UI components

## Business Positioning & Approved Content

- **Company Tagline**: *Bonding With Innovations*
- **Positioning**: ChemSeva Chemicals provides dependable defoamer and specialty chemical solutions for industrial customers.
- **Vision Statement**:
  > "Our vision is to grow into a respected and reliable partner in the chemical trading industry in Indian markets. We aspire to achieve this by supplying quality products, providing responsive and dependable service, and fostering enduring relationships built on trust, integrity, and mutual success."
- **Nine Core Strengths**:
  1. Trusted Sourcing Partners
  2. Practical Industry Understanding
  3. Product Quality Focus
  4. Customer-Focused Service
  5. Value for Money
  6. Distribution Support
  7. Dependable Delivery
  8. Transparent and Ethical Dealings
  9. Continuous Improvement

## Website Structure & Pages

1. **Home Page (`/`)**
   - Top contact information bar
   - Sticky navigation with product categories dropdown
   - Industrial hero banner with approved headline and descriptions
   - Company introduction & trading model
   - 8-category product catalogue showcase
   - Featured products grid with specs and quick quote links
   - 9-point Why Choose ChemSeva section
   - Industries and application sectors showcase
   - 6 key business operational strengths
   - Approved corporate vision statement
   - High-impact business enquiry CTA
   - Comprehensive footer with quick navigation and legal notes

2. **About Us (`/about`)**
   - Company overview & distribution philosophy
   - Business approach & pre-dispatch verification protocol
   - Customer commitment
   - Full 9 key strengths breakdown
   - Vision & guiding principles

3. **Products Catalogue (`/products`)**
   - Live search across product names, categories, and applications
   - Category filtering across all 8 industrial categories
   - Dynamic counter and reset filters
   - Product cards with specifications: Physical state, Grade, Packaging

4. **Product Details (`/products/:slug`)**
   - Dedicated dynamic routes for every product
   - High-resolution product showcase & badges
   - Technical specifications parameter table
   - Recommended industrial applications
   - In-page RFQ commercial enquiry form prefilled with product title
   - Direct WhatsApp enquiry action
   - Related products within the same category

5. **Industries & Applications (`/industries`)**
   - Visual breakdown of 7 core sectors:
     - Textile Industry
     - Wastewater Treatment (ETP/STP)
     - Paper & Pulp Industry
     - Sugar & Distilleries
     - Paint & Coatings
     - Chemical Processing
     - Industrial Manufacturing & Metalworking
   - Specific foaming challenges and tailored ChemSeva solution approaches
   - Direct quote buttons per industry

6. **Contact Us (`/contact`)**
   - Direct contact cards (Phone, Email, WhatsApp, Sourcing Office)
   - Formspree-ready commercial enquiry form with field validations:
     - Name, Company, 10-digit Mobile, Email, Product, Message
   - Informative notice when external provider endpoint is unconfigured
   - Direct WhatsApp fallback link

7. **404 Not Found (`*`)**
   - Clean industrial error recovery page linking back to homepage and catalogue

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Adding or Editing Products

All product data is centralized in:
`src/data/products.js`

Add or update entries without modifying any UI components.
