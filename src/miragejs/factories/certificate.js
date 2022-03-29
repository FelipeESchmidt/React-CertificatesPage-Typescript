import { Factory } from 'miragejs';

import { faker } from '@faker-js/faker';

import { randomNumber } from './utils';

const images = [
  'Back-End.jpg',
  'Dev-ops.jpg',
  'Evernote.png',
  'Front-End.png',
  'Javascript.jpg',
  'Vedovelli1.jpg',
  'Vedovelli2.jpg',
  'Web-Design.png',
];

const certificateFactory = {
  certificate: Factory.extend({
    fileSrc() {
      return faker.internet.url();
    },
    imageSrc() {
      return images[randomNumber(images.length - 1)];
    },
    imageAlt() {
      return faker.lorem.words();
    },
    info: {
      description() {
        return faker.lorem.paragraph();
      },
      endDate() {
        return new Date(faker.date.past()).toLocaleDateString();
      },
      stacks() {
        return [faker.lorem.word(), faker.lorem.word(), faker.lorem.word(), faker.lorem.word()];
      },
      title() {
        return faker.lorem.lines(1);
      },
    },
  }),
};

export default certificateFactory;
