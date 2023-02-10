export default function readItems() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() <= 0.5
        ? resolve([
          { id: 1, name: 'Harry Houdini' },
          { id: 2, name: 'Dorothy Dietrich' },
          { id: 3, name: 'Criss Angel' },
          { id: 4, name: 'Dean Gunnarson' },
          { id: 5, name: 'Robert Gallup' }
        ])
        : reject(new Error(`It's just bad luck, ${name}.`));
    }, 2000);
  });
}
