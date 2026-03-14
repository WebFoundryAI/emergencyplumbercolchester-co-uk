/**
 * Location-specific data including neighborhoods, landmarks, and drainage challenges
 */
export interface LocationData {
  neighborhoods: string[];
  landmarks: string[];
  drainageInfo: string;
  responseTime: string;
  propertyTypes: string;
}

export const LOCATION_DATA: Record<string, LocationData> = {
  colchester: {
    neighborhoods: ["Town Centre", "Lexden", "Mile End", "Stanway", "Highwoods", "Prettygate", "Shrub End", "Old Heath"],
    landmarks: ["Colchester Castle", "Firstsite Gallery", "Jumbo Water Tower", "the High Street", "Colchester Zoo"],
    drainageInfo: "Colchester's rich Roman and medieval heritage means the town centre sits atop some of the oldest underground infrastructure in Essex. Victorian terraces in the Dutch Quarter and Old Heath feature ageing clay pipe networks, while modern estates in Highwoods and Stanway have newer plastic systems. The River Colne running through the town influences water tables, and the clay-heavy Essex soil creates specific challenges for drainage engineers across the borough.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Victorian terraces, Edwardian semis, modern detached homes, and commercial premises"
  },
  wivenhoe: {
    neighborhoods: ["The Quay", "Vine Farm", "Millfields", "Broadfields", "Philip Road area"],
    landmarks: ["Wivenhoe Quay", "the River Colne waterfront", "Wivenhoe Park", "the University of Essex", "Wivenhoe Cross"],
    drainageInfo: "Wivenhoe's riverside and estuary location brings distinctive drainage challenges. The historic quayside area has period drainage systems susceptible to tidal influences from the River Colne, while newer developments around Vine Farm and Broadfields have modern drainage that can experience settlement issues. The town's proximity to the estuary means some properties contend with elevated water tables, particularly during high tides and periods of sustained rainfall.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "riverside cottages, Victorian terraces, modern family homes, and converted waterfront properties"
  },
  "west-mersea": {
    neighborhoods: ["The Waterfront", "Barfield Road", "Mersea Island centre", "East Mersea", "Cudmore Grove area"],
    landmarks: ["West Mersea Beach", "the Strood causeway", "Mersea Island Vineyard", "Cudmore Grove Country Park", "the oyster beds"],
    drainageInfo: "West Mersea's island location on the Blackwater Estuary creates unique drainage considerations. The Strood causeway floods at high tide, and coastal properties face saltwater influence on underground infrastructure. Sandy and silty soil near the coast allows pipe movement, while the island's relatively flat terrain means drainage relies on well-maintained gradients. Victorian cottages near the waterfront have original clay pipe systems, and the island's popularity has led to many property extensions that alter original drainage layouts.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "seaside cottages, Victorian terraces, modern bungalows, and beachfront properties"
  },
  tiptree: {
    neighborhoods: ["Tiptree Heath", "Tower End", "Church Road area", "Grange Road area", "Vine Road area"],
    landmarks: ["Wilkin & Sons Jam Factory", "Tiptree Heath", "St Luke's Church", "the B1023 through the village", "Tiptree United FC ground"],
    drainageInfo: "Tiptree's development from a rural Essex village into a thriving community means drainage infrastructure varies considerably across the area. Older properties near the village centre have traditional clay pipe systems, while the extensive post-war and modern housing estates on the outskirts have concrete and plastic drainage of varying ages. The local London Clay geology can cause ground movement during wet and dry cycles, affecting pipe joints and connections.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional village cottages, post-war semis, modern detached family homes, and rural properties"
  },
  witham: {
    neighborhoods: ["Chipping Hill", "Newlands", "Maltings Lane", "Powers Hall End", "Rickstones Road area"],
    landmarks: ["the River Brain", "Witham High Street", "Chipping Hill Conservation Area", "The Grove shopping centre", "Witham railway station"],
    drainageInfo: "Witham combines a historic market town centre with extensive modern residential development. Chipping Hill's conservation area features period properties with original drainage dating back generations, while estates along Maltings Lane and around Powers Hall End have drainage from various decades of expansion. The River Brain flows through the town, influencing water tables in nearby properties and creating flood risk during heavy rainfall periods.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period cottages, Victorian terraces, 1960s-80s housing estates, and modern family homes"
  },
  kelvedon: {
    neighborhoods: ["High Street area", "Easterford Road", "Church Street", "Kelvedon Hatch", "Feering"],
    landmarks: ["Kelvedon High Street", "the River Blackwater", "St Mary's Church", "Feering Hill", "the A12 corridor"],
    drainageInfo: "Kelvedon's historic village centre along the High Street features period properties with traditional clay drainage systems, while surrounding residential areas have a mix of post-war and modern infrastructure. The River Blackwater running nearby influences local water tables, and properties in lower-lying areas near the river can experience higher groundwater levels during wet weather. The village's Essex clay soil means seasonal ground movement can affect pipe joints over time.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "period village properties, traditional terraces, modern estates, and rural homes"
  },
  "marks-tey": {
    neighborhoods: ["London Road", "Old London Road", "Godmans Lane", "Marks Tey village", "Copford Green"],
    landmarks: ["Marks Tey railway station", "the A12/A120 junction", "St Andrew's Church", "the former Marks Tey Hotel site", "Copford Church"],
    drainageInfo: "Marks Tey is a village that has grown around the railway station and the junction of the A12 and A120. Properties near the village centre have older drainage systems, while housing developments further out feature modern plastic pipe networks. The flat terrain of this part of Essex means surface water drainage is particularly important, and the heavy clay soil can lead to waterlogging during prolonged wet weather. Road drainage from the major trunk roads nearby can also influence local conditions.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional village cottages, post-war housing, modern developments, and semi-rural properties"
  },
  brightlingsea: {
    neighborhoods: ["Waterside", "High Street area", "Station Road", "Church Road", "Bateman's Tower area"],
    landmarks: ["Brightlingsea Harbour", "Brightlingsea Creek", "Bateman's Tower", "All Saints Church", "the Promenade"],
    drainageInfo: "Brightlingsea's coastal position on the Colne Estuary creates specific drainage considerations. Properties near the harbour and creek face tidal influences on drainage systems, and the town's low-lying areas are susceptible to surface water flooding during heavy rain combined with high tides. Victorian properties along the High Street have original clay drainage, while newer developments have modern systems. The sandy and silty coastal soil can allow pipe movement and sand infiltration into damaged joints.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "Victorian terraces, seaside cottages, modern family homes, and harbour-side properties"
  },
  manningtree: {
    neighborhoods: ["High Street area", "South Street", "Lawford", "Mistley", "Manningtree station area"],
    landmarks: ["Manningtree High Street", "the River Stour", "Mistley Towers", "Lawford Church", "Manningtree railway station"],
    drainageInfo: "Manningtree, England's smallest town, sits on the south bank of the River Stour estuary alongside neighbouring Lawford and Mistley. Properties near the waterfront contend with tidal influences and elevated water tables, while the hillside streets have good natural drainage gradients but period properties with ageing pipe systems. The area's mix of Georgian, Victorian, and modern housing creates varied drainage challenges, and the Essex clay soil means seasonal ground movement affects older pipe joints.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "Georgian townhouses, Victorian terraces, period cottages, and modern family homes"
  }
};

/**
 * Service-specific content for each location
 */
export interface ServiceContent {
  intro: string;
  commonProblems: string[];
  process: string;
  localTip: string;
}

type LocationServiceContentMap = Record<string, Record<string, ServiceContent>>;

export const LOCATION_SERVICE_CONTENT: LocationServiceContentMap = {
  colchester: {
    "blocked-drains": {
      intro: "Colchester's rich architectural heritage means blocked drains can affect anything from a Victorian terrace in the Dutch Quarter to a modern family home in Highwoods. Our experienced engineers understand the unique drainage challenges facing properties across the borough and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in older town centre properties", "Tree root intrusion from mature street trees in Lexden", "Debris accumulation in Victorian and Edwardian clay pipes", "Wet wipe blockages in student accommodation areas near the university", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Colchester's tree-lined streets in Lexden and Prettygate should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Colchester, you need a fast response from engineers who know the local area. Whether you're in the town centre, Mile End, or Stanway, our drain unblocking teams are strategically positioned across the borough to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in terraced housing", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Colchester's busy restaurants and cafes along the High Street and in the town centre benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Colchester property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Colchester's older properties with Victorian and Edwardian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Colchester's older areas like the Dutch Quarter or Old Heath? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Colchester's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Colchester's hard water supply contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Colchester emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the borough. From town centre businesses to Highwoods family homes, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Colchester location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Colchester's mix of historic infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Colchester's clay-heavy Essex soil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  wivenhoe: {
    "blocked-drains": {
      intro: "Wivenhoe's transformation from historic fishing port to vibrant riverside community has created a fascinating mix of old and new drainage systems. From the period cottages along the Quay to the modern developments around Vine Farm, our engineers have the expertise to clear blocked drains in any property type across the area.",
      commonProblems: ["Sediment accumulation in riverside and period properties", "Shared drainage conflicts in terraced housing", "Modern plastic pipe blockages in newer developments", "Commercial kitchen waste in Quay restaurants", "Surface water issues near the River Colne"],
      process: "Every Wivenhoe blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Quayside properties should ensure their drainage connects correctly to the main sewer system, as some period buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near the University of Essex to routine unblocking on the Quay, our Wivenhoe drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Wivenhoe-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Wivenhoe's older terraced properties along the High Street and Philip Road often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period cottage near the Quay or investigating drainage issues at a property near the university, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Wivenhoe property.",
      commonProblems: ["Unknown pipe routes in period buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Wivenhoe riverside properties often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Wivenhoe, equally effective on Victorian clay pipes in traditional cottages and modern systems in new developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Wivenhoe's thriving restaurant scene along the Quay means commercial premises should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Wivenhoe receive our immediate attention, with engineers stationed to respond rapidly to properties from the Quay to Broadfields. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Wivenhoe engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Wivenhoe properties near the River Colne and the Quay should have emergency drainage contacts readily available, particularly during autumn leaf fall and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Wivenhoe's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in traditional cottages to replacing damaged plastic sections in new developments, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian cottages", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Wivenhoe's riverside location means some properties have complex underground infrastructure. Always commission surveys before excavating for drain repairs."
    }
  },
  "west-mersea": {
    "blocked-drains": {
      intro: "West Mersea's island location on the Blackwater Estuary, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our West Mersea blocked drain specialists understand how coastal proximity and tidal conditions affect drainage systems, from the waterfront cottages to the modern homes further inland.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your West Mersea property's position relative to the coast and estuary before selecting clearing methods. Coastal properties may require different approaches than those further inland. Our engineers are experienced with all West Mersea property types and drainage configurations.",
      localTip: "West Mersea properties near the waterfront should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after storms and high tides."
    },
    "drain-unblocking": {
      intro: "When drains block on Mersea Island, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink near the waterfront or an overflowing external drain further inland, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our West Mersea engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "West Mersea's island location means planning ahead for drainage maintenance is especially important. Don't wait for an emergency when the Strood is flooded at high tide."
    },
    "cctv-drain-surveys": {
      intro: "West Mersea's architectural variety, from traditional seaside cottages to modern estates, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing a property on Mersea Island? CCTV surveys can identify coastal drainage issues including saltwater damage that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that West Mersea's coastal drainage systems often need. From clearing sand and silt deposits in waterfront properties to routine maintenance for inland homes, our jetting service restores optimal drainage performance across the island.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease buildup in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Coastal properties often require specific nozzle selection for effective sand and silt removal.",
      localTip: "West Mersea's coastal properties experience faster silt accumulation than inland areas. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies on Mersea Island receive rapid response from our local teams, day or night. From flooded gardens near the waterfront to sewage issues further inland, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Coastal flooding from overwhelmed drainage", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm surge affecting coastal drainage"],
      process: "Emergency calls to our West Mersea service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "West Mersea's coastal properties should have non-return valves fitted on main drainage connections to prevent high tide or storm surge from forcing water back into the system."
    },
    "drain-repairs": {
      intro: "Repairing drainage in West Mersea's coastal environment requires understanding the specific challenges of sandy soil, saltwater proximity, and the island's mix of period and modern properties. Our repair specialists select methods and materials suited to these seaside conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from sand and ground movement", "Root damage from garden vegetation", "Joint displacement in sandy soil", "Saltwater corrosion affecting connections", "Sand infiltration through damaged joints"],
      process: "We assess West Mersea drainage repairs with coastal conditions in mind. Materials are chosen for saltwater resistance, and repair methods account for the sandy, mobile soil conditions prevalent near the shore.",
      localTip: "West Mersea's sandy soil conditions can make traditional excavation repairs more straightforward than in clay-heavy inland locations — but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  tiptree: {
    "blocked-drains": {
      intro: "Tiptree's growth from a quiet Essex village into a thriving community means properties have drainage systems spanning many decades. Our Tiptree blocked drain service combines knowledge of traditional village drainage with modern clearing techniques, effectively tackling blockages from the older village centre to the newer housing estates.",
      commonProblems: ["Deteriorating clay pipes in older village properties", "Root intrusion from maturing garden trees and hedgerows", "Fat accumulation in domestic drains", "Debris in shared drainage serving housing clusters", "Surface water blockages from leaf litter"],
      process: "Tiptree's varied housing stock means drainage systems differ considerably across the village. We assess your specific situation, considering property age, pipe material, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Tiptree's maturing garden trees in established estates are now large enough to cause root intrusion in nearby drainage. Properties with trees close to pipe runs should have annual inspections."
    },
    "drain-unblocking": {
      intro: "When Tiptree drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Church Road to the Grange Road estates, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Tiptree engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Tiptree's post-war housing was often built with shared drainage systems serving clusters of homes. If your neighbours also have slow drains, the blockage is likely in the communal section — contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Tiptree property's drainage is essential, particularly as the village's older infrastructure ages. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect. This is increasingly valuable for Tiptree's varied housing stock.",
      commonProblems: ["Age-related pipe deterioration in older systems", "Root ingress from established garden trees", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Tiptree properties built in the 1950s to 1970s are now past the typical 50-year design life of their concrete drainage — a CCTV survey reveals how much service life remains."
    },
    "drain-jetting": {
      intro: "Tiptree's ageing drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in clay and concrete pipes, maintaining optimal flow in domestic and commercial drainage systems throughout the village.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of ageing pipe infrastructure. We verify results with flow testing.",
      localTip: "Tiptree businesses along Church Road should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Tiptree drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor near Tiptree Heath or sewage backup in the village centre, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Tiptree's clay soil means surface water can pool quickly during heavy rainfall. Keep emergency drain contacts readily available and ensure surface water gullies are clear."
    },
    "drain-repairs": {
      intro: "Tiptree's housing stock is reaching the age where drainage repairs become increasingly necessary. Our repair specialists understand the materials and methods used across different decades of construction and provide repair solutions that extend the life of ageing systems while delivering reliable results.",
      commonProblems: ["Cracked concrete and clay drainage pipes", "Deteriorating pipe joints", "Root damage from established trees", "Ground settling causing pipe displacement", "Age-related material degradation"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Tiptree's London Clay geology means the ground expands and contracts with moisture changes. Consider flexible repair solutions like pipe relining rather than rigid replacements."
    }
  },
  witham: {
    "blocked-drains": {
      intro: "Witham's blend of historic market town centre and modern residential estates creates varied drainage challenges. Our Witham blocked drain specialists understand the differences between period properties in Chipping Hill and the mid-century housing along Maltings Lane, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from busy household kitchens", "Debris accumulation in period clay pipes", "Surface water blockages from falling leaves", "Shared drainage issues in semi-detached housing"],
      process: "We assess each Witham blockage considering the property type, pipe age, and drainage layout. Period properties in Chipping Hill need different handling than the 1960s housing further out, and our engineers adapt their approach accordingly.",
      localTip: "Witham's leafy streets and mature gardens in Chipping Hill are attractive but pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Witham, our local teams respond promptly with the right equipment for every property type. From period homes in Chipping Hill to modern family homes along Maltings Lane, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues in the town centre"],
      process: "Our Witham engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Witham properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a period cottage in Chipping Hill or investigating drainage at a town centre business, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Witham's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for period properties", "Root ingress investigation in mature gardens", "Mapping complex drainage in commercial premises", "Condition assessment of mid-century pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Witham properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Witham home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Witham's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes in Chipping Hill and clears root masses from garden-heavy properties across the town, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Witham's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Witham properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Witham demand swift, professional response. Whether you're facing sewage backup in a period property or flooding at a modern family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Witham are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Witham properties near the River Brain may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Witham's varied properties requires specialist care. Our repair teams work with all property ages across the town, from restoring Victorian clay pipes in period cottages to fixing mid-century systems in the surrounding estates.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Witham's clay soil and mature tree cover cause seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  kelvedon: {
    "blocked-drains": {
      intro: "Kelvedon's status as one of north Essex's most desirable villages comes with distinctive drainage challenges. The village's period properties feature original clay drainage systems, while surrounding estates have more modern infrastructure. Our Kelvedon specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens and hedgerows", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months", "Shared drainage in converted period properties"],
      process: "We approach Kelvedon blocked drains with appreciation for the village's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Kelvedon's mature trees along the High Street and surrounding lanes are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Kelvedon residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from the High Street to Easterford Road, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Kelvedon engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Kelvedon's period properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Kelvedon's desirable property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the village's sought-after period homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Kelvedon properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Kelvedon home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in what is north Essex's competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Kelvedon's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Kelvedon's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Kelvedon's gently sloping terrain provides reasonable natural drainage gradients, but pipe scale buildup can still restrict flow. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Kelvedon receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a period property or flooding in a modern home, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Kelvedon properties is swift and professional. We understand the village's property types and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Kelvedon properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Kelvedon's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Kelvedon drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Kelvedon's older drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features."
    }
  },
  "marks-tey": {
    "blocked-drains": {
      intro: "Marks Tey's position at the junction of the A12 and A120, combined with its mix of traditional village and modern housing, creates varied drainage challenges. Our Marks Tey blocked drain specialists understand how the flat terrain and clay soil affect drainage systems, from traditional cottages to newer developments.",
      commonProblems: ["Clay soil causing ground movement around pipes", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in older clay pipes", "Surface water issues on flat terrain"],
      process: "We assess your Marks Tey property's drainage layout before selecting clearing methods. Properties near the village centre may require different approaches than those in newer developments. Our engineers are experienced with all property types in the area.",
      localTip: "Marks Tey's flat terrain means surface water drainage relies entirely on well-maintained pipe gradients. Have drainage checked regularly to catch any gradient-reducing buildup early."
    },
    "drain-unblocking": {
      intro: "When drains block in Marks Tey, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink on London Road or an overflowing external drain in a newer development, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our Marks Tey engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Marks Tey properties near the A12 and A120 can experience vibration-related pipe joint issues. If you notice recurring blockages, it may be worth a CCTV survey to check for displaced joints."
    },
    "cctv-drain-surveys": {
      intro: "Marks Tey's varied housing, from traditional village cottages to modern estates, means drainage systems differ significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing a period cottage in Marks Tey village? A pre-purchase CCTV survey is essential to identify any issues with traditional drainage systems."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides effective cleaning for Marks Tey's varied drainage systems. From clearing deposits in older village properties to routine maintenance for modern systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "Marks Tey's flat terrain means even small deposits can significantly reduce drainage efficiency. Regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Marks Tey receive rapid response from our local teams, day or night. From flooded gardens in the village to sewage issues in newer developments, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our Marks Tey service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Marks Tey's flat terrain and clay soil mean surface water can pool quickly during heavy rain. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "Marks Tey's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a traditional pipe in the village or excavation repairs in a newer property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "Marks Tey's clay soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  brightlingsea: {
    "blocked-drains": {
      intro: "Brightlingsea's coastal position on the Colne Estuary creates specific drainage considerations, from sandy soil conditions near the harbour to Victorian pipe systems in the town's traditional properties. Our Brightlingsea blocked drain specialists understand how coastal proximity affects drainage systems and bring the expertise needed for properties from the Promenade to Church Road.",
      commonProblems: ["Sand infiltration into coastal drainage systems", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes", "Surface water issues on low-lying coastal properties"],
      process: "We assess your Brightlingsea property's position and drainage layout before selecting clearing methods. Coastal properties may require different approaches than those further inland. Our engineers are experienced with all property types along the coast.",
      localTip: "Brightlingsea's sandy soil near the harbour can shift around pipes, creating gaps where debris enters the system. Properties close to the shore should have drainage checked more frequently."
    },
    "drain-unblocking": {
      intro: "When drains block in Brightlingsea, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink on the High Street or an overflowing external drain near the harbour, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages in seaside properties", "Washing machine drain problems"],
      process: "Our Brightlingsea engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Brightlingsea's harbour-side properties often have rear drainage running close to neighbouring boundaries. Know your drainage layout to identify the responsible party when blockages occur."
    },
    "cctv-drain-surveys": {
      intro: "Brightlingsea's varied property market, from Victorian terraces to modern family homes, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance in this popular coastal town.",
      commonProblems: ["Sand and silt infiltration assessment", "Age-related pipe deterioration in Victorian properties", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any coastal-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a Victorian property in Brightlingsea? A pre-purchase CCTV survey is essential — coastal conditions accelerate pipe deterioration and hidden defects are common."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Brightlingsea's coastal drainage systems often need. Our service removes sand, silt, and scale deposits from Victorian pipes in the town centre and clears accumulated debris from properties throughout the area.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Coastal properties often have sand and silt that requires specific nozzle selection for effective removal.",
      localTip: "Brightlingsea's coastal properties experience faster silt accumulation than inland areas. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Brightlingsea receive rapid response from our local teams, day or night. From flooded basements near the harbour to sewage issues further inland, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Coastal flooding from overwhelmed drainage", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm surge affecting coastal drainage"],
      process: "Emergency calls to our Brightlingsea service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Brightlingsea's coastal properties should have non-return valves fitted on main drainage connections to prevent high tide or storm surge from forcing water back into the system."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Brightlingsea's coastal environment requires understanding the specific challenges of sandy soil, saltwater proximity, and the town's mix of Victorian and modern properties. Our repair specialists select methods and materials suited to these seaside conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from sand movement", "Root damage from garden vegetation", "Joint displacement in sandy soil", "Saltwater corrosion affecting connections", "Sand infiltration through damaged joints"],
      process: "We assess Brightlingsea drainage repairs with coastal conditions in mind. Materials are chosen for saltwater resistance, and repair methods account for the sandy, mobile soil conditions prevalent near the shore.",
      localTip: "Brightlingsea's sandy soil conditions can make traditional excavation repairs more straightforward than in clay-heavy inland locations — but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  manningtree: {
    "blocked-drains": {
      intro: "Manningtree, Lawford, and Mistley blend historic charm with modern housing developments, each with their own drainage characteristics. Our Manningtree blocked drain service covers everything from Georgian townhouses on the High Street to modern family homes in Lawford, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older stone and clay drainage systems", "Surface water blockages from leaf litter", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Manningtree blockage considering the property type, drainage age, and local conditions. Period properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Manningtree properties near the River Stour should have drainage inspected after periods of heavy rainfall when debris and silt can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Manningtree drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From the High Street to Lawford and Mistley, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Manningtree engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Manningtree's older terraced properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Manningtree property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable for the area's Georgian and Victorian properties.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Manningtree's estuary-side location means some properties have complex drainage affected by tidal water tables. Surveys help identify these issues before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Manningtree's drainage systems. Our specialist equipment handles everything from clearing root masses in period properties to descaling pipes in modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby river and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Manningtree properties with gardens backing onto the River Stour valley experience more silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Manningtree drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Lawford or sewage backup on the High Street, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Manningtree's estuary location means water levels can rise quickly during high tides combined with heavy rain. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Manningtree's property stock spans Georgian townhouses to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes on the High Street to replacing damaged sections in Lawford, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked clay pipes in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Manningtree's mix of estuary-side and hillside properties means ground conditions can vary significantly — always commission a proper survey before planning drainage repair work."
    }
  }
};

/**
 * How It Works steps per service (with {location} and {responseTime} placeholders)
 */
export interface HowItWorksStep {
  title: string;
  description: string;
}

export const SERVICE_HOW_IT_WORKS: Record<string, HowItWorksStep[]> = {
  "blocked-drains": [
    { title: "Call & Describe", description: "Phone us and describe the symptoms — slow drainage, gurgling, bad smells, or standing water. We dispatch a local engineer to your {location} property, arriving {responseTime}." },
    { title: "On-Site Diagnosis", description: "Your engineer inspects all access points and, where necessary, deploys a CCTV drain camera to pinpoint the exact blockage location and cause inside the pipework." },
    { title: "Clear the Blockage", description: "Using high-pressure water jetting, mechanical rodding, or electromechanical cutting tools, we remove the obstruction completely and flush the line clean." },
    { title: "Flow Verification", description: "We run water through every affected fixture and inspect the drainage run to confirm full flow has been restored with no secondary issues." },
    { title: "Report & Prevention Advice", description: "You receive a summary of what caused the blockage and practical steps to prevent it recurring, tailored to your {location} property type." }
  ],
  "drain-unblocking": [
    { title: "Emergency Contact", description: "Call our {location} response line. We gather details about the affected fixtures — sinks, toilets, baths, or external drains — and dispatch the nearest available engineer." },
    { title: "Access & Assessment", description: "On arrival {responseTime}, we identify which section of drainage is affected and determine whether the blockage is localised or further downstream." },
    { title: "Select the Right Method", description: "Depending on the blockage type, we use manual drain rods, an electromechanical drain snake, or high-pressure jetting equipment to clear the obstruction." },
    { title: "Clear & Flush", description: "The blockage is fully removed and the line is flushed with water to confirm unimpeded flow from every connected appliance." },
    { title: "Aftercare Guidance", description: "We explain what caused the issue and offer practical advice on preventing future blockages in your {location} property." }
  ],
  "cctv-drain-surveys": [
    { title: "Book Your Survey", description: "Contact us to arrange a convenient time. We arrive at your {location} property {responseTime} with self-contained survey equipment — no preparation is needed on your part." },
    { title: "Camera Insertion", description: "We access the drainage system through manholes or inspection chambers and feed a high-definition waterproof camera through the entire pipe network." },
    { title: "Live Inspection", description: "The camera transmits real-time footage to a monitor, allowing us to identify cracks, root ingress, displaced joints, blockages, and other defects as we progress." },
    { title: "Detailed Report", description: "You receive a written report with annotated screenshots, a pipe condition summary, and prioritised recommendations for any repairs or maintenance needed." }
  ],
  "drain-jetting": [
    { title: "Initial Assessment", description: "We inspect your {location} drainage system to determine pipe material, diameter, and condition. This ensures we select the correct jetting pressure and nozzle." },
    { title: "CCTV Pre-Check", description: "Where appropriate, a brief camera inspection confirms the location and nature of deposits so jetting effort is directed precisely where it is needed." },
    { title: "High-Pressure Cleaning", description: "Our specialist jetting unit delivers water at pressures up to 4,000 PSI through a rotating nozzle, scouring the pipe walls clean and flushing debris towards the sewer." },
    { title: "Post-Jetting Verification", description: "A final camera pass confirms the pipe is clear. We compare before-and-after footage so you can see the improvement, and advise on a suitable maintenance interval." }
  ],
  "emergency-drain-services": [
    { title: "Immediate Call Handling", description: "Our 24/7 emergency line is always staffed. Describe the situation — flooding, sewage backup, or collapse — and we prioritise dispatch to your {location} address." },
    { title: "Rapid Arrival", description: "The nearest available emergency engineer heads to your property {responseTime}, equipped with pumping, jetting, and containment gear to handle any scenario." },
    { title: "Containment & Safety", description: "On arrival, we secure the affected area, isolate the drainage failure if possible, and begin removing standing water or sewage to limit property damage." },
    { title: "Emergency Resolution", description: "We diagnose the root cause and implement the fastest effective repair — clearing blockages, patching failures, or arranging follow-up work for structural damage." },
    { title: "Follow-Up Support", description: "Once the immediate emergency is resolved, we provide a written summary and, if further repairs are needed, schedule them at a time that suits you." }
  ],
  "drain-repairs": [
    { title: "Diagnostic Survey", description: "We begin with a CCTV inspection of your {location} property's drainage to map the damage precisely — cracks, collapses, displaced joints, or root penetration." },
    { title: "Repair Options Explained", description: "You receive a clear explanation of available repair methods: no-dig pipe relining for accessible damage, patch repairs for localised cracks, or excavation for severe collapses." },
    { title: "Carry Out Repairs", description: "Our engineers complete the agreed work using professional-grade materials. No-dig relining typically takes a few hours; excavation work is completed as quickly as conditions allow." },
    { title: "Quality Verification", description: "A post-repair CCTV inspection confirms the fix is sound. We restore any excavated surfaces and provide a written guarantee on all completed repair work." }
  ]
};

/**
 * Why Choose Us bullet points per service (with placeholders)
 */
export const SERVICE_WHY_CHOOSE_US: Record<string, string[]> = {
  "blocked-drains": [
    "Local engineers who respond to {location} properties {responseTime}",
    "No call-out fee — you only pay for completed work",
    "Equipment suited to {propertyTypes}",
    "Familiarity with Anglian Water infrastructure and local council requirements"
  ],
  "drain-unblocking": [
    "Rapid response across {location} — engineers arrive {responseTime}",
    "We carry manual rods, electric drain snakes, and jetting gear to every job",
    "Fixed pricing agreed before work starts, with no hidden charges",
    "Knowledge of drainage layouts common in {propertyTypes}"
  ],
  "cctv-drain-surveys": [
    "HD camera equipment producing detailed, professional-grade reports",
    "Engineers who understand drainage typical of {propertyTypes}",
    "Response to {location} bookings {responseTime}",
    "Reports accepted by solicitors, insurers, and Anglian Water"
  ],
  "drain-jetting": [
    "Variable-pressure jetting units safe for all pipe materials",
    "Rapid attendance at {location} properties {responseTime}",
    "Before-and-after CCTV footage included at no extra cost",
    "Experience with drainage found in {propertyTypes}"
  ],
  "emergency-drain-services": [
    "Genuine 24/7 availability — nights, weekends, and bank holidays included",
    "Emergency engineers reach {location} {responseTime}",
    "Fully equipped vans carrying pumps, jetting gear, and repair materials",
    "Experienced with flood-risk and sewage situations across Colchester and surrounding areas"
  ],
  "drain-repairs": [
    "Both no-dig relining and excavation capabilities in-house",
    "CCTV diagnosis included so you only pay for repairs actually needed",
    "Written workmanship guarantee on all completed repairs",
    "Engineers experienced with {propertyTypes} in {location}"
  ]
};

/**
 * FAQ templates per service (with placeholders resolved at build time)
 */
export interface FAQTemplate {
  question: string;
  answer: string;
}

export const SERVICE_FAQ_TEMPLATES: Record<string, FAQTemplate[]> = {
  "blocked-drains": [
    {
      question: "How quickly can you reach {location} to clear a blocked drain?",
      answer: "Our engineers are based across Colchester and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
    },
    {
      question: "What does it cost to clear a blocked drain in {location}?",
      answer: "Most standard blockages in {location} are resolved for between £80 and £150 with no call-out fee. We provide a fixed quote before starting any work, so you know exactly what you will pay. Complex blockages requiring jetting or excavation may cost more."
    },
    {
      question: "What are the most common causes of blocked drains in {location}?",
      answer: "In {location} we frequently encounter {commonProblem1} and {commonProblem2}. Properties such as {propertyTypes} can be particularly susceptible due to ageing pipework and mature vegetation."
    }
  ],
  "drain-unblocking": [
    {
      question: "How fast can you unblock a drain in {location}?",
      answer: "We aim to arrive at {location} properties {responseTime}. Once on site, most drain unblocking jobs are completed within one to two hours depending on the nature and location of the obstruction."
    },
    {
      question: "Do you charge a call-out fee for drain unblocking in {location}?",
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Colchester and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
    },
    {
      question: "Should I try to unblock the drain myself before calling you?",
      answer: "Simple blockages near the plughole may respond to a plunger or drain cleaner. However, if water is backing up from external drains or multiple fixtures are affected, professional equipment is needed. Attempting to rod shared drainage incorrectly can push the blockage further downstream."
    }
  ],
  "cctv-drain-surveys": [
    {
      question: "How much does a CCTV drain survey cost in {location}?",
      answer: "A standard residential CCTV drain survey in {location} typically costs between £150 and £300 depending on property size and drainage complexity. We provide a fixed quote beforehand. Properties such as {propertyTypes} with larger drainage networks may sit towards the upper end."
    },
    {
      question: "Do I need a CCTV drain survey before buying a property in {location}?",
      answer: "We strongly recommend a pre-purchase drain survey for {location} properties, especially older builds. Hidden drainage defects can cost thousands to repair and are not covered by standard homebuyer surveys. A CCTV inspection gives you negotiating power and peace of mind."
    },
    {
      question: "How long does a CCTV drain survey take in {location}?",
      answer: "A typical residential survey in {location} takes between one and two hours. You receive the full report with annotated footage within 24 hours. Larger properties or those with complex drainage layouts may require additional time."
    }
  ],
  "drain-jetting": [
    {
      question: "Is drain jetting safe for older pipes in {location}?",
      answer: "Yes, when carried out by qualified engineers. We adjust water pressure to suit the pipe material and condition — lower pressures for older clay pipes common in {location}, higher pressures for modern plastic systems. A brief CCTV check beforehand confirms the pipe can safely be jetted."
    },
    {
      question: "How much does drain jetting cost in {location}?",
      answer: "Drain jetting in {location} typically costs between £100 and £250 depending on the length of pipe and severity of deposits. We confirm the price before starting. Regular maintenance jetting is usually at the lower end of this range."
    },
    {
      question: "How often should drains be jetted in {location}?",
      answer: "For most {location} residential properties, jetting every 12 to 18 months keeps drainage flowing freely. Properties with mature trees nearby, or commercial kitchens producing grease, may benefit from more frequent cleaning — typically every 6 to 12 months."
    }
  ],
  "emergency-drain-services": [
    {
      question: "How quickly can you respond to a drain emergency in {location}?",
      answer: "Our emergency teams are positioned across Colchester and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
    },
    {
      question: "What counts as a drainage emergency?",
      answer: "Situations requiring an emergency response include sewage backing up into your property, flooding from blocked or collapsed drains, overflowing manholes, and any drainage failure presenting a health risk. If in doubt, call us and we will advise whether an emergency visit is needed."
    },
    {
      question: "Do you charge more for emergency callouts in {location}?",
      answer: "We offer competitive fixed pricing for emergency callouts in {location} with no hidden charges. While emergency work may cost more than routine maintenance due to the urgency and equipment required, we always confirm the price before starting."
    }
  ],
  "drain-repairs": [
    {
      question: "How much do drain repairs cost in {location}?",
      answer: "Drain repair costs in {location} depend on the extent of damage and the method required. No-dig pipe relining typically ranges from £300 to £800 per section. Excavation repairs vary more widely depending on depth and access. We provide a detailed quote after CCTV diagnosis."
    },
    {
      question: "Can drains be repaired without digging in {location}?",
      answer: "In many cases, yes. No-dig pipe relining inserts a resin-coated liner into the damaged pipe, which cures to form a new pipe within the old one. This is ideal for cracks, joint displacement, and root damage in {location} properties, avoiding disruption to gardens, driveways, and landscaping."
    },
    {
      question: "How long do drain repairs take in {location}?",
      answer: "No-dig relining is typically completed in a single day. Excavation repairs may take one to three days depending on the extent of damage, pipe depth, and ground conditions in {location}. We always provide a realistic timeframe before work begins."
    }
  ]
};

/**
 * Interpolate placeholders in template strings with location-specific data
 */
export function interpolateLocationText(
  text: string,
  locationName: string,
  locationData: LocationData | null,
  serviceContent: ServiceContent | null
): string {
  let result = text.replace(/\{location\}/g, locationName);
  if (locationData) {
    result = result
      .replace(/\{responseTime\}/g, locationData.responseTime)
      .replace(/\{propertyTypes\}/g, locationData.propertyTypes)
      .replace(/\{neighborhood\}/g, locationData.neighborhoods[0] || '')
      .replace(/\{landmark\}/g, locationData.landmarks[0] || '');
  }
  if (serviceContent) {
    result = result
      .replace(/\{commonProblem1\}/g, serviceContent.commonProblems[0]?.toLowerCase() || 'debris accumulation')
      .replace(/\{commonProblem2\}/g, serviceContent.commonProblems[1]?.toLowerCase() || 'root intrusion');
  }
  return result;
}

/**
 * Get resolved FAQs for a specific location and service combination
 */
export function getLocationServiceFAQs(
  locationSlug: string,
  serviceSlug: string
): Array<{ question: string; answer: string }> {
  const locationData = LOCATION_DATA[locationSlug] || null;
  const serviceContent = LOCATION_SERVICE_CONTENT[locationSlug]?.[serviceSlug] || null;
  const templates = SERVICE_FAQ_TEMPLATES[serviceSlug];
  if (!templates) return [];

  const locationName = locationSlug.charAt(0).toUpperCase() + locationSlug.slice(1);
  return templates.map(t => ({
    question: interpolateLocationText(t.question, locationName, locationData, serviceContent),
    answer: interpolateLocationText(t.answer, locationName, locationData, serviceContent)
  }));
}

/**
 * Get content for a specific location and service combination
 */
export function getLocationServiceContent(locationSlug: string, serviceSlug: string): ServiceContent | null {
  const locationContent = LOCATION_SERVICE_CONTENT[locationSlug];
  if (!locationContent) return null;
  return locationContent[serviceSlug] || null;
}

/**
 * Get location data
 */
export function getLocationData(locationSlug: string): LocationData | null {
  return LOCATION_DATA[locationSlug] || null;
}
