// ---------------------------------------------------------------------------
// R. R. INTERIOR — all editable site content lives here.
// Change text, numbers, photos and phone numbers in this file only.
// Images live in /public/img — reference them as "/img/filename.jpg".
// ---------------------------------------------------------------------------

export const COMPANY = {
  name: 'R. R. Interior',
  tagline: 'Furniture Contractor',
  fullTagline: 'Furniture Contractor & Interior Decorators',
  email: 'rrinterior@gmail.com',
  gst: '27AACPM9647D1ZK',
  primaryPhone: '9920351225',
  primaryContact: 'Jagdish Suthar',
  address: {
    line1: 'C-55/101, Sector 10, Shanti Nagar,',
    line2: 'Mira Road (East), Thane — 401 107',
  },
  serviceAreas: 'Mumbai · Thane · Navi Mumbai',
  hours: 'Mon–Sat',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Shanti+Nagar+Sector+10+Mira+Road+East+Thane+401107',
};

// ---------------------------------------------------------------------------
// Where the Contact and Enquiry forms deliver.
//
// Submissions are posted to FormSubmit (formsubmit.co), which forwards them by
// email. No backend or API key is needed.
//
// ACTIVATION — required once, or nothing is delivered:
//   The very first submission makes FormSubmit email an activation link to the
//   address below. Open that email and click the link. Until you do, every
//   submission is silently dropped.
//
// The address is visible in the published JavaScript, so scrapers can read it.
// To avoid that: after activating, FormSubmit gives you a random alias — swap
// the whole endpoint for it and the address disappears from the bundle:
//   endpoint: 'https://formsubmit.co/ajax/1a2b3c4d5e6f...'
// ---------------------------------------------------------------------------
export const FORMS = {
  endpoint: `https://formsubmit.co/ajax/${COMPANY.email}`,
  contactSubject: 'RR Interior — New website enquiry',
  enquirySubject: 'RR Interior — New site visit request',
};

export const SLIDES = [
  {
    kicker: '01 — TURNKEY PROJECTS',
    title: ['One firm, from ', 'bare shell', ' to handover'],
    body:
      'Civil work, false ceiling, electrical, joinery, stone, painting and final polish — handled under a single contract. You deal with one family, not eight subcontractors.',
    stats: [
      { value: 'Turnkey', label: 'SINGLE POINT OF CONTACT' },
      { value: 'In-house', label: 'OWN FURNITURE PRODUCTION' },
      { value: 'Mumbai', label: 'LANDMARK ADDRESSES' },
    ],
    img: '/img/rajeev-terrace.jpg',
    alt: 'Finished terrace with city view',
    caption: 'Private residence — terrace and deck',
    tab: { title: 'Turnkey projects', sub: 'Every trade, one contract' },
  },
  {
    kicker: '02 — INTERIOR FIT-OUT',
    title: ['Built exactly as ', 'drawn', ''],
    body:
      "Marble, veneer, back-lit onyx, mirror ceilings and brass detailing, executed to the designer's drawing on Mumbai's most demanding sites — occupied buildings, tight lifts, strict society hours.",
    stats: [
      { value: 'Stone', label: 'MARBLE & ONYX SPECIALISTS' },
      { value: 'Metal', label: 'BRASS & MS FABRICATION' },
      { value: 'Finish', label: 'PU, VENEER, LACQUER' },
    ],
    img: '/img/fazlani-lounge.jpg',
    alt: 'Contemporary marble lounge',
    caption: 'Fazlani Residence — lounge and dining',
    tab: { title: 'Interior fit-out', sub: 'Built to the drawing' },
  },
  {
    kicker: '03 — BESPOKE FURNITURE',
    title: ['Furniture made ', 'for', ' the room it stands in'],
    body:
      'Bars, wardrobes, kitchens, libraries and beds built to the millimetre for the space they belong to. Curved forms, fluted fronts, arched niches and integrated lighting.',
    stats: [
      { value: 'Bespoke', label: 'NOTHING OFF THE SHELF' },
      { value: 'Site-fit', label: 'MEASURED, NOT ASSUMED' },
      { value: 'Hardware', label: 'SOFT-CLOSE THROUGHOUT' },
    ],
    img: '/img/horizon-bar.jpg',
    alt: 'Arched brass bar with display niches',
    caption: 'Horizon — bar with arched display niches',
    tab: { title: 'Bespoke furniture', sub: 'Made for the space' },
  },
];

