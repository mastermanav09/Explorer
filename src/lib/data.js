import { Post } from "./models/post";
import { User } from "./models/user";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   {
//     id: 1,
//     title: "Post 1",
//     body: "......",
//     userId: 1,
//     img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 2,
//     title: "Post 2",
//     body: "......",
//     userId: 1,
//     img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 3,
//     title: "Post 3",
//     body: "......",
//     userId: 2,
//     img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     id: 4,
//     title: "Post 4",
//     body: "......",
//     userId: 2,
//     img: "https://images.pexels.com/photos/20060045/pexels-photo-20060045/free-photo-of-ready-to-fly.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({
      slug,
    });

    return post;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  // noStore();
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
  }
};
