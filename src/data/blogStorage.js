const defaultPosts = [
  {
    id: 981110,
    title: `SALAD RECIPES`,
    category: 'Food',
    content: `This stunning Fall harvest salad features
     seasonal ingredients and is topped with a delicious 
     maple tahini dressing. If you’re looking for a
      special salad that’s easy enough for everyday but also a beautiful addition to holiday meals, this is it! This salad features kale, Brussels sprouts, cranberries, butternut squash, beet and apple, all the best Fall and Winter ingredients. This delicious combination is even better drizzled with the sweet and tangy maple tahini dressing. Whether you make this for a healthy meal prep or bring it along to a holiday gathering, it’s a standout salad that’s always a hit! HIGHLIGHTS Vegan. Gluten-free. Great for Thanksgiving and Christmas. Nutritious. Can be a meal or side-dish. Versatile dressing you can use with other dishes. Easy to customize.`,
    like: 0,
  },
  {
    id: 985674,
    title: `Wimbledon 2023: A summer storm`,
    category: 'Sports',
    content: `Have you noticed that in the past dozen years only a handful of players have been the Grand Slam champions apart from the famed trio of Federer, Nadal and Djokovic in men’s tennis; the luckier ones Andy Murray having won two and Stan Wawrinka three respectively and a certain Dominic Thiem and Medvedev being the other two solitary winners. The lone exception being Andy Murray who coveted the Wimbledon trophy not once but twice in 2013 and 2016. Incidentally, none of these players was ever able to win any back to back titles in Grand Slams for such was the supremacy and sheer domination of the BIG THREE. Enters Prince Carlos Alcaraz in his last of his teens to clinch the US Open in 2022 and the sport of royalty witnessed the advent of world’s youngest ranked ATP No1 player go on to vanquish a seasoned pro in a cliff hanger five- setter at SW19 for the Wimbledon title. The ultimate match summary for the game’s aficionados was 168-166 points in favour of the young Spaniard and eventual winner. “So close” as many pundits of the game would de-cry of the centre-court duel which lasted 4 hours and 42 minutes. But then the Spaniard did announce his proud arrival to the world’s big stage for everyone else to take note of and heralding the possible change of guard in men’s tennis. That the challenger wanted to convey a message to the champion became evident from the moment he lost the first set. Alcaraz was by far more aggressive of the two and was away on the attack right from the opening set. That he made more unforced errors, lost more break and net points even serving more double faults clearly demonstrates the mindset of the young Spaniard whose superior serve percentage and winners took the match away down the stretch when it mattered from the distraught Serb Novak Djokovic.`,
    like: 0,
  }
]

export const saveBlogsToLocalStorage = (blogs) => {
  localStorage.setItem('blogs', JSON.stringify(blogs));
};

export const getBlogsFromStorage = () => {
    const blogJSON = localStorage.getItem('blogs');
    return blogJSON ? JSON.parse(blogJSON): defaultPosts;
};