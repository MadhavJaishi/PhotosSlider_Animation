🚀 Animated Image Slider

📖 Overview
This project implements an animated image slider with smooth horizontal scrolling functionality. Users can click and drag to navigate through the images in a visually engaging manner. The images are animated using CSS transforms and JavaScript.

✨ Features
🎛️ Drag-to-Scroll: Users can scroll through the images by clicking and dragging horizontally.
🎞️ Smooth Animation: The images smoothly animate during the scroll.
🌌 Dynamic Object Positioning: Animates the object position to create a parallax-like effect.
📱 Responsive Design: Adjusts to different screen sizes.

🛠️ Technologies Used
🌐 HTML5: Markup for the structure.
🎨 CSS3: Styling and layout.
⚙️ JavaScript: Interactivity and animations.

📂 Project Structure
.
├── index.html       # HTML file for the structure
├── style.css        # CSS file for styling
└── script.js        # JavaScript file for functionality

🧩 Implementation Details

HTML
The #image-track div contains all the images.
Each image has the class image and is set to draggable="false" to ensure smooth scrolling.

JavaScript
Listens for mousedown, mouseup, and mousemove events to track the user's drag actions.
Calculates the percentage of scroll based on the user's drag distance.
Prevents excessive scrolling to the left or right using boundaries.
Animates the images' objectPosition to enhance the visual effect.

🛠️ How It Works
🖱️ Mouse Down: Captures the initial position of the mouse when the user starts dragging.
➡️ Mouse Move: Tracks the user's movement and calculates the distance dragged.
🖐️ Mouse Up: Resets the initial position and stores the final percentage of the scroll.
🎥 Animations: Uses the animate method to dynamically adjust the objectPosition of the images during scrolling.
