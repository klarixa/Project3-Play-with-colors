# Project 3: Play With Colours

> **W3 Server-Side Development & Authentication - Lesson 11**

## 🎯 Project Overview

Build an interactive color manipulation application using Svelte's logic, conditional rendering, and list iteration features. This project challenges you to create a dynamic UI that responds to user interactions and manages complex color data.

## 📚 Learning Objectives

By completing this project, you will:
- Master Svelte's conditional rendering (`{#if}`, `{:else}`)
- Implement list iteration with `{#each}` blocks
- Handle dynamic user interactions and events
- Work with color data structures (hex, RGB, HSL)
- Create reactive UI components that update automatically
- Practice component state management

## 🔗 GitHub Source

This template is from: [Web-3-Project-3-Play-With-Colours](https://github.com/academic-telebort/Web-3-Project-3-Play-With-Colours)

## 🏗️ What's Provided (15% Scaffolding)

✅ Basic Svelte project structure
✅ Development environment configuration
✅ Empty `PlayColors.svelte` component
✅ Minimal routing setup in `src/routes/`

## 🔨 What You Will Build (85% Implementation)

### Core Features (Must Implement):
1. **Color Picker Interface**
   - Input field for hex color codes
   - Color preview display
   - Add/remove colors from a list

2. **Color List Management**
   - Display list of selected colors
   - Show color properties (hex, RGB, name)
   - Delete individual colors
   - Clear all colors

3. **Color Information Display**
   - Convert hex to RGB values
   - Display color name or code
   - Show color swatches
   - Conditional rendering based on list state

4. **User Interactions**
   - Click events for adding/removing colors
   - Form handling for color input
   - Dynamic updates without page reload

### Optional Enhancements:
- Color palette suggestions
- Export color list to JSON/CSS
- Color mixing functionality
- Accessibility features (contrast checker)
- Local storage persistence

## 🚀 Getting Started

### Prerequisites
- Node.js v18+ installed
- VS Code with Svelte extension
- Completed Lessons 1-10 (Svelte fundamentals)

### Installation

1. **Navigate to this template folder:**
   ```bash
   cd "Paid Courses/W3 Server-Side Development & Authentication/Templates/project-03-colours"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:5173`

## 📂 Project Structure

```
project-03-colours/
├── src/
│   ├── routes/
│   │   └── index.svelte       # Main page (TODO: implement UI)
│   └── PlayColors.svelte       # Color component (TODO: build logic)
├── package.json                # Dependencies
└── svelte.config.js            # Svelte configuration
```

## 🔍 Discovery Challenges

Before implementing, research and answer:

1. **Conditional Rendering**: How do you show different UI based on conditions in Svelte?
   - When should you use `{#if}` vs CSS classes?
   - How do you handle empty states?

2. **List Iteration**: How do you render arrays in Svelte?
   - What's the syntax for `{#each}` blocks?
   - How do you access index and item in loops?

3. **Color Conversion**: How do you convert between color formats?
   - Hex to RGB formula?
   - RGB to HSL algorithm?

4. **Event Handling**: How do you handle forms and clicks in Svelte?
   - Form submission patterns?
   - Event modifiers (preventDefault)?

## 💡 Implementation Guide

### Step 1: Create Color Input Form
```svelte
<!-- TODO: Implement color input in index.svelte or PlayColors.svelte -->
<script>
  // TODO: Create reactive variables
  let colorInput = '';
  let colorList = [];

  // TODO: Implement addColor function
  function addColor() {
    // Add color to list
    // Clear input
    // Update UI
  }
</script>

<!-- TODO: Create form UI -->
```

### Step 2: Display Color List
```svelte
<!-- TODO: Iterate over colorList -->
{#if colorList.length > 0}
  <!-- TODO: Show colors -->
{:else}
  <!-- TODO: Show empty state -->
{/if}
```

### Step 3: Add Delete Functionality
```svelte
<!-- TODO: Implement delete logic -->
function deleteColor(index) {
  // Remove color from array
}
```

## ✅ Success Criteria

Your project is complete when:
- [ ] User can input hex color codes
- [ ] Colors are added to a visible list
- [ ] Each color displays with a preview swatch
- [ ] User can delete individual colors
- [ ] Empty state shows when no colors exist
- [ ] UI updates reactively without page refresh
- [ ] Code uses Svelte's `{#if}` and `{#each}` properly
- [ ] Color validation prevents invalid inputs

## 🧪 Testing Your Implementation

Test these scenarios:
1. Add valid hex color (#FF5733)
2. Try invalid input (should handle gracefully)
3. Add multiple colors
4. Delete colors from the list
5. Clear all colors
6. Refresh page (test reactivity)

## 📖 Resources

- **Svelte Logic Blocks**: [https://svelte.dev/tutorial/if-blocks](https://svelte.dev/tutorial/if-blocks)
- **Svelte Each Blocks**: [https://svelte.dev/tutorial/each-blocks](https://svelte.dev/tutorial/each-blocks)
- **Color Conversion**: [MDN Color Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

## 🎨 Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Functionality** | 40 | Color input, list display, delete works |
| **Svelte Logic** | 30 | Proper use of `{#if}`, `{#each}`, reactivity |
| **Code Quality** | 20 | Clean code, comments, organization |
| **UI/UX** | 10 | User-friendly interface, visual design |
| **Total** | 100 | |

## 🐛 Common Issues & Solutions

**Issue**: Colors not displaying after adding
**Solution**: Check if you're properly updating the reactive `colorList` array

**Issue**: Delete not working
**Solution**: Use array methods that trigger reactivity (filter, splice with assignment)

**Issue**: Invalid colors accepted
**Solution**: Add validation for hex format before adding to list

## 📦 Build for Production

When ready to deploy:
```bash
npm run build
```

## 🔗 Related Course Materials

- **Concept 07**: Svelte Logic
- **Activity 07**: Svelte Logic Exercises
- **Lesson**: 11
- **Project Specification**: `../../Project/Project 03- Play With Colours.mdx`

---

**Remember**: This is YOUR project. The template provides the structure, but you build the features. Research, experiment, and create something unique!

