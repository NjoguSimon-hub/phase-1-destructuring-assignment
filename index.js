// 1) String: uses destructuring to declare five animal sounds
const animalSounds = "moo neigh baa oink cluck";
const [moo, neigh, baa, oink, cluck] = animalSounds.split("");

// 2) String: uses destructuring to declare the four traditional animal names
const animals = "cow horse sheep pig chicken";
const [cow, horse, sheep, pig] = animals.split(" ");

// 3) String: uses destructuring to declare the three traditional animal colors
const colors = "black white brown";
const [black, white, brown] = colors.split(" ");

// 4) Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// 5) Array: uses destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, , v] = rainbow; // skipping indigo

// 6) Array: uses destructuring to declare Indigo using indg
const [ , , , , , indg ] = rainbow;

// 7) Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const farmAnimals = {
  cow: 'moo',
  horse: 'neigh',
  sheep: 'baa',
  pig: 'oink',
  chicken: 'cluck'
};
const { cow: farmCow, horse: farmHorse, sheep: farmSheep, pig: farmPig, chicken: farmChicken } = farmAnimals;

// 8) Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const muppet = {
  name: 'Kermit',
  color: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};

const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  job,
  partner
} = muppet;








// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner