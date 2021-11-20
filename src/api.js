const API = "https://api.coincap.io/v2/assets";
const getAssets = () => {
  return fetch(`${API}?limit=20`)
    .then((res) => res.json())
    .then((data) => data.data);
};

const getAsset = (id) => {
  return fetch(`${API}/${id}`)
    .then((res) => res.json())
    .then((data) => data.data);
};

const getAssetHistory = (id) => {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(`${API}/${id}/history?interval=h1&start=${start}&end=${end}`)
    .then((res) => res.json())
    .then((data) => data.data);
};
export default { getAssets, getAsset, getAssetHistory };
