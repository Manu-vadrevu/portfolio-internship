const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/api/projects', (req, res) => {
    const projects = [
        {
            id: 1,
            title: "Personal Portfolio Website",
            description: "A full-stack personal portfolio built to showcase development projects, skills, and contact information dynamically.",
            techStack: "HTML, CSS, JavaScript, Node.js, Express"
        },
        {
            id: 2,
            title: "Weather Tracking Dashboard",
            description: "An application integrating third-party APIs to fetch real-time weather analytics and regional forecasts.",
            techStack: "JavaScript, Node.js, REST API"
        }
    ];
    res.json(projects);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
