# Activity 7: React Music App Completion & Blog Post Example  
**CST-391: JavaScript Web Application Development**  
**Matt Kollar**  
**Date: April 14, 2025**

---

## 📌 Overview

This mini app demonstrates dynamic rendering of components using React. It allows users to add and remove blog posts from a list. Key React concepts used include `useState`, props, controlled components, event handling, and list rendering with unique keys. The app highlights how a parent component (`App.js`) can manage shared state and handle child component callbacks like `onAddPost` and `onDelete`. This pattern is foundational for managing dynamic user-generated content in React applications.

---

## ✅ Features Implemented

- **Add New Post**: Users can type and submit a new post using a controlled `<textarea>` and submit button.
- **Delete Post**: Each post includes a `Delete` button to remove it from the list.
- **Dynamic State Updates**: Posts are added and removed via React's `useState()` hook in the parent component.

---

## 📸 Screenshots

### Initial State
![homepage](/screenshots/homepage.png)
> The app’s initial state, showing two hardcoded posts ("First blog post!" and "Learning React is fun.") with a text input to add new ones.

### Adding a New Post
![add-new-post](/screenshots/add-new-post.png)
> A user has typed a new post titled “This is a test post” and is about to submit it using the Add Post button.

### Deleting a Post
![deleted-posts](/screenshots/deleted-posts.png)
> The newly added post has been deleted using the Delete button, demonstrating dynamic removal from the list.

---

## 🗂 Folder Structure

```
blog/
├── public/
├── src/
│   ├── App.js
│   ├── AddPost.js
│   ├── Post.js
│   ├── Post.css
├── screenshots/
│   ├── homepage.png
│   ├── add-new-post.png
│   ├── deleted-posts.png
├── README.md
```

---

## 📄 Blog Component Summary

This exercise demonstrated how to dynamically add and remove components from a page using React. By managing state in the parent `App.js` component and passing callback functions to children, we successfully implemented a simple blog app where posts can be added or removed interactively. We used React features such as `useState`, props, controlled components, and the spread operator for immutability. Each blog post component is rendered from a mapped list and assigned a unique `key` for performance and reactivity.

---

## 🎵 Music App Completion – Tracks, Add, Edit (Parts 5–7)

### ✅ Features Implemented

- Clickable Album Cards to view full track details
- Track list per album with clickable titles
- Display of selected lyrics and embedded YouTube video
- Add new album form using POST to Express API
- Edit existing album form using PUT with pre-filled data
- Search filtering of albums using `useState`
- Navigation via React Router

---

## 📸 Screenshots

### Homepage View with Search and Edit Buttons
![music-homepage](/screenshots/music-homepage.png)
> The main homepage shows a search bar and a set of album cards. Each card includes buttons to play, explore, or edit the album.

### Search Filter for "Abbey"
![music-search-album](/screenshots/music-search-album.png)
> The user has typed "abbey" into the search bar, and only Abbey Road is shown, verifying dynamic filtering.

### Track View with Lyrics and Video
![music-album-tracks-lyrics-videourl](/screenshots/music-album-tracks-lyrics-videourl.png)
> Clicking an album displays its tracks. When a track is clicked, its lyrics and a YouTube video are shown dynamically.

### Editing an Album
![music-edit-album](/screenshots/music-edit-album.png)
> A form allows editing the selected album. The fields are pre-populated using state fetched via Axios.

---

## 📄 Music App Summary

This portion completed the React Music App by integrating dynamic data and full CRUD capability. Using a working Express API, the app supports reading, creating, and updating albums. The implementation includes dynamic track viewing with lyrics and videos, a responsive form for new albums, and a unified edit interface. Each album is interactive and searchable, and state is managed across multiple components using React Router. These enhancements deliver a robust single-page application experience.

---
