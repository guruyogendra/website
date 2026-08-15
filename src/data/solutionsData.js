// BioMindz Solutions Private Limited - Central Solutions Data Repository

export const SOLUTIONS_DATA = [
  {
    id: 1,
    slug: 'agriculture',
    number: '01',
    discipline: 'AGRICULTURE',
    category: 'Agronomy & Field Dx',
    title: 'Smart Agri',
    subtitle: 'Precision soil & crop pathogen analysis for modern farming.',
    description: 'AgriScan brings clinical-grade molecular diagnostics directly into the field. Detect soil-borne fungal pathogens, nutrient deficiencies, and viral plant diseases with laboratory accuracy within minutes, enabling rapid agronomic decisions and optimal crop yield.',
    image: 'https://media.istockphoto.com/id/1297162357/photo/green-rural-field-at-the-sunset.jpg?s=170667a&w=0&k=20&c=F7b6dx0MUCB_nLB6fTi7DSoyl1Swdu3iAg8JsbCpneA=',
    capabilities: [
      'Multiplex DNA/RNA pathogen identification for soil & leaves',
      'Rapid 15-minute field extraction protocol with zero lab prep',
      'Solar-battery portable unit deployment rated IP67 field-rugged',
      'GPS & cloud mapping integration with live agronomic dashboard'
    ],
    highlights: [
      'Detects 40+ fungal and bacterial pathogens simultaneously',
      'Sub-picogram limit of detection in raw field soil',
      'Integrated cellular LTE sync to central farm management platforms'
    ],
    specifications: [
      { label: 'Sample Types', value: 'Soil cores, leaf tissue, plant sap, irrigation runoff' },
      { label: 'Detection Limit', value: '< 50 copies/µL target nucleic acid' },
      { label: 'Run Time', value: '12 – 15 minutes complete workflow' },
      { label: 'Connectivity', value: 'Cellular LTE, Wi-Fi 6, Bluetooth 5.3, GPS' },
      { label: 'Battery Life', value: '14 hours continuous sampling on dual lithium packs' },
      { label: 'Weight & Enclosure', value: '2.8 kg • IP67 Weatherproof composite housing' }
    ],
    telemetryDemo: {
      metricName: 'Pathogen DNA Copies',
      unit: 'copies/µL',
      normalRange: '< 100',
      sampleValue: '12',
      status: 'Clean / Healthy Soil'
    }
  },
  {
    id: 2,
    slug: 'urine-analyser',
    number: '02',
    discipline: 'URINE ANALYSER',
    category: 'Clinical Pathology',
    title: 'UroScan -AI',
    subtitle: 'Automated urinalysis with AI-assisted sediment recognition.',
    description: 'Combining high-speed test strip photometry with microscopic digital imaging, UroLyzer Pro automates physical, chemical, and formed element urinalysis to maximize throughput while minimizing manual microscopy time.',
    image: 'https://www.news-medical.net/image-handler/ts/20210210052601/ri/673/picture/2021/2/shutterstock_656103616.jpg',
    capabilities: [
      'Automated 14-parameter chemistry strip reading via multi-wavelength photometry',
      'High-resolution digital sediment classification via neural optical recognition',
      'Artificial intelligence neural net trained on 2M+ annotated cell images',
      'Stat emergency sample rack bypass for critical ICU samples'
    ],
    highlights: [
      'Processes 240 chemistry strips per hour with zero cross-contamination',
      'Classifies 18 distinct formed element cell types automatically',
      'Bidirectional LIS/HIS interface using HL7 version 2.5 and DICOM'
    ],
    specifications: [
      { label: 'Throughput', value: '240 strips/hr (120 sediment tests/hr)' },
      { label: 'Sample Volume', value: '2.0 mL minimum aspiration' },
      { label: 'Sediment Parameters', value: '18 cell classes (RBC, WBC, Casts, Crystals, Bacteria)' },
      { label: 'LIS Protocol', value: 'HL7 v2.5, ASTM bidirectional, REST API' },
      { label: 'Dimensions', value: '620 x 540 x 580 mm • 38 kg' },
      { label: 'Compliance', value: 'CE-IVD, FDA 510(k) cleared, ISO 15189' }
    ],
    telemetryDemo: {
      metricName: 'WBC Count & Crystals',
      unit: 'cells/HPF',
      normalRange: '0 - 5',
      sampleValue: '2.1',
      status: 'Normal Sediment Profile'
    }
  },
  {
    id: 3,
    slug: 'sperm-analyser',
    number: '03',
    discipline: 'SPERM ANALYSER',
    category: 'Andrology & ART',
    title: 'AndroVision -AI',
    subtitle: 'Computer-assisted semen analysis with 4K kinematic tracking.',
    description: 'SpermVision CASA brings objective standardization to andrology laboratories. Delivering precise measurements of sperm concentration, kinematic velocity, and strict morphology according to WHO 6th Edition guidelines.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRudE7OEuV5sLQwnhtDpSkKHOSlShHY6na5JaP7hBqYrlOy272V5Ne6Vk&s',
    capabilities: [
      'WHO 6th Edition compliant motility, concentration & vitality analysis',
      'Real-time multi-sperm kinematic trajectory tracing (VCL, VSL, VAP, LIN, STR)',
      'Automated Kruger strict morphology assessment using deep neural networks',
      'Integrated DNA fragmentation index (DFI) fluorometric module'
    ],
    highlights: [
      'High-speed 60fps 4K optical sensor eliminates motion blur artifacts',
      'Automated sample height correction for accurate volumetric counting',
      'Generates automated patient reports with embedded trajectory video clips'
    ],
    specifications: [
      { label: 'Optical Resolution', value: '4K Ultra-HD CMOS @ 60 fps' },
      { label: 'Analysis Time', value: '< 25 seconds per optic field' },
      { label: 'Magnification', value: '10x, 20x, 40x phase contrast with heated stage' },
      { label: 'Export Formats', value: 'PDF, MP4 clip, DICOM, CSV, HL7' },
      { label: 'Standard Compliance', value: 'WHO 2021 (6th Edition Laboratory Manual)' },
      { label: 'Temperature Control', value: '37.0°C ± 0.1°C stage heating plate' }
    ],
    telemetryDemo: {
      metricName: 'Progressive Motility (PR)',
      unit: '%',
      normalRange: '> 30%',
      sampleValue: '48.5%',
      status: 'Optimal Motility'
    }
  },
  {
    id: 4,
    slug: 'microbiology',
    number: '04',
    discipline: 'MICROBIOLOGY',
    category: 'Clinical Pathology',
    title: 'BioVision -AI',
    subtitle: 'Rapid microbial identification and automated susceptibility testing.',
    description: 'Accelerate targeted antimicrobial therapy. MicroID System combines laser-assisted ionization with microfluidic AST panels to identify bacterial and fungal pathogens and deliver minimal inhibitory concentration (MIC) profiles in hours instead of days.',
    image: 'https://deepmedicalcentre.com/wp-content/uploads/2023/02/image-9.png',
    capabilities: [
      'Direct-from-blood culture positive identification within 15 minutes',
      'Phenotypic antimicrobial susceptibility testing (AST) results in 4 to 6 hours',
      'Comprehensive database with EUCAST & CLSI updated interpretative criteria',
      'Automated barcode tracking with closed-tube sample handling'
    ],
    highlights: [
      'Reduces antibiotic stewardship decision time by over 36 hours',
      'Database covers 3,200+ clinical & environmental microbe species',
      'Integrated optical growth rate sensor with AI curve fitting'
    ],
    specifications: [
      { label: 'Species Database', value: '> 3,200 bacterial & fungal species' },
      { label: 'AST Panel Capacity', value: '64 simultaneous test cards' },
      { label: 'Time to Species ID', value: '15 minutes post-positive culture' },
      { label: 'Time to AST MIC', value: '4.5 hours average turnaround' },
      { label: 'Incubator Control', value: '35.0°C ± 0.2°C ambient regulated' },
      { label: 'Regulatory', value: 'CE-IVD, US FDA Cleared' }
    ],
    telemetryDemo: {
      metricName: 'Organism ID Match Rate',
      unit: '% Score',
      normalRange: '> 95%',
      sampleValue: '99.4%',
      status: 'S. aureus Confirmed'
    }
  },
  {
    id: 5,
    slug: 'oncology',
    number: '05',
    discipline: 'ONCOLOGY',
    category: 'Genomics & Precision Medicine',
    title: 'OncoScan -AI',
    subtitle: 'Targeted liquid biopsy profiling for solid tumors and hematology.',
    description: 'OncoDetect NGS leverages ultra-deep benchtop sequencing to detect circulating tumor DNA (ctDNA) variants at 0.01% variant allele frequency, empowering early detection, targeted therapy selection, and minimal residual disease monitoring.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop',
    capabilities: [
      'Ultra-deep ctDNA liquid biopsy profiling from standard blood plasma',
      '500+ gene pan-cancer biomarker panel including CNVs, SNVs, and fusions',
      'Automated microfluidic library preparation integration',
      'Onboard bioinformatic pipeline with clinical reporting'
    ],
    highlights: [
      'Detects micro-metastatic ctDNA down to 0.01% allele fraction',
      'Automated sample-to-report workflow in under 24 hours',
      'NCCN guideline aligned therapeutic marker recommendations'
    ],
    specifications: [
      { label: 'Sensitivity', value: '0.01% VAF (Variant Allele Frequency)' },
      { label: 'Turnaround Time', value: '24 hours library-to-report' },
      { label: 'Input Requirement', value: '10 ng cell-free DNA (cfDNA)' },
      { label: 'Sequencing Depth', value: '> 20,000x raw targeted coverage' },
      { label: 'Certification', value: 'CE-IVD, FDA Breakthrough Device Designation' },
      { label: 'Output Format', value: 'Variant Call Format (VCF), PDF Clinical Report' }
    ],
    telemetryDemo: {
      metricName: 'Target Gene Coverage',
      unit: 'Depth',
      normalRange: '> 15000x',
      sampleValue: '22,450x',
      status: 'High Confidence Sequencing'
    }
  },
  {
    id: 6,
    slug: 'haematology',
    number: '06',
    discipline: 'HAEMATOLOGY',
    category: 'Hematology & Blood Dx',
    title: 'HemaCount _AI',
    subtitle: 'High-throughput 5-part differential hematology analyzer.',
    description: 'Engineered for high-volume reference laboratories, HemaCount 5-Part delivers complete blood count (CBC) and 5-part white blood cell differential using semiconductor laser flow cytometry and digital optical fluorescence.',
    image: 'https://www.geetanjalihospital.co.in/img/media/cache/blogs/02/825x408/1010/2%20(1).jpg',
    capabilities: [
      '34 reportable CBC + 5-DIFF parameters with automated flagging',
      'Fluorescent optical platelet count channel for accurate micro-thrombocyte counts',
      'Reticulocyte fraction & nucleated RBC (nRBC) enumeration',
      'Autoloader with 100-sample rack capacity and STAT cap-piercing'
    ],
    highlights: [
      'Processes 100 samples per hour with micro-aspirations as low as 20 µL',
      'Dual semiconductor laser scatter diagram optical engine',
      'Zero maintenance micro-fluidic valving system'
    ],
    specifications: [
      { label: 'Throughput', value: '100 CBC+5DIFF tests/hour' },
      { label: 'Aspiration Volume', value: '20 µL whole blood mode' },
      { label: 'Linearity Range', value: 'WBC: 0 – 500 x 10^9/L • PLT: 0 – 5000 x 10^9/L' },
      { label: 'Autoloader Capacity', value: '10 racks x 10 tube continuous loader' },
      { label: 'Data Storage', value: '100,000 patient records + 3D scattergrams' },
      { label: 'Reagent Consumption', value: 'Low eco-pack formulation' }
    ],
    telemetryDemo: {
      metricName: 'Platelet Count (PLT)',
      unit: 'x10^9/L',
      normalRange: '150 - 450',
      sampleValue: '284',
      status: 'Normal Differential'
    }
  }
];

