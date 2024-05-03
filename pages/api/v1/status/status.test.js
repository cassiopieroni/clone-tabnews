const url_base = `http://localhost:3000`;

describe(`/api/v1/status`, () => {
  describe(`GET`, () => {
    test(`GET responds with 200 status`, async () => {
      const response = await fetch(`${url_base}/api/v1/status`);
      expect(response.status).toBe(200);

      const { updated_at, dependencies: { database } } = await response.json(); 
      const parsedUpdatedAt = new Date(updated_at).toISOString();

      expect(updated_at).toEqual(parsedUpdatedAt);
      expect(database.version).toEqual('16.0');
      expect(database.max_connections).toEqual(100);
      expect(database.opened_connections).toEqual(1);
    });
  });
})