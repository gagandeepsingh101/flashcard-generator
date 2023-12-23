<div align="center">
<h1 align="center">
<br>ALMABETTER FLASHCARD GENERATOR</h1>
<h3>Almabetter Capstone Project  Frontend Module</h3>
<h3>◦ Developed with the software and tools below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/gagandeepsingh101/flashcard-generator?style=flat&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/gagandeepsingh101/flashcard-generator?style=flat&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/gagandeepsingh101/flashcard-generator?style=flat&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/gagandeepsingh101/flashcard-generator?style=flat&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#📖-table-of-contents)
- [📍 Overview](#📍-overview)
- [📦 Features](#📦-features)
- [📂 repository Structure](#📂-repository-structure)
- [🚀 Getting Started](#🚀-getting-started)
  - [🔧 Installation](#🔧-installation)
  - [🤖 Running flashcard-generator](#🤖-running-flashcard-generator)
  - [🌐 Deployment Link](#🌐-deployment-link)
  - [🧪 Tests](#🧪-tests)
- [🤝 Contributing](#🤝-contributing)

---

## 📍 Overview
The Almabetter Flashcard Capstone Project is a frontend-focused endeavor designed to deliver an engaging and intuitive flashcard application. The primary goal of this project is to create a seamless user experience for studying and reinforcing knowledge through interactive digital flashcards.

---

## 📦 Features

1. **Create Custom Flashcards:**

   - Users have the ability to craft personalized flashcards by entering group information along with multiple terms and their corresponding details. This feature empowers users to tailor their learning experience to specific subjects or topics.

2. **Character Limit Validation:**

   - The system intelligently validates user inputs and provides immediate feedback. If the user exceeds the maximum character limit, the application displays a visually distinct error by highlighting the input fields with a red border and presenting a clear error message in red text.

3. **Dynamic Term Section:**

   - Users can dynamically manage terms within the flashcards. This includes adding new terms, deleting existing ones, and activating a read-only mode for specific terms. This flexibility ensures a customizable and adaptive learning experience.

4. **Persistent User Data:**

   - The application employs local storage to store user data persistently. This means that users can seamlessly pick up where they left off, and their created flashcards will be retained even after closing the browser or navigating away from the application.

5. **Flashcard Block Deletion:**

   - Users have the capability to delete entire flashcard blocks from the show page. This feature provides a streamlined way for users to manage their flashcards, allowing for efficient organization and removal of unnecessary content.

6. **Download, Print, and Share:**
   - The show page offers convenient options for users to download flashcards, print them for offline use, and share them with others. This enhances the usability of the flashcards beyond the application, facilitating collaborative learning and knowledge sharing.

---

## 📂 Repository Structure

```sh
└── flashcard-generator/
    ├── package-lock.json
    ├── package.json
    |
    ├── public/
    │   └── index.html
    |
    ├── src/
    │   ├── App.js
    │   ├── __test__/
    │   │   ├── Error.test.js
    │   │   ├── Header.test.js
    │   │   ├── Model.test.js
    │   │   ├── SharePrintDownloadComponent.test.js
    |   |
    │   ├── asset/
    |   |
    │   ├── components/
    │   │   ├── Error.js
    │   │   ├── GroupFieldSection.js
    │   │   ├── Header.js
    │   │   ├── Model.js
    │   │   ├── RenderCard.js
    │   │   ├── SharePrintDownloadComponent.js
    │   │   ├── ShowActiveTermInfo.js
    │   │   ├── ShowAllCards.js
    │   │   ├── ShowCompleteSingleCard.js
    │   │   ├── SingleTermFieldItem.js
    │   │   ├── TermFieldArraySection.js
    │   │   └── UploadImageButton.js
    |   |
    │   ├── hooks/
    │   │   ├── useGeneratePdf.js
    │   │   └── useSubmitFlashcardData.js
    |   |
    │   ├── index.css
    │   ├── index.js
    |   |
    │   ├── pages/
    │   │   ├── CreateFlashCard.js
    │   │   └── ShowFlashCard.js
    |   |
    │   ├── redux/
    │   │   ├── flashcardReducers.js
    │   │   └── store.js
    |   |
    │   ├── reportWebVitals.js
    │   └── setupTests.js
    └── tailwind.config.js

```

---


## 🚀 Getting Started

- ### 🌐 Deployment Link

    You can visit the app live from [click here](https://flashcard-generator-three.vercel.app/)

--- 
- ### 🔧 Installation

1. Clone the flashcard-generator repository:

```sh
git clone https://github.com/gagandeepsingh101/flashcard-generator
```

2. Change to the project directory:

```sh
cd flashcard-generator
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running flashcard-generator

```sh
node app.js
```

### 🧪 Tests

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/gagandeepsingh101/flashcard-generator/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/gagandeepsingh101/flashcard-generator/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/gagandeepsingh101/flashcard-generator/issues)**: Submit bugs found or log feature requests for GAGANDEEPSINGH101.

#### _Contributing Guidelines_

<details closed>
<summary>Click to expand</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone <your-forked-repo-url>
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear and concise message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---
