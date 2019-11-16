let postTitle = 'Introduction to Chrome Lighthouse';

const url = 'https://bolajiayodeji.com/';

const urlSlug = (postTitle) => {
  let postUrl = postTitle.toLowerCase().split(' ');
  console.log(postUrl);
  
  let postSlug = `${url}` + postUrl.join('-');
  console.log(postSlug);

  return postSlug;
};



console.log(urlSlug(postTitle));
