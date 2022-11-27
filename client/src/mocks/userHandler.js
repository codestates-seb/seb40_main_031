import { rest } from 'msw';

const data = [
  {
    memberId: 1,
    email: 'asd@asd.asd',
    nickname: 'asd',
    about: 'null',
    point: 0,
    img: null,
    createdAy: '2022-11-25t16:09:22.12312312',
    modifiedAt: '2022-22-25t16:09:22.123123',
  },
  {
    memberId: 2,
    email: 'asd2@asd.asd',
    nickname: 'asd3',
    about: 'null',
    point: 0,
    img: null,
    createdAy: '2022-11-25t16:09:22.12312312',
    modifiedAt: '2022-22-25t16:09:22.123123',
  },
  {
    memberId: 3,
    email: 'asd3@asd.asd',
    nickname: 'asd3',
    about: 'null',
    point: 0,
    img: null,
    createdAy: '2022-11-25t16:09:22.12312312',
    modifiedAt: '2022-22-25t16:09:22.123123',
  },
];

export const userHandler = [
  rest.get('/userpage', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