export const TICKER = [
  'Usha Kiran, Carmichael Road',
  'Horizon',
  'Rajeev Goyal Residence',
  'Fazlani 16th Floor',
  'Fazlani 18th Floor',
  'Viveria, Worli',
  'Pali Palms, Bandra',
  'Navroze',
  'Badrinath, Khar',
  'Commercial fit-out, Mumbai',
];

export const ABOUT = {
  heading: 'A family of contractors, not a call centre',
  paras: [
    'R. R. Interior was started by Hariram Suthar and is run today with his four sons. Between them they cover estimation, production, site supervision and handover — which means the person who quotes your job is the same person you can call at nine at night when the lift is blocked.',
    'We work as furniture contractors and interior decorators across Mumbai, from Carmichael Road and Worli to Bandra, Khar and Mira Road, on both private residences and commercial fit-outs.',
  ],
  // TODO: confirm founding year and total project count with the client,
  // then replace the first two figures below.
  stats: [
    { value: '2', label: 'generations in the same trade' },
    { value: '5', label: 'family members on the ground' },
    { value: '10+', label: 'landmark Mumbai addresses' },
    { value: '1', label: 'contract for every trade' },
  ],
};

export const VIDEO = {
  heading: 'Bare shell to handover',
  lead:
    'This is the part clients never see — a stripped slab with exposed services turned into a finished, working office. Same camera, same walk, a few months apart.',
  src: '/vid/rr-transformation.mp4',
  poster: '/img/video-poster.jpg',
  steps: [
    {
      title: 'Bare shell handed to us',
      body: 'Exposed slab, open services, blockwork half done. No ceiling, no floor, no partitions.',
    },
    {
      title: 'Services and framing',
      body: 'Electrical, HVAC routing, ceiling grid and partition framing set out against the drawing.',
    },
    {
      title: 'Joinery and finishes',
      body: 'Reception counter, storage walls, veneer panelling and linear profile lighting installed.',
    },
    {
      title: 'Handover',
      body: 'Carpet laid, lighting commissioned, snags closed, keys returned to the client.',
    },
  ],
};

// TODO: add `area` and `year` for each project once the client confirms them.
export const PROJECTS = [
  { name: 'Gaja Capital', location: 'Mumbai', type: 'Workplace fit-out', img: '/img/gaja_capital_01.jpg' },
  { name: 'Usha Kiran', location: 'Carmichael Road', type: 'Full residence', img: '/img/usha-living.jpg' },
  { name: 'Horizon', location: 'Mumbai', type: 'Residence & bar', img: '/img/horizon-bar.jpg' },
  { name: 'Rajeev Goyal Residence', location: 'Mumbai', type: 'Full residence & terrace', img: '/img/rajeev-terrace.jpg' },
  { name: 'Fazlani Residence — 16th & 18th', location: 'Mumbai', type: 'Two floors, turnkey', img: '/img/fazlani-lounge.jpg' },
  { name: 'Viveria', location: 'Worli', type: 'Residential interiors', img: '/img/viveria-living.jpg' },
  { name: 'Pali Palms', location: 'Bandra', type: 'Apartment fit-out', img: '/img/pali-kitchen.jpg' },
  { name: 'Navroze', location: 'Mumbai', type: 'Joinery & storage', img: '/img/navroze-fluted.jpg' },
  { name: 'Badrinath', location: 'Khar', type: 'Residence & gym', img: '/img/badrinath-teakbed.jpg' },
];

export const GALLERY_FILTERS = [
  ['all', 'Everything'],
  ['living', 'Living & dining'],
  ['bed', 'Bedrooms'],
  ['kitchen', 'Kitchens'],
  ['bath', 'Bathrooms'],
  ['storage', 'Wardrobes & storage'],
  ['bar', 'Bars & terraces'],
  ['reel', 'Reels'],
];

