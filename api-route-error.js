```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Some asynchronous operation that might throw an error
  const data = fetchData(); // This could throw an error

  res.status(200).json({ data });
}

async function fetchData() {
  // Simulate an error
  if (Math.random() < 0.5) {
    throw new Error('Failed to fetch data');
  }
  return { message: 'Data fetched successfully' };
}
```