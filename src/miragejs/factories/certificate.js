import { Factory } from 'miragejs';

import { faker } from '@faker-js/faker';

import { randomNumber } from './utils';

const images = [
  'https://cursos.dankicode.com/app/Views/public/images/uploads/cursos/599083332ff1a.png',
  'https://programador.onebitcode.com/images/share-fb.png',
  'https://classes.vedovelli.com.br/simon-abrams-k_T9Zj3SE8k-unsplash.jpg',
  'https://img-c.udemycdn.com/course/240x135/1691424_acf4_6.jpg',
];

const certificateFactory = {
  certificate: Factory.extend({
    _id() {
      return faker.random.alphaNumeric(24);
    },
    certificateImg() {
      return faker.internet.url();
    },
    courseUrl() {
      return faker.internet.url();
    },
    courseImg() {
      return images[randomNumber(images.length - 1)];
    },
    imageAlt() {
      return faker.lorem.words();
    },
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
  }),
};

export default certificateFactory;
