// ChemSeva Chemicals - Product Data
// Real product catalogue derived from reference data and ChemSeva industrial offerings.

export const categories = [
  {
    id: 1,
    name: 'Industrial Chemicals',
    slug: 'industrial-chemicals',
    description: 'General-purpose and specialty industrial chemicals for various manufacturing and processing applications.',
    image: '/images/categories/industrial-chemicals.jpg',
    productCount: 4
  },
  {
    id: 2,
    name: 'Non Silicone Defoamer',
    slug: 'non-silicone-defoamer',
    description: 'Effective non-silicone based defoaming solutions for wastewater, paper mills, and textile processes.',
    image: '/images/categories/non-silicone-defoamer.jpg',
    productCount: 4
  },
  {
    id: 3,
    name: 'Silicone Defoaming Emulsion',
    slug: 'silicone-defoaming-emulsion',
    description: 'High-performance silicone-based defoaming emulsions for rapid knockdown in demanding applications.',
    image: '/images/categories/silicone-defoaming-emulsion.jpg',
    productCount: 4
  },
  {
    id: 4,
    name: 'Anti-Foaming Agents',
    slug: 'anti-foaming-agents',
    description: 'Specialized anti-foaming agents and paste compounds for sugar industries, fermentation, and food processing.',
    image: '/images/categories/anti-foaming-agents.jpg',
    productCount: 4
  },
  {
    id: 5,
    name: 'Wax Emulsion',
    slug: 'wax-emulsion',
    description: 'Industrial paraffin and synthetic wax emulsions for coating, polishing, and surface treatment applications.',
    image: '/images/categories/wax-emulsion.jpg',
    productCount: 4
  },
  {
    id: 6,
    name: 'Silicone Emulsion',
    slug: 'silicone-emulsion',
    description: 'Versatile non-ionic and cationic silicone emulsions for textile finishing, mould release, and polish.',
    image: '/images/categories/silicone-emulsion.jpg',
    productCount: 4
  },
  {
    id: 7,
    name: 'Industrial Oil',
    slug: 'industrial-oil',
    description: 'High-purity lubricating oils, spark erosion fluid, textile softeners, and scourable knitting oils.',
    image: '/images/categories/industrial-oil.jpg',
    productCount: 4
  },
  {
    id: 8,
    name: 'Industrial Lubricants & Oil',
    slug: 'industrial-lubricants-oil',
    description: 'Circular knitting oils, conning oils, and high-performance machinery lubricants.',
    image: '/images/categories/industrial-lubricants.jpg',
    productCount: 3
  }
];

