<script>
    /** @type {string} */
    let colorInput = '';
    /**
     * @type {{id: number; hex: string; rgb: {r: number; g: number; b: number}; rgbString: string}[]}
     */
    let colorList = [];
    let error = '';
    /**
     * Check if a string is a valid hex color (#RGB or #RRGGBB)
     * @param {string} color
     * @returns {boolean}
     */
    function isValidHex(color) {
        const hexPattern = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexPattern.test(color);
     }
    /**
    * Normalize a hex string to #RRGGBB
    * @param {string} color
    * @returns {string}
    */
    function normalizeHex(color) {
        color = color.replace('#', '').toUpperCase();
        if (color.length === 3) {
            color = color.split('').map(char => char + char).join('');
        }
        return '#' + color;
     }
    /**
    * Convert a hex color to an RGB object
    * @param {string} hex
    * @returns {{r:number,g:number,b:number}|null}
    */
    function hexToRgb(hex) {
        hex = normalizeHex(hex);
        const result = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
     }
    /**
    * Return '#000000' or '#FFFFFF' depending on contrast with given hex
    * @param {string} hex
    * @returns {string}
    */
    function getContrastColor(hex) {
        const rgb = hexToRgb(hex);
        if (!rgb) return '#000000'; // Default to black if invalid

        const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
     }
     function addColor() {
        error = '';

        if (!colorInput.trim()) {
            error = 'Please enter a color code';
            return;
        }

        if (!isValidHex(colorInput)) {
            error = 'Invalid hex color format. Use #RGB or #RRGGBB';
            return;
        }

        const normalizedColor = normalizeHex(colorInput);
        const rgb = hexToRgb(normalizedColor);

        // Ensure rgb conversion succeeded
        if (!rgb) {
          error = 'Failed to parse color';
          return;
        }

        if (colorList.some(c => c.hex === normalizedColor)) {
            error = 'This color is already in your list';
            return;
        }

        const newColor = {
          id: Date.now(),
          hex: normalizedColor,
          rgb: rgb,
          // Ensure RGB string is numeric and in the form: rgb(number, number, number)
          rgbString: `rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`
        };
        colorList = [...colorList, newColor];

        colorInput = '';
     }
    /** @param {number} id */
    function deleteColor(id) {
        colorList = colorList.filter(color => color.id !== id);
      }
  function clearAll() {
        if (confirm('Are you sure you want to clear all colors?')) {
            colorList = [];
        }
     }
    /** @param {Event} event */
    function handleSubmit(event) {
        event.preventDefault();
        addColor();
      }
    /** @param {string} text */
    async function copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        alert(`Copied ${text} to clipboard!`);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
     }
</script>

<div class="container">
  <div class="header">
    <h1>🎨 Play With Colours</h1>
    <p>Create and manage your color palette with hex codes.</p>
  </div>

  <div class="input-section">
    <form class="input-form" on:submit={handleSubmit}> 
      <div class="color-preview" style="background-color: {isValidHex(colorInput) ? normalizeHex(colorInput) : '#FFFFFF'}">
        {isValidHex(colorInput) ? normalizeHex(colorInput) : 'Preview'}
      </div>
      
      <input 
        type="text" 
        bind:value={colorInput} 
        placeholder="Enter hex color (e.g., #FF5733 or F90)"
      />
      <button type="submit" class="btn btn-primary">Add Color</button>
    </form>
   
    {#if error}
      <div class="error-message">{error}</div>
    {/if}
  </div>

  {#if colorList.length > 0}
    <div class="stats-and-controls">
      <p>You have <strong>{colorList.length}</strong> {colorList.length === 1 ? 'color' : 'colors'} in your palette.</p>
      <button class="btn btn-secondary" on:click={clearAll}>Clear All</button>
    </div>  
    <div class="color-grid">
      {#each colorList as color (color.id)}
        <div class="color-card">
          <button
            type="button"
            class="color-swatch"
            style="background-color: {color.hex}; color: {getContrastColor(color.hex)}"
            on:click={() => copyToClipboard(color.hex)}
            aria-label={`Copy ${color.hex} to clipboard`}
          >
            {color.hex}
          </button>
          <div class="color-info">
            <p>HEX: {color.hex}</p>
            <p>RGB: {color.rgbString}</p>
          </div>
          <button class="btn btn-secondary" on:click={() => deleteColor(color.id)}>Delete</button>
        </div>
      {/each}
    </div>
  {:else}
    <div class="empty-state">
      <h2>🎨 No colors yet!</h2>
      <p>Add a hex color code above to start building your palette. Try colors like #FF5733, #33FF57, or #3357FF!</p>
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .input-section {
    margin-bottom: 2rem;
  }

  .input-form {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .color-preview {
    width: 60px;
    height: 60px; 
    border: 2px solid #ddd; 
    border-radius: 8px;
    display: flex;
    align-items: center; 
    justify-content: center;
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
  }

  input[type="text"] {
    padding: 0.5rem; 
    border: 2px solid #ccc; 
    border-radius: 8px; 
    font-size: 1rem; 
    width: 200px;
  }

  .btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
  }

  .btn-primary {
    background: #3182ce; 
    color: white;
  }

  .btn-secondary {
    background: #e2e8f0; 
    color: #333;
  }

  .error-message {
    color: #e53e3e; 
    margin-top: 0.5rem;
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .color-card {
    border: 2px solid #ddd;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }

  .color-swatch {
    width: 100%; 
    height: 100px; 
    border-radius: 8px; 
    margin-bottom: 1rem; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }

  .empty-state {
    text-align: center; 
    margin-top: 3rem; 
    color: #666;
  }

  .stats-and-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }
</style>
