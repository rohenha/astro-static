import { slugify } from './tools'

export const getBeers = async () => {
  const cache = './.cache';
  const file = `${cache}/beers.json`

  if (!fs.existsSync(cache)) {
    fs.mkdirSync(cache, { recursive: true });
  }

  if (fs.existsSync(file)) {
    // Read data from file
    const raw = fs.readFileSync(file);
    return JSON.parse(raw);
  }

  const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=35')
  const beers = await response.json()

  beers.map((beer) => {
    beer.slug = slugify(beer.name)
  })

  // Write beers to "caching" file
  fs.writeFileSync(file, JSON.stringify(beers));

  return beers;

}