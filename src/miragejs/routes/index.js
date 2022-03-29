// import { Response } from "miragejs";

export default function routes() {
  this.namespace = 'api';
  this.timing = 2000;
  this.resource('certificates');

  // this.get('products', () => {
  //   return new Response(500, {}, "O server morreu!");
  // });
}
