const certificatesSeeder = (server) => {
  server.createList('certificate', 12);
};

export default function seeds(server) {
  certificatesSeeder(server);
}
