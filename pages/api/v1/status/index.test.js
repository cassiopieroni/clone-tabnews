const url_base = `http://localhost:3000`;

describe(`/api/v1/status`, () => {
  test(`GET responds with 200 status`, async () => {
    const response = await fetch(`${url_base}/api/v1/status`);
    expect(response.status).toBe(200);
  });
})