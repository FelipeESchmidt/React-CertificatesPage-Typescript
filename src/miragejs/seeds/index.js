const certificatesSeeder = (server) => {
  server.createList('certificate', 25);
};

export default function seeds(server) {
  certificatesSeeder(server);
}
