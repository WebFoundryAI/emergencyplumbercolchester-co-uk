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
  glasgow: {
    landmarks: [
      "Glasgow Castle",
      "The Royal Mile",
      "Holyrood Palace",
      "Arthur's Seat",
      "Princes Street",
      "Grassmarket",
      "George Street",
      "Charlotte Square",
      "Calton Hill",
      "Scottish Parliament",
      "Glasgow Waverley Station",
      "St Giles' Cathedral",
      "Greyfriars Bobby",
      "The Meadows",
      "Glasgow University",
      "National Museum of Scotland",
      "Cowgate",
      "Victoria Street",
      "Dean Village",
      "Stockbridge",
      "Bruntsfield Links",
      "Tollcross"
    ],
    drainageProfile: `Glasgow's drainage challenges are among the most complex in Scotland, shaped by a city built across volcanic geology, centuries of layered construction, and dramatic topography. The Old Town, stretching along the ridge from Glasgow Castle to Holyrood Palace, sits on volcanic rock where medieval buildings were constructed on top of one another over hundreds of years. Beneath the Royal Mile and the Cowgate, a labyrinth of vaults, closes, and buried streets creates an extraordinarily complicated underground environment where drainage infrastructure must navigate historic stonework, buried chambers, and foundations dating back to the 12th century.

The Georgian New Town, developed from the 1760s onwards, presents different challenges. The elegant streets of George Street, Queen Street, and Charlotte Square were built with sophisticated drainage for their era, but these systems are now over 250 years old. The New Town's grid layout means long, straight pipe runs beneath wide streets, but the underlying geology—a mix of sandstone and glacial deposits—creates variable ground conditions that affect pipe stability over time. Many New Town properties feature deep basements that were originally service quarters, and these below-ground spaces are particularly vulnerable to drainage backup during heavy rainfall.

Glasgow's volcanic geology is a defining factor. Castle Rock, Calton Hill, Arthur's Seat, and the Crags are all remnants of ancient volcanic activity, and the harder basalt and dolerite rock that forms these features sits alongside softer sandstone and clay deposits. This geological variability means drainage pipes can pass through dramatically different ground conditions within short distances, creating differential settlement and stress on pipework. Excavation costs vary significantly depending on whether work encounters soft ground or volcanic bedrock.

The Water of Paisley, Glasgow's principal river, winds through the city from Balerno to Paisley, and its catchment area affects drainage across multiple neighbourhoods. Properties in Dean Village, Stockbridge, and along the river corridor face particular flood risk during heavy rain events. Scottish Water manages the public sewer network, and Glasgow's combined sewer system—carrying both foul water and surface water—can be overwhelmed during intense rainfall, particularly in the lower-lying areas around Holyrood and Paisley.

The city's dramatic topography—with elevation changes of over 200 metres between Arthur's Seat and sea level at Paisley—creates intense pressure differentials in gravity-fed drainage systems. Properties at elevation experience different drainage behaviour from those in valley locations. The steep closes and wynds of the Old Town channel surface water rapidly downhill, while the broader streets of the New Town manage water differently entirely.

Our local engineers understand Glasgow's unique drainage character intimately. We routinely work with stone and clay pipes requiring specialist handling, navigate the complex underground landscape of the Old Town, manage the Georgian infrastructure of the New Town, and address the specific challenges created by Glasgow's volcanic geology and variable terrain. Whether your property is a medieval tenement on the Royal Mile, a Georgian townhouse in the New Town, a Victorian villa in Marchmont, or a modern flat in Quartermile, we bring expertise specific to Glasgow's distinctive drainage landscape.`,
    localFAQs: [
      {
        question: "Why do older Glasgow properties have more drainage problems?",
        answer: "Glasgow's building history spans nearly a thousand years, meaning drainage infrastructure varies enormously. Old Town properties may have stonework drainage channels dating back centuries, while Georgian New Town properties use clay pipe systems now over 200 years old. Victorian tenements in areas like Marchmont and Bruntsfield rely on shared drainage stacks serving multiple flats. These aging systems were designed for very different usage patterns—before modern bathrooms, washing machines, and dishwashers—and are increasingly fragile. The volcanic geology beneath Glasgow also causes differential ground movement that stresses aging pipework."
      },
      {
        question: "How does Glasgow's geology affect drainage work?",
        answer: "Glasgow is built on volcanic rock—Castle Rock, Arthur's Seat, and Calton Hill are all remnants of ancient volcanism. This means excavation can encounter extremely hard basalt or dolerite bedrock, making traditional dig-and-replace repairs expensive and time-consuming. Conversely, areas of softer sandstone and glacial clay deposits can experience ground movement that damages pipes. This geological variability means drainage solutions must be carefully matched to specific ground conditions. No-dig techniques like pipe relining are particularly valuable in Glasgow where excavation costs can be high."
      },
      {
        question: "What should Glasgow residents do about flooding during heavy rain?",
        answer: "Glasgow's combined sewer system, managed by Scottish Water, carries both foul water and surface water in the same pipes. During heavy rainfall, these combined sewers can be overwhelmed, causing backup into properties—particularly in lower-lying areas around Holyrood, Paisley, and along the Water of Paisley corridor. Property owners should maintain clear gutters and downpipes, ensure surface water drains freely away from the building, and consider installing backflow prevention devices in vulnerable basement or ground-floor properties. Reporting persistent flooding to Scottish Water helps identify network issues."
      },
      {
        question: "Are tenement flats in Glasgow more prone to drainage issues?",
        answer: "Yes, Glasgow's tenement buildings—common across Marchmont, Bruntsfield, Cumbernauld, and many other areas—share vertical drainage stacks serving multiple flats. A blockage in one flat can affect properties above and below. Shared responsibility for maintenance can also create coordination challenges among multiple owners. Regular maintenance of shared drainage, clear communication between neighbours, and professional CCTV surveys to identify developing problems are all important for tenement residents."
      }
    ],
    caseStudy: `Recent call-out to a Georgian townhouse in Glasgow's New Town: The property owner on Heriot Row reported water backing up into the basement kitchen during heavy rain events. Our CCTV survey revealed a combination of issues typical of New Town properties—the original clay drainage, now over 230 years old, had developed multiple fractures where it passed through different geological layers beneath the street. Tree root intrusion from the private garden to the rear had colonised approximately 35% of the pipe diameter over a 12-metre section. Using high-pressure jetting, we carefully cleared the root mass and flushed accumulated silt from the fractured sections. Given the property's listed building status and the difficulty of excavation through the New Town's stone-flagged pavements, the homeowner opted for structural pipe relining—a no-dig solution that restored full pipe integrity with a 10-year warranty. Result: fully restored drainage with no disruption to the historic streetscape. Tip: New Town property owners should schedule preventative CCTV surveys every two to three years—early detection of root intrusion and pipe deterioration prevents costly emergency situations in these prestigious properties.`
  },

  paisley: {
    landmarks: [
      "The Shore",
      "Paisley Links",
      "Royal Yacht Britannia",
      "Ocean Terminal",
      "Paisley Walk",
      "Constitution Street",
      "Water of Paisley Walkway",
      "Paisley Theatre",
      "Paisley Docks",
      "Newhaven Harbour",
      "Trinity House",
      "South Paisley Parish Church"
    ],
    drainageProfile: `Paisley's drainage infrastructure tells the story of one of Scotland's most historic port towns, now undergoing dramatic regeneration. For centuries an independent burgh with its own character distinct from Glasgow, Paisley's drainage systems reflect layers of maritime, industrial, and residential development stretching back to medieval times. The area around The Shore and Constitution Street features some of the oldest drainage infrastructure in the Glasgow area, with stone-built channels and clay pipes serving properties that have been continuously occupied for hundreds of years.

The Water of Paisley reaches the sea here, and the river's influence on Paisley's drainage cannot be overstated. Properties along The Shore, Bernard Street, and the lower sections of Paisley Walk sit at or near sea level, making them vulnerable to tidal influence, river flooding, and drainage backup during heavy rainfall events. The combination of high water table, tidal variation, and aging infrastructure creates persistent moisture management challenges for property owners in these waterfront locations.

Paisley's modern waterfront regeneration—centred on Ocean Terminal, the Western Harbour development, and the extensive apartment complexes along the waterfront—has introduced contemporary drainage systems designed for high-density residential living. However, these modern systems often connect to older infrastructure serving the wider Paisley area, creating transition zones where new meets old. The contrast between a modern waterfront apartment's plastic drainage and the Victorian cast iron or even older stone drainage serving nearby traditional tenements is stark.

Paisley Walk, one of Glasgow's longest and busiest streets, features a dense mix of tenement residential properties above ground-floor commercial premises. The drainage here serves both residential and commercial needs—restaurants, takeaways, and food businesses along Paisley Walk create significant grease and fat accumulation that demands regular maintenance. The volume of commercial food preparation along this corridor makes it one of the most demanding drainage environments in Glasgow.

The traditional tenement buildings throughout Paisley—particularly around Easter Road, Paisley Links, and the streets between Paisley Walk and the waterfront—feature shared vertical drainage stacks typical of Glasgow's tenement architecture. These buildings, mostly dating from the Victorian and Edwardian eras, rely on cast iron soil stacks and clay underground drainage that is increasingly reaching the end of its serviceable life.

Newhaven, historically a fishing village at the western end of Paisley, has its own distinct drainage character. The tight-knit cottages and converted fishermen's houses along the harbour feature small-bore drainage that was adequate for their original purpose but struggles with modern usage demands. Recent redevelopment around Newhaven harbour has introduced modern drainage, but connection to older networks remains a challenge.

Our engineers understand Paisley's complex layering of maritime heritage, Victorian tenement infrastructure, and modern waterfront development. Whether addressing tidal influence on waterfront properties, managing grease buildup along Paisley Walk, or maintaining aging tenement stacks, we bring local knowledge specific to this unique Glasgow neighbourhood.`,
    localFAQs: [
      {
        question: "How does Paisley's waterfront location affect drainage?",
        answer: "Properties near The Shore, the docks, and along the Water of Paisley sit close to sea level and are influenced by tidal variation. High water table means subsurface moisture is a constant challenge. During heavy rain combined with high tides, drainage backup is more likely. Waterfront property owners should understand their building's specific flood defence measures and maintain drainage systems proactively. Modern waterfront developments typically have pumped drainage systems that require regular maintenance."
      },
      {
        question: "What drainage challenges do Paisley Walk commercial properties face?",
        answer: "Paisley Walk's concentration of restaurants, takeaways, and food businesses creates significant grease and fat accumulation in drainage systems. Commercial properties should install and regularly service grease traps, arrange quarterly professional jetting, and ensure staff understand proper disposal of cooking oils and food waste. Residential flats above commercial premises can be affected by commercial drainage issues—understanding the building's drainage configuration is important."
      },
      {
        question: "Are modern Paisley waterfront apartments free from drainage issues?",
        answer: "Modern developments at Ocean Terminal and Western Harbour have superior drainage design, but they are not immune to problems. High-density living creates heavy drainage demands, and many modern systems connect to older infrastructure serving the wider Paisley area. Pumped drainage systems in waterside developments require regular maintenance. Building factors should have maintenance schedules for shared drainage infrastructure—residents should ensure these are being followed."
      }
    ],
    caseStudy: `Call-out to a traditional tenement on Constitution Street: Ground-floor residents reported persistent damp and slow drainage that worsened during high tides. Our CCTV survey revealed the building's Victorian clay drainage had multiple joint failures in the section running beneath the street, allowing groundwater ingress—a common issue in Paisley given the high water table. The proximity to the Water of Paisley meant the drainage was effectively sitting in saturated ground. We coordinated with the building's other flat owners to fund a comprehensive solution: high-pressure jetting to clear accumulated silt, followed by structural relining of the worst-affected 18-metre section. We also recommended improved surface water management around the building's rear court. Result: eliminated groundwater ingress and restored full drainage function. The building's owners established a shared maintenance fund for future drainage upkeep. Tip: Paisley properties near the waterfront should treat drainage maintenance as an ongoing requirement, not a one-off fix—the high water table demands regular attention.`
  },

  "east-kilbride": {
    landmarks: [
      "East Kilbride Racecourse",
      "River Esk",
      "East Kilbride Old Bridge",
      "Fisherrow Harbour",
      "East Kilbride Links",
      "Pinkie House",
      "East Kilbride Grammar School",
      "Loretto School",
      "Inveresk Lodge Garden",
      "East Kilbride High Street",
      "Levenhall Links",
      "Newhailes House"
    ],
    drainageProfile: `East Kilbride, known as "The Honest Toun," is one of the oldest settlements in Scotland, with a history stretching back to Roman times when the fort at Inveresk overlooked the River Esk crossing. This deep history means the town's drainage infrastructure spans an extraordinary range of ages and construction methods—from stone-built channels in the oldest parts of the High Street to modern plastic systems in recent housing developments on the town's periphery.

The River Esk is central to East Kilbride's drainage story. The river bisects the town, and properties on both banks face flood risk during heavy rainfall and periods of high river flow. The stretch between the Old Bridge and Fisherrow is particularly vulnerable, as the river narrows here before reaching the Firth of Forth. Properties in the riverside area of Millhill and along the Eskside have experienced flooding events that overwhelm both the river's capacity and the town's combined sewer system. Scottish Water has invested in flood prevention measures, but individual property owners must also manage their own drainage effectively.

Fisherrow, the historic fishing quarter at the river mouth, features tightly packed cottages with drainage systems that were designed for a very different era. The narrow lanes and close proximity of buildings make access for drainage work challenging, and the coastal location means salt air accelerates corrosion of cast iron pipework. The water table here is high, influenced by both the river and the sea, creating persistent moisture management challenges.

The older residential areas around the High Street, Bridge Street, and Inveresk feature a mix of stone-built and Victorian drainage serving properties ranging from 18th-century townhouses to Victorian terraces. The Inveresk area, on elevated ground above the river, benefits from natural drainage but features aging clay pipe systems that are increasingly fragile. The affluent properties around Inveresk Lodge Garden and along Carberry Road have extensive grounds where mature tree root intrusion is a recurring drainage challenge.

Modern housing developments on East Kilbride's eastern and southern edges—around Wallyford and the expanding Craighall area—feature contemporary drainage systems designed to current standards. However, the rapid pace of development in this area means surface water management has become critical. The increase in impermeable surfaces from new construction can increase flood risk downstream, and connection of new developments to existing sewer infrastructure sometimes creates capacity challenges.

East Kilbride's mixed character—ancient town centre, Victorian residential areas, coastal fishing quarter, and modern suburban expansion—demands drainage expertise that understands each context. Whether dealing with a centuries-old High Street property, a riverside home at flood risk, or a new-build with connection challenges, East Kilbride's drainage needs are as varied as the town itself.`,
    localFAQs: [
      {
        question: "How does the River Esk affect drainage in East Kilbride?",
        answer: "The River Esk creates significant flood risk for properties on both banks, particularly in the stretch between the Old Bridge and Fisherrow where the river narrows before reaching the sea. During heavy rainfall, the river can overwhelm the town's combined sewer system, causing backup into riverside properties. Property owners near the Esk should maintain clear surface drainage, consider backflow prevention devices, and stay informed about Scottish Water's flood management measures for the area."
      },
      {
        question: "What drainage issues are specific to Fisherrow's historic cottages?",
        answer: "Fisherrow's tightly packed former fishing cottages present unique challenges: narrow access lanes make drainage work difficult, coastal salt air corrodes cast iron pipework, and the high water table from proximity to both the river and sea creates persistent moisture issues. Many cottages have drainage systems that were adequate for their original purpose but struggle with modern bathroom and kitchen demands. Professional survey is essential before purchasing or renovating Fisherrow properties."
      },
      {
        question: "Are new-build properties in East Kilbride's expanding areas immune to drainage problems?",
        answer: "Not entirely. While modern drainage systems are superior to older infrastructure, rapid development around Wallyford and Craighall has increased impermeable surface area, potentially creating surface water management challenges. New developments connecting to existing sewer infrastructure can create capacity issues, particularly during heavy rainfall. New-build owners should understand how their property's drainage connects to the wider network and maintain gutters, downpipes, and any soakaways on their property."
      }
    ],
    caseStudy: `Recent call-out to a Victorian terrace near East Kilbride High Street: The homeowner reported recurring blockages that worsened after heavy rainfall, with water backing up through the ground-floor toilet. Our CCTV survey revealed a partially collapsed clay pipe where it passed beneath the rear garden wall—a common failure point where ground movement at structural boundaries stresses aging pipework. Additionally, river silt had accumulated in the lower section of the drain, reducing capacity by approximately 30%. We cleared the silt with high-pressure jetting and installed a structural reline over the collapsed section. Given the property's proximity to the River Esk, we also recommended a non-return valve to protect against river-related backup. Result: fully restored drainage with protection against both pipe failure and river flooding. Tip: Properties near the River Esk in East Kilbride should consider non-return valves as standard protection—they are a modest investment that prevents costly flood damage.`
  },

  motherwell: {
    landmarks: [
      "Motherwell Country Park",
      "Motherwell Palace",
      "River North Esk",
      "River South Esk",
      "Motherwell High Street",
      "St Nicholas Buccleuch Parish Church",
      "Ironmills Park",
      "Motherwell Corn Exchange",
      "King's Park",
      "Woodburn",
      "Motherwell Campus"
    ],
    drainageProfile: `Motherwell sits at the confluence of the River North Esk and the River South Esk, a geographical fact that profoundly shapes the town's drainage character. This Midlothian market town has a rich history as the estate town for Motherwell Palace, and its drainage infrastructure reflects centuries of development from a small agricultural settlement to a substantial commuter town serving Glasgow.

The river confluence creates the most significant drainage challenge in Motherwell. Properties in the lower-lying areas near the rivers—particularly around Ironmills Park, the Eskbank area, and stretches of the High Street—face genuine flood risk during heavy rainfall when both rivers are in spate. The combined flow of the North and South Esk can overwhelm local drainage infrastructure, and the town's combined sewer system can back up during these events. SEPA (the Scottish Environment Protection Agency) has identified flood risk zones in Motherwell that property owners should be aware of.

The historic town centre around the High Street and the older properties near Motherwell Palace feature stone and clay drainage systems that reflect the town's long history. Some of the drainage serving properties along the High Street dates back to the 18th century, with later Victorian additions and modifications creating a layered system that can be difficult to map accurately. The Corn Exchange area and surrounding streets feature drainage that was designed for a market town's needs—including handling waste from livestock markets and small industries—creating an infrastructure legacy that modern residential use has inherited.

Motherwell's former mining heritage has left its mark underground. The town lies within the wider Midlothian coalfield, and while deep mining has long ceased, the legacy of subsidence and ground instability in some areas can affect drainage infrastructure. Pipes in former mining areas may experience movement and cracking that would not occur in geologically stable ground. Properties in areas with mining history should be particularly vigilant about drainage condition.

The Woodburn area and surrounding council and ex-council housing estates feature drainage from the mid-20th century onwards—typically a mix of clay and early plastic pipework that served public housing developments. These systems are generally adequate but approaching the age where maintenance becomes increasingly important. The housing density in these areas means shared drainage infrastructure is common.

Modern developments on the edges of Motherwell—including new housing around the bypass and toward Rutherglen—feature contemporary drainage systems but face the same challenge as other expanding towns: connecting new capacity to existing infrastructure that may already be near its limits.

The combination of river confluence flood risk, historic town centre infrastructure, mining legacy ground conditions, and expanding modern development makes Motherwell's drainage context varied and demanding. Property-specific assessment is essential for understanding individual drainage needs and risks.`,
    localFAQs: [
      {
        question: "How serious is flood risk in Motherwell?",
        answer: "Motherwell's position at the confluence of the North and South Esk rivers creates genuine flood risk, particularly in lower-lying areas near the rivers and around Ironmills Park. SEPA has identified flood risk zones in the town. During heavy rainfall, both rivers can rise rapidly, overwhelming local drainage and causing sewer backup. Property owners in riverside areas should check SEPA flood maps, maintain clear drainage, install backflow prevention where appropriate, and consider flood resilience measures for ground-floor and basement areas."
      },
      {
        question: "Does Motherwell's mining history affect drainage?",
        answer: "Yes. Motherwell lies within the Midlothian coalfield, and while deep mining has ceased, the legacy of ground movement and subsidence in some areas can crack or displace drainage pipes over time. If your property is in an area with mining history, regular CCTV surveys are particularly important to detect developing problems before they cause blockages or collapses. Your property's mining risk assessment—available from the Coal Authority—can help you understand the level of risk."
      },
      {
        question: "What should I know about drainage when buying an older Motherwell High Street property?",
        answer: "Older High Street properties may have drainage systems with multiple layers of modification spanning centuries. Original stone drainage channels may have been supplemented with Victorian clay pipes and later plastic additions. Understanding the full drainage configuration through professional CCTV survey is essential before purchase. Additionally, river proximity flood risk should be assessed, and any property with a basement or lower ground floor should be evaluated for backup vulnerability."
      }
    ],
    caseStudy: `Emergency call-out to a property in Eskbank during a heavy rainfall event: The homeowner reported water entering the ground floor through both the toilet and shower drain as the River North Esk rose rapidly. Our emergency response team found the property's drainage was being overwhelmed by river-influenced backup through the combined sewer system—a common occurrence in this riverside area during intense rainfall. After the immediate event, we returned to install a non-return valve on the main drain connection and performed a full CCTV survey. The survey revealed the clay drainage had cracked in two locations where it crossed ground that had settled—likely related to the area's mining legacy. We repaired these sections with structural relining and ensured the non-return valve provided ongoing protection against future river backup events. Result: comprehensive flood protection combining structural repair and backflow prevention. The homeowner reported no further issues during subsequent heavy rainfall events. Tip: Motherwell properties in the river confluence area should treat flood protection as a priority investment—combining non-return valves with drainage maintenance provides the most effective defence.`
  },

  hamilton: {
    landmarks: [
      "Hamilton Designer Outlet",
      "Almondvale Shopping Centre",
      "The Centre",
      "Hamilton FC Stadium",
      "Almond Valley Heritage Centre",
      "River Almond",
      "Howden Park Centre",
      "Deans Community High School",
      "Knightsridge",
      "Dedridge",
      "Eliburn",
      "Murieston"
    ],
    drainageProfile: `Hamilton is Scotland's largest new town, designated in 1962 and developed rapidly through the 1960s, 70s, and 80s to accommodate population overflow from Glasgow and Glasgow. This planned new-town origin gives Hamilton a drainage character fundamentally different from Glasgow's historic neighbourhoods—the infrastructure was designed from scratch to serve modern residential, commercial, and industrial needs. However, the rapid pace of development and the materials available at the time mean Hamilton's drainage systems are now reaching a critical age.

The earliest phases of development—in areas like Craigshill, Howden, and Ladywell—used drainage technology typical of the 1960s: pitch fibre pipes, early PVC, and clay systems. Pitch fibre pipes, widely used in British housing from the 1950s through the 1970s, are particularly problematic. These pipes, made from wood cellulose impregnated with coal tar, were cheap and easy to install but have a limited lifespan. After 40 to 60 years, pitch fibre pipes delaminate, blister internally, and lose their circular profile, causing restrictions and blockages. Many Hamilton properties from this era still rely on original pitch fibre drainage that is now overdue for replacement.

The planned layout of Hamilton—with its system of separated vehicle and pedestrian routes, large roundabouts, and neighbourhood villages—means drainage routing follows the town's master plan rather than organic development. This is generally advantageous, as pipe runs tend to be logical and accessible. However, the extensive use of open drainage channels, balancing ponds, and surface water management features means homeowners sometimes have drainage responsibilities beyond their immediate property boundary that they may not be aware of.

The River Almond flows through the Almond Valley at the heart of Hamilton, and properties in the Almond Valley corridor—including areas near Eliburn and Murieston—have flood risk considerations during heavy rainfall. The town's surface water drainage was designed to handle specific rainfall volumes, but climate change has increased the frequency of intense rainfall events that exceed original design parameters.

Later development phases through the 1980s and 1990s in areas like Murieston, Eliburn, and Dedridge used improved materials, but these systems are now themselves 30 to 40 years old and beginning to require attention. The most recent developments on Hamilton's periphery feature modern drainage to current standards, but connect to the town's existing network.

Hamilton's commercial and industrial areas—particularly around the Almondvale and Houston Industrial Estate—have distinct drainage requirements. Commercial kitchens, car washes, and industrial premises create specific drainage challenges including grease accumulation and chemical contamination that require specialist management.

Understanding Hamilton's new-town drainage context—particularly the prevalence of pitch fibre pipes in older areas, the planned drainage routing, and the River Almond flood risk—helps property owners implement appropriate maintenance strategies. The age profile of Hamilton's housing stock means many properties across the town will need drainage attention in the coming years as original systems reach the end of their designed lifespan.`,
    localFAQs: [
      {
        question: "What are pitch fibre pipes and why are they a problem in Hamilton?",
        answer: "Pitch fibre pipes were widely used in British housing construction from the 1950s through the 1970s, making them extremely common in Hamilton's earliest development areas like Craigshill, Howden, and Ladywell. Made from wood cellulose impregnated with coal tar pitch, these pipes were affordable and easy to install but have a limited lifespan of 40 to 60 years. They delaminate, blister internally, and lose their round shape over time, causing flow restrictions and blockages. If your Hamilton property dates from the 1960s or 70s and has never had drainage work, there is a high probability you have pitch fibre pipes that need assessment."
      },
      {
        question: "Is flooding a concern in Hamilton?",
        answer: "Hamilton's surface water drainage was designed as part of the new-town master plan, with balancing ponds and open channels managing runoff. However, the system was designed for historical rainfall patterns, and increasingly intense rainfall events can exceed its capacity. Properties near the River Almond corridor—around Eliburn and Murieston—have particular flood risk. Additionally, if surface water features like soakaways and drainage channels on your property are not maintained, they can fail during heavy rain. Regular maintenance of all drainage elements on your property is important."
      },
      {
        question: "Should I have my Hamilton property's drainage surveyed if there are no visible problems?",
        answer: "Yes, particularly if your property dates from the 1960s or 70s. Pitch fibre pipe deterioration is progressive—it often worsens significantly before causing visible symptoms. A CCTV survey can reveal internal blistering, delamination, and reduced pipe diameter before a complete blockage occurs. Early detection allows planned remediation rather than emergency repair, which is both less disruptive and more cost-effective. Properties from the 1980s onwards should also consider surveys as they approach 40 years of age."
      }
    ],
    caseStudy: `Call-out to a 1970s property in Craigshill: The homeowner reported recurring slow drainage and occasional gurgling sounds from the kitchen sink and downstairs toilet. Initial rodding provided temporary relief, but problems returned within weeks. Our CCTV survey revealed the cause—the property's original pitch fibre drainage, now over 50 years old, had severely delaminated. The internal surface had blistered and collapsed in multiple locations, reducing the effective pipe diameter by over 50% in the worst section. This is a textbook pitch fibre failure pattern common across Hamilton's earliest developments. We recommended and installed structural pipe relining throughout the affected 22-metre main drain run, restoring full bore capacity with a modern internal lining that carries a 10-year warranty. Result: permanently resolved the recurring blockage issue and future-proofed the drainage against further pitch fibre deterioration. Tip: If your Hamilton property was built in the 1960s or 70s and you experience recurring slow drainage, pitch fibre pipe failure is the most likely cause—CCTV survey will confirm the diagnosis quickly.`
  },

  lanark: {
    landmarks: [
      "Glasgow Zoo",
      "Lanark Hill",
      "Lanark Old Parish Church",
      "Lanark High Street",
      "St Margaret's Park",
      "Murrayfield Stadium",
      "Ravelston",
      "Clermiston",
      "East Craigs",
      "Gyle Shopping Centre",
      "Glasgow Gateway Station",
      "Carrick Knowe"
    ],
    drainageProfile: `Lanark is one of Glasgow's most established western suburbs, with a character shaped by its position at the foot of Lanark Hill and its evolution from an independent village to an integral part of the city. The area's drainage profile reflects this layered history—from the medieval core around Lanark High Street and the Old Parish Church, through substantial 1930s suburban development, to post-war housing estates and modern commercial developments around the Gyle.

Lanark Hill, a prominent geological feature rising to 161 metres, dominates the area and profoundly influences drainage patterns. Surface water from the hill's slopes drains toward properties at lower elevations, and properties on the hillside or at its foot can experience significant surface water flow during heavy rainfall. The hill's geology—a mixture of dolerite, sandstone, and glacial deposits—creates variable ground conditions that affect both surface water behaviour and underground drainage stability.

The 1930s housing that characterises much of Lanark—substantial semi-detached and detached houses along streets like Lanark Road, Kaimes Road, and around Carrick Knowe—features drainage systems now approaching 90 years of age. These properties typically use clay drainage pipes with cement-jointed connections, and while the construction quality was generally good for its era, the combination of age, ground movement, and tree root pressure from the established gardens that characterise this area creates recurring maintenance demands. The mature trees in Lanark's gardens and along its streets—including many specimen trees in larger properties near the hill—are a persistent source of root intrusion into aging clay pipes.

Glasgow Zoo, one of Lanark's most prominent landmarks, sits on the slopes of Lanark Hill. The surrounding residential streets serve substantial family homes that have often been extended and modified over the decades, adding bathrooms, utility rooms, and kitchen extensions that increase drainage demand beyond original design capacity. Understanding whether your property's drainage has been properly upgraded to match its current configuration is important.

The post-war housing developments in Clermiston and East Craigs feature different drainage infrastructure—typically a mix of clay and early PVC systems serving more uniform housing types. These areas were developed with planned drainage routing, but the systems are now 50 to 70 years old and beginning to require attention.

The Gyle area and Glasgow Park represent Lanark's modern commercial character, with drainage designed for retail, office, and transport infrastructure. Glasgow Gateway Station and the surrounding development have contemporary drainage, but connection to the wider network serving older Lanark can create transition challenges.

Lanark's drainage needs reflect its suburban maturity—properties with established gardens, aging but well-built infrastructure, and increasing demands from modern living. Regular maintenance and early intervention prevent the costly emergency situations that arise when 90-year-old drainage systems are pushed beyond their current capacity.`,
    localFAQs: [
      {
        question: "Why is tree root intrusion so common in Lanark properties?",
        answer: "Lanark is characterised by mature, well-established gardens—many properties have had the same trees and hedging for 70 or 80 years since the 1930s suburban development. These mature root systems actively seek out moisture in underground pipes, and the clay drainage common in Lanark properties provides exactly that through aging joints and hairline cracks. Tree roots can occupy significant portions of pipe diameter before causing noticeable blockage symptoms. Preventative root cutting and pipe relining are the most effective long-term solutions."
      },
      {
        question: "How does Lanark Hill affect drainage in the area?",
        answer: "Lanark Hill's slopes channel surface water toward properties at lower elevations, particularly during heavy rainfall. Properties at the base of the hill or on lower slopes can experience significant surface water flow from above. Ensuring proper surface water management—clear gutters, functional drains, and appropriate garden grading to direct water away from the property—is particularly important for properties in the hill's drainage catchment. Some properties benefit from French drains or other subsurface water management solutions."
      },
      {
        question: "Should I worry about drainage in a 1930s Lanark property?",
        answer: "Properties from the 1930s have clay drainage systems approaching 90 years of age. While the construction quality was generally good, these systems are now in their later life. Common issues include joint deterioration, hairline cracking from ground movement, tree root intrusion, and reduced capacity due to internal scaling and deposits. A professional CCTV survey provides clear information about your specific drainage condition and helps plan maintenance before problems develop into emergencies."
      }
    ],
    caseStudy: `Recent call-out to a 1930s semi-detached house near Glasgow Zoo: The homeowner reported a persistently damp area in the front garden and slow drainage from the downstairs bathroom. Our CCTV survey revealed a classic Lanark problem—mature tree roots from a large sycamore in the front garden had infiltrated the main clay drain through multiple deteriorated joints, creating a root mass that occupied approximately 45% of the pipe diameter. Additionally, the root intrusion had caused a partial joint displacement, allowing groundwater to seep into the pipe and saturate the surrounding soil—explaining the persistent damp patch. We cleared the root mass with high-pressure jetting, then recommended structural relining of the affected 14-metre section to prevent regrowth. The homeowner also opted for a root barrier installation between the tree and the drain line. Result: resolved both the drainage blockage and the garden damp issue, with long-term protection against root re-intrusion. Tip: Lanark properties with mature trees within 5 metres of drain lines should have regular CCTV checks—root intrusion is almost inevitable and much easier to manage early than after it causes serious blockage or pipe damage.`
  },

  cumbernauld: {
    landmarks: [
      "Cumbernauld Road",
      "Cumbernauld Clock",
      "Holy Corner",
      "Churchhill",
      "The Dominion Cinema",
      "Braid Hills",
      "Hermitage of Braid",
      "Blackford Hill",
      "Royal Glasgow Hospital",
      "Craighouse",
      "Cumbernauld Cemetery",
      "Comiston Road"
    ],
    drainageProfile: `Cumbernauld is one of Glasgow's most desirable residential neighbourhoods, renowned for its handsome Victorian and Edwardian villas, tree-lined streets, and proximity to the green spaces of the Braid Hills and Hermitage of Braid. This affluent suburb's drainage challenges are distinctive and closely tied to the character that makes it so sought-after—large period properties, extensive mature gardens, and underlying geology that combines Glasgow's volcanic heritage with the glacial deposits of the Braid valley.

The Victorian and Edwardian villas that line Cumbernauld Road, Cluny Gardens, Midmar Gardens, and surrounding streets were built for Glasgow's prosperous middle classes in the late 19th and early 20th centuries. These substantial properties—many now divided into flats—feature complex original drainage systems with long pipe runs from the house to the street sewer. The clay drainage is typically 100 to 130 years old, and the extensive grounds that characterise Cumbernauld properties mean pipe runs can be 20 to 30 metres or more, significantly longer than in more compact terraced housing elsewhere in Glasgow.

Tree root intrusion is arguably Cumbernauld's single greatest drainage challenge. The neighbourhood's mature gardens contain specimen trees, established hedging, and extensive planting that create dense root networks in the soil. These roots relentlessly seek out the moisture in aging clay pipes, infiltrating through deteriorated joints and hairline cracks. Properties near the Hermitage of Braid and backing onto Blackford Hill face additional pressure from roots extending from public woodland into private drainage systems. The combination of long pipe runs and abundant root pressure means Cumbernauld properties are disproportionately affected by root-related drainage issues compared to Glasgow as a whole.

The topography around Cumbernauld creates natural drainage patterns that affect individual properties differently. The Braid Hills rise to the south, and properties on the slopes or at the foot of these hills can experience significant surface water flow. The Braid Burn, which flows through the Hermitage of Braid before joining the wider drainage network, influences ground water levels in the surrounding area. Properties closest to the burn corridor may experience higher subsurface moisture than those at elevation.

Many of Cumbernauld's large villas have been converted into multiple flats, creating shared drainage infrastructure that serves several households. These conversions—common since the mid-20th century—added drainage load to systems designed for single households. Shared vertical drainage stacks, shared underground runs, and the coordination challenges of multiple-owner maintenance create specific issues for Cumbernauld flat owners.

Holy Corner—the busy junction where Cumbernauld Road meets Colinton Road, Chamberlain Road, and Bruntsfield Place—marks the transition between different drainage catchments. Commercial properties along Cumbernauld Road, including restaurants and cafes, create localised grease management challenges alongside the residential drainage demands.

Cumbernauld's premium property values make drainage maintenance not just a practical concern but a financial one. Well-maintained drainage protects property investment, prevents damp-related damage to period interiors, and avoids the significant costs of emergency repair in properties where excavation through stone-walled gardens and established landscaping is expensive. Preventative maintenance is particularly cost-effective here, where the consequences of failure are high.`,
    localFAQs: [
      {
        question: "Why are Cumbernauld properties particularly affected by tree root intrusion?",
        answer: "Cumbernauld's character—large Victorian and Edwardian properties with extensive mature gardens—creates ideal conditions for root intrusion. Long clay pipe runs of 20 metres or more pass through garden soil rich in tree roots. Specimen trees, mature hedging, and established planting create dense root networks that actively seek out pipe moisture. Properties backing onto the Hermitage of Braid or Blackford Hill face additional root pressure from public woodland. The combination of pipe age, pipe length, and root density makes Cumbernauld one of the most root-affected areas in Glasgow."
      },
      {
        question: "How should converted Cumbernauld villas manage shared drainage?",
        answer: "Many Cumbernauld villas now contain multiple flats sharing original drainage infrastructure designed for a single household. Effective management requires clear understanding of the drainage layout through professional CCTV survey, written maintenance agreements between flat owners, and a shared maintenance fund for professional cleaning and repairs. The cost of a shared annual jetting programme is modest compared to the emergency repair costs that shared neglect can create."
      },
      {
        question: "What drainage considerations apply to properties near the Braid Hills?",
        answer: "Properties near the Braid Hills face surface water from hillside runoff during heavy rainfall, potentially elevated ground water levels from the Braid Burn corridor, and root pressure from both private gardens and public woodland. Maintaining clear surface water drainage around the property, ensuring gutters and downpipes function properly, and proactive management of underground drainage are all important. Properties at the foot of slopes should ensure garden grading directs water away from the building."
      }
    ],
    caseStudy: `Call-out to a converted Victorian villa on Cluny Gardens: The ground-floor flat owner reported persistent slow drainage in the kitchen and bathroom, with occasional overflow from the external manhole during heavy rain. The property—a substantial four-flat conversion of an original family villa—featured a 28-metre main drain run from the house to the street sewer, passing through a mature garden with several large trees. Our CCTV survey revealed extensive tree root intrusion at five separate joint locations, with the worst point showing approximately 55% pipe diameter reduction. Accumulated fat deposits from the shared kitchen drainage had combined with the root intrusion to create near-complete blockages at two points. We performed staged high-pressure jetting to clear roots and fat deposits throughout the full run, then recommended structural relining of three critical sections totalling 16 metres. All four flat owners contributed to the cost through their shared maintenance arrangement. Result: fully restored drainage function across all four flats, with relining providing long-term protection against root re-intrusion. A subsequent annual jetting programme was established. Tip: Cumbernauld properties with shared drainage should establish maintenance agreements and budget for annual professional jetting—shared preventative maintenance is far cheaper than shared emergency repairs.`
  },

  coatbridge: {
    landmarks: [
      "Coatbridge Beach",
      "Coatbridge Promenade",
      "Coatbridge High Street",
      "Coatbridge Swim Centre",
      "Figgate Park",
      "Joppa",
      "Brighton Place",
      "Bath Street",
      "Coatbridge Tower",
      "Brunstane",
      "Coatbridge Golf Course",
      "King's Road"
    ],
    drainageProfile: `Coatbridge, Glasgow's seaside suburb, presents drainage challenges shaped by its coastal location, Victorian and Edwardian housing stock, and the particular geological conditions of building on sandy ground near the Firth of Forth. Once a fashionable Victorian resort, Coatbridge retains much of its original character—elegant terraces and villas line the promenade and surrounding streets, with the sandy beach and sea front creating a distinctive coastal environment that directly influences the area's drainage infrastructure.

The sandy and silty subsoil beneath Coatbridge is perhaps the most significant factor in local drainage. Unlike the volcanic rock and clay that characterises much of Glasgow, Coatbridge's ground is composed of marine and glacial sand deposits. While this sand drains surface water reasonably well in dry conditions, it creates challenges for underground drainage—pipes can shift and settle in sandy ground more easily than in firmer soils, leading to joint displacement and alignment issues over time. The relatively high water table in this coastal area means subsurface moisture is a constant factor, and drainage pipes effectively sit in damp ground that accelerates corrosion of cast iron components.

The Victorian and Edwardian properties along the promenade, Bath Street, Brighton Place, and surrounding streets were built during Coatbridge's heyday as a seaside resort. Many of these properties were designed as guest houses or holiday accommodation, with drainage configurations that reflected this commercial use. Conversions to permanent residential use have modified demands on these systems. The salt air from the sea accelerates corrosion of exposed metalwork including cast iron drainage components, vent pipes, and external soil stacks. Properties directly facing the sea front experience the most severe salt exposure.

Joppa, at the eastern end of Coatbridge, features a mix of substantial Victorian villas and more modest properties. The drainage here serves a quieter residential area, but the same coastal conditions apply—sandy ground, salt air, and proximity to the sea influence drainage behaviour and infrastructure longevity.

Surface water management is particularly important in Coatbridge. The promenade area receives significant surface water during storms, and the interaction between sea spray, rainfall, and the town's drainage network can create localised flooding. Properties with basements or lower ground floors along the seafront are vulnerable during combined heavy rain and high tide events, when the drainage system's ability to discharge to sea is temporarily compromised.

The Figgate Burn, which flows through Figgate Park before reaching the sea, influences ground water conditions in the surrounding area. Properties near the burn corridor can experience elevated subsurface moisture, particularly during wet periods.

Modern developments in the Brunstane area, east of traditional Coatbridge, feature contemporary drainage but connect to the wider coastal drainage network. The transition between modern and Victorian systems creates the same challenges seen across Glasgow where new development meets established infrastructure.

Coatbridge's distinctive coastal character demands drainage expertise that understands sand-ground pipe behaviour, salt corrosion, tidal influence, and the particular challenges of maintaining Victorian drainage infrastructure in a marine environment.`,
    localFAQs: [
      {
        question: "How does Coatbridge's coastal location affect drainage?",
        answer: "Coatbridge's sandy subsoil allows pipes to shift and settle more easily than in firmer ground, causing joint displacement over time. The high coastal water table means drainage pipes sit in damp ground, accelerating corrosion of cast iron components. Salt air from the sea corrodes exposed metalwork including vent pipes and external soil stacks. During high tides combined with heavy rainfall, the drainage system's ability to discharge to sea can be temporarily compromised, creating backup risk for lower-lying properties. These coastal factors mean Coatbridge drainage requires more frequent maintenance than equivalent inland properties."
      },
      {
        question: "What drainage issues are common in Coatbridge's Victorian seafront properties?",
        answer: "Many seafront properties were originally built as guest houses with drainage configured for commercial use. Conversion to permanent residential use has changed demand patterns. The combination of age (100+ years), salt corrosion, sandy ground settlement, and modified use creates a challenging drainage environment. Common issues include joint displacement in sandy ground, corroded cast iron components, and capacity issues where original drainage was designed for different use patterns. Regular professional survey and maintenance are essential for these properties."
      },
      {
        question: "Should Coatbridge properties with basements be concerned about flooding?",
        answer: "Yes, particularly properties along the seafront or at lower elevations. The combination of high water table, potential tidal influence, and storm surge risk creates genuine flood vulnerability for below-ground spaces. Basement and lower ground floor areas in Coatbridge properties should have adequate waterproofing, functioning sump pumps where appropriate, and backflow prevention on drainage connections. Monitoring conditions during combined heavy rain and high tide events is particularly important."
      }
    ],
    caseStudy: `Recent call-out to a Victorian terrace on Bath Street: The homeowner reported a persistent sewage smell in the ground-floor hallway and intermittent slow drainage in the rear extension bathroom. Our CCTV survey revealed a problem characteristic of Coatbridge's sandy ground—the main clay drain had developed a visible sag (or belly) over a 4-metre section where the sandy subsoil had settled unevenly. This low point was collecting waste and water, creating the odour issue, and restricting flow during periods of heavy use. Additionally, the cast iron soil stack showed significant salt corrosion at the external section facing the sea. We excavated the sagging section—which was straightforward in Coatbridge's sandy soil—re-laid the pipe on a properly compacted bed with additional support, and replaced the corroded section of soil stack with modern PVC. Result: eliminated the odour issue and restored proper drainage flow. Tip: Coatbridge properties should be aware that sandy ground settlement can create pipe sags over time—if you notice new drainage odours or intermittent slow drainage, a CCTV survey will quickly identify whether ground movement is the cause.`
  },

  rutherglen: {
    landmarks: [
      "Rutherglen High Street",
      "Polton",
      "Lasswade",
      "River North Esk",
      "Broomieknowe Golf Club",
      "Poltonhall Industrial Estate",
      "King George V Park",
      "Rutherglen Leisure Centre",
      "Cockpen",
      "Hopefield",
      "Eldindean"
    ],
    drainageProfile: `Rutherglen is a Midlothian town whose drainage character is shaped by two defining historical forces: its coal mining heritage and its evolution from a small village into a substantial commuter settlement serving Glasgow. Understanding both these influences is essential for property owners managing drainage in this area, where the underground legacy of mining sits alongside the infrastructure challenges of rapid 20th-century expansion.

The mining heritage is Rutherglen's most significant drainage consideration. The town sits within the Midlothian coalfield, and deep mining activity—concentrated in the 19th and early 20th centuries—has left a legacy of underground voids, subsidence risk, and disturbed ground conditions. While the mines themselves have long closed, the ground instability they created continues to affect surface infrastructure including drainage. Pipes in areas with mining subsidence history can experience gradual movement, cracking, and joint displacement as the ground adjusts over decades. Properties in Rutherglen's older areas—around the High Street, Polton, and Lasswade—may be particularly affected where mining was concentrated closest to the surface.

Polton and Lasswade, the historic villages now effectively absorbed into greater Rutherglen, sit in the valley of the River North Esk. These valley-floor locations face flood risk during heavy rainfall when the river rises, and the aging drainage infrastructure serving these older communities is vulnerable to both river-related backup and the general challenges of age. The stone cottages and older properties in Lasswade village feature drainage systems that may date back 150 years or more, with modifications and additions creating complex, partially documented networks.

The mid-20th century council housing that expanded Rutherglen significantly—in areas like Hopefield and Eldindean—features drainage from the 1950s through the 1970s. Like Hamilton's early developments, many of these properties used pitch fibre pipes that are now reaching or exceeding their designed lifespan. Clay drainage from this era is also showing its age, with joint deterioration and ground movement creating increasing maintenance demands.

Modern housing development on Rutherglen's edges—particularly the substantial new estates toward Eskbank and along the bypass corridor—features contemporary drainage systems. However, the rapid pace of development has increased impermeable surface area across the town, potentially altering surface water drainage patterns and increasing flow into the combined sewer system during heavy rainfall.

The River North Esk valley influences ground water conditions across the lower-lying parts of Rutherglen and particularly in Polton and Lasswade. Properties in the valley corridor experience higher subsurface moisture levels than those at elevation, affecting both drainage pipe longevity and the risk of damp-related problems.

Rutherglen's drainage context combines mining legacy ground instability, aging mid-century infrastructure, river valley flood risk, and the pressures of rapid modern expansion. Property owners benefit from understanding which of these factors most affects their specific location, and from professional assessment that accounts for Rutherglen's particular underground heritage.`,
    localFAQs: [
      {
        question: "How does Rutherglen's mining history affect my property's drainage?",
        answer: "The Midlothian coalfield extends beneath Rutherglen, and while deep mining has long ceased, the underground legacy continues to affect surface infrastructure. Ground subsidence and movement from historic mining can crack, displace, or misalign drainage pipes over time. This is a gradual process, so problems may develop slowly before becoming apparent. Properties in areas with known mining history should have regular CCTV drainage surveys to detect developing issues early. The Coal Authority can provide information about mining risk for your specific property."
      },
      {
        question: "What drainage issues are common in Rutherglen's older housing estates?",
        answer: "Housing estates from the 1950s to 1970s commonly feature pitch fibre or clay drainage that is now 50 to 70 years old. Pitch fibre pipes delaminate and collapse internally over time, while clay pipes develop joint failures and cracks. Combined with potential mining-related ground movement, these aging systems require increasing maintenance attention. If your property dates from this era and has never had drainage work, a professional survey is strongly recommended to assess the current condition and plan any necessary remediation."
      },
      {
        question: "Is there flood risk in Polton and Lasswade?",
        answer: "Yes, properties in the River North Esk valley—particularly in Polton and lower Lasswade—face genuine flood risk during heavy rainfall when the river rises. The valley floor location combines river flood risk with the natural collection of surface water from surrounding higher ground. Property owners in these areas should check SEPA flood maps for their specific location, maintain clear surface drainage, consider non-return valves on drainage connections, and be aware of flood warning services available for the North Esk catchment."
      }
    ],
    caseStudy: `Call-out to a 1960s semi-detached property in Hopefield: The homeowner reported that both the kitchen and bathroom drains had become progressively slower over several months, with occasional complete blockages requiring plunging. Our CCTV survey revealed two concurrent problems typical of Rutherglen's drainage environment. First, the property's original pitch fibre drainage—now over 60 years old—had delaminated internally, with blistered material reducing the effective pipe diameter by approximately 40%. Second, the main drain run had developed a slight but significant displacement at a joint, consistent with gradual ground movement from the area's mining legacy. The ground movement had created a step in the pipe that was trapping debris and accelerating the blockage cycle. We recommended a comprehensive solution: high-pressure jetting to clear accumulated material, followed by structural relining of the entire 20-metre main drain run. The relining addressed both the pitch fibre deterioration and bridged the displaced joint, creating a new continuous pipe within the old one. Result: permanently resolved the progressive blockage issue and future-proofed the drainage against both ongoing pitch fibre deterioration and any further ground movement. Tip: Rutherglen properties from the 1950s to 70s that experience gradually worsening drainage should suspect pitch fibre failure and ground movement—these two factors often work together and CCTV survey will quickly reveal both.`
  }
};

export function getLocationHubContent(slug: string): LocationHubContent | undefined {
  return LOCATION_HUB_CONTENT[slug];
}
