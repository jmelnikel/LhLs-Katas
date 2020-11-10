// Bouncy Castles - Volumes of Shapes
// Use the functions below to calculate volume of objects (sphere, cone, and prism) and total them together with the totalVolume function below.

// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = radius => {
  return ((4 / 3) * PI * (radius * radius * radius));
};
console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) => {
  return PI * (radius * radius) * (height / 3);
};
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) => height * width * depth;
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = solids => {
  let volume = 0;
  for (const solid of solids) {
    if (solid.type === 'sphere') {
      volume += sphereVolume(solid.radius);
    } else if (solid.type === 'cone') {
      volume += coneVolume(solid.radius, solid.height);
    } else {
      volume += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return volume;
};

const largeSphere = {
  type: 'sphere',
  radius: 40
};

const smallSphere = {
  type: 'sphere',
  radius: 10
};

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
};

const duck = [
  largeSphere,
  smallSphere,
  cone
];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);