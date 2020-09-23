import { pluralize, nullableText, downTo } from './helpers';


const Bottles = class {
  
  constructor() {}
  verse(numberOfBottles) {
    const bottlesRemaining = this.depleteBottles(numberOfBottles, 1);
    // numberOfBottles
    const numberOfBottlesOnTheWallVerse = `${nullableText(numberOfBottles, `${numberOfBottles}`, 'No more')} bottle${pluralize(numberOfBottles)} of beer on the wall, `;
    const numberOfBottlesVerse = `${nullableText(numberOfBottles, `${numberOfBottles}`, 'no more')} bottle${pluralize(numberOfBottles)} of beer.\n`;
    let numberOfBottlesToTake = '';
    if (bottlesRemaining < 0) {
      numberOfBottlesToTake = 'Go to the store and buy some more, ';
    } else {
      numberOfBottlesToTake = `Take ${nullableText(bottlesRemaining, 'one', 'it')} down and pass it around, `;
    }
    return numberOfBottlesOnTheWallVerse + numberOfBottlesVerse + numberOfBottlesToTake + this.moveBottlesOfBeerFromWallVerse(bottlesRemaining);
  }

  verses(numberOfBottlesFirstVerse, numberOfBottlesLastVerse) {
    const numberOfIterations = downTo(numberOfBottlesFirstVerse, numberOfBottlesLastVerse);
    const finalVerse = numberOfIterations.map(iteration => {
      return this.verse(iteration);
    });
    return finalVerse.join('\n');
  }

  moveBottlesOfBeerFromWallVerse(bottlesToMove) {
    const textIfZero = 'no more';
    const textIfLessThanZero = `${100 - Math.abs(bottlesToMove)}`;
    const textIfZeroOrLess = bottlesToMove === 0 ? textIfZero : textIfLessThanZero;
    return `${nullableText(bottlesToMove, `${bottlesToMove}`, textIfZeroOrLess)} bottle${pluralize(bottlesToMove)} of beer on the wall.\n`;
  }

  depleteBottles(numberOfBottlesInTheWall, numberOfBottlesToMove) {
    return numberOfBottlesInTheWall - numberOfBottlesToMove;
  }

  song() {
    return this.verses(99, 0);
  }

};

export { Bottles };
