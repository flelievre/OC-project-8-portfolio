const removeLastSlashFormUrl = (url = '') => (
  url.replace(/\/$/, '')
);

export default removeLastSlashFormUrl;