// `size` controls the grid: 'tall' spans two rows, 'wide' spans two columns.
// Vertical (9:16) site walkthroughs. These loop silently in the grid like
// animated tiles; `cat: 'reel'` puts them behind the "Reels" filter.
// Titles and subs are safe to edit — the file names must match /public/vid.
export const REELS = [
  { file: 'gaja-capital', title: 'Gaja Capital', sub: 'Workplace fit-out · Mumbai' },
  { file: 'usha-kiran', title: 'Usha Kiran', sub: 'Full residence · Carmichael Road' },
  { file: 'viveria', title: 'Viveria', sub: 'Residential interiors · Worli' },
  { file: 'radhakunj', title: 'Radhakunj', sub: 'Site walkthrough' },
  { file: 'shivdham', title: 'Shivdham', sub: 'Site walkthrough' },
  { file: 'sandhu-palace', title: 'Sandhu Palace', sub: 'Site walkthrough' },
  { file: 'aktt-byculla', title: 'Aktt, Byculla', sub: 'Site walkthrough' },
  { file: 'aktt-1', title: 'Aktt', sub: 'Full walkthrough' },
].map((r) => ({ ...r, cat: 'reel', type: 'video', size: 'tall', src: `/vid/${r.file}.mp4` }));

export const GALLERY = [
  { file: 'horizon-bar', title: 'Bar with arched display niches', sub: 'Horizon · brass, stone and mirror', cat: 'bar', size: 'tall' },
  { file: 'fazlani-lounge', title: 'Lounge and dining', sub: 'Fazlani · marble, curved seating', cat: 'living', size: 'wide' },
  { file: 'rajeev-pool', title: 'Terrace pool and deck', sub: 'Rajeev Goyal Residence', cat: 'bar' },
  { file: 'usha-bluebed', title: 'Master bedroom', sub: 'Usha Kiran · fabric panelling', cat: 'bed' },
  { file: 'horizon-marble', title: 'Marble and mirror entrance', sub: 'Horizon', cat: 'living' },
  { file: 'rajeev-terrace', title: 'Terrace at night', sub: 'Rajeev Goyal Residence', cat: 'bar', size: 'wide' },
  { file: 'fazlani-bed', title: 'Guest bedroom', sub: 'Fazlani · panelled headboard wall', cat: 'bed' },
  { file: 'usha-kitchen', title: 'Kitchen in solid timber', sub: 'Usha Kiran', cat: 'kitchen' },
  { file: 'horizon-bar2', title: 'Bar counter detail', sub: 'Horizon · arched bottle niches', cat: 'bar' },
  { file: 'rajeev-living2', title: 'Living room', sub: 'Rajeev Goyal Residence', cat: 'living' },
  { file: 'fazlani-bath', title: 'Master bathroom', sub: 'Fazlani · book-matched marble', cat: 'bath', size: 'tall' },
  { file: 'usha-dining', title: 'Dining and library wall', sub: 'Usha Kiran', cat: 'living' },
  { file: 'horizon-living', title: 'Living with open shelving', sub: 'Horizon', cat: 'living' },
  { file: 'viveria-living', title: 'Living and dining', sub: 'Viveria, Worli', cat: 'living' },
  { file: 'rajeev-bed', title: 'Master bedroom', sub: 'Rajeev Goyal Residence', cat: 'bed' },
  { file: 'fazlani-wardrobe', title: 'Walk-in wardrobe', sub: 'Fazlani · brass and glass', cat: 'storage', size: 'tall' },
  { file: 'usha-living2', title: 'Sitting room', sub: 'Usha Kiran', cat: 'living' },
  { file: 'rajeev-kitchen', title: 'Island kitchen', sub: 'Rajeev Goyal Residence', cat: 'kitchen' },
  { file: 'horizon-bed', title: 'Bedroom with backlit headboard', sub: 'Horizon', cat: 'bed' },
  { file: 'viveria-bed', title: 'Bedroom', sub: 'Viveria, Worli', cat: 'bed' },
  { file: 'fazlani-dining', title: 'Dining lounge', sub: 'Fazlani', cat: 'living', size: 'wide' },
  { file: 'rajeev-bath', title: 'Vanity and dressing', sub: 'Rajeev Goyal Residence', cat: 'bath' },
  { file: 'usha-bluebed2', title: 'Bedroom', sub: 'Usha Kiran', cat: 'bed' },
  { file: 'horizon-corridor', title: 'Panelled passage', sub: 'Horizon · cove lighting', cat: 'living' },
  { file: 'navroze-fluted', title: 'Fluted wardrobe fronts', sub: 'Navroze', cat: 'storage' },
  { file: 'viveria-bed2', title: 'Bedroom with study', sub: 'Viveria, Worli', cat: 'bed' },
  { file: 'rajeev-dining', title: 'Dining room', sub: 'Rajeev Goyal Residence', cat: 'living' },
  { file: 'badrinath-teakbed', title: 'Bedroom in teak', sub: 'Badrinath, Khar', cat: 'bed' },
  { file: 'fazlani-archdoor', title: 'Arched entrance door', sub: 'Fazlani · stone flooring', cat: 'living', size: 'tall' },
  { file: 'viveria-bath', title: 'Mosaic bathroom', sub: 'Viveria, Worli', cat: 'bath' },
  { file: 'usha-living3', title: 'Living room', sub: 'Usha Kiran', cat: 'living' },
  { file: 'horizon-ceiling', title: 'Mirror ceiling and island', sub: 'Horizon', cat: 'kitchen' },
  { file: 'badrinath-wardrobe', title: 'Wardrobe wall in teak', sub: 'Badrinath, Khar', cat: 'storage' },
  { file: 'rajeev-bed2', title: 'Second bedroom', sub: 'Rajeev Goyal Residence', cat: 'bed' },
  { file: 'navroze-niche', title: 'Arched niche detail', sub: 'Navroze', cat: 'storage' },
  { file: 'viveria-bed3', title: 'Bedroom with wall panelling', sub: 'Viveria, Worli', cat: 'bed' },
  { file: 'pali-kitchen', title: 'Kitchen', sub: 'Pali Palms, Bandra', cat: 'kitchen' },
  { file: 'fazlani-niche', title: 'Arched niche in stone', sub: 'Fazlani', cat: 'storage' },
  { file: 'horizon-living2', title: 'Living with drapes', sub: 'Horizon', cat: 'living' },
  { file: 'viveria-living2', title: 'Sitting area', sub: 'Viveria, Worli', cat: 'living' },
  { file: 'gaja_capital_01', title: 'Gaja Capital reception', sub: 'Mumbai · office lobby', cat: 'living', size: 'wide' },
  { file: 'gaja_capital_02', title: 'Gaja Capital work lounge', sub: 'Mumbai · hospitality seating', cat: 'living' },
  { file: 'gaja_capital_03', title: 'Gaja Capital corridor', sub: 'Mumbai · passage styling', cat: 'living' },
  { file: 'gaja_capital_04', title: 'Gaja Capital board room', sub: 'Mumbai · meeting space', cat: 'living', size: 'wide' },
  { file: 'gaja_capital_05', title: 'Gaja Capital meeting bay', sub: 'Mumbai · client discussion zone', cat: 'living' },
  { file: 'gaja_capital_06', title: 'Gaja Capital pantry', sub: 'Mumbai · hospitality zone', cat: 'kitchen' },
  { file: 'gaja_capital_07', title: 'Gaja Capital work desk', sub: 'Mumbai · executive seating', cat: 'storage' },
  { file: 'gaja_capital_08', title: 'Gaja Capital lounge detail', sub: 'Mumbai · polished finish', cat: 'living' },
  { file: 'gaja_capital_09', title: 'Gaja Capital office wall', sub: 'Mumbai · custom joinery', cat: 'storage' },
  { file: 'gaja_capital_10', title: 'Gaja Capital meeting area', sub: 'Mumbai · collaborative seating', cat: 'living' },
  { file: 'gaja_capital_11', title: 'Gaja Capital conference area', sub: 'Mumbai · executive suite', cat: 'living', size: 'wide' },
  { file: 'gaja_capital_12', title: 'Gaja Capital work zone', sub: 'Mumbai · warm minimal workspace', cat: 'living' },
  { file: 'gaja_capital_13', title: 'Gaja Capital executive wall', sub: 'Mumbai · panel detail', cat: 'storage' },
  { file: 'gaja_capital_14', title: 'Gaja Capital communal area', sub: 'Mumbai · workstation lounge', cat: 'living' },
  { file: 'gaja_capital_15', title: 'Gaja Capital open office', sub: 'Mumbai · workspace elevation', cat: 'living' },
  { file: 'gaja_capital_16', title: 'Gaja Capital finish detail', sub: 'Mumbai · material palette', cat: 'living' },
  { file: 'gaja_capital_17', title: 'Gaja Capital signage wall', sub: 'Mumbai · feature partition', cat: 'living' },
  { file: 'gaja_capital_18', title: 'Gaja Capital reception edge', sub: 'Mumbai · front-of-house styling', cat: 'living' },
  { file: 'gaja_capital_19', title: 'Gaja Capital high-end lobby', sub: 'Mumbai · premium reception', cat: 'living', size: 'wide' },
  { file: 'gaja_capital_20', title: 'Gaja Capital lounge seating', sub: 'Mumbai · warm hospitality', cat: 'living' },
  { file: 'gaja_capital_21', title: 'Gaja Capital office entry', sub: 'Mumbai · arrival experience', cat: 'living' },
  { file: 'gaja_capital_22', title: 'Gaja Capital discussion booth', sub: 'Mumbai · private meeting nook', cat: 'living' },
  { file: 'gaja_capital_23', title: 'Gaja Capital premium office finish', sub: 'Mumbai · material styling', cat: 'living' },
  { file: 'gaja_capital_24', title: 'Gaja Capital work area', sub: 'Mumbai · elegant office planning', cat: 'living' },
  { file: 'gaja_capital_25', title: 'Gaja Capital hospitality bench', sub: 'Mumbai · lounge seating', cat: 'living' },
  { file: 'gaja_capital_26', title: 'Gaja Capital waiting zone', sub: 'Mumbai · reception furniture', cat: 'living' },
  { file: 'gaja_capital_27', title: 'Gaja Capital premium wall finish', sub: 'Mumbai · feature panel', cat: 'storage' },
  { file: 'gaja_capital_28', title: 'Gaja Capital collaborative area', sub: 'Mumbai · branded environment', cat: 'living' },
  { file: 'gaja_capital_29', title: 'Gaja Capital seating detail', sub: 'Mumbai · upholstered finish', cat: 'living' },
  { file: 'gaja_capital_30', title: 'Gaja Capital client zone', sub: 'Mumbai · polished workspace', cat: 'living' },
  { file: 'gaja_capital_31', title: 'Gaja Capital executive room', sub: 'Mumbai · premium detailing', cat: 'living' },
  { file: 'gaja_capital_32', title: 'Gaja Capital workstation', sub: 'Mumbai · office planning', cat: 'living' },
  { file: 'gaja_capital_33', title: 'Gaja Capital feature backdrop', sub: 'Mumbai · branded interior wall', cat: 'storage' },
  { file: 'gaja_capital_34', title: 'Gaja Capital open area', sub: 'Mumbai · office social space', cat: 'living' },
  { file: 'gaja_capital_35', title: 'Gaja Capital lounge styling', sub: 'Mumbai · hospitality interior', cat: 'living' },
  { file: 'gaja_capital_36', title: 'Gaja Capital desk pattern', sub: 'Mumbai · office detailing', cat: 'storage' },
  { file: 'gaja_capital_37', title: 'Gaja Capital feature nook', sub: 'Mumbai · front-of-house styling', cat: 'living' },
  { file: 'gaja_capital_38', title: 'Gaja Capital lounge composition', sub: 'Mumbai · premium seating', cat: 'living' },
  { file: 'gaja_capital_39', title: 'Gaja Capital seating wall', sub: 'Mumbai · refined detailing', cat: 'living' },
  { file: 'gaja_capital_40', title: 'Gaja Capital work cluster', sub: 'Mumbai · contemporary office', cat: 'living' },
  { file: 'gaja_capital_41', title: 'Gaja Capital entry statement', sub: 'Mumbai · reception environment', cat: 'living' },
  { file: 'gaja_capital_42', title: 'Gaja Capital lounge view', sub: 'Mumbai · premium office lobby', cat: 'living' },
  { file: 'gaja_capital_43', title: 'Gaja Capital meeting detail', sub: 'Mumbai · refined workspace', cat: 'living' },
  { file: 'gaja_capital_44', title: 'Gaja Capital executive corner', sub: 'Mumbai · private office', cat: 'living' },
  { file: 'gaja_capital_45', title: 'Gaja Capital interior grain', sub: 'Mumbai · finish palette', cat: 'storage' },
  { file: 'gaja_capital_46', title: 'Gaja Capital warm workspace', sub: 'Mumbai · modern office', cat: 'living' },
  { file: 'gaja_capital_47', title: 'Gaja Capital office finish', sub: 'Mumbai · completed interior', cat: 'living' },
];

