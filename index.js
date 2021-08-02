const findColor = name => {
  const found = {
    red: '#ff4444',
    blue: '#3bc944',
    yellow: '#124123'
  }[name];
  return found ? Right(found) : Left('None');
}

const Right = x =>
({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  toString: x => `Right(${x})`
})

const Left = x =>
({
  chain: f => f(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  toString: x => `Left(${x})`
})

const color = findColor('redasd');

color
  .map(x => x.toUpperCase())
  .fold(x => console.log(`Error happened: ${x}`),
        x => console.log(`Success: ${x}`));

const fromNullable = x => x != null ? Right(x) : Left(x);

const findColor_ = name => fromNullable({ red: 'red', blue: 'blue' }[name]);

findColor_('red').fold(x => console.error(`Error ${x}`), x => console.log(x));
findColor_('redaa').fold(x => console.error(`Error: ${x}`), x => console.log(x));