export const products = [
  // 1. Industrial Chemicals
  {
    id: 1,
    name: 'Alcohol Based Defoamer',
    slug: 'alcohol-based-defoamer',
    category: 'Industrial Chemicals',
    price: '₹ 185/Kg',
    image: '/images/products/alcohol-based-defoamer.jpg',
    shortDescription: 'Fast-acting alcohol based defoamer designed for rapid foam elimination in industrial processes.',
    description: 'Alcohol Based Defoamer is an engineered chemical solution formulated for systems where silicone residues cannot be tolerated. Provides instant foam collapse and excellent drainage in effluent treatment and chemical wash systems.',
    applications: ['Wastewater Treatment', 'Chemical Processing', 'Industrial Washing Plants', 'Pulp & Paper'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Defoamer Type': 'Non Silicone Defoamer',
      'Appearance': 'Clear to Slightly Hazy Liquid',
      'Active Content': '99% Min',
      'pH Range': '6.0 - 8.0',
      'Specific Gravity': '0.85 - 0.90 @ 25°C',
      'Dispersibility': 'Dispersible in water'
    },
    featured: true
  },
  {
    id: 2,
    name: 'WACKER Grade Specialty Silicone Emulsion',
    slug: 'wacker-grade-specialty-silicone',
    category: 'Industrial Chemicals',
    price: '₹ 125/Kg',
    image: '/images/products/wacker-silicone.jpg',
    shortDescription: 'High gloss, premium finish silicone compound for specialty industrial finishing.',
    description: 'Formulated with high molecular weight silicone polymers to offer superior release properties, high gloss surface finish, and thermal durability.',
    applications: ['Rubber Mould Release', 'Textile Finishing', 'Foundry Core Release', 'Plastics Polishing'],
    grade: 'Technical Grade',
    physicalState: 'Emulsion Liquid',
    packaging: '25 Kg / 50 Kg Carboy',
    specifications: {
      'Color': 'Greyish White',
      'Finish': 'High Gloss',
      'Packaging Size': '25 Kg / 50 Kg',
      'Ionic Nature': 'Non-Ionic',
      'Viscosity': '250 - 500 cP @ 25°C'
    },
    featured: false
  },
  {
    id: 3,
    name: 'Milky White Industrial Silicone Compound',
    slug: 'milky-white-silicone-compound',
    category: 'Industrial Chemicals',
    price: 'Get Latest Price',
    image: '/images/products/milky-white-silicone.jpg',
    shortDescription: 'Stable milky white silicone compound for foam suppression and lubrication.',
    description: 'A versatile silicone formulation offering excellent dilution stability, thermal endurance, and immediate surface tension reduction in agitated reaction vessels.',
    applications: ['Chemical Processing', 'Textile Processing', 'Paint Formulations', 'Adhesive Compounding'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Color': 'Milky White',
      'Physical State': 'Liquid',
      'Specific Gravity': '0.98 - 1.02',
      'Solubility': 'Easily dilutable in water'
    },
    featured: false
  },
  {
    id: 4,
    name: 'Liquid Cooling Tower Chemical',
    slug: 'liquid-cooling-tower-chemical',
    category: 'Industrial Chemicals',
    price: 'Get Latest Price',
    image: '/images/products/cooling-tower-chemical.jpg',
    shortDescription: 'Specialty foam control and scale suppression chemical for open circuit industrial cooling towers.',
    description: 'Designed to eliminate foam buildup generated by bio-fouling or chemical additions in industrial HVAC and process cooling towers, ensuring optimal heat exchange efficiency.',
    applications: ['Cooling Tower Systems', 'Recirculating Water Loops', 'Heat Exchangers', 'Industrial HVAC'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg HDPE Drum',
    specifications: {
      'Usage/Application': 'Industrial Cooling Towers',
      'Packaging Type': 'Drum',
      'Foam Knockdown Time': '< 10 seconds',
      'Corrosivity': 'Non-corrosive to mild steel & copper'
    },
    featured: false
  },

  // 2. Non Silicone Defoamer
  {
    id: 5,
    name: 'Antifoam Emulsion Liquid (ETP / STP Grade)',
    slug: 'antifoam-emulsion-liquid-etp-stp',
    category: 'Non Silicone Defoamer',
    price: '₹ 40/Kg',
    image: '/images/products/antifoam-emulsion-liquid.jpg',
    shortDescription: 'Cost-effective milky white antifoam emulsion liquid for sewage and effluent treatment plants.',
    description: 'High efficiency, non-silicone defoaming formulation specially engineered for municipal STPs and industrial ETPs. Low COD impact, completely bio-degradable, and prevents aeration tank foam overflow.',
    applications: ['Wastewater Treatment (ETP/STP)', 'Municipal Sewage Plants', 'Dye Effluent Lines', 'Paper Mill Effluent'],
    grade: 'Commercial / Technical Grade',
    physicalState: 'Liquid',
    packaging: '25 Kg / 50 Kg / 200 Kg Drum',
    specifications: {
      'Color': 'Milky White',
      'Defoamer Type': 'Non-Silicone Defoamer',
      'Specific Gravity': '0.98 - 1.01',
      'pH Range': '6.5 - 7.5',
      'COD/BOD Contribution': 'Extremely Low'
    },
    featured: true
  },
  {
    id: 6,
    name: 'Non Silicone Bio-Degradable Defoamer',
    slug: 'non-silicone-bio-degradable-defoamer',
    category: 'Non Silicone Defoamer',
    price: 'Get Latest Price',
    image: '/images/products/non-silicone-biodegradable.jpg',
    shortDescription: 'Eco-compliant bio-degradable non-silicone defoaming agent for environmental compliance.',
    description: 'Eco-friendly defoamer compliant with zero-discharge norms. Does not impair biological bacteria in aeration tanks while providing prolonged antifoam stamina.',
    applications: ['Biological Wastewater Treatment', 'Textile Scouring', 'Paper Board Processing', 'Food Processing Effluent'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '25 Kg and 50 KGS Carboys',
    specifications: {
      'Biodegradability': '> 90% in 28 days',
      'Color': 'Amber / Light Yellow',
      'Packaging Size': '25 and 50 KGS',
      'Active Substance': 'Polyether Ester Base'
    },
    featured: false
  },
  {
    id: 7,
    name: 'Non Silicone Defoamer for Phosphoric Acid & Fertilizer',
    slug: 'non-silicone-defoamer-phosphoric-acid',
    category: 'Non Silicone Defoamer',
    price: '₹ 125/Kg',
    image: '/images/products/defoamer-phosphoric-acid.jpg',
    shortDescription: 'Heavy-duty acid resistant defoamer for phosphoric acid reaction tanks and fertilizer plants.',
    description: 'Specially synthesized to withstand high acid concentrations (up to 54% P2O5) and temperatures exceeding 85°C during rock phosphate digestion in fertilizer manufacturing.',
    applications: ['Phosphoric Acid Manufacturing', 'Fertilizer Plants', 'Acid Washing Baths', 'Textile Acid Dyeing'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Acid Stability': 'Stable in strong inorganic acids',
      'Application Industry': 'Phosphoric Acid Manufacturing, Textile',
      'Viscosity': '150 - 300 cP',
      'Appearance': 'Golden Yellow Oily Liquid'
    },
    featured: false
  },
  {
    id: 8,
    name: 'Non Silicone Fatty Acid Ester Defoamer',
    slug: 'non-silicone-fatty-acid-ester-defoamer',
    category: 'Non Silicone Defoamer',
    price: '₹ 135/Kg',
    image: '/images/products/fatty-acid-ester-defoamer.jpg',
    shortDescription: 'High knockdown fatty acid ester defoamer for wastewater, paper mills, and sugar processing.',
    description: 'Formulated with distilled fatty acid esters and hydrocarbon carriers. Spreads instantaneously across gas-liquid interfaces to break persistent froth and entrained air bubbles.',
    applications: ['Wastewater Treatment', 'Paper Mill Wet End', 'Sugar Processing & Juice', 'Fermentation'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg HDPE Barrel',
    specifications: {
      'Physical Form': 'Liquid',
      'Application Industry': 'Wastewater, Paper Mill, Sugar',
      'Base Chemistry': 'Fatty Acid Esters & Hydrocarbon Carriers',
      'Dosage': '10 - 50 ppm typically'
    },
    featured: true
  },

  // 3. Silicone Defoaming Emulsion
  {
    id: 9,
    name: 'Sildef-EP 70 Apeo & Formaldehyde Free Defoamer',
    slug: 'sildef-ep-70-apeo-formaldehyde-free',
    category: 'Silicone Defoaming Emulsion',
    price: '₹ 185/Kg',
    image: '/images/products/sildef-ep-70.jpg',
    shortDescription: 'Premium APEO-free and formaldehyde-free silicone defoaming emulsion for export-grade processing.',
    description: 'Sildef-EP 70 is an advanced polydimethylsiloxane emulsion formulated to meet strict international environmental norms (OEKO-TEX, REACH). Highly durable knockdown with zero oil-spot hazard.',
    applications: ['Export Textile Processing', 'High-Temperature Jet Dyeing', 'Pharma Synthesis', 'Effluent Plants'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Barrel',
    specifications: {
      'Compliance': 'APEO & Formaldehyde Free',
      'Active Content': '20% Active Silicone',
      'Ionic Type': 'Non-Ionic',
      'pH (10% Solution)': '6.5 - 7.5',
      'Color': 'Milky White'
    },
    featured: true
  },
  {
    id: 10,
    name: 'Sildef 35 Apeo & Formaldehyde Free Defoamer',
    slug: 'sildef-35-apeo-free-defoamer',
    category: 'Silicone Defoaming Emulsion',
    price: 'Get Latest Price',
    image: '/images/products/sildef-35.jpg',
    shortDescription: 'Concentrated 35% active silicone defoaming emulsion for demanding foam control.',
    description: 'High concentration silicone antifoam emulsion delivering rapid knock-down and prolonged foam suppression even under extreme agitation, high pressure, and temperature.',
    applications: ['Textile Dyeing & Printing', 'Industrial Wastewater', 'Agrochemical Formulations', 'Chemical Production'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Defoamer Type': 'Silicon Defoamer',
      'Physical State': 'Liquid',
      'Active Content': '35%',
      'Shelf Life': '12 Months'
    },
    featured: false
  },
  {
    id: 11,
    name: 'Defoamer for Paint Industry (Silicone Emulsion)',
    slug: 'defoamer-paint-industry-silicone',
    category: 'Silicone Defoaming Emulsion',
    price: '₹ 175/Kg',
    image: '/images/products/paint-defoamer.jpg',
    shortDescription: 'Specialty paint defoamer preventing micro-foam without causing cratering or fish eyes.',
    description: 'Balanced silicone defoaming emulsion formulated for water-based architectural paints, decorative coatings, and PVA emulsion manufacture. Eliminates macro and micro-foam while maintaining smooth film leveling.',
    applications: ['Water-Based Paints', 'Decorative Emulsions', 'Wood Finishes', 'Adhesives & Binders'],
    grade: 'Paint Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg HDPE Drum',
    specifications: {
      'Defoamer Type': 'Silicon Defoamer',
      'Color': 'Milky White',
      'Crater Resistance': 'Excellent - No film defects',
      'Usage/Application': 'Emulsion Paints & Coatings'
    },
    featured: false
  },
  {
    id: 12,
    name: 'Liquid Silicone Antifoaming Emulsion (General Purpose)',
    slug: 'liquid-silicone-antifoaming-emulsion',
    category: 'Silicone Defoaming Emulsion',
    price: '₹ 45/Kg',
    image: '/images/products/liquid-silicone-antifoam.jpg',
    shortDescription: 'Economical multi-purpose silicone antifoaming agent for bulk industrial processes.',
    description: 'Economic silicone defoamer emulsion providing prompt bubble burst and sustained surface de-aeration across batch processes.',
    applications: ['General Industrial Manufacturing', 'Drainage Systems', 'Tank Washing', 'Scrubber Towers'],
    grade: 'Commercial Grade',
    physicalState: 'Liquid',
    packaging: 'HDPE Drum 50 Kg / 200 Kg',
    specifications: {
      'Packaging Type': 'HDPE Drum',
      'Physical State': 'Liquid',
      'Active Matter': '10% - 15%',
      'Dilution': 'Ready to use or dilutable with soft water'
    },
    featured: false
  },

  // 4. Anti-Foaming Agents
  {
    id: 13,
    name: 'Solvent Based Silicone Antifoaming Compound',
    slug: 'solvent-based-silicone-antifoaming',
    category: 'Anti-Foaming Agents',
    price: '₹ 310/Kg',
    image: '/images/products/solvent-based-silicone.jpg',
    shortDescription: 'High-purity solvent based silicone antifoam for non-aqueous systems and food processing.',
    description: 'Specialty solvent-soluble silicone antifoam compound engineered for non-aqueous chemical syntheses, solvent extractions, and food-grade industrial processing.',
    applications: ['Textile Dyeing Auxiliary', 'Food Processing (Non-Direct)', 'Solvent Extraction', 'Petroleum Processing'],
    grade: 'Technical / Food Processing Compatible',
    physicalState: 'Liquid',
    packaging: '25 Kg / 50 Kg Can',
    specifications: {
      'Application Industry': 'Textile, Food Processing',
      'Grade': 'Technical Grade',
      'Active Silicone': '100% Active Compound',
      'Solvent Compatibility': 'Aromatic, Aliphatic & Chlorinated Solvents'
    },
    featured: true
  },
  {
    id: 14,
    name: 'Defoamer for Sugar Industries (Paste Form)',
    slug: 'defoamer-sugar-industries-paste',
    category: 'Anti-Foaming Agents',
    price: '₹ 40/Kg',
    image: '/images/products/sugar-industry-defoamer.jpg',
    shortDescription: 'Heavy-duty paste defoamer formulated for juice clarification and molasses fermentation.',
    description: 'High active paste defoaming agent crafted to suppress aggressive biological and thermal foaming in sugarcane juice pans, vacuum pans, and distillery fermentation tanks.',
    applications: ['Sugar Mills', 'Juice Clarification & Evaporation', 'Molasses Fermentation', 'Distilleries'],
    grade: 'Sugar Grade',
    physicalState: 'PASTE',
    packaging: '40 Kg / 50 Kg Open Top Drum',
    specifications: {
      'Defoamer Type': 'Non Silicone Defoamer',
      'Physical State': 'PASTE',
      'Thermal Stability': 'Up to 110°C in sugar syrups',
      'Dosage': '5 - 15 ppm'
    },
    featured: false
  },
  {
    id: 15,
    name: 'Milky White Bio-Tech Grade Defoaming Agent',
    slug: 'milky-white-biotech-defoamer',
    category: 'Anti-Foaming Agents',
    price: 'Get Latest Price',
    image: '/images/products/biotech-defoamer.jpg',
    shortDescription: 'Bio-tech grade defoamer for sensitive biochemical and enzyme-rich processes.',
    description: 'Ultra-pure defoamer that does not inhibit bacterial culture respiration or enzymatic reactions, making it ideal for bio-reactors and enzyme formulation plants.',
    applications: ['Biotechnology Reactors', 'Enzyme Synthesis', 'Pharma Fermentation', 'Starch Processing'],
    grade: 'Bio-Tech Grade',
    physicalState: 'Liquid',
    packaging: '25 Kg Carboy',
    specifications: {
      'Grade Standard': 'Bio-Tech Grade',
      'Usage/Application': 'Industrial Bio-Processing',
      'Cytotoxicity': 'Non-toxic to microbial flora'
    },
    featured: false
  },
  {
    id: 16,
    name: 'Non Silicone Alcohol Based Antifoam Compound',
    slug: 'non-silicone-alcohol-antifoam-compound',
    category: 'Anti-Foaming Agents',
    price: 'Get Latest Price',
    image: '/images/products/alcohol-antifoam.jpg',
    shortDescription: 'Rapid de-aerator and foam suppressant for industrial liquid circulation.',
    description: 'High-speed de-aeration agent formulated with higher fatty alcohols and polyoxyalkylene glycols. Eliminates entrained air pockets that cause pump cavitation.',
    applications: ['Circulation Coolants', 'High Shear Mixers', 'Effluent Lagoons', 'Textile Printing'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '25, 50 and 200 Liter Barrels',
    specifications: {
      'Grade': 'Industrial Grade',
      'Packaging Size': '25, 50 and 200 Liter',
      'Appearance': 'Clear Transparent to Pale Amber'
    },
    featured: false
  },

  // 5. Wax Emulsion
  {
    id: 17,
    name: 'White Paraffin Wax Emulsion',
    slug: 'white-paraffin-wax-emulsion',
    category: 'Wax Emulsion',
    price: '₹ 120/Kg',
    image: '/images/products/paraffin-wax-emulsion.jpg',
    shortDescription: 'High solids paraffin wax emulsion for water repellency and surface lubrication.',
    description: 'Finely dispersed paraffin wax emulsion offering superior water-barrier properties, paper sizing enhancement, and mold release across manufacturing boards.',
    applications: ['Paper & Board Sizing', 'Particle Board Water Repellency', 'Textile Finishing', 'Ceramic Tile Release'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Usage/Application': 'Industrial Coating & Sizing',
      'Physical State': 'Liquid',
      'Solids Content': '40% - 50%',
      'Emulsion Type': 'Non-Ionic / Anionic'
    },
    featured: true
  },
  {
    id: 18,
    name: 'Milky White Paraffin Wax Emulsion 50%',
    slug: 'milky-white-paraffin-wax-50',
    category: 'Wax Emulsion',
    price: '₹ 150/Kg',
    image: '/images/products/milky-paraffin-wax.jpg',
    shortDescription: 'Concentrated 50% wax emulsion offering high water proofing and gloss retention.',
    description: 'Premium grade wax emulsion delivering uniform microscopic film barrier upon drying. Extensively used in textile water-repellent finishes and leather glazing.',
    applications: ['Textile Water Repellency', 'Leather Glazing', 'Concrete Curing', 'Coating Formulations'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Barrel',
    specifications: {
      'Price': '₹ 150/Kg',
      'Physical State': 'Liquid',
      'Wax Type': 'Refined Paraffin Wax',
      'Stability': 'Freeze-Thaw Stable'
    },
    featured: false
  },
  {
    id: 19,
    name: 'Silicon Defoamer Emulsion for Wax Systems',
    slug: 'silicon-defoamer-emulsion-50',
    category: 'Wax Emulsion',
    price: '₹ 50/Kg',
    image: '/images/products/silicon-defoamer-emulsion-50.jpg',
    shortDescription: 'Technical grade silicone emulsion tailored for wax compounding and release agents.',
    description: 'Specialty 50/Kg technical grade silicone defoamer emulsion formulated to maintain phase stability when blended directly into wax formulations and polish products.',
    applications: ['Wax Polish Formulations', 'Release Agents', 'Industrial Emulsion Compounding'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg Drum',
    specifications: {
      'Color': 'White',
      'Usage/Application': 'Wax Systems & Release',
      'Viscosity': '300 - 800 cP'
    },
    featured: false
  },
  {
    id: 20,
    name: 'Glycol Based Defoamer for Emulsions',
    slug: 'glycol-based-defoamer-emulsions',
    category: 'Wax Emulsion',
    price: 'Get Latest Price',
    image: '/images/products/glycol-based-defoamer.jpg',
    shortDescription: 'Polypropylene glycol based defoamer for water-borne coatings and wax binders.',
    description: 'Efficient defoamer based on modified polyglycols. Disperses readily into water without separating or leaving greasy residue on treated substrates.',
    applications: ['Wax Emulsion Compounding', 'Water-Borne Adhesives', 'Latex Compounding'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Physical State': 'Liquid',
      'Active Substance': 'Modified Polyglycol Complex',
      'Water Solubility': 'Self-emulsifiable'
    },
    featured: false
  },

  // 6. Silicone Emulsion
  {
    id: 21,
    name: 'Silicone Emulsion 20% Non-Ionic',
    slug: 'silicone-emulsion-20-non-ionic',
    category: 'Silicone Emulsion',
    price: '₹ 95/Kg',
    image: '/images/products/silicone-emulsion-20.jpg',
    shortDescription: 'General purpose 20% active non-ionic silicone emulsion for mold release and polishing.',
    description: 'Silicone Emulsion 20 is a 20% active, non-ionic polydimethylsiloxane emulsion. Widely utilized in tyre molding, rubber goods release, vinyl car polish, and textile yarn lubrication.',
    applications: ['Tyre & Rubber Mold Release', 'Car & Vinyl Polish', 'Foundry Shell Molding', 'Yarn Lubrication'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Silicone Type': 'Non-Ionic Polydimethylsiloxane',
      'Application Use': 'Polish, Release',
      'Active Content': '20%',
      'Dilutability': 'Dilutable in water at any ratio'
    },
    featured: true
  },
  {
    id: 22,
    name: 'Liquid White Silicon Emulsion (SILEM S 74 Grade - 35%)',
    slug: 'liquid-white-silicon-emulsion-35',
    category: 'Silicone Emulsion',
    price: '₹ 70/Kg',
    image: '/images/products/silem-silicon-emulsion.jpg',
    shortDescription: 'High-purity 35% active silicone emulsion for industrial molding and textile soften.',
    description: 'Equivalent to international SILEM S 74 grade. Delivers exceptional slip, lubricity, and release characteristics without resin degradation.',
    applications: ['Textile Softening', 'Industrial Rubber Molding', 'Shoe Polish & Leather Care'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg HDPE Barrel',
    specifications: {
      'Brand / Grade': 'SILEM S 74',
      'Purity / Active': '35%',
      'Form': 'Liquid',
      'Appearance': 'Milky White Fluid'
    },
    featured: false
  },
  {
    id: 23,
    name: 'Milky White Sildef 50 BK Emulsion',
    slug: 'milky-white-sildef-50-bk',
    category: 'Silicone Emulsion',
    price: 'Get Latest Price',
    image: '/images/products/sildef-50-bk.jpg',
    shortDescription: 'Industrial silicone defoamer emulsion for heavy biological foam knockdown.',
    description: 'High performance silicone emulsion designed for continuous knockdown in aggressive agitation tanks, biological effluent aerators, and chemical reactors.',
    applications: ['Chemical Processing', 'Effluent Aerators', 'Textile Wet Processing'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Barrel',
    specifications: {
      'Physical State': 'Liquid',
      'Usage/Application': 'Industrial',
      'Active Content': '25% - 30%'
    },
    featured: false
  },
  {
    id: 24,
    name: 'Oil Based Defoamer Formulation',
    slug: 'oil-based-defoamer-formulation',
    category: 'Silicone Emulsion',
    price: 'Get Latest Price',
    image: '/images/products/oil-based-defoamer.jpg',
    shortDescription: 'Mineral oil-carrier defoaming formulation for paint, paper, and cement slurries.',
    description: 'Mineral oil carrier defoamer incorporating hydrophobic silica particles. Provides immediate knock-down and lasting de-aeration in viscous resin slurries and cement mortars.',
    applications: ['Cement Mortars', 'PVA Emulsions', 'Paper Mill Wet End'],
    grade: 'Industrial Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Drum',
    specifications: {
      'Base': 'Hydrocarbon Mineral Oil & Hydrophobic Particles',
      'Physical State': 'Liquid',
      'Flash Point': '> 150°C'
    },
    featured: false
  },

  // 7. Industrial Oil
  {
    id: 25,
    name: 'Knitting Oil 32 cSt (Scourable Grade)',
    slug: 'knitting-oil-32-cst-scourable',
    category: 'Industrial Oil',
    price: '₹ 175/Litre',
    image: '/images/products/knitting-oil.jpg',
    shortDescription: 'Self-scourable high-speed textile circular knitting oil 32 cSt.',
    description: 'Formulated with highly refined hydrofinished mineral oils and non-staining emulsifiers. Washes out completely during normal fabric scouring operations without leaving residual yellowing.',
    applications: ['Circular Knitting Machines', 'Hosiery Machines', 'Socks & Seamless Knitwear', 'Flat Knitting'],
    grade: 'Textile Scourable Grade',
    physicalState: 'Liquid',
    packaging: '20 Litre / 210 Litre Drum',
    specifications: {
      'Viscosity Grade': '32 cSt @ 40°C',
      'Oil Type': 'Scourable Non-Staining',
      'Flash Point': '> 190°C',
      'Color': 'Water White to Pale Yellow'
    },
    featured: true
  },
  {
    id: 26,
    name: 'Yarn Lubrication Oil (Synthetic Based)',
    slug: 'yarn-lubrication-oil-synthetic',
    category: 'Industrial Oil',
    price: '₹ 75/Kg',
    image: '/images/products/yarn-lubrication-oil.jpg',
    shortDescription: 'Synthetic based friction reducing yarn lubricant for texturizing and spinning.',
    description: 'Special synthetic based lubricant designed to minimize yarn-to-metal friction during high-speed texturizing, drawing, and conning operations. Prevents filament breakage.',
    applications: ['Yarn Texturizing', 'Draw Twisting', 'Conning Operations', 'Spinning Lines'],
    grade: 'Textile Grade',
    physicalState: 'Liquid',
    packaging: '200 Litre Barrel',
    specifications: {
      'Type': 'Synthetic Based Oil',
      'Usage/Application': 'Industrial Yarn Processing',
      'Anti-Static Property': 'Built-in Anti-Static Additives'
    },
    featured: false
  },
  {
    id: 27,
    name: 'Gandhar Spark Erosion Oil (EDM Fluid)',
    slug: 'gandhar-spark-erosion-oil',
    category: 'Industrial Oil',
    price: 'Get Latest Price',
    image: '/images/products/spark-erosion-oil.jpg',
    shortDescription: 'Dielectric spark erosion oil for CNC electrical discharge machining (EDM).',
    description: 'Low viscosity, high dielectric strength spark erosion oil for precision spark erosion and EDM machining. Provides rapid flushing, low odor, and minimal electrode wear.',
    applications: ['Electric Discharge Machining (EDM)', 'Die Sinking', 'Tool & Die Making'],
    grade: 'Dielectric EDM Grade',
    physicalState: 'Liquid',
    packaging: 'Barrel of 210 Litre',
    specifications: {
      'Unit Pack Size': 'Barrel of 210 Litre',
      'Automation Grade': 'Automatic CNC / Manual EDM',
      'Dielectric Strength': '> 40 kV',
      'Aromatic Content': '< 0.1%'
    },
    featured: false
  },
  {
    id: 28,
    name: 'Textile Silicone Softeners (Micro-Emulsion)',
    slug: 'textile-silicone-softeners',
    category: 'Industrial Oil',
    price: 'Get Latest Price',
    image: '/images/products/textile-silicone-softener.jpg',
    shortDescription: 'Amino-modified silicone softener providing silky inner softness to fabrics.',
    description: 'Micro-emulsion of amino-functional polydimethylsiloxane delivering exceptional inner bounce, silky hand-feel, and wrinkle resistance to cotton, polyester, and wool fabrics.',
    applications: ['Cotton Fabric Softening', 'Knitted Garment Finishing', 'Terry Towels', 'Denim Wash'],
    grade: 'Textile Finishing Grade',
    physicalState: 'Liquid',
    packaging: 'Bottle / Carboy / Drum',
    specifications: {
      'Form': 'Liquid',
      'Packaging Type': 'Bottle / Carboy',
      'Ionic Nature': 'Weak Cationic / Non-Ionic',
      'Yellowing Tendency': 'Very Low'
    },
    featured: false
  },

  // 8. Industrial Lubricants & Oil
  {
    id: 29,
    name: 'Circular Knitting Machine Oil 22/32',
    slug: 'circular-knitting-machine-oil',
    category: 'Industrial Lubricants & Oil',
    price: '₹ 175/Litre',
    image: '/images/products/circular-knitting-oil.jpg',
    shortDescription: 'Precision lubricant for needles, sinkers, and cam boxes in circular knitting machines.',
    description: 'Provides superior anti-wear protection and thermal stability to high-speed circular knitting needles, preventing needle latch seizure and reducing fabric staining.',
    applications: ['Circular Knitting Needles', 'Sinker Tracks', 'Cam Boxes', 'Warp Knitting'],
    grade: 'High Precision Machine Grade',
    physicalState: 'Liquid',
    packaging: 'Bottle of 500 mL / 5 L / 200 L',
    specifications: {
      'Price': '₹ 175/Litre',
      'Packaging Size': 'Bottle of 500 mL / Barrel',
      'Packaging Type': 'Bottle',
      'Anti-Wear Protection': 'High performance anti-wear package'
    },
    featured: true
  },
  {
    id: 30,
    name: 'Industrial Conning Oil (Texturizing Grade)',
    slug: 'industrial-conning-oil',
    category: 'Industrial Lubricants & Oil',
    price: '₹ 170/Litre',
    image: '/images/products/conning-oil.jpg',
    shortDescription: 'Scourable conning oil for polyester and nylon yarn winding and texturizing.',
    description: 'Formulated with ultra-pure white mineral oil and hydrophilic emulsifiers to ensure low yarn tension, anti-static discharge, and 100% scourability in dyeing baths.',
    applications: ['Yarn Texturizing (DNT/FDY/POY)', 'Package Winding', 'Twisting Operations'],
    grade: 'Texturizing Grade',
    physicalState: 'Liquid',
    packaging: 'Bottle / 20 L / 210 L Barrel',
    specifications: {
      'Price': '₹ 170/Litre',
      'Usage/Application': 'Used For All Texturizing',
      'Packaging Type': 'Bottle / Barrel',
      'Emulsification': 'Instant self-emulsification in water'
    },
    featured: false
  },
  {
    id: 31,
    name: 'Solvent Solution Silicon Defoamer Lubricant',
    slug: 'solvent-solution-silicon-defoamer-lubricant',
    category: 'Industrial Lubricants & Oil',
    price: 'Get Latest Price',
    image: '/images/products/solvent-solution-lubricant.jpg',
    shortDescription: 'Clear solvent solution silicon defoamer with anti-friction boundary lubricating film.',
    description: 'Combines boundary lubrication with aggressive anti-foaming. Ideal for cutting fluid sumps, heavy machine hydraulics, and mechanical seal flush systems.',
    applications: ['Machine Lubrication', 'Cutting Fluid Reservoirs', 'Hydraulic Systems', 'Seal Flushing'],
    grade: 'Technical Grade',
    physicalState: 'Liquid',
    packaging: '50 Kg / 200 Kg Barrel',
    specifications: {
      'Grade': 'Technical Grade',
      'Color': 'White to Clear',
      'Usage/Application': 'Industrial Machinery & Lubrication'
    },
    featured: false
  }
];

// Helper Functions
export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug) || null;
};

export const getProductsByCategory = (categoryName) => {
  if (!categoryName || categoryName === 'All') return products;
  return products.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

export const searchProducts = (query) => {
  if (!query || query.trim() === '') return products;
  const lowerQuery = query.toLowerCase().trim();
  return products.filter(p =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery) ||
    p.shortDescription.toLowerCase().includes(lowerQuery) ||
    p.applications.some(app => app.toLowerCase().includes(lowerQuery))
  );
};

export const getRelatedProducts = (productId, limit = 4) => {
  const product = products.find(p => p.id === productId);
  if (!product) return [];
  const sameCategory = products.filter(p => p.category === product.category && p.id !== productId);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = products.filter(p => p.category !== product.category && p.id !== productId);
  return [...sameCategory, ...others].slice(0, limit);
};

export const getCategoryBySlug = (slug) => {
  return categories.find(c => c.slug === slug) || null;
};
