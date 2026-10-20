/**
 * Every part of New York State, grouped by the state's ten official regions.
 * All 62 counties are listed, with well-known cities and towns in each region.
 * Used on the Areas Served page, in search-engine data, and in /llms.txt.
 */
export const nyRegions = [
  {
    name: "New York City",
    counties: ["New York (Manhattan)", "Kings (Brooklyn)", "Queens", "Bronx", "Richmond (Staten Island)"],
    places: ["Manhattan", "Brooklyn", "Queens", "the Bronx", "Staten Island"],
  },
  {
    name: "Long Island",
    counties: ["Nassau", "Suffolk"],
    places: ["Garden City", "Great Neck", "Hempstead", "Huntington", "Smithtown", "Port Jefferson", "the Hamptons"],
  },
  {
    name: "Mid-Hudson (including Westchester)",
    counties: ["Westchester", "Rockland", "Putnam", "Dutchess", "Orange", "Ulster", "Sullivan"],
    places: ["White Plains", "Scarsdale", "Yonkers", "New Rochelle", "Rye", "Nyack", "Poughkeepsie", "Beacon", "Newburgh", "Kingston", "New Paltz"],
  },
  {
    name: "Capital Region",
    counties: ["Albany", "Rensselaer", "Schenectady", "Saratoga", "Warren", "Washington", "Columbia", "Greene"],
    places: ["Albany", "Troy", "Schenectady", "Saratoga Springs", "Glens Falls", "Hudson"],
  },
  {
    name: "Central New York",
    counties: ["Onondaga", "Cayuga", "Cortland", "Madison", "Oswego"],
    places: ["Syracuse", "Auburn", "Cortland", "Oswego", "Cazenovia"],
  },
  {
    name: "Mohawk Valley",
    counties: ["Oneida", "Herkimer", "Fulton", "Montgomery", "Otsego", "Schoharie"],
    places: ["Utica", "Rome", "Cooperstown", "Oneonta", "Amsterdam"],
  },
  {
    name: "North Country",
    counties: ["Clinton", "Essex", "Franklin", "Hamilton", "Jefferson", "Lewis", "St. Lawrence"],
    places: ["Plattsburgh", "Watertown", "Lake Placid", "Saranac Lake", "Potsdam", "Canton"],
  },
  {
    name: "Southern Tier",
    counties: ["Broome", "Chemung", "Chenango", "Delaware", "Schuyler", "Steuben", "Tioga", "Tompkins"],
    places: ["Binghamton", "Ithaca", "Elmira", "Corning", "Norwich"],
  },
  {
    name: "Finger Lakes",
    counties: ["Monroe", "Genesee", "Livingston", "Ontario", "Orleans", "Seneca", "Wayne", "Wyoming", "Yates"],
    places: ["Rochester", "Pittsford", "Canandaigua", "Geneva", "Batavia"],
  },
  {
    name: "Western New York",
    counties: ["Erie", "Niagara", "Chautauqua", "Cattaraugus", "Allegany"],
    places: ["Buffalo", "Amherst", "Niagara Falls", "Jamestown", "Olean"],
  },
] as const;

/** County names without the borough notes, e.g. "New York", "Kings". */
export const nyCounties = nyRegions.flatMap((r) => r.counties.map((c) => c.replace(/ \(.*\)$/, "")));
