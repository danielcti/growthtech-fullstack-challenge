declare namespace t {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }

  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: number;
      lng: number;
    };
  }

  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
    employees: number;
    slug: string;
  }

  interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  interface Comment {
    postId: string;
    id: string;
    name: string;
    email: string;
    body: string;
  }
}

export = t;
