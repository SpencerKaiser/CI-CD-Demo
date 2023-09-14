import { get } from '../../../src/api/health/get';

describe('health GET', () => {
  it('returns a 200 status code and an ok status', () => {
    const mockReq = {};
    const mockRes = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    get(mockReq as any, mockRes as any);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(expect.objectContaining({ ok: true }));
  });
});
