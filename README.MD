# Express Server Setup

## Step 1: Create Project

```bash
npm init -y
```

## Step 2: Install Dependencies

```bash
npm install express mongoose
npm install --save-dev nodemon
```

## Step 3: Create Files

```bash
touch server.js
touch model.js
```



## Step 5: Update package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## Step 6: Run the Server

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

## Output

```bash
server running.....okay
```

## Project Structure

```text
project/
│
├── server.js
├── model.js
├── package.json
└── node_modules/
```