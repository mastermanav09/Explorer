// using server actions
"use server";
import { connectToDb } from "./utils";
import { Post } from "./models/post";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { User } from "./models/user";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Saved to Db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
};

export const deletePost = async (formData) => {
  const { postId } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(postId);

    console.log("Deleted post from Db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
};

export const addUser = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new User({
      username,
      email,
      password,
      img,
    });

    await newPost.save();
    console.log("Saved user to Db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await User.findByIdAndDelete(id);
    await Post.deleteMany({ userId: id });

    console.log("Deleted user from Db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github", {
    redirect: true,
    callbackUrl: "/",
  });
};

export const handleLogout = async () => {
  await signOut();
};

export const registerUser = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ email });
    if (user) {
      const error = new Error("User already exists");
      error.statusCode = 422;
      throw error;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("User saved successfully");
    return {
      success: true,
    };
  } catch (error) {
    console.log(error);

    if (!error.statusCode) {
      error.statusCode = 500;
      error.message = "Something went wrong!";
    }

    return {
      error: error.message,
    };
  }
};

export const loginUser = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return {
        error: "Incorrect username or password.",
      };
    }

    throw error;
  }
};
