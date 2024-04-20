const express = require('express')
const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/dashboard/build')));
app.all("*", (req, res) => {
  res.sendFile(__dirname + '/dashboard/build/index.html')
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is Listing at ${process.env.PORT || 5000}`)
})