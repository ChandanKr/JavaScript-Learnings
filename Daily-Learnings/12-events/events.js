//! JavaScript Events

//* In JavaScript, events are actions or occurrences that happen in the system that the code may be able to respond to. 
//* These events could be triggered by various interactions such as:
    // User actions (like mouse clicks or keyboard presses)
    // Browser actions (like loading a page or resizing the window)
    // Or even by the system itself.


//todo:- Some common events in JavaScript:

    //* Mouse Events:
        //? onclick => When the mouse is clicked on an element.
        //? oncontextmenu => The user right click on an element.
        //? ondblclick => The user double-clicks on an element.
        //? onmousedown => A mouse button is pressed over an element.
        //? onmouseenter => The pointer is moved onto an element.
        //? onmouseleave => The pointer is moved out of an element.
        //? onmousemove => The pointer is moving over an element.
        //? onmouseout => The mouse pointer is moved out of an element.
        //? onmouseover => The mouse pointer is moved over an element.
        //? onmouseup => The mouse button is released over an element.

    //* Keyboard Events:
        //? keydown: When a key is pressed down.
        //? keyup: When a key is released.
        //? keypress: When a key is pressed and released.

    //* Form Events:
        // submit: When a form is submitted.
        // change: When the value of a form element changes (e.g., <input>, <select>, <textarea>).
        // input: When the value of an input element changes.

    //* Window Events:
        // load: When a webpage has finished loading.
        // resize: When the browser window is resized.
        // scroll: When the user scrolls the webpage.

    //* Document Events:
        // DOMContentLoaded: When the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and sub-frames to finish loading.

    //* Custom Events:
        // Developers can also create and dispatch custom events using CustomEvent constructor.