export const PROCESS = [
  {
    title: 'Site visit and measurement',
    body: 'We measure the actual shell ourselves rather than working off the plan, because slabs and walls in Mumbai buildings are rarely square. Any deviation is flagged to you before quoting.',
  },
  {
    title: 'Drawings and line-item quote',
    body: 'You get a written quotation broken down by room and by item — not a lump sum. Nothing is fabricated until you have approved it.',
  },
  {
    title: 'Material selection',
    body: 'Marble, veneer, laminate, hardware and finishes selected with you and confirmed in writing, with samples wherever the decision matters.',
  },
  {
    title: 'Production',
    body: 'Furniture is built to size rather than bought in, so the fit against the wall, the ceiling and the flooring is correct the first time.',
  },
  {
    title: 'Site work and installation',
    body: 'Civil, ceiling, electrical, stone, joinery and painting sequenced by our own supervisors, working within society permission hours and lift restrictions.',
  },
  {
    title: 'Snagging and handover',
    body: 'A walk-through with you, a written snag list, and the job closed only when every point on it is signed off. We continue to service work we have done.',
  },
];

export const TEAM = [
  { name: 'Hariram Suthar', role: 'PROPRIETOR', phone: '9833110016', img: '/img/Hariram Suthar.jpeg' },
  { name: 'Jagdish Suthar', role: 'PARTNER', phone: '9920351225', img: '/img/Jagdish Suthar.jpeg' },
  { name: 'Dalpat Suthar', role: 'PARTNER', phone: '8452852956', img: '/img/Dalpat Suthar.jpeg' },
  { name: 'Dinesh Suthar', role: 'PARTNER', phone: '9930917894', img: '/img/Dinesh Suthar.jpeg' },
  { name: 'Mukesh Suthar', role: 'PARTNER', phone: '9001040066', img: '/img/Mukesh Suthar.jpeg' },
];

