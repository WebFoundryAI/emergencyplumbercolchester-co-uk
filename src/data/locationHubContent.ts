/**
 * Location hub page content: Drainage profiles, landmarks, FAQs, and case studies
 * Each location has unique, genuinely researched content optimized for SEO and user experience
 */

export interface LocationHubFAQ {
  question: string;
  answer: string;
}

export interface LocationHubContent {
  landmarks: string[];
  drainageProfile: string;
  localFAQs: LocationHubFAQ[];
  caseStudy: string;
}

export const LOCATION_HUB_CONTENT: Record<string, LocationHubContent> = {
  colchester: {
    landmarks: [
      "Colchester Castle",
      "Firstsite",
      "Jumbo Water Tower",
      "Dutch Quarter",
      "Colchester Zoo",
      "Hollytrees Museum",
      "Castle Park",
      "High Street",
      "Balkerne Gate",
      "Mercury Theatre",
      "St Botolph's Priory",
      "Colchester Town Station",
      "University of Essex",
      "Colchester United Football Club",
      "Roman Wall",
      "St John's Abbey Gate",
      "Bourne Mill",
      "Lexden",
      "Mile End",
      "Greenstead",
      "Shrub End",
      "The Hythe"
    ],
    drainageProfile: `Colchester's drainage challenges are shaped by its status as Britain's oldest recorded town, with a history stretching back over two thousand years. The town centre sits on layers of Roman, medieval, and Victorian infrastructure, creating a complex underground environment where modern drainage must navigate ancient foundations, buried Roman roads, and centuries of accumulated construction. Areas around the Castle, High Street, and Balkerne Gate present particular challenges as excavation work can encounter Roman remains and heritage-protected structures.

The town's Roman heritage has a direct impact on drainage. Colchester was Camulodunum, the first capital of Roman Britain, and the Roman street grid and building foundations still influence the layout of underground services. Properties in the town centre, particularly around the Dutch Quarter and along Head Street, often sit above Roman layers that complicate pipe routing and excavation. The remains of the Roman wall that encircles much of the town centre create additional constraints for drainage engineers.

Colchester's geology is predominantly London Clay overlying sand and gravel deposits from the River Colne. London Clay is heavy and impermeable, meaning surface water drains slowly and properties are susceptible to waterlogging during wet periods. The clay also creates ground movement — shrinking in dry summers and swelling in wet winters — that puts stress on buried pipework and causes joint displacement over time. Properties built on clay subsoil often experience more frequent drainage problems than those on the gravel terraces nearer the river.

The River Colne flows through the eastern side of Colchester, and properties in low-lying areas such as The Hythe, East Colchester, and along the river corridor are at increased risk of drainage surcharging during heavy rainfall. Anglian Water manages the public sewer network, and the older combined sewer system in the town centre — carrying both foul water and surface water — can be overwhelmed during intense rainfall events.

Colchester's housing stock is exceptionally varied, reflecting its long history. The town has everything from medieval timber-framed buildings in the Dutch Quarter to Georgian townhouses on East Hill, Victorian terraces in the New Town area, post-war estates in Greenstead and Shrub End, and modern developments in the Garrison area and Severalls. Each era of construction used different drainage materials and methods, from clay pipes and brick sewers to modern plastic systems, and each requires appropriate maintenance techniques.

The garrison town heritage adds another dimension. The former military areas, now redeveloped for residential use, sometimes have drainage systems originally designed for military use that have been adapted for domestic properties. These can present unexpected complications when blockages occur in pipe runs that follow non-standard routes.`,
    localFAQs: [
      { question: "Do you cover all areas of Colchester?", answer: "Yes, we provide drainage services across all of Colchester including the town centre, Lexden, Mile End, Greenstead, Shrub End, The Hythe, Stanway, Wivenhoe, and all surrounding areas. Our engineers are positioned locally for fast response." },
      { question: "Are Colchester's old drains more likely to block?", answer: "Properties in Colchester's historic areas, particularly the town centre and Dutch Quarter, often have older clay or cast iron drainage that is more susceptible to root ingress, joint displacement, and scale buildup. Regular maintenance and CCTV surveys help identify problems before they cause blockages." },
      { question: "Do you handle drainage near listed buildings in Colchester?", answer: "Yes. Colchester has many listed buildings, particularly in the town centre and around the Castle. We have experience working in heritage-sensitive areas and use methods such as no-dig pipe relining that avoid the need for disruptive excavation near protected structures." },
      { question: "How does Colchester's clay soil affect drainage?", answer: "London Clay, which underlies much of Colchester, is heavy and impermeable. It causes ground movement between wet and dry seasons, which can displace pipe joints and create cracks that let tree roots enter. Clay soil also means surface water drains slowly, increasing the load on drainage systems during wet weather." }
    ],
    caseStudy: `A homeowner near Colchester Castle contacted us after persistent slow drainage affecting the kitchen and downstairs bathroom. The Victorian terrace had original clay pipes running beneath the property. Our CCTV survey revealed tree root ingress at two pipe joints and a partial collapse where the private drain connected to the main sewer beneath the road. Given the proximity to the historic Castle area, we used no-dig pipe relining to repair both the root-damaged joints and the partially collapsed section. The work was completed in a single day without any excavation, preserving the property's paved rear garden and avoiding the need for archaeological monitoring that would have been required for open-trench work in this heritage area.`
  },

  wivenhoe: {
    landmarks: [
      "Wivenhoe Quay",
      "University of Essex",
      "River Colne",
      "Wivenhoe Park",
      "St Mary the Virgin Church",
      "Nottage Maritime Institute",
      "Wivenhoe Trail",
      "The Rose and Crown",
      "Wivenhoe Cross"
    ],
    drainageProfile: `Wivenhoe sits on the southern bank of the River Colne, approximately four miles from Colchester town centre. The town's riverside location creates specific drainage challenges, particularly for properties along the Quay and in the lower-lying areas near the waterfront. Tidal influences on the River Colne can affect drainage outfall performance during high tides, causing temporary backups in properties closest to the water.

The older part of Wivenhoe around the Quay and High Street features historic properties dating from the 17th and 18th centuries, many with original drainage systems that have been modified and extended over the years. The narrow streets and closely packed buildings in this area make access difficult for larger drainage equipment, and our engineers use compact jetting units and flexible CCTV cameras suited to tight working conditions.

The University of Essex campus on the western edge of Wivenhoe has modern drainage infrastructure serving a large student and staff population. The campus sits on higher ground above the flood plain, but the surrounding residential areas between the university and the town centre include a mix of housing ages and drainage standards.

Wivenhoe's geology transitions from alluvial deposits near the river to London Clay and gravel on higher ground. Properties on the alluvial soils near the waterfront can experience different drainage challenges from those on the clay — including higher water tables and softer ground conditions that affect pipe stability.`,
    localFAQs: [
      { question: "Does the tide affect drainage in Wivenhoe?", answer: "Properties closest to the River Colne and Wivenhoe Quay can experience reduced drainage performance during high tides, particularly spring tides. If you notice slow drainage that coincides with tidal patterns, this likely indicates your drainage system is affected by tidal outfall conditions." },
      { question: "How quickly can you reach Wivenhoe?", answer: "Wivenhoe is approximately 10 minutes from our base. For emergencies, we aim to arrive within 60 minutes." },
      { question: "Do you cover the University of Essex area?", answer: "Yes, we provide drainage services to both the university campus and all surrounding residential areas in Wivenhoe." }
    ],
    caseStudy: `A riverside property on Wivenhoe Quay reported recurring drainage backups that seemed to worsen at certain times of the month. Our investigation revealed that the property's drainage outfall was partially submerged during spring high tides, causing sewage to back up through the system. We installed a non-return valve on the main drain run to prevent tidal backflow, and jetted the entire system to remove accumulated silt deposits. The homeowner has reported no further issues since the work was completed.`
  },

  "west-mersea": {
    landmarks: [
      "Mersea Island",
      "West Mersea Beach",
      "Cudmore Grove Country Park",
      "The Strood",
      "Company Shed",
      "Mersea Island Vineyard",
      "St Peter and St Paul Church",
      "Mersea Barrow",
      "Blackwater Estuary"
    ],
    drainageProfile: `West Mersea occupies the western end of Mersea Island in the Blackwater Estuary, connected to the mainland by The Strood — a causeway that floods during high tides. This island location creates unique drainage challenges not found elsewhere in the Colchester area. The low-lying topography and proximity to tidal waters mean high water tables and saltwater influence are constant factors in drainage system design and maintenance.

The town's drainage infrastructure must cope with the island's flat terrain and impermeable London Clay subsoil, which combine to create slow surface water drainage and increase the load on underground systems during wet weather. Properties near the seafront and along Coast Road are particularly vulnerable to high water table conditions that can cause groundwater infiltration into drainage pipes through joints and cracks.

West Mersea has a mix of older village properties around the church and High Street, seaside cottages and bungalows along the coast, and modern developments on the outskirts. Many of the older properties have drainage systems that were installed before modern standards applied, and the island's exposed coastal conditions accelerate pipe degradation compared to more sheltered inland locations.

Access to West Mersea can be restricted during high tides when The Strood is submerged. For emergency callouts, we monitor tide times and plan routes accordingly to ensure our engineers can reach the island when needed.`,
    localFAQs: [
      { question: "Can you reach West Mersea during high tide?", answer: "The Strood is impassable during the highest tides. We monitor tide tables and can time our visits to avoid tidal restrictions. For emergencies during high tide periods, we coordinate with our schedule to arrive before or after the causeway is clear." },
      { question: "Does the coastal location affect drains on Mersea Island?", answer: "Yes. Saltwater and sand intrusion, high water tables, and tidal influences all affect drainage systems on the island. Pipes and joints degrade faster in coastal conditions, and we recommend more frequent CCTV inspections for island properties." },
      { question: "Do you service holiday homes and caravan parks on Mersea?", answer: "Yes, we provide drainage services for all property types on Mersea Island including permanent homes, holiday lets, caravan parks, and commercial premises." }
    ],
    caseStudy: `A restaurant near West Mersea waterfront experienced persistent drainage issues that were affecting trade. The high water table and tidal conditions meant conventional drainage solutions had not been effective. Our survey identified a failed non-return valve and extensive sand infiltration in the drainage run. We replaced the valve, jetted and cleared the system, and installed additional inspection chambers for easier future maintenance. The restaurant has been trouble-free since the remedial work.`
  },

  tiptree: {
    landmarks: [
      "Wilkin & Sons Jam Factory",
      "Tiptree Heath",
      "St Luke's Church",
      "Tiptree Village Hall",
      "Messing Road",
      "Brook Meadow",
      "Tiptree United Football Club"
    ],
    drainageProfile: `Tiptree is a large village situated on a gravel plateau approximately eight miles south-west of Colchester. The village is best known as the home of Wilkin & Sons, makers of Tiptree jam. The surrounding area is predominantly agricultural with heavy clay soils that affect drainage conditions across the village.

The village has expanded significantly since the mid-20th century, with housing estates built in phases from the 1950s through to the present day. Each era of construction used different drainage materials and standards — from the clay pipes of the older village core to plastic systems in modern developments. The older areas around the High Street and church typically have the most drainage issues, with ageing pipework susceptible to root ingress and joint displacement.

Tiptree's position on higher ground means it is not affected by river flooding, but the heavy clay soils create surface water management challenges. During heavy rainfall, surface water can overwhelm drainage systems, particularly in areas where soakaways are ineffective due to the impermeable clay subsoil.

The surrounding agricultural land means tree root ingress is a common drainage problem in Tiptree, with mature hedgerows and garden trees sending roots considerable distances to reach the moisture in drainage pipes.`,
    localFAQs: [
      { question: "Do you cover all of Tiptree?", answer: "Yes, we provide drainage services throughout Tiptree including all residential estates, the village centre, and surrounding rural properties." },
      { question: "Why do tree roots cause so many drain problems in Tiptree?", answer: "Tiptree's clay soil retains moisture unevenly, so tree roots actively seek out the consistent moisture source that drainage pipes provide. Roots can infiltrate even small cracks and joints, eventually causing complete blockages." },
      { question: "How quickly can you reach Tiptree from Colchester?", answer: "Tiptree is approximately 15 minutes from our base. We aim to arrive within 60 to 90 minutes for emergency callouts." }
    ],
    caseStudy: `A property on one of Tiptree's established estates experienced repeated toilet and bath blockages over a six-month period. Multiple callouts to clear the immediate blockage had not addressed the underlying cause. Our CCTV survey revealed extensive tree root ingress from a mature hedge along the property boundary. The roots had penetrated three pipe joints and were restricting flow by over 50 per cent. We cleared the roots using mechanical cutting equipment, then relined all three affected joints to prevent regrowth. A follow-up survey six months later confirmed the relining was intact and no root re-entry had occurred.`
  },

  witham: {
    landmarks: [
      "Newland Street",
      "River Brain",
      "Witham Town Park",
      "Chipping Hill",
      "St Nicolas Church",
      "The Grove Shopping Centre",
      "Witham Railway Station",
      "Dorothy L Sayers Centre"
    ],
    drainageProfile: `Witham is a historic market town situated on the River Brain, approximately twelve miles west of Colchester. The town has a well-preserved High Street along Newland Street with buildings dating from the medieval period through to the Georgian era, alongside significant modern residential development on the outskirts.

The River Brain flows through the town and its flood plain affects drainage conditions in low-lying areas, particularly around Chipping Hill and along the river corridor. Properties in these zones face increased risk of drainage surcharging during heavy rainfall as the rising river level reduces the effectiveness of drainage outfalls.

Witham's older properties around Newland Street and Chipping Hill have drainage systems ranging from Victorian clay pipes to more recent upgrades. The town's growth in the post-war period, particularly the large housing estates built in the 1960s and 1970s, created extensive drainage networks that are now reaching the age where maintenance issues become more frequent.

The underlying geology is primarily London Clay with river alluvium near the Brain. The clay subsoil causes the same ground movement and drainage challenges seen across the Colchester area, while the alluvial deposits near the river create softer ground conditions that can lead to pipe settlement.`,
    localFAQs: [
      { question: "Does the River Brain cause drainage problems in Witham?", answer: "Properties near the River Brain can experience drainage surcharging during heavy rainfall when the river level rises and reduces the effectiveness of drainage outfalls. If you notice drainage problems that coincide with wet weather, we can assess whether your system needs protective measures such as non-return valves." },
      { question: "Do you cover Witham town centre and surrounding areas?", answer: "Yes, we cover all of Witham including the town centre, Chipping Hill, Maltings Lane, the newer estates, and surrounding areas." },
      { question: "How quickly can you get to Witham?", answer: "Witham is approximately 20 minutes from our Colchester base. For emergency callouts, we aim to arrive within 60 to 90 minutes." }
    ],
    caseStudy: `A commercial property on Newland Street in Witham town centre reported a blocked drain that was causing water to back up through the ground floor toilet and floor drain. The property's drainage ran beneath a shared rear courtyard with limited access. Our CCTV survey identified a collapsed clay pipe section beneath the courtyard, caused by ground settlement in the alluvial soil. We used no-dig pipe relining to repair the collapsed section, avoiding the need to excavate the shared courtyard and disrupting neighbouring businesses. The work was completed in half a day.`
  },

  kelvedon: {
    landmarks: [
      "Kelvedon High Street",
      "River Blackwater",
      "St Mary the Virgin Church",
      "Kelvedon Railway Station",
      "Feering Hill",
      "Felix Place"
    ],
    drainageProfile: `Kelvedon is a village on the River Blackwater between Colchester and Witham, situated along the route of the old Roman road from London to Colchester. The village's long history — it was known as Canonium in Roman times — means underground infrastructure can be complex, with modern drainage sharing the ground with centuries of earlier construction.

The River Blackwater forms the southern boundary of the village and its flood plain affects drainage conditions in low-lying areas. Properties along the High Street and those closest to the river are most affected during periods of heavy rainfall.

Kelvedon's housing ranges from period cottages along the High Street to modern estates on the edges of the village. The older properties typically have clay pipe drainage that requires more regular maintenance, while modern developments benefit from plastic pipe systems with better joint seals.

The village is served by Anglian Water's sewer network, and the relatively rural nature of the surrounding area means some outlying properties rely on private drainage systems including septic tanks and package treatment plants.`,
    localFAQs: [
      { question: "Do you work on septic tanks near Kelvedon?", answer: "Yes, we service private drainage systems including septic tanks and package treatment plants for rural properties around Kelvedon and the surrounding area." },
      { question: "How quickly can you reach Kelvedon?", answer: "Kelvedon is approximately 15 minutes from our Colchester base. Emergency callouts are prioritised for the fastest possible response." },
      { question: "Does the River Blackwater affect drainage in Kelvedon?", answer: "Properties near the River Blackwater can experience drainage performance issues during high water levels. We can advise on protective measures including non-return valves to prevent backflow during flood conditions." }
    ],
    caseStudy: `A period cottage on Kelvedon High Street experienced persistent dampness and slow drains that had been worsening over several years. Our CCTV survey revealed multiple displaced joints in the original clay pipe run beneath the rear garden. Tree roots from a large willow near the boundary had entered through the displaced joints and were causing partial blockages. We cleared the roots mechanically, relined the affected pipe section, and the homeowner reported an immediate improvement in drainage performance and a reduction in dampness.`
  },

  "marks-tey": {
    landmarks: [
      "Marks Tey Railway Station",
      "A12/A120 Junction",
      "St Andrew's Church",
      "Marks Tey Village Hall",
      "Little Tey"
    ],
    drainageProfile: `Marks Tey is a village west of Colchester, strategically positioned at the junction of the A12 and A120. The village has seen significant residential development in recent decades due to its excellent transport links, with new housing estates extending the original village core.

The mix of older village properties and modern developments means drainage systems of varying ages and materials coexist. The original village around the church and railway station has older drainage infrastructure, while the newer estates benefit from modern plastic pipe systems built to current standards.

The underlying geology is predominantly London Clay, which creates the typical drainage challenges of ground movement and poor natural drainage. The flat agricultural landscape surrounding Marks Tey means surface water management is important, as there are limited natural watercourses to carry excess rainwater away.

Some properties on the edges of the village have private drainage arrangements including soakaways and septic tanks, particularly those that pre-date mains drainage being extended to serve the area.`,
    localFAQs: [
      { question: "Do you cover Marks Tey and surrounding villages?", answer: "Yes, we provide drainage services throughout Marks Tey, Little Tey, Copford, and all surrounding areas." },
      { question: "How quickly can you reach Marks Tey?", answer: "Marks Tey is approximately 10 minutes from our Colchester base via the A12." },
      { question: "Can you work on drainage near the A12?", answer: "Yes, we regularly work on properties adjacent to major roads. We carry appropriate traffic management equipment and are experienced in working in constrained locations near busy transport corridors." }
    ],
    caseStudy: `A homeowner in one of Marks Tey's newer estates reported a blocked outside drain that was causing water to pool in the rear garden. Investigation revealed that the drainage run had been installed with insufficient fall during the original construction, creating a low point where silt and debris accumulated. We jetted the full length of the drain to clear the buildup, then used CCTV to document the gradient issue. The homeowner used our report to pursue the issue with their NHBC warranty. As an interim measure, we recommended annual maintenance jetting to prevent recurrence.`
  },

  brightlingsea: {
    landmarks: [
      "Brightlingsea Harbour",
      "Brightlingsea Lido",
      "All Saints Church",
      "Bateman's Tower",
      "Colne Estuary",
      "Brightlingsea Creek",
      "Hurst Green",
      "Brightlingsea Museum"
    ],
    drainageProfile: `Brightlingsea is a small port town on the western shore of the Colne Estuary, approximately eight miles south-east of Colchester. The town has a proud maritime heritage and its coastal position creates specific drainage challenges related to tidal influences, saltwater proximity, and a high water table.

The older part of Brightlingsea around the harbour, High Street, and church features period properties with drainage systems of varying ages. The town's position on low-lying land near the estuary means groundwater levels are generally high, which increases the risk of groundwater infiltration into ageing drainage pipes and reduces the effectiveness of soakaways.

Properties near the waterfront and harbour are particularly affected by tidal conditions. During high spring tides, drainage outfalls can be submerged, causing temporary backups in connected properties. The exposure to saline conditions also accelerates corrosion of older metal pipes and fittings.

Brightlingsea's relative isolation — it is accessed via a single road from the B1029 — means that drainage infrastructure serving the town must be well maintained, as major sewer failures could affect a significant number of properties with limited alternative routes for waste water.`,
    localFAQs: [
      { question: "How do tides affect drainage in Brightlingsea?", answer: "Properties near the harbour and waterfront can experience reduced drainage performance during high tides when outfalls are submerged. Non-return valves can prevent backflow during these periods." },
      { question: "Do coastal conditions damage drains faster?", answer: "Yes, saltwater exposure and higher moisture levels in coastal areas like Brightlingsea can accelerate pipe degradation, particularly in older metal pipes. More frequent CCTV inspections are advisable for coastal properties." },
      { question: "How quickly can you reach Brightlingsea?", answer: "Brightlingsea is approximately 20 minutes from our Colchester base. We aim to arrive within 60 to 90 minutes for emergency callouts." }
    ],
    caseStudy: `A group of properties near Brightlingsea harbour experienced recurrent drainage problems during autumn high tides. Our investigation revealed that the shared drainage outfall serving several properties had deteriorated due to tidal action and saltwater exposure. We repaired the outfall, installed non-return valves for each connected property, and jetted the shared drainage run to remove accumulated silt. The properties have since reported reliable drainage performance regardless of tidal conditions.`
  },

  manningtree: {
    landmarks: [
      "Manningtree High Street",
      "River Stour",
      "Dedham Vale",
      "Mistley Towers",
      "Manningtree Railway Station",
      "The Walls",
      "St Michael and All Angels Church",
      "Mistley Quay"
    ],
    drainageProfile: `Manningtree, known as the smallest town in England, sits on the south bank of the River Stour in the Dedham Vale, an Area of Outstanding Natural Beauty. The town and its neighbours Mistley and Lawford form a continuous built-up area with shared drainage infrastructure.

The River Stour and its estuary dominate the local geography. Properties in lower-lying areas near the river are susceptible to drainage issues during high water levels, and tidal influences from the Stour Estuary can affect drainage outfall performance in Manningtree and Mistley.

The town's compact historic centre around the High Street features period buildings with older drainage systems, while residential areas on higher ground towards Lawford have more modern infrastructure. The neighbouring village of Mistley, with its distinctive Mistley Towers and quayside, shares many of the same tidal drainage challenges.

Manningtree's position at the eastern edge of the Colchester service area means response times are slightly longer than for more central locations, but our engineers are experienced in the area and familiar with the specific drainage challenges of this riverside town.`,
    localFAQs: [
      { question: "Do you cover Manningtree, Mistley, and Lawford?", answer: "Yes, we provide drainage services throughout Manningtree, Mistley, Lawford, and all surrounding areas in the Stour Valley." },
      { question: "Does the River Stour affect drainage in Manningtree?", answer: "Properties near the river and in lower-lying areas can experience drainage performance issues during high river levels and tidal events. We can assess your system and recommend protective measures such as non-return valves." },
      { question: "How quickly can you reach Manningtree?", answer: "Manningtree is approximately 20 minutes from our Colchester base. For emergency callouts, we aim to arrive within 60 to 90 minutes." }
    ],
    caseStudy: `A period property on Manningtree High Street had experienced an ongoing issue with sewage smells in the ground floor kitchen. Multiple attempts by other contractors to clear blockages had not resolved the problem. Our CCTV survey identified a bellied section of clay pipe beneath the kitchen floor where ground settlement had created a dip that trapped waste and generated odour. Rather than excavating beneath the kitchen floor, we used pipe relining to restore the pipe profile and eliminate the low point. The sewage smell was completely resolved.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
