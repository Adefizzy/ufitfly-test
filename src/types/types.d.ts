interface IObjectId {
  _id: string;
}

type IUserReq = Request<
  any,
  Partial<HydratedDocument<IUser>>,
  any,
  Query,
  unknown
>;

interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password?: string;
  role: IROLES;
}

type IROLES = 'ADMIN' | 'USER';

type ITravelPackage = {
  title: string;
  description: string;
  destination: string;
  price: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
};


interface ITypedRequestBody<T> extends Express.Request {
  body: T;
  query: {
    role: string;
  };
}
