export const checkSNS = (url: string) => {
  const instagramRegex = /instagram/i;
  const facebookRegex = /facebook/i;
  const youtubeRegex = /youtube/i;
  const twitterRegex = /twitter/i;

  if (instagramRegex.test(url)) {
    return "instagram";
  } else if (facebookRegex.test(url)) {
    return "facebook";
  } else if (youtubeRegex.test(url)) {
    return "youtube";
  } else if (twitterRegex.test(url)) {
    return "x";
  } else {
    return "etc";
  }
};
