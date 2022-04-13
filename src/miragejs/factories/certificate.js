import { Factory } from 'miragejs';

import { faker } from '@faker-js/faker';

import { randomNumber } from './utils';

const images = [
  'https://cursos.dankicode.com/app/Views/public/images/uploads/cursos/599083332ff1a.png',
  'https://programador.onebitcode.com/images/share-fb.png',
  'https://classes.vedovelli.com.br/simon-abrams-k_T9Zj3SE8k-unsplash.jpg',
  'https://img-c.udemycdn.com/course/240x135/1691424_acf4_6.jpg',
  'https://uploaddeimagens.com.br/images/003/821/365/full/HTML_CSS.png',
  'https://uploaddeimagens.com.br/images/003/821/370/full/Front-end.png',
  'https://uploaddeimagens.com.br/images/003/821/379/full/ReactJS.png',
  'https://uploaddeimagens.com.br/images/003/821/385/full/Seguranca.png',
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
      return images[randomNumber(images.length - 1) - 1];
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
      return Array.from(Array(randomNumber(4) + 2)).map(() => faker.lorem.word());
    },
    title() {
      return faker.lorem.lines(1);
    },
    percentage() {
      return 100 - (randomNumber(8) - 1) * (randomNumber(7) + 5);
    },
  }),
};

export default certificateFactory;