export const ENQUIRY_OPTIONS = {
  scope: [
    'Turnkey project',
    'Interior fit-out',
    'Bespoke furniture only',
    'Modular kitchen',
    'Wardrobes and storage',
    'Commercial / office',
  ],
  finish: ['Laminate and plywood', 'Veneer with PU polish', 'Marble, onyx and brass'],
  when: ['Within 3 months', '3 to 6 months', '6 to 12 months', 'Still planning'],
};

// Shorter labels shown on the buttons, matched by index to the values above.
export const ENQUIRY_LABELS = {
  scope: ['Turnkey project', 'Interior fit-out', 'Bespoke furniture', 'Modular kitchen', 'Wardrobes & storage', 'Commercial / office'],
  finish: ['Laminate', 'Veneer & PU', 'Marble, onyx & brass'],
  when: ['Within 3 months', '3–6 months', '6–12 months', 'Still planning'],
};

export const PROJECT_TYPES = [
  'Turnkey project',
  'Interior fit-out',
  'Bespoke furniture',
  'Modular kitchen',
  'Wardrobes and storage',
  'Commercial / office',
  'Renovation of existing flat',
];

export const FOOTER_SERVICES = [
  'Turnkey projects',
  'Interior fit-out',
  'Bespoke furniture',
  'Modular kitchens',
  'Wardrobes & storage',
  'Commercial interiors',
];

export const FOOTER_COMPANY = [
  ['Selected projects', '#work'],
  ['Gallery', '#gallery'],
  ['Our process', '#video'],
  ['Our team', '#team'],
  ['Contact', '#contact'],
];

export const formatPhone = (p) => `+91 ${p.slice(0, 5)} ${p.slice(5)}`;
