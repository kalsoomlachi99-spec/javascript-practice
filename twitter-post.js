// Twitter post

const post = {
    username: "@kalsoomlachi",
    content: "This is my #FirstPage",
    likes: 307,
    repost: 62,
    tags: ["@manal", "@mano"]
};

console.log(post);
console.log("username", post.username);
console.log("content", post.content);
console.log("likes", post["likes"]);
console.log("repost", post.repost);
console.log("tags", post["tags"]);
