<script>
    let red = 0;
    let green = 0;
    let blue = 0;
    
    $: rgb = `rgb(${red}, ${green}, ${blue})`;
    $: hexColor = rgbToHex(red, green, blue);

    function componentToHex(c) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function setColor(r, g, b) {
        red = r;
        green = g;
        blue = b;
    }

    function randomColor() {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
}
</script>

<div class="container">
    <h1>Play With Colours</h1>
    
    <div class="color-controls">
        <div class="slider-group">
            <label for="red">Red: {red}</label>
            <input 
                id="red" 
                type="range" 
                min="0" 
                max="255" 
                bind:value={red}
                class="slider red-slider"
            />
        </div>
        
        <div class="slider-group">
            <label for="green">Green: {green}</label>
            <input 
                id="green" 
                type="range" 
                min="0" 
                max="255" 
                bind:value={green}
                class="slider green-slider"
            />
        </div>
        
        <div class="slider-group">
            <label for="blue">Blue: {blue}</label>
            <input 
                id="blue" 
                type="range" 
                min="0" 
                max="255" 
                bind:value={blue}
                class="slider blue-slider"
            />
        </div>
    </div>
    
    <div class="color-display" style="background-color: {colorString}">
        <div class="color-info">
            <p>RGB: {colorString}</p>
            <p>HEX: {hexColor}</p>
        </div>
    </div>
    
    <div class="preset-colors">
        <button on:click={() => setColor(255, 0, 0)}>Red</button>
        <button on:click={() => setColor(0, 255, 0)}>Green</button>
        <button on:click={() => setColor(0, 0, 255)}>Blue</button>
        <button on:click={() => setColor(255, 255, 0)}>Yellow</button>
        <button on:click={() => setColor(255, 0, 255)}>Magenta</button>
        <button on:click={() => setColor(0, 255, 255)}>Cyan</button>
        <button on:click={() => setColor(0, 0, 0)}>Black</button>
        <button on:click={() => setColor(255, 255, 255)}>White</button>
    </div>
    <button on:click={randomColor}>🎲Random Color!🎲</button>
</div>

<style>
    .container {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    
    h1 {
        color: #333;
        margin-bottom: 30px;
    }
    
    .color-controls {
        margin: 30px 0;
    }
    
    .slider-group {
        margin: 20px 0;
    }
    
    .slider-group label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;
        color: #555;
    }
    
    .slider {
        width: 100%;
        height: 20px;
        border-radius: 10px;
        outline: none;
        -webkit-appearance: none;
        appearance: none;
        cursor: pointer;
        margin-bottom: 10px;
    }
    
    .red-slider {
        background: linear-gradient(to right, #000, #ff0000);
    }
    
    .green-slider {
        background: linear-gradient(to right, #000, #00ff00);
    }
    
    .blue-slider {
        background: linear-gradient(to right, #000, #0000ff);
    }
    
    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #333;
        cursor: pointer;
    }
    
    .color-display {
        width: 300px;
        height: 200px;
        margin: 30px auto;
        border: 2px solid #333;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .color-info {
        background: rgba(255, 255, 255, 0.9);
        padding: 15px;
        border-radius: 5px;
        border: 1px solid #ddd;
    }
    
    .color-info p {
        margin: 5px 0;
        font-weight: bold;
        color: #333;
    }
    
    .preset-colors {
        margin: 30px 0;
    }
    
    .preset-colors button {
        margin: 5px;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
        color: white;
        transition: transform 0.2s;
    }
    
    .preset-colors button:hover {
        transform: scale(1.05);
    }
    
    .preset-colors button:nth-child(1) { background-color: red; }
    .preset-colors button:nth-child(2) { background-color: green; }
    .preset-colors button:nth-child(3) { background-color: blue; }
    .preset-colors button:nth-child(4) { background-color: yellow; color: black; }
    .preset-colors button:nth-child(5) { background-color: magenta; }
    .preset-colors button:nth-child(6) { background-color: cyan; color: black; }
    .preset-colors button:nth-child(7) { background-color: black; }
    .preset-colors button:nth-child(8) { background-color: white; color: black; border: 1px solid #ccc; }
</style>