export const STATS_DATA = [
  { value: '6', label: 'Core Disciplines' },
  { value: '120+', label: 'Clinical Labs & Centers' },
  { value: '99.4%', label: 'Diagnostic Accuracy' },
  { value: '24/7', label: 'Real-Time Telemetry' }
];

export const MANIFESTO_ITEMS = [
  {
    number: '01',
    title: 'Precision without compromise',
    description: 'We test every sensor and optical channel to clinical tolerances exceeding ISO 13485 and FDA requirements.'
  },
  {
    number: '02',
    title: 'Automated intelligence',
    description: 'Eliminate manual variance with onboard machine vision and standardized robotic sample preparation.'
  },
  {
    number: '03',
    title: 'Ubiquitous connectivity',
    description: 'Every instrument natively synchronizes telemetry and diagnostic results to secure laboratory clouds.'
  },
  {
    number: '04',
    title: 'Field-to-lab continuity',
    description: 'Deploy identical diagnostic algorithms whether in point-of-care mobile units or central reference hospitals.'
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Dr. Aris Thorne',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former head of Molecular Diagnostics at BioTech Institute with 18+ years of experience in clinical instrument design.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Dr. Elena Rostova',
    role: 'Chief Scientific Officer',
    bio: 'Pioneer in microfluidics and rapid optical bio-sensing. Holds 14 patents in automated cellular microscopy.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop'
  },
  {
    name: 'Marcus Vance',
    role: 'VP of Hardware Engineering',
    bio: 'Specialist in semiconductor laser cytometry and ruggedized diagnostic robotics for field deployment.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
  }
];
