import faker from '@faker-js/faker';
import { limitText } from './textFunctions';

describe('Text Functions > Unit', () => {
  const limiter = 20;

  const generateAndLimitText = (limit: number = limiter): string => {
    const text = faker.lorem.paragraph();
    return limitText(text, limit);
  };

  it('should limit text', () => {
    const limitedText = generateAndLimitText();
    expect(limitedText.length).toBe(limiter);
  });

  it('should add "..." to the end of text', () => {
    const limitedText = generateAndLimitText();
    expect(limitedText.endsWith('...')).toBe(true);
  });

  it('should not to limit when limitCount is smaller than text length', () => {
    const limitedText = generateAndLimitText(400);
    expect(limitedText.endsWith('...')).toBe(false);
  });

  it('should not accept limit <= 5', () => {
    const limitedText = generateAndLimitText(5);
    expect(limitedText.endsWith('...')).toBe(false);
  });

  it('should not end with "...."', () => {
    const text = faker.lorem.paragraph().concat('dot');
    const limitedText = limitText(text, text.length);
    expect(limitedText.endsWith('....')).toBe(false);
  });
});
