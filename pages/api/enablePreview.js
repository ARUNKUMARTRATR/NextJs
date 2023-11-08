export default function handler(req, res) {
  const { data } = req.query;
  res.setPreviewData({});
  const url = `/details/${data}`;
  res.redirect(url);
  res.end();
}
