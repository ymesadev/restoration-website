export interface Location {
  slug: string;
  city: string;
  region: string;
  state: string;
  description: string;
  highlights: string[];
  challenges: string[];
  neighborhoods: string[];
  zipCodes: string[];
}

export const locations: Location[] = [
  {
    slug: "miami",
    city: "Miami",
    region: "South Florida",
    state: "FL",
    description: "Miami's tropical climate, with year-round high humidity and frequent hurricanes, makes properties vulnerable to water damage, mold growth, fire hazards, and storm-related roof damage. Our Miami team specializes in full-service restoration for high-rise condos, waterfront properties, and homes throughout Miami-Dade County.",
    highlights: [
      "Serving Miami-Dade County for over 15 years",
      "High-rise condo restoration specialists",
      "Hurricane damage and flood restoration experts",
      "Bilingual technicians (English/Spanish)",
    ],
    challenges: [
      "Year-round high humidity (75%+ average) drives mold growth",
      "Frequent tropical storms and hurricanes cause roof and water damage",
      "Salt air corrosion accelerates structural deterioration",
      "Older buildings with outdated electrical and plumbing systems",
    ],
    neighborhoods: ["Brickell", "Coral Gables", "Coconut Grove", "Little Havana", "Wynwood", "Miami Beach", "Kendall", "Doral"],
    zipCodes: ["33101", "33125", "33129", "33130", "33131", "33132", "33133", "33134", "33135", "33136"],
  },
  {
    slug: "fort-lauderdale",
    city: "Fort Lauderdale",
    region: "South Florida",
    state: "FL",
    description: "Known as the 'Venice of America' for its extensive canal system, Fort Lauderdale properties face unique restoration challenges from waterfront living. Our team handles water damage, mold, fire restoration, and roofing for canal-side homes, yacht clubs, and waterfront condominiums throughout Broward County.",
    highlights: [
      "Waterfront property restoration specialists",
      "Marina and yacht damage restoration",
      "Rapid response throughout Broward County",
      "Insurance claim assistance experts",
    ],
    challenges: [
      "Extensive canal system increases flood and water damage risk",
      "Waterfront properties prone to storm surge",
      "High water table affecting foundations and causing mold",
      "Salt air exposure accelerates roof and structural deterioration",
    ],
    neighborhoods: ["Las Olas", "Victoria Park", "Rio Vista", "Harbor Beach", "Lauderdale-by-the-Sea", "Wilton Manors", "Oakland Park", "Pompano Beach"],
    zipCodes: ["33301", "33304", "33305", "33306", "33308", "33309", "33311", "33312", "33315", "33316"],
  },
  {
    slug: "west-palm-beach",
    city: "West Palm Beach",
    region: "South Florida",
    state: "FL",
    description: "West Palm Beach and Palm Beach County feature luxury estates, waterfront condos, and growing suburban communities, all requiring premium restoration services. Our team provides discreet, professional fire, water, mold, and roofing restoration to some of South Florida's most prestigious properties.",
    highlights: [
      "Luxury property restoration specialists",
      "Discreet service for high-profile clients",
      "Palm Beach Island coverage",
      "Estate and large property experts",
    ],
    challenges: [
      "Oceanfront salt air and moisture cause persistent damage",
      "Large estate properties with complex systems",
      "Historic Palm Beach architecture requires careful restoration",
      "Hurricane season poses major roof and water damage risk",
    ],
    neighborhoods: ["Palm Beach Island", "Downtown West Palm", "Northwood", "El Cid", "Wellington", "Jupiter", "Palm Beach Gardens", "Royal Palm Beach"],
    zipCodes: ["33401", "33402", "33403", "33404", "33405", "33406", "33407", "33408", "33409", "33410"],
  },
  {
    slug: "boca-raton",
    city: "Boca Raton",
    region: "South Florida",
    state: "FL",
    description: "Boca Raton's affluent communities demand exceptional restoration services. From oceanfront estates to gated golf communities, our team provides premium fire, water, mold, and roofing restoration with attention to high-end finishes and materials throughout Palm Beach County.",
    highlights: [
      "Luxury home restoration specialists",
      "Gated community experience",
      "High-end finish protection and restoration",
      "FAU area and coastal property coverage",
    ],
    challenges: [
      "Premium materials requiring specialized restoration care",
      "Large properties with complex HVAC and plumbing systems",
      "HOA and community standards for repair work",
      "Coastal humidity and salt exposure damage roofs and structures",
    ],
    neighborhoods: ["Downtown Boca", "Boca West", "Royal Palm Yacht Club", "Mizner Park", "Town Center", "West Boca", "Delray Beach", "Highland Beach"],
    zipCodes: ["33427", "33428", "33429", "33431", "33432", "33433", "33434", "33486", "33487", "33496"],
  },
  {
    slug: "fort-myers",
    city: "Fort Myers",
    region: "Southwest Florida",
    state: "FL",
    description: "Southwest Florida's Gulf Coast location means Fort Myers properties face intense humidity, hurricane threats, and unique challenges from the Caloosahatchee River. Our team has extensive experience with post-hurricane restoration, particularly after recent major storms, covering fire, water, mold, and roofing damage.",
    highlights: [
      "Hurricane Ian recovery and restoration specialists",
      "Gulf Coast storm damage experts",
      "Rapid emergency response for all disaster types",
      "Island property service (Sanibel, Captiva)",
    ],
    challenges: [
      "Major hurricane damage zones require comprehensive restoration",
      "Gulf Coast humidity and storms cause persistent water and mold issues",
      "River and canal flooding creates recurring water damage",
      "Barrier island accessibility complicates emergency response",
    ],
    neighborhoods: ["Downtown Fort Myers", "Fort Myers Beach", "Cape Coral", "Sanibel Island", "Captiva", "Estero", "Bonita Springs", "Lehigh Acres"],
    zipCodes: ["33901", "33902", "33903", "33904", "33905", "33906", "33907", "33908", "33912", "33913"],
  },
  {
    slug: "naples",
    city: "Naples",
    region: "Southwest Florida",
    state: "FL",
    description: "Naples' reputation for luxury living means property owners expect the highest quality restoration service. Our Naples team provides premium fire, water, mold, and roofing restoration to estates, golf course communities, and beachfront properties throughout Collier County.",
    highlights: [
      "Premium restoration service for luxury properties",
      "Golf course community specialists",
      "Beachfront property experts",
      "Confidential high-end client service",
    ],
    challenges: [
      "High-end finishes requiring careful restoration techniques",
      "Large estates with complex HVAC and roofing systems",
      "Seasonal resident properties sitting vacant are vulnerable",
      "Gulf Coast hurricane exposure causes roof and water damage",
    ],
    neighborhoods: ["Old Naples", "Port Royal", "Pelican Bay", "Park Shore", "Vanderbilt Beach", "Marco Island", "Ave Maria", "Golden Gate"],
    zipCodes: ["34101", "34102", "34103", "34104", "34105", "34108", "34109", "34110", "34112", "34113"],
  },
  {
    slug: "sarasota",
    city: "Sarasota",
    region: "Southwest Florida",
    state: "FL",
    description: "Sarasota's cultural richness extends to its diverse architecture, from historic downtown buildings to modern Siesta Key beach homes. Our team understands the unique restoration needs of Sarasota's varied property types and the challenges of Gulf Coast living.",
    highlights: [
      "Historic building restoration experts",
      "Siesta Key and barrier island service",
      "Arts district property specialists",
      "Retirement community restoration experts",
    ],
    challenges: [
      "Mix of historic and modern properties require different restoration approaches",
      "Barrier island properties face extreme weather exposure",
      "Seasonal population fluctuations affect emergency response needs",
      "Cultural venues and galleries require specialized restoration care",
    ],
    neighborhoods: ["Downtown Sarasota", "Siesta Key", "Longboat Key", "St. Armands", "Lido Key", "Lakewood Ranch", "Bradenton", "Venice"],
    zipCodes: ["34230", "34231", "34232", "34233", "34234", "34235", "34236", "34237", "34238", "34239"],
  },
  {
    slug: "orlando",
    city: "Orlando",
    region: "Central Florida",
    state: "FL",
    description: "Orlando's position in Central Florida means dealing with intense summer humidity, frequent thunderstorms, and the aftermath of tropical systems. We serve residential communities, vacation rentals, and commercial properties with complete restoration services throughout Orange County.",
    highlights: [
      "Vacation rental restoration specialists",
      "Theme park area property experts",
      "New construction and older home services",
      "Commercial property restoration",
    ],
    challenges: [
      "Intense summer humidity and heat drive mold and moisture issues",
      "Frequent lightning strikes cause fire damage",
      "Vacation properties sitting vacant are vulnerable to undetected damage",
      "Rapid development with varying construction quality",
    ],
    neighborhoods: ["Downtown Orlando", "Winter Park", "Dr. Phillips", "Lake Nona", "Baldwin Park", "College Park", "Thornton Park", "Kissimmee"],
    zipCodes: ["32801", "32803", "32804", "32806", "32807", "32808", "32809", "32810", "32811", "32812"],
  },
  {
    slug: "jacksonville",
    city: "Jacksonville",
    region: "Northeast Florida",
    state: "FL",
    description: "As Florida's largest city by area, Jacksonville presents diverse restoration challenges from beach communities to riverfront properties to inland neighborhoods. Our Jacksonville team covers Duval County and surrounding areas with comprehensive fire, water, mold, and roofing restoration services.",
    highlights: [
      "Largest coverage area in Northeast Florida",
      "Beach and riverfront property specialists",
      "Military family discounts available",
      "Same-day inspections and emergency response",
    ],
    challenges: [
      "Coastal humidity from Atlantic Ocean causes persistent moisture damage",
      "St. Johns River flooding threatens waterfront properties",
      "Diverse property types across large area require varied expertise",
      "Older homes in historic districts need careful restoration approach",
    ],
    neighborhoods: ["Jacksonville Beach", "Riverside", "San Marco", "Mandarin", "Arlington", "Southside", "Ponte Vedra", "Orange Park"],
    zipCodes: ["32099", "32201", "32202", "32204", "32205", "32206", "32207", "32208", "32209", "32210"],
  },
  {
    slug: "gainesville",
    city: "Gainesville",
    region: "North Central Florida",
    state: "FL",
    description: "Home to the University of Florida, Gainesville combines student housing, historic neighborhoods, and modern developments. Our team serves the unique restoration needs of landlords, property managers, and homeowners throughout Alachua County with fire, water, mold, and roofing services.",
    highlights: [
      "Student housing restoration specialists",
      "Property management partnerships",
      "Historic Gainesville home experts",
      "University area rapid response",
    ],
    challenges: [
      "High-turnover rental properties suffer deferred maintenance damage",
      "Older student housing buildings are prone to water and mold issues",
      "Historic district preservation requirements affect restoration methods",
      "North Florida humidity patterns create seasonal mold risks",
    ],
    neighborhoods: ["Downtown Gainesville", "University Area", "Haile Plantation", "Tioga", "Duck Pond", "Newberry", "Archer", "High Springs"],
    zipCodes: ["32601", "32603", "32605", "32606", "32607", "32608", "32609", "32610", "32611", "32612"],
  },
  {
    slug: "tallahassee",
    city: "Tallahassee",
    region: "North Florida",
    state: "FL",
    description: "Florida's capital city features a unique blend of government buildings, two major universities, and diverse residential areas. Our Tallahassee team understands both the historic preservation needs and modern building requirements of the capital region for all restoration services.",
    highlights: [
      "Government building restoration certified",
      "University property specialists",
      "Historic Capitol area experts",
      "Full North Florida coverage",
    ],
    challenges: [
      "Government building security and compliance requirements",
      "Historic preservation standards limit restoration methods",
      "University facility regulations affect project timelines",
      "North Florida climate variations create different damage patterns",
    ],
    neighborhoods: ["Downtown Tallahassee", "Midtown", "Killearn", "Southwood", "Betton Hills", "Myers Park", "Lake Jackson", "Thomasville Road"],
    zipCodes: ["32301", "32302", "32303", "32304", "32305", "32306", "32307", "32308", "32309", "32310"],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}

export function getLocationsByRegion(): { [region: string]: Location[] } {
  return locations.reduce((acc, location) => {
    if (!acc[location.region]) {
      acc[location.region] = [];
    }
    acc[location.region].push(location);
    return acc;
  }, {} as { [region: string]: Location[] });
}
