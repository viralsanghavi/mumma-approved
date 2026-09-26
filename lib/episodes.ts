export type Topic = 'Food & Nutrition' | 'Emotions & Behaviour' | 'School & Learning' | 'Mum Life'

export type Episode = {
  id: string // YouTube video id
  title: string
  guest?: string
  topic: Topic
}

export const TOPICS: Topic[] = ['Food & Nutrition', 'Emotions & Behaviour', 'School & Learning', 'Mum Life']

export const YOUTUBE_CHANNEL = 'https://www.youtube.com/@MummaApproved'
export const SILENT_ROOM_FORM =
  'https://docs.google.com/forms/d/e/1FAIpQLScm6vKsk_X_mOtqRwfDNY3mrILMn02PokUx46bAK9qwAqJKjw/viewform'

export const youtubeUrl = (id: string) => `https://youtu.be/${id}`
export const thumbnailUrl = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

/** Newest first. The first entry is featured as the latest episode. */
export const EPISODES: Episode[] = [
  { id: '9wO4jl55OuU', title: 'Decoding and simplifying what healthy eating is for our kids', guest: 'Avantii Deshpande & Shriya Wadhwa', topic: 'Food & Nutrition' },
  { id: 'EiMqf4BXgp8', title: 'We might be going wrong at the very start of starting solids', guest: 'Sanchita Daswani', topic: 'Food & Nutrition' },
  { id: 'gYYNTHkLWjQ', title: "Let's talk about the food dilemma", guest: 'NutriBurp', topic: 'Food & Nutrition' },
  { id: 'bMC4A-cWjAM', title: 'Stop trying all your old hacks to pack in that nutrition — try this instead', topic: 'Food & Nutrition' },
  { id: 'VLxsTB_Jg8g', title: "Puberty isn't just mood swings — here's what kids face", guest: 'Charvi Bubna', topic: 'Emotions & Behaviour' },
  { id: 'om9qFm1d410', title: 'Phones, freedom, frustration: the truth you need', guest: 'Tejashri Acharya', topic: 'Emotions & Behaviour' },
  { id: 'hCDds3mVWu0', title: 'Is your child learning body shame from you? How to stop it', guest: 'Kripa Jalan', topic: 'Emotions & Behaviour' },
  { id: 'KBSlBQK4Egs', title: 'Fill the Yum Box with Mumma', guest: 'Anushka Mulchandani', topic: 'Food & Nutrition' },
  { id: 'MdTQnd2o2zE', title: 'Fill the Yum Box with Mumma — Episode 2', guest: 'Maia Sethna', topic: 'Food & Nutrition' },
  { id: 'zFmm3P3hvdk', title: 'Fill the Yum Box with Mumma — Episode 3', guest: 'Karishma Mehta', topic: 'Food & Nutrition' },
  { id: '6ptTKWeTGDI', title: "Manifestation in your mommy era? Here's how to ace it", guest: 'Khushbu Thadani', topic: 'Mum Life' },
  { id: 'ncXbBroqeQk', title: 'Could this be the missing link between you and your child?', guest: 'Karishma Shah', topic: 'Emotions & Behaviour' },
  { id: 'lhAsBiQn-ek', title: "The morning mistake 70% of parents don't realise — Part 2", guest: 'Karishma Shah', topic: 'Emotions & Behaviour' },
  { id: 'PTO8lwprQkk', title: 'Sleep training guilt, explained', guest: 'Bhakti Parikh', topic: 'Emotions & Behaviour' },
  { id: 'RUhVs206_-Y', title: "Can paleo work for Indian families? Here's the truth", guest: 'Shaana Levy-Bahl', topic: 'Food & Nutrition' },
  { id: 'J9R0V6IK4BQ', title: 'Too much screen time? Parents need to hear this', guest: 'Ruchira Darda', topic: 'Emotions & Behaviour' },
  { id: 'SdKb8mTY32A', title: 'What children inherit from their fathers', guest: 'Santosh Acharya', topic: 'Emotions & Behaviour' },
  { id: 'QhtDHyBZrE4', title: 'When did feeding our kids become so complicated?', topic: 'Food & Nutrition' },
  { id: 'nUcHHkCetb8', title: "What if school didn't start with marks… but with the child?", guest: 'Tridha School', topic: 'School & Learning' },
  { id: 'QQeXqUlTyXM', title: 'Are we preparing our children for marks… or for life? — Part 1', guest: 'JBCN School', topic: 'School & Learning' },
  { id: 'xqLVDvpP_Tg', title: "Is your child's education building emotional strength with academic skills? — Part 2", guest: 'JBCN School', topic: 'School & Learning' },
  { id: 'dTuy60o6fpA', title: "How early education can shape your child's future", guest: 'Dr. Alefia Poonawala', topic: 'School & Learning' },
  { id: 'q6iirRK6u8s', title: 'Avoid this biggest mistake while choosing a preschool', guest: 'Pooja Pillai', topic: 'School & Learning' },
  { id: 'rbxVBCAcpQw', title: "Your child isn't behind — Montessori explains why", guest: 'Aksheeta Selarka', topic: 'School & Learning' },
  { id: 'Hm1SLSQk3Qs', title: "Don't get fooled by clean beauty labels", guest: 'Dearist', topic: 'Mum Life' },
  { id: 'EBKbZClJ79w', title: 'You need proof even to be a good mother', guest: 'Aditi Mohoni', topic: 'Mum Life' },
  { id: 'cDkkROJ24sA', title: "Why most kids' nonfiction is boring — and how Zayn & Zoey fixed it", guest: 'Yuti', topic: 'School & Learning' },
]

export const LATEST_EPISODE = EPISODES[0]

export const INSTAGRAM = 'https://www.instagram.com/mummaapproved/'

export const SOCIALS = [
  { name: 'Instagram', url: INSTAGRAM },
  { name: 'YouTube', url: YOUTUBE_CHANNEL },
]

export const PLATFORMS = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/mummaapproved' },
  { name: 'Apple Podcasts', url: 'https://podcasts.apple.com/th/podcast/mumma-approved/id1827663192' },
  { name: 'YouTube', url: YOUTUBE_CHANNEL },
  { name: 'YouTube Music', url: 'https://music.youtube.com/playlist?list=PLRRHCbP-xx8M1aRXfxYf07Bk3p8PUJcxc&si=umCeSQTs4prNbudg' },
  { name: 'Amazon Music', url: 'https://music.amazon.com/podcasts/46788741-bca0-4f74-9853-946dc2b3bbdc/mumma-approved' },
]

/** Picks the next episode to suggest: same topic first, then the next newest overall. */
export function nextEpisode(current: Episode, watched: Set<string>): Episode | undefined {
  const unwatched = EPISODES.filter((e) => e.id !== current.id && !watched.has(e.id))
  const pool = unwatched.length ? unwatched : EPISODES.filter((e) => e.id !== current.id)
  return pool.find((e) => e.topic === current.topic) ?? pool[0]
}
