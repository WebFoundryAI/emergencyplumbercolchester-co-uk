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
  glasgow: {
    neighborhoods: ["Old Town", "New Town", "Stockbridge", "Bruntsfield", "Marchmont", "Tollcross", "Gorgie", "Haymarket"],
    landmarks: ["Glasgow Castle", "the Royal Mile", "Princes Street", "Arthur's Seat", "Holyrood Palace"],
    drainageInfo: "Glasgow's historic drainage infrastructure dates back centuries, with the Old Town's medieval closes and tenement buildings sitting atop some of the oldest sewer systems in Scotland. The New Town's Georgian architecture features elegant but ageing clay pipe networks, while the city's volcanic geology and steep gradients create unique challenges for drainage engineers across the capital.",
    responseTime: "typically within 60 minutes",
    propertyTypes: "Georgian townhouses, Victorian tenements, modern apartments, and commercial premises"
  },
  paisley: {
    neighborhoods: ["The Shore", "Paisley Walk", "Easter Road", "Newhaven", "Trinity", "Bonnington"],
    landmarks: ["the Shore waterfront", "the Royal Yacht Britannia", "Ocean Terminal", "Paisley Links", "the Scottish Government building"],
    drainageInfo: "Paisley's maritime heritage and harbour-side location bring distinctive drainage challenges. The area's mix of converted warehouses, traditional tenements, and modern waterfront developments each present different needs. Properties near the Water of Paisley and the harbour are susceptible to tidal influences on drainage systems, while the area's ongoing regeneration has created a patchwork of old and new infrastructure.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "harbour-side conversions, traditional tenements, modern waterfront apartments, and commercial units"
  },
  "east-kilbride": {
    neighborhoods: ["Fisherrow", "Inveresk", "Wallyford", "Whitecraig", "Pinkie"],
    landmarks: ["East Kilbride Racecourse", "the River Esk", "Inveresk Lodge Garden", "Fisherrow Harbour", "East Kilbride High Street"],
    drainageInfo: "East Kilbride's position at the mouth of the River Esk means properties here face particular surface water and tidal drainage challenges. The historic Fisherrow fishing village has some of South Lanarkshire's oldest domestic drainage, while newer housing developments in Wallyford and Whitecraig have modern systems that occasionally suffer from construction-related settling. The proximity to the Firth of Forth adds coastal groundwater considerations.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built cottages, Victorian villas, modern housing estates, and riverside properties"
  },
  motherwell: {
    neighborhoods: ["Woodburn", "Easthouses", "Mayfield", "Newtongrange", "Eskbank"],
    landmarks: ["Motherwell Country Park", "the River North Esk", "Motherwell High Street", "the National Mining Museum at Newtongrange", "Eskbank railway station"],
    drainageInfo: "Motherwell and the surrounding Midlothian area combine historic market town properties with former mining village housing and modern developments. The area's coal mining heritage means unexpected underground voids and historic mine workings can affect drainage stability. Properties near the River North Esk may experience higher water tables, particularly during wet weather.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone-built terraces, former mining village houses, modern family homes, and period properties"
  },
  hamilton: {
    neighborhoods: ["Howden", "Ladywell", "Dedridge", "Carmondean", "Knightsridge"],
    landmarks: ["Hamilton Designer Outlet", "Almondvale Stadium", "Hamilton Village", "Howden Park Centre", "the River Almond"],
    drainageInfo: "Hamilton was developed as a new town in the 1960s and 70s, meaning most of its drainage infrastructure is from that era. While newer than Glasgow's Victorian systems, these mid-century concrete and clay pipes are now reaching the end of their design life. The town's planned layout means drainage routes are generally well-documented, but original materials are increasingly prone to deterioration and root intrusion from maturing street trees.",
    responseTime: "typically within 60-90 minutes",
    propertyTypes: "new town housing from the 1960s-80s, modern executive homes, commercial units, and industrial premises"
  },
  lanark: {
    neighborhoods: ["Clermiston", "East Craigs", "South Gyle", "Drumbrae", "Carrick Knowe"],
    landmarks: ["Glasgow Zoo", "the Gyle Shopping Centre", "Lanark Hill", "St John's Road", "Glasgow Airport nearby"],
    drainageInfo: "Lanark sits on the western side of Glasgow, with a mix of established residential streets and modern commercial developments around the Gyle. The area's traditional stone villas along St John's Road have period drainage systems, while the 1950s-70s housing in Clermiston and East Craigs features concrete pipe networks of varying condition. Lanark Hill's geology influences local groundwater levels, affecting drainage performance in surrounding streets.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "traditional stone villas, 1950s-70s suburban housing, modern commercial premises, and semi-detached family homes"
  },
  cumbernauld: {
    neighborhoods: ["Churchhill", "Greenbank", "Comiston", "Braid Hills", "Fairmilehead"],
    landmarks: ["Cumbernauld Road", "the Braid Hills", "the Hermitage of Braid", "Cumbernauld Clock", "Churchhill Theatre"],
    drainageInfo: "Cumbernauld is one of Glasgow's most desirable residential suburbs, featuring substantial Victorian and Edwardian stone-built properties with mature gardens. These established homes have original clay drainage systems that are often well over a century old. The tree-lined avenues and large garden trees create significant root intrusion risks, while the area's elevated position on the slopes towards the Braid Hills means good natural drainage gradients but potential surface water issues during heavy rainfall.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian stone villas, Edwardian detached houses, converted flats, and period terraces"
  },
  coatbridge: {
    neighborhoods: ["Joppa", "Duddingston", "Craigentinny", "Northfield", "Willowbrae"],
    landmarks: ["Coatbridge Beach", "Coatbridge Promenade", "Duddingston Loch", "Coatbridge High Street", "the Turkish Baths"],
    drainageInfo: "Coatbridge's seaside location on the Firth of Forth creates specific drainage considerations. The sandy soil near the beach offers good natural drainage but can allow pipe movement, while coastal properties may experience saltwater influence on underground infrastructure. Victorian seaside villas along the promenade have original clay pipe systems, and the area's growing popularity has led to many property conversions that alter original drainage layouts.",
    responseTime: "typically within 45-60 minutes",
    propertyTypes: "Victorian seaside villas, traditional terraces, modern conversions, and beachfront properties"
  },
  rutherglen: {
    neighborhoods: ["Lasswade", "Poltonhall", "Hopefield", "Broomieknowe", "Rosewell"],
    landmarks: ["Rutherglen High Street", "the River North Esk at Lasswade", "Broomieknowe Golf Club", "King George V Park", "Polton Mill"],
    drainageInfo: "Rutherglen and the surrounding Midlothian communities blend historic village centres with modern housing developments. Lasswade's position in the North Esk river valley means some properties contend with higher water tables and flood risk. The area's former paper mill and mining heritage has left complex underground infrastructure in places. Newer estates in Hopefield and the surrounding areas have modern drainage but may experience settling-related issues as developments mature.",
    responseTime: "typically within 60-75 minutes",
    propertyTypes: "traditional stone cottages, modern family housing, former mining village terraces, and rural properties"
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
  glasgow: {
    "blocked-drains": {
      intro: "Glasgow's rich architectural heritage means blocked drains can affect anything from a medieval Old Town tenement to a grand Georgian townhouse in the New Town. Our experienced engineers understand the unique drainage challenges facing properties across the capital and respond quickly to restore your system to full working order.",
      commonProblems: ["Fat and grease buildup in restaurant districts along the Royal Mile", "Tree root intrusion from mature street trees in the New Town", "Debris accumulation in Victorian and Georgian clay pipes", "Wet wipe blockages in student accommodation areas near the universities", "Foreign object obstructions in commercial premises"],
      process: "We begin with a thorough assessment of your drainage system, often using CCTV cameras to pinpoint the exact location and cause of the blockage. Our high-pressure jetting equipment can clear even the most stubborn obstructions, and we always provide advice on preventing future blockages.",
      localTip: "Properties near Glasgow's tree-lined streets in Marchmont and Bruntsfield should consider annual drain inspections to catch root intrusion early."
    },
    "drain-unblocking": {
      intro: "When your drains back up in Glasgow, you need a fast response from engineers who know the local area. Whether you're in the Old Town, Stockbridge, or Gorgie, our drain unblocking teams are strategically positioned across the city to reach you quickly and resolve the problem efficiently.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs from hair and soap scum", "External drain blockages from leaves and debris", "Shared drainage issues in tenement properties", "Commercial kitchen drain problems"],
      process: "Our engineers arrive equipped with manual rods, electric eels, and high-pressure jetting equipment to handle any unblocking situation. We identify the blockage type, select the appropriate method, and clear your drains while minimising disruption to your property.",
      localTip: "Glasgow's busy restaurants and cafes along George Street and the Grassmarket benefit from grease trap maintenance to prevent drain blockages."
    },
    "cctv-drain-surveys": {
      intro: "Understanding what's happening inside your Glasgow property's drainage system has never been easier. Our advanced CCTV drain surveys provide crystal-clear footage of pipe conditions, helping identify issues before they become emergencies. This is particularly valuable for Glasgow's older properties with Georgian and Victorian-era drainage.",
      commonProblems: ["Hidden cracks in ageing clay pipes", "Displaced joints causing leaks", "Root ingress at pipe connections", "Scale and deposit buildup", "Structural damage from subsidence"],
      process: "We insert a high-definition camera into your drainage system, recording footage that clearly shows the condition of your pipes. You receive a detailed report with findings, recommendations, and annotated images showing any areas of concern.",
      localTip: "Buying a property in Glasgow's older suburbs like Marchmont or Bruntsfield? A pre-purchase CCTV survey can reveal hidden drainage issues that could cost thousands to repair."
    },
    "drain-jetting": {
      intro: "High-pressure drain jetting is the most effective way to clear stubborn blockages and clean Glasgow's often ageing pipe systems. Our specialist equipment delivers water at pressures up to 4,000 PSI, cutting through grease, scale, and debris while being gentle on pipe walls.",
      commonProblems: ["Heavy grease accumulation", "Scale buildup in old pipes", "Compacted debris and sediment", "Root masses blocking flow", "General pipe cleaning needs"],
      process: "Our jetting equipment is carefully inserted into your drainage system, with the water pressure adjusted to suit your pipe type and condition. The rotating nozzle scours the pipe walls clean while flushing debris towards the sewer connection.",
      localTip: "Glasgow's hard water from the Pentland Hills reservoir supply contributes to scale buildup in pipes. Regular jetting every 12-18 months keeps systems flowing freely."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies don't wait for convenient times, and neither do we. Our Glasgow emergency response teams operate around the clock, ready to tackle overflowing drains, flooding, and sewage backups anywhere in the city. From Marchmont student flats to Old Town businesses, we're there when you need us most.",
      commonProblems: ["Overflowing manholes and drains", "Sewage backing up into properties", "Flooding from blocked surface drains", "Collapsed drains causing sinkholes", "Foul odours indicating serious problems"],
      process: "Call our emergency line and we'll dispatch the nearest available engineer to your Glasgow location. They'll assess the situation, implement immediate containment if needed, and work to resolve the emergency quickly and safely.",
      localTip: "Know where your external manhole covers are located. In a drainage emergency, this information helps our engineers begin work immediately upon arrival."
    },
    "drain-repairs": {
      intro: "Glasgow's mix of historic infrastructure and modern developments means drain repairs require both traditional skills and contemporary techniques. Our repair specialists handle everything from patching minor cracks to complete pipe replacement, always selecting the most cost-effective approach for your specific situation.",
      commonProblems: ["Cracked and fractured pipes", "Displaced or misaligned joints", "Tree root damage", "Corrosion in metal pipes", "Subsidence-related damage"],
      process: "We assess the damage using CCTV inspection, then recommend the most appropriate repair method. Options range from no-dig pipe relining for accessible damage to excavation for severely collapsed sections. All repairs come with our workmanship guarantee.",
      localTip: "Glasgow's clay and boulder clay subsoil can cause pipe movement during wet and dry cycles. Watch for slow drainage or damp patches as early warning signs."
    }
  },
  paisley: {
    "blocked-drains": {
      intro: "Paisley's transformation from historic port to vibrant cultural quarter has created a fascinating mix of old and new drainage systems. From the converted warehouses along the Shore to the traditional tenements of Paisley Walk, our engineers have the expertise to clear blocked drains in any property type across the area.",
      commonProblems: ["Sediment accumulation in converted warehouse buildings", "Shared drainage conflicts in tenement housing", "Modern plastic pipe blockages in waterfront developments", "Commercial kitchen waste in Shore restaurants", "Surface water issues near the Water of Paisley"],
      process: "Every Paisley blocked drain is unique, and we treat it that way. Our engineers assess the property type and drainage configuration before selecting the most effective clearing method, whether that's rodding, jetting, or mechanical cutting.",
      localTip: "Shore-side properties should ensure their drainage connects correctly to the main sewer system, as some converted buildings have complex private drainage arrangements."
    },
    "drain-unblocking": {
      intro: "From emergency callouts near Ocean Terminal to routine unblocking on Paisley Walk, our Paisley drain unblocking service covers every eventuality. We understand the varied property stock across the area and bring the right equipment to handle Victorian clay pipes and modern plastic systems alike.",
      commonProblems: ["Hair and soap accumulation in bathroom drains", "Food waste blockages in kitchen sinks", "External gully blockages from garden debris", "Toilet blockages from inappropriate flushing", "Fat buildup in commercial premises"],
      process: "Our Paisley-based engineers carry comprehensive unblocking equipment including flexible rods, electromechanical machines, and water jetting units. We select the appropriate tool for each blockage type and clear your drains with minimal disruption.",
      localTip: "Paisley's older tenement properties along Easter Road and Bonnington often have deep external manholes. Regular clearing prevents serious blockages from developing."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're purchasing a period tenement on Paisley Walk or investigating drainage issues at a Shore-side business, our CCTV drain surveys provide the answers you need. High-definition cameras reveal the true condition of underground pipes, helping you make informed decisions about your Paisley property.",
      commonProblems: ["Unknown pipe routes in converted buildings", "Condition assessment for property purchases", "Investigation of recurring blockage causes", "Insurance claim documentation", "Planning for extensions or renovations"],
      process: "Our survey technicians access your drainage system through manholes or inspection chambers, then guide the camera through the entire pipe network. The real-time footage is recorded and later compiled into a comprehensive report for your records.",
      localTip: "Paisley waterfront apartments often share complex drainage systems. A CCTV survey helps identify responsibility boundaries before issues arise."
    },
    "drain-jetting": {
      intro: "High-pressure jetting is the gold standard for drain cleaning in Paisley, equally effective on Victorian clay pipes in traditional tenements and modern systems in new waterfront developments. Our specialist equipment removes years of accumulated deposits, restoring your drainage to optimal flow capacity.",
      commonProblems: ["Grease accumulation in commercial kitchens", "Scale deposits from water supply", "Silt and sediment in surface water drains", "Root fragments after removal treatments", "General maintenance cleaning"],
      process: "We select the appropriate jetting nozzle and pressure setting for your pipe type and the deposits being removed. The jetting process works upstream from the blockage point, ensuring debris is flushed towards the sewer rather than further into your system.",
      localTip: "Paisley's thriving restaurant scene along the Shore means commercial premises should schedule regular jetting to comply with environmental regulations and prevent emergency callouts."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies across Paisley receive our immediate attention, with engineers stationed to respond rapidly to properties from Newhaven to Easter Road. Sewage backups, flooding, and overflowing drains are all handled swiftly and professionally, minimising damage and disruption to your property.",
      commonProblems: ["Sewage backing up through toilets and sinks", "Surface water flooding during heavy rain", "Manhole overflows affecting multiple properties", "Drain collapses causing ground instability", "Foul odours indicating pipe damage"],
      process: "Emergency calls are prioritised and dispatched to our nearest Paisley engineer. We provide estimated arrival times and keep you informed throughout. On arrival, we secure the area, diagnose the problem, and implement the fastest effective solution.",
      localTip: "Paisley properties near the Water of Paisley and the harbour should have emergency drainage contacts readily available, particularly during autumn leaf fall and periods of heavy rainfall."
    },
    "drain-repairs": {
      intro: "Paisley's diverse building stock requires drainage repair expertise spanning centuries of construction techniques. Our repair teams handle everything from relining Victorian clay pipes in traditional tenements to replacing damaged plastic sections in new waterfront developments, always using materials and methods suited to your specific property.",
      commonProblems: ["Cracked clay pipes in Victorian tenements", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Damage from third-party excavations"],
      process: "Following CCTV diagnosis, we recommend the most appropriate repair approach. No-dig relining is ideal for accessible cracks and joints, while excavation may be necessary for collapsed sections. We always restore surfaces to their original condition.",
      localTip: "Paisley's former dockyard and industrial areas may have unexpected underground features. Always commission surveys before excavating for drain repairs."
    }
  },
  "east-kilbride": {
    "blocked-drains": {
      intro: "East Kilbride's position at the mouth of the River Esk, combined with its mix of historic and modern housing, creates diverse drainage challenges. Our East Kilbride blocked drain specialists understand how coastal proximity and river levels affect drainage systems, from Fisherrow's traditional cottages to Wallyford's newer housing developments.",
      commonProblems: ["Silt and sediment accumulation from river proximity", "Root intrusion from mature garden trees", "Fat and grease from domestic kitchens", "Debris buildup in surface water drains", "Blockages in shared Victorian drainage"],
      process: "We assess your East Kilbride property's position relative to the River Esk and coastline before selecting clearing methods. Coastal properties may require different approaches than those further inland. Our engineers are experienced with all East Kilbride property types and drainage configurations.",
      localTip: "East Kilbride properties near the River Esk in Fisherrow and Inveresk should ensure external drains have adequate gully pots to catch debris before it enters the pipe system, particularly after heavy rain."
    },
    "drain-unblocking": {
      intro: "When drains block in East Kilbride, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Wallyford or an overflowing external drain in Inveresk, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages", "Washing machine drain problems"],
      process: "Our East Kilbride engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "East Kilbride's historic High Street properties often have rear drainage running through neighbouring land. Know your drainage easements to avoid disputes."
    },
    "cctv-drain-surveys": {
      intro: "East Kilbride's architectural variety, from Fisherrow's traditional harbour cottages to Wallyford's modern estates, means drainage systems vary significantly. Our CCTV surveys reveal exactly what's inside your pipes, providing invaluable information for property purchasers, sellers, and homeowners investigating persistent problems.",
      commonProblems: ["Age-related pipe deterioration", "Root ingress from garden vegetation", "Ground movement affecting joints", "Historical modifications and connections", "Condition assessment for transactions"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any areas requiring attention. The final report includes annotated footage, a condition summary, and maintenance recommendations specific to your property.",
      localTip: "Purchasing in East Kilbride's conservation area around Inveresk? CCTV surveys can identify period drainage features that may need specialist attention."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that East Kilbride's varied drainage systems often need. From clearing scale deposits in Fisherrow's traditional pipes to routine maintenance for Wallyford's newer systems, our jetting service restores optimal drainage performance across the area.",
      commonProblems: ["Scale accumulation from water supply", "Grease buildup in residential drains", "Silt deposits from surface water drainage", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. The process is controlled and methodical, ensuring thorough cleaning without risk of damage to your drainage system.",
      localTip: "East Kilbride properties near the coast and river benefit from periodic jetting to remove silt and mineral deposits before they restrict flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in East Kilbride receive rapid response from our local teams, day or night. From flooded gardens in Wallyford to sewage issues in Fisherrow, our engineers are ready to tackle any emergency situation and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Garden flooding from blocked drains", "Overflowing inspection chambers", "Collapsed drains causing subsidence", "Storm damage to drainage systems"],
      process: "Emergency calls to our East Kilbride service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "East Kilbride's riverside and coastal properties are prone to surface water issues during heavy rain and high tides. Keeping gullies clear helps prevent property flooding."
    },
    "drain-repairs": {
      intro: "East Kilbride's diverse property ages mean drain repairs must be tailored to specific situations. Whether you need no-dig relining for a Victorian pipe in Inveresk or excavation repairs in a newer Wallyford property, our repair specialists have the skills and equipment for the job.",
      commonProblems: ["Cracked and fractured pipes", "Displaced joints from ground movement", "Root damage requiring intervention", "Age-related deterioration", "Damage from external factors"],
      process: "Following thorough investigation, we recommend the most cost-effective repair approach. We explain all options clearly, including likely outcomes and any ongoing maintenance requirements. All repairs are guaranteed for your peace of mind.",
      localTip: "East Kilbride's sandy coastal soil can cause seasonal pipe movement. Consider flexible repair solutions that accommodate ground conditions."
    }
  },
  motherwell: {
    "blocked-drains": {
      intro: "Motherwell's market town heritage and surrounding Midlothian communities present a varied set of drainage challenges. From the traditional stone-built properties of Eskbank to the former mining village housing in Newtongrange and Easthouses, our Motherwell blocked drain experts bring local knowledge and specialist equipment to clear any obstruction.",
      commonProblems: ["Debris accumulation in ageing stone drainage", "Root intrusion from established trees in mature gardens", "Fat and grease buildup in domestic kitchens", "Shared drainage blockages in terraced housing", "Surface water issues near the River North Esk"],
      process: "Motherwell's varied property types demand flexible approaches. We assess each situation individually, considering property age, pipe material, and the area's specific environmental factors before selecting our clearing method.",
      localTip: "Motherwell properties near the River North Esk and Motherwell Country Park should have drainage inspected regularly, as riverside tree roots and water table levels affect pipe integrity."
    },
    "drain-unblocking": {
      intro: "When Motherwell drains need unblocking, our local teams cover the entire area from Eskbank and Woodburn to Newtongrange and Mayfield. We handle everything from simple kitchen sink blockages to complex shared drainage issues in the area's many traditional terraced properties.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages from hair and soap", "External gulley obstructions from fallen leaves", "Interceptor trap blockages in older properties", "Washing machine and utility drain problems"],
      process: "Our Motherwell engineers arrive with comprehensive unblocking tools suited to the area's property mix. We identify the obstruction quickly and clear it completely, testing flow restoration before finishing the job.",
      localTip: "Motherwell's terraced streets in Woodburn and Easthouses often share rear drainage — if neighbours are experiencing slow drains too, the blockage is likely in the shared section."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Motherwell property's drainage is essential for effective maintenance. Our CCTV surveys provide detailed pipe condition assessments, particularly valuable for the area's period properties, former mining village homes, and modern developments where drainage history may be less documented.",
      commonProblems: ["Mapping drainage in older stone buildings", "Assessing drainage near former mine workings", "Pre-purchase surveys for period properties", "Root ingress from mature vegetation", "Investigating causes of recurring blockages"],
      process: "We survey Motherwell drainage methodically, recording condition and mapping routes. This is especially important for properties near former mining areas where ground stability can affect drainage infrastructure.",
      localTip: "Buying a property near Newtongrange or Easthouses? Always commission a full CCTV drain survey — former mining areas may have ground conditions that affect pipe stability."
    },
    "drain-jetting": {
      intro: "High-pressure jetting effectively maintains Motherwell's varied drainage systems, from traditional stone channels in period properties to modern plastic pipes in newer estates. Our specialist equipment clears the silt, scale, and debris that accumulate in local drainage throughout Midlothian.",
      commonProblems: ["Silt and sediment deposits from nearby rivers", "Scale accumulation from water supply", "Grease buildup in residential drains", "Root fragments requiring clearance", "Pre-survey cleaning for accurate assessment"],
      process: "We match jetting equipment to Motherwell's pipe types and conditions. Period drainage receives careful, lower-pressure treatment, while modern systems can handle more thorough cleaning for optimal results.",
      localTip: "Motherwell's riverside properties experience higher groundwater levels that can carry silt into drainage — regular jetting prevents gradual flow reduction."
    },
    "emergency-drain-services": {
      intro: "Motherwell drainage emergencies receive rapid response from our local teams, whether you're dealing with flooding in Eskbank or sewage backup in Mayfield. Our engineers are available around the clock, equipped to handle emergencies across the Midlothian area.",
      commonProblems: ["Surface water flooding during heavy rainfall", "Sewage backing up into ground-floor rooms", "Manhole overflows on terraced streets", "Drain collapses after ground saturation", "River-related drainage emergencies"],
      process: "Emergency calls from Motherwell receive immediate dispatch. We provide realistic arrival times and come prepared with pumping equipment and emergency repair materials to contain damage and resolve the situation.",
      localTip: "Motherwell properties near the River North Esk should maintain clear surface water drains year-round, as river levels can rise rapidly after sustained rainfall in the Pentland Hills."
    },
    "drain-repairs": {
      intro: "Motherwell's drainage spans from original stone-built channels to modern plastic systems, and our repair teams work confidently with all types. Whether it's relining Victorian pipes in Eskbank or replacing collapsed sections in Newtongrange, we select repair methods suited to each property's age and construction.",
      commonProblems: ["Cracked stone drainage channels", "Joint displacement from ground movement", "Root damage requiring pipe replacement", "Corrosion in older metal connections", "Subsidence-related damage near former mining areas"],
      process: "We investigate thoroughly before recommending Motherwell drainage repairs. Our approach accounts for the area's terrain and ground conditions, using durable materials that provide long-lasting results.",
      localTip: "Motherwell properties near former mining areas may experience ground subsidence — ensure your repair contractor checks for ground stability before undertaking drainage work."
    }
  },
  hamilton: {
    "blocked-drains": {
      intro: "Hamilton's new town heritage means most properties have drainage systems dating from the 1960s to 1980s, now reaching the age where maintenance becomes increasingly important. Our Hamilton blocked drain service combines knowledge of new town drainage design with modern clearing techniques, effectively tackling blockages in properties across the town from Howden to Knightsridge.",
      commonProblems: ["Deteriorating concrete and clay pipes from the new town era", "Root intrusion from maturing street trees planted decades ago", "Fat accumulation in domestic drains", "Debris in shared drainage serving housing clusters", "Surface water blockages from leaf litter"],
      process: "Hamilton's planned layout means drainage routes are generally well-documented, which helps us diagnose issues efficiently. We assess your specific situation, considering property age, pipe material, and blockage characteristics before selecting the most effective clearing method.",
      localTip: "Hamilton's maturing street trees, planted when the town was built, are now large enough to cause root intrusion in nearby drainage. Properties with trees close to pipe runs should have annual inspections."
    },
    "drain-unblocking": {
      intro: "When Hamilton drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Dedridge to Carmondean, we handle residential and commercial drain unblocking with professional efficiency and minimal disruption.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages", "Commercial drainage issues"],
      process: "Our Hamilton engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Hamilton's new town housing was built with shared drainage systems serving clusters of homes. If your neighbours also have slow drains, the blockage is likely in the communal section — contact us to investigate."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Hamilton property's drainage is essential, particularly as the town's original infrastructure ages. Our CCTV surveys reveal the condition of pipes beneath your property, identifying deterioration that surface inspection cannot detect. This is increasingly valuable for Hamilton's mid-century housing stock.",
      commonProblems: ["Age-related pipe deterioration in 1960s-80s systems", "Root ingress from established street trees", "Pipe condition assessment for home purchases", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Hamilton properties built in the 1960s and 70s are now past the typical 50-year design life of their concrete drainage — a CCTV survey reveals how much service life remains."
    },
    "drain-jetting": {
      intro: "Hamilton's ageing new town drainage benefits greatly from regular high-pressure jetting maintenance. Our specialist equipment removes the deposits that accumulate over decades in concrete and clay pipes, maintaining optimal flow in domestic and commercial drainage systems throughout the town.",
      commonProblems: ["Scale buildup in ageing pipes", "Grease accumulation", "Silt and debris deposits", "Root fragment removal", "General maintenance needs"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting the integrity of ageing pipe infrastructure. We verify results with flow testing.",
      localTip: "Hamilton businesses at the Designer Outlet and along Almondvale Boulevard should consider scheduled jetting as part of their maintenance regime, particularly food preparation premises."
    },
    "emergency-drain-services": {
      intro: "Hamilton drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded ground floor in Ladywell or sewage backup in Howden, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes", "Collapsed drainage from ageing infrastructure", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Hamilton's new town drainage was designed for lower population density than the area now has. During heavy rainfall, systems can become overwhelmed — keep emergency drain contacts readily available."
    },
    "drain-repairs": {
      intro: "Hamilton's new town housing stock is reaching the age where drainage repairs become increasingly necessary. Our repair specialists understand the materials and methods used in 1960s-80s construction and provide repair solutions that extend the life of ageing systems while delivering reliable results.",
      commonProblems: ["Cracked concrete drainage pipes", "Deteriorating clay pipe joints", "Root damage from established trees", "Ground settling causing pipe displacement", "Age-related material degradation"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Hamilton's new town infrastructure is reaching the end of its design life in many areas. Consider proactive repair and relining rather than waiting for complete failure."
    }
  },
  lanark: {
    "blocked-drains": {
      intro: "Lanark's blend of established residential streets and modern commercial developments creates varied drainage challenges. Our Lanark blocked drain specialists understand the differences between period stone villas along St John's Road and the mid-century housing in Clermiston and East Craigs, bringing the right expertise to every callout.",
      commonProblems: ["Root intrusion from mature garden trees and hedgerows", "Fat and grease buildup from busy household kitchens", "Debris accumulation in period clay pipes", "Surface water blockages in the Gyle commercial area", "Shared drainage issues in semi-detached housing"],
      process: "We assess each Lanark blockage considering the property type, pipe age, and drainage layout. Period properties along St John's Road need different handling than the 1960s housing in Clermiston, and our engineers adapt their approach accordingly.",
      localTip: "Lanark's leafy streets and mature gardens along Lanark Road and St John's Road are beautiful but pose significant root intrusion risks — schedule annual CCTV inspections if you have large trees within 5 metres of drainage runs."
    },
    "drain-unblocking": {
      intro: "When drains block in Lanark, our local teams respond promptly with the right equipment for every property type. From period homes along Lanark Road to modern commercial units at the Gyle, we clear blockages efficiently while respecting your property.",
      commonProblems: ["Kitchen sink blockages from food waste", "Bathroom drain clogs in family homes", "External gulley obstructions from garden debris", "Utility room and laundry drain blockages", "Commercial drainage issues at the Gyle"],
      process: "Our Lanark engineers arrive equipped for the area's varied property types. We locate the blockage precisely, select the least disruptive clearing method, and restore full drainage flow.",
      localTip: "Lanark properties with gravel driveways should fit gulley guards to prevent stones entering surface water drains."
    },
    "cctv-drain-surveys": {
      intro: "Whether you're buying a stone villa on St John's Road or investigating drainage at a South Gyle business unit, our CCTV surveys provide the detailed assessment you need. We reveal the true condition of pipes beneath Lanark's diverse range of properties.",
      commonProblems: ["Pre-purchase surveys for period stone villas", "Root ingress investigation in mature gardens", "Mapping complex drainage in commercial premises", "Condition assessment of mid-century pipe systems", "Insurance and renovation planning requirements"],
      process: "We survey Lanark properties thoroughly, documenting all drainage routes including connections to outbuildings and extensions. Reports are detailed and professional, suitable for property transactions and insurance purposes.",
      localTip: "Planning an extension on your Lanark home? A pre-build CCTV drain survey identifies any pipes that need protecting or redirecting before construction begins."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Lanark's period and modern drainage at peak performance. Our careful approach removes accumulated deposits from Victorian clay pipes along St John's Road and clears root masses from garden-heavy properties in East Craigs, restoring optimal flow throughout your system.",
      commonProblems: ["Root mass accumulation from garden trees", "Scale deposits from water supply", "Grease and fat buildup over time", "Silt and garden debris in surface water drains", "General maintenance for residential drainage networks"],
      process: "We adjust jetting pressure and nozzle selection to suit each pipe's material and age. Lanark's older properties receive gentler treatment that effectively clears deposits without risking damage to original drainage.",
      localTip: "Lanark properties with large gardens should combine annual jetting with root inhibitor treatment to keep drainage clear year-round."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Lanark demand swift, professional response. Whether you're facing sewage backup in a period villa or flooding at a Clermiston family home, our emergency teams are available around the clock to protect your property from damage.",
      commonProblems: ["Sewage backing up into ground floors", "Garden flooding from overwhelmed drainage", "Overflowing inspection chambers", "Drain collapse beneath driveways and patios", "Storm water overwhelming period drainage systems"],
      process: "Emergency calls from Lanark are prioritised and dispatched immediately. Our engineers understand the area's property types and act quickly to contain damage while implementing effective, lasting solutions.",
      localTip: "Lanark properties near the base of Lanark Hill may experience increased surface water runoff during heavy rain — ensure gullies and downpipe connections are clear."
    },
    "drain-repairs": {
      intro: "Repairing drainage beneath Lanark's varied properties requires specialist care. Our repair teams work with all property ages across the area, from restoring Victorian clay pipes in period stone villas to fixing mid-century systems in Clermiston and East Craigs.",
      commonProblems: ["Root damage to clay pipe joints", "Cracked pipes beneath driveways and patios", "Displaced joints from ground movement", "Age-related deterioration of period drainage", "Damage from extension and renovation projects"],
      process: "We investigate thoroughly and recommend repairs suited to your property's character. No-dig relining preserves mature gardens and landscaping, while excavation is reserved for severe damage requiring full replacement.",
      localTip: "Lanark's clay subsoil and mature tree cover cause seasonal ground movement — flexible repair solutions like pipe relining accommodate this better than rigid replacements."
    }
  },
  cumbernauld: {
    "blocked-drains": {
      intro: "Cumbernauld's reputation as one of Glasgow's most desirable suburbs comes with distinctive drainage challenges. The area's substantial Victorian and Edwardian stone-built properties feature original clay drainage systems, while tree-lined avenues contribute to root intrusion issues. Our Cumbernauld specialists understand these local factors and deliver effective blocked drain solutions.",
      commonProblems: ["Tree root intrusion from mature gardens and avenues", "Aged clay pipe deterioration", "Fat buildup from busy household kitchens", "Leaf debris in autumn months from tree-lined streets", "Shared drainage in converted period properties"],
      process: "We approach Cumbernauld blocked drains with appreciation for the area's period properties. Our clearing methods are effective yet gentle on original drainage features, preserving the integrity of your home's infrastructure.",
      localTip: "Cumbernauld's beautiful mature trees along Cumbernauld Road and surrounding avenues are a root intrusion risk. Consider annual CCTV checks if you have large trees near your drainage runs."
    },
    "drain-unblocking": {
      intro: "Cumbernauld residents deserve drain unblocking services that match the quality of their homes. Our local teams respond promptly to calls from Churchhill to Comiston, bringing the expertise needed to clear blockages in period properties without causing unnecessary disruption.",
      commonProblems: ["Bathroom drain clogs", "Kitchen sink blockages", "External gulley obstructions", "Downpipe connections", "Cellar drainage issues"],
      process: "Our Cumbernauld engineers understand period property drainage. We use appropriate techniques for each situation, whether that's careful rodding of delicate clay pipes or jetting for more robust modern sections.",
      localTip: "Cumbernauld's Victorian properties often have drainage running beneath conservatories and extensions. Know your drainage routes before planning building work."
    },
    "cctv-drain-surveys": {
      intro: "Cumbernauld's premium property market makes thorough drainage assessment essential for buyers and sellers alike. Our CCTV surveys provide detailed condition reports that protect your investment, revealing the true state of underground drainage in the area's sought-after Victorian and Edwardian homes.",
      commonProblems: ["Pre-purchase condition assessment", "Root ingress investigation", "Drainage route mapping", "Period feature documentation", "Insurance requirements"],
      process: "We survey Cumbernauld properties with appreciation for their character and value. Our reports are comprehensive and professional, suitable for property transactions and insurance purposes.",
      localTip: "Cumbernauld home sellers can benefit from proactive drainage surveys, addressing any issues before they become negotiating points in what is Glasgow's most competitive property market."
    },
    "drain-jetting": {
      intro: "High-pressure jetting maintains Cumbernauld's period drainage at peak performance. Our careful approach removes decades of accumulated deposits from Victorian clay pipes, restoring flow capacity while preserving the integrity of original drainage features.",
      commonProblems: ["Scale from water supply", "Grease accumulation over time", "Root mass removal", "Silt and debris clearing", "Pre-survey preparation"],
      process: "Cumbernauld's period drainage requires measured jetting approaches. We adjust pressure and nozzle selection to suit pipe age and condition, achieving thorough cleaning without risk of damage.",
      localTip: "Cumbernauld's elevated position means good natural drainage gradients, but pipe scale buildup can still restrict flow. Periodic jetting maintains optimal performance and extends drainage lifespan."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Cumbernauld receive our immediate attention, with local engineers ready to protect your home from damage. Whether you're facing sewage backup in a Victorian stone villa or flooding in a converted flat, we respond with the urgency your situation demands.",
      commonProblems: ["Sewage backing up into cellars", "Garden flooding from blocked drains", "Manhole overflows", "Drain collapse affecting foundations", "Persistent foul odours"],
      process: "Emergency response to Cumbernauld properties is swift and professional. We understand the area's property values and act to minimise damage and disruption while resolving the underlying problem.",
      localTip: "Cumbernauld properties with cellars should ensure drainage pumps and non-return valves are regularly serviced to prevent backup during storms."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Cumbernauld's character properties requires specialist knowledge and sympathetic approaches. Our repair team works with all property ages, from original Victorian installations to modern connections, always selecting methods that preserve your home's integrity while delivering lasting results.",
      commonProblems: ["Aged clay pipe cracking", "Root damage to joints", "Ground movement effects", "Historical modification issues", "Cellar drainage problems"],
      process: "We investigate Cumbernauld drainage issues thoroughly, recommending repairs that suit your property's age and construction. No-dig techniques are often ideal for period properties, avoiding disruption to mature gardens and original features.",
      localTip: "Cumbernauld's Victorian drainage often includes original salt-glazed pipes. These can be repaired and relined rather than replaced, preserving heritage features."
    }
  },
  coatbridge: {
    "blocked-drains": {
      intro: "Coatbridge's seaside location on the Firth of Forth creates specific drainage considerations, from sandy soil conditions near the beach to Victorian pipe systems in the area's traditional villas. Our Coatbridge blocked drain specialists understand how coastal proximity affects drainage systems and bring the expertise needed for properties from the Promenade to Duddingston.",
      commonProblems: ["Sand infiltration into coastal drainage systems", "Root intrusion from garden trees in established streets", "Fat and grease buildup from domestic kitchens", "Debris accumulation in Victorian clay pipes", "Surface water issues on low-lying coastal properties"],
      process: "We assess your Coatbridge property's position and drainage layout before selecting clearing methods. Coastal properties may require different approaches than those further inland in Duddingston or Willowbrae. Our engineers are experienced with all property types along the coast.",
      localTip: "Coatbridge's sandy soil near the beach can shift around pipes, creating gaps where debris enters the system. Properties close to the shore should have drainage checked more frequently."
    },
    "drain-unblocking": {
      intro: "When drains block in Coatbridge, our local teams respond with the urgency and expertise your situation demands. Whether you're dealing with a backed-up kitchen sink in Joppa or an overflowing external drain in Craigentinny, we'll have your drainage flowing freely again.",
      commonProblems: ["Kitchen waste accumulation", "Bathroom drain blockages", "External gulley obstructions", "Toilet blockages in seaside properties", "Washing machine drain problems"],
      process: "Our Coatbridge engineers arrive with comprehensive unblocking equipment suitable for all drain types. We assess the blockage location and severity, then apply the most effective clearing technique, ensuring complete removal of the obstruction.",
      localTip: "Coatbridge's promenade properties often have rear drainage running close to neighbouring boundaries. Know your drainage layout to identify the responsible party when blockages occur."
    },
    "cctv-drain-surveys": {
      intro: "Coatbridge's varied property market, from Victorian seaside villas to modern conversions, makes drainage condition assessment increasingly important. Our CCTV surveys reveal exactly what's inside your pipes, providing essential information for property transactions and ongoing maintenance in this popular coastal suburb.",
      commonProblems: ["Sand and silt infiltration assessment", "Age-related pipe deterioration in Victorian villas", "Root ingress from established gardens", "Drainage route mapping before renovations", "Condition assessment for property purchases"],
      process: "We survey your entire drainage system, documenting condition, identifying defects, and noting any coastal-specific issues. The final report includes annotated footage, a condition summary, and maintenance recommendations.",
      localTip: "Purchasing a Victorian villa on Coatbridge's promenade? A pre-purchase CCTV survey is essential — seaside conditions accelerate pipe deterioration and hidden defects are common."
    },
    "drain-jetting": {
      intro: "High-pressure jetting provides the deep cleaning that Coatbridge's coastal drainage systems often need. Our service removes sand, silt, and scale deposits from Victorian pipes along the promenade and clears accumulated debris from properties throughout Joppa and Duddingston.",
      commonProblems: ["Sand and silt accumulation from coastal proximity", "Scale buildup from water supply", "Grease accumulation in residential drains", "Root fragments requiring removal", "Preparation for CCTV inspection"],
      process: "We select jetting equipment and settings appropriate for your pipe material and the deposits being removed. Coastal properties often have sand and silt that requires specific nozzle selection for effective removal.",
      localTip: "Coatbridge's coastal properties experience faster silt accumulation than inland areas. Consider jetting every 12 months rather than the usual 18 to maintain optimal flow."
    },
    "emergency-drain-services": {
      intro: "Drainage emergencies in Coatbridge receive rapid response from our local teams, day or night. From flooded basements near the promenade to sewage issues in Northfield, our engineers are ready to tackle any emergency and protect your property from further damage.",
      commonProblems: ["Sewage backflow into properties", "Coastal flooding from overwhelmed drainage", "Overflowing inspection chambers", "Collapsed drains in sandy soil", "Storm surge affecting coastal drainage"],
      process: "Emergency calls to our Coatbridge service trigger immediate dispatch. We provide ETA updates and arrive prepared for the reported situation. Our priority is containing the emergency, then implementing a lasting solution.",
      localTip: "Coatbridge's coastal properties should have non-return valves fitted on main drainage connections to prevent high tide or storm surge from forcing water back into the system."
    },
    "drain-repairs": {
      intro: "Repairing drainage in Coatbridge's coastal environment requires understanding the specific challenges of sandy soil, saltwater proximity, and the area's mix of Victorian and modern properties. Our repair specialists select methods and materials suited to these seaside conditions, ensuring lasting results.",
      commonProblems: ["Cracked pipes from sand movement", "Root damage from garden vegetation", "Joint displacement in sandy soil", "Saltwater corrosion affecting connections", "Sand infiltration through damaged joints"],
      process: "We assess Coatbridge drainage repairs with coastal conditions in mind. Materials are chosen for saltwater resistance, and repair methods account for the sandy, mobile soil conditions prevalent near the shore.",
      localTip: "Coatbridge's sandy soil conditions can make traditional excavation repairs more straightforward than in rocky Glasgow locations — but pipe bedding must be done carefully to prevent future settlement."
    }
  },
  rutherglen: {
    "blocked-drains": {
      intro: "Rutherglen and the surrounding Midlothian communities blend historic village charm with modern housing developments, each with their own drainage characteristics. Our Rutherglen blocked drain service covers everything from Lasswade's traditional stone cottages to Hopefield's newer family homes, bringing local expertise to every callout.",
      commonProblems: ["Root intrusion from established village trees and hedgerows", "Fat and grease buildup in domestic kitchens", "Debris accumulation in older stone drainage systems", "Surface water blockages from leaf litter", "Shared drainage conflicts in terraced housing"],
      process: "We assess each Rutherglen blockage considering the property type, drainage age, and local conditions. Traditional stone properties need different handling than modern estates, and our engineers adapt their approach accordingly.",
      localTip: "Rutherglen properties near the River North Esk at Lasswade should have drainage inspected after periods of heavy rainfall when debris and silt can accumulate rapidly."
    },
    "drain-unblocking": {
      intro: "When Rutherglen drains need unblocking, our local team responds with the equipment and expertise to clear any obstruction. From Lasswade to Rosewell, we handle residential drain unblocking with professional efficiency and minimal disruption to your home.",
      commonProblems: ["Kitchen sink blockages", "Toilet and bathroom clogs", "External drain obstructions", "Interceptor trap blockages in older properties", "Utility room drainage issues"],
      process: "Our Rutherglen engineers carry comprehensive equipment for all unblocking scenarios. We locate the blockage, select the appropriate tool, and clear the obstruction thoroughly, checking flow restoration before completing the job.",
      localTip: "Rutherglen's older stone-built properties often have deep inspection chambers. Ensure access covers are in good condition and accessible for maintenance."
    },
    "cctv-drain-surveys": {
      intro: "Understanding your Rutherglen property's drainage is essential for proper maintenance and informed decision-making. Our CCTV surveys reveal the condition of pipes beneath your property, identifying issues that surface inspection cannot detect. This is particularly valuable in the Midlothian area where ground conditions vary.",
      commonProblems: ["Unknown drainage routes in period properties", "Pipe condition assessment for home purchases", "Root ingress detection from mature gardens", "Joint and connection problems from ground settling", "Planning investigation for extensions"],
      process: "We systematically survey your accessible drainage, recording footage and noting findings. The resulting report provides a clear picture of your system's condition, with recommendations prioritised by urgency.",
      localTip: "Rutherglen properties near former paper mill and mining sites may have unexpected underground features. Surveys help identify complex drainage arrangements before problems develop."
    },
    "drain-jetting": {
      intro: "Regular high-pressure jetting is valuable maintenance for Rutherglen's drainage systems. Our specialist equipment handles everything from clearing root masses in Lasswade's older properties to descaling pipes in Hopefield's modern housing, maintaining optimal flow throughout the area.",
      commonProblems: ["Scale buildup from water supply", "Grease accumulation in residential drains", "Silt and sediment from nearby river and streams", "Root fragments after cutting treatment", "General preventative maintenance cleaning"],
      process: "We assess your drainage and select appropriate jetting equipment. The cleaning process is thorough but controlled, removing deposits while protecting your pipe integrity. We verify results with flow testing.",
      localTip: "Rutherglen properties with gardens backing onto the River North Esk valley experience more silt buildup — consider jetting every 12 months rather than the usual 18."
    },
    "emergency-drain-services": {
      intro: "Rutherglen drainage emergencies receive immediate attention from our dedicated response teams. Whether you're facing a flooded garden in Hopefield or sewage backup in Lasswade, we're available around the clock to resolve the situation and protect your property.",
      commonProblems: ["Sewage backing up into properties", "Flooding from blocked drains", "Overflowing manholes on residential streets", "Collapsed drainage from ground movement", "Foul odour emergencies"],
      process: "Emergency calls are dispatched immediately to our nearest available engineer. We keep you informed of arrival times and tackle the emergency with appropriate urgency, implementing both immediate fixes and lasting solutions.",
      localTip: "Rutherglen's river valley location means water levels can rise quickly after sustained rain in the Pentland Hills. Keep emergency drain contacts readily available and know your manhole locations."
    },
    "drain-repairs": {
      intro: "Rutherglen's property stock spans traditional stone cottages to modern family homes, and our drain repair expertise matches this diversity. From relining Victorian pipes in Lasswade to replacing damaged sections in Hopefield, we provide repair solutions appropriate to each property type.",
      commonProblems: ["Cracked stone drainage channels in period properties", "Clay pipe deterioration from age", "Joint failures from ground movement", "Root damage from established trees", "Ground settling effects on newer developments"],
      process: "We investigate thoroughly before recommending repairs, ensuring you understand all options and their implications. Repair work is completed to high standards with appropriate guarantees.",
      localTip: "Rutherglen's mix of former mining land and river valley geology means ground conditions can vary — always commission a proper survey before planning drainage repair work."
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
    "Familiarity with Scottish Water infrastructure and local council requirements"
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
    "Reports accepted by solicitors, insurers, and Scottish Water"
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
    "Experienced with flood-risk and sewage situations across Glasgow and surrounding areas"
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
      answer: "Our engineers are based across Glasgow and surrounding areas and typically reach {location} {responseTime}. For urgent blockages causing flooding or sewage backup, we prioritise dispatch to minimise property damage."
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
      answer: "No. We never charge a call-out fee for drain unblocking in {location} or anywhere else across Glasgow and surrounding areas. You only pay for the work carried out, and we confirm the price before we start."
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
      answer: "Our emergency teams are positioned across Glasgow and surrounding areas and reach {location} {responseTime}. We operate around the clock — 24 hours a day, 7 days a week, including bank holidays — so help is available whenever you need it."
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
