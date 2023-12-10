function isLink(str) {
  try {
      new URL(str);
      return true;
  } catch (error) {
      return false;
  }
}