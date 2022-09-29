import {pullBreed} from '../pullBreed.js';
import {assert} from 'chai';

describe('fetchBreedDescription', () => {

  const main = async () => {
    return await pullBreed('Siberian');
  };

  it('returns a string description for a valid breed, via callback', () => {

      main().then((desc) => {
        // we expect no error for this scenario
        assert.equal(err, null);

        const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

        // compare returned description
        assert.equal(expectedDesc, desc[0].description.trim());
      });
  });
})