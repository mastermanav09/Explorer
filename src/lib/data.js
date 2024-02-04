// TEMPORARY DATA
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];

const posts = [
  {
    id: 1,
    title: "Post 1",
    body: "......",
    userId: 1,
    img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Post 2",
    body: "......",
    userId: 1,
    img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Post 3",
    body: "......",
    userId: 2,
    img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Post 4",
    body: "......",
    userId: 2,
    img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const getPosts = async () => posts;
export const getPost = async (id) => posts.find((post) => post.id == id);

export const getUsers = async () => users;